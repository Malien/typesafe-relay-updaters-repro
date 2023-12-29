import { commitMutation, graphql, useLazyLoadQuery } from "react-relay";
import { TodoListQuery } from "./__generated__/TodoListQuery.graphql";
import Todo from "./Todo";
import { Environment } from "relay-runtime";
import { TodoListAddTodoMutation } from "./__generated__/TodoListAddTodoMutation.graphql";
import { TodoListUpdateQuery } from "./__generated__/TodoListUpdateQuery.graphql";

declare const environment: Environment;

graphql`
  fragment TodoList_assignable_todo on Todo @assignable {
    __typename
  }
`

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
        const newTodo = response?.createTodo
        if (!newTodo) return

        const { updatableData } = store.readUpdatableQuery<TodoListUpdateQuery>(graphql`
          query TodoListUpdateQuery @updatable {
            todos {
              ...TodoList_assignable_todo
            }
          }
        `, {})

        updatableData.todos = [...updatableData.todos, newTodo]
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="todo" required />
      </form>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
