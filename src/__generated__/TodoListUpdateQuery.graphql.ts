/**
 * @generated SignedSource<<ba8ae93ac671b26a77b07e6559d2e955>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { UpdatableQuery, ConcreteUpdatableQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListUpdateQuery$variables = Record<PropertyKey, never>;
export type TodoListUpdateQuery$data = {
  get todos(): ReadonlyArray<Record<PropertyKey, never>>;
  set todos(value: ReadonlyArray<{
    readonly __id: string;
    readonly __isTodoList_assignable_todo: string;
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_assignable_todo">;
  }>);
};
export type TodoListUpdateQuery = {
  response: TodoListUpdateQuery$data;
  variables: TodoListUpdateQuery$variables;
};

const node: ConcreteUpdatableQuery = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListUpdateQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_assignable_todo"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "UpdatableQuery"
};

(node as any).hash = "c1b00468ba1a122a60c7636c83346633";

export default node;
