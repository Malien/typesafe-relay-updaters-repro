import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import environment from "./environment";
import TodoList from "./TodoList";

createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={environment}>
    <Suspense fallback={<div>Loading...</div>}>
      <TodoList />
    </Suspense>
  </RelayEnvironmentProvider>,
);
