import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { Todo_todo$key } from "./__generated__/Todo_todo.graphql";

export default function Todo({ todo }: { todo: Todo_todo$key }) {
  const { id, title, completed } = useFragment(
    graphql`
      fragment Todo_todo on Todo {
        id
        title
        completed
      }
    `,
    todo,
  );

  return (
    <label>
      <input type="checkbox" name={id} checked={completed} />
      {title}
    </label>
  );
}
