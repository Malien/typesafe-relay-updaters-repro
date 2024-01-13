import { commitMutation, graphql, useLazyLoadQuery } from "react-relay";
import Todo from "./Todo";
import type { TodoListQuery } from "./__generated__/TodoListQuery.graphql";
import type { TodoListAddTodoMutation } from "./__generated__/TodoListAddTodoMutation.graphql";
import type { TodoListUpdateQuery } from "./__generated__/TodoListUpdateQuery.graphql";
import environment from "./environment";

graphql`
  fragment TodoList_assignable_todo on Todo @assignable {
    __typename
  }
`;

export default function TodoList() {
  const { todos } = useLazyLoadQuery<TodoListQuery>(
    graphql`
      query TodoListQuery {
        todos {
          ... on Node {
            id
          }
          ...Todo_todo
          ...TodoList_assignable_todo
        }
      }
    `,
    {},
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = new FormData(event.currentTarget).get("todo") as string;

    commitMutation<TodoListAddTodoMutation>(environment, {
      mutation: graphql`
        mutation TodoListAddTodoMutation($title: String!) {
          createTodo(title: $title) {
            ...Todo_todo
            ...TodoList_assignable_todo
          }
        }
      `,
      variables: { title },
      updater(store, response) {
        const newTodo = response?.createTodo;
        if (!newTodo) return;

        const { updatableData } = store.readUpdatableQuery<TodoListUpdateQuery>(
          graphql`
            query TodoListUpdateQuery @updatable {
              todos {
                ...TodoList_assignable_todo
              }
            }
          `,
          {},
        );
        console.log(newTodo)

        if (!isAssignable(newTodo)) return;
        updatableData.todos = [...todos, newTodo];
      },
    });
  }

  return (
    <div style={{ display: "grid" }}>
      <form onSubmit={handleSubmit}>
        <input name="todo" required placeholder="New todo"/>
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

function isAssignable(todo: {
  __id: string;
  __isTodoList_assignable_todo?: string;
}): todo is { __id: string; __isTodoList_assignable_todo: string } {
  return !!todo.__isTodoList_assignable_todo;
}
