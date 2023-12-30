import { Environment, Network, RecordSource, Store } from "relay-runtime";
import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLNullableType,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLType,
  GraphQLUnionType,
  graphql,
} from "graphql";
import { GraphQLSingularResponse } from "relay-runtime";

function nnlist<T extends GraphQLNullableType>(type: T) {
  return new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(type)));
}

function nn<T extends GraphQLNullableType>(type: T) {
  return new GraphQLNonNull(type);
}

const node = new GraphQLInterfaceType({
  name: "Node",
  fields: {
    id: { type: nn(GraphQLID) },
  },
});

const TodoItem = new GraphQLObjectType({
  name: "TodoItem",
  fields: {
    id: { type: nn(GraphQLID) },
    title: { type: nn(GraphQLString) },
    completed: { type: nn(GraphQLBoolean) },
  },
  interfaces: [node],
});

const TodoGroup = new GraphQLObjectType({
  name: "TodoGroup",
  fields: {
    id: { type: nn(GraphQLID) },
    title: { type: nn(GraphQLString) },
    todos: { type: nnlist(TodoItem) },
  },
  interfaces: [node],
});

const Todo = new GraphQLUnionType({
  name: "Todo",
  types: [TodoItem, TodoGroup],
  resolveType(value) {
    return value.type;
  },
});

type TodoItem = {
  id: string;
  type: "TodoItem";
  title: string;
  completed: boolean;
};

type TodoGroup = {
  id: string;
  type: "TodoGroup";
  title: string;
  todos: readonly TodoItem[];
};

type Todo = TodoItem | TodoGroup;

const todoList: Todo[] = [
  {
    id: "todo-1",
    type: "TodoItem",
    title: "Make coffee",
    completed: true,
  },
  {
    id: "todo-2",
    type: "TodoItem",
    title: "Touch grass",
    completed: false,
  },
  {
    id: "todo-group-1",
    type: "TodoGroup",
    title: "Buy groceries",
    todos: [
      {
        id: "todo-3",
        type: "TodoItem",
        title: "Tomatoes",
        completed: false,
      },
      {
        id: "todo-4",
        type: "TodoItem",
        title: "Bread",
        completed: true,
      },
    ],
  },
  {
    id: "todo-5",
    type: "TodoItem",
    title: "Make dinner",
    completed: false,
  },
];

let todoId = 6;

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      todos: {
        type: nnlist(Todo),
        resolve() {
          return todoList;
        },
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: {
      createTodo: {
        type: nn(TodoItem),
        args: {
          title: { type: nn(GraphQLString) },
        },
        resolve(_, { title }) {
          const todo: TodoItem = {
            id: `todo-${todoId++}`,
            type: "TodoItem",
            title,
            completed: false,
          };
          todoList.push(todo);
          return todo;
        }
      }
    }
  })
});

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(async (request, variables) => {
  const res = await graphql({
    schema,
    source: request.text!,
    variableValues: variables,
  });
  // graphql-js resolves to objects with null prototype
  // relay-runtime expects plain Object prototypes (.hasOwnProperty)
  // To assign the prototype deeply, I'll just JSON-ify and parse it
  return JSON.parse(JSON.stringify(res)) as GraphQLSingularResponse;
});

export default new Environment({ store, network });
