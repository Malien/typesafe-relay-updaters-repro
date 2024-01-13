import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import type { Todo_todo$key } from "./__generated__/Todo_todo.graphql";
import type { Todo_item$key } from "./__generated__/Todo_item.graphql";
import { Todo_group$key } from "./__generated__/Todo_group.graphql";

export default function Todo({ todo: todoKey }: { todo: Todo_todo$key }) {
  const todo = useFragment(
    graphql`
      fragment Todo_todo on Todo {
        __typename
        ...Todo_group
        ...Todo_item
      }
    `,
    todoKey,
  );

  if (todo.__typename === "TodoGroup") {
    return <TodoGroup group={todo} />;
  }
  if (todo.__typename === "TodoItem") {
    return <TodoItem todo={todo} />;
  }
}

function TodoItem({ todo }: { todo: Todo_item$key }) {
  const { id, completed, title } = useFragment(
    graphql`
      fragment Todo_item on TodoItem {
        id
        title
        completed
      }
    `,
    todo,
  );

  return (
    <label>
      <input type="checkbox" name={id} checked={completed} onChange={() => {}} />
      {title}
    </label>
  );
}

function TodoGroup({ group }: { group: Todo_group$key }) {
  const { title, todos } = useFragment(
    graphql`
      fragment Todo_group on TodoGroup {
        title
        todos {
          id
          ...Todo_item
        }
      }
    `,
    group,
  );

  return (
    <div style={{ display: "grid", paddingLeft: 20 }}>
      <h2 style={{ margin: 0, marginLeft: -20, fontSize: 18 }}>{title}</h2>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
