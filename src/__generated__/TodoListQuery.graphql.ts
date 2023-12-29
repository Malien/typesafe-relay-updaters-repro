/**
 * @generated SignedSource<<6f28ddaadb6019f2b7701fba1c7a53f5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListQuery$variables = Record<PropertyKey, never>;
export type TodoListQuery$data = {
  readonly todos: ReadonlyArray<{
    readonly __typename: "Todo";
    readonly __id: string;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_assignable_todo" | "Todo_todo">;
  }>;
};
export type TodoListQuery = {
  response: TodoListQuery$data;
  variables: TodoListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Todo_todo"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_assignable_todo"
          },
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cd0fdb4eada24f6d2665a07eaf3a09c1",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  todos {\n    id\n    ...Todo_todo\n    ...TodoList_assignable_todo\n  }\n}\n\nfragment TodoList_assignable_todo on Todo {\n  __typename\n}\n\nfragment Todo_todo on Todo {\n  id\n  title\n  completed\n}\n"
  }
};
})();

(node as any).hash = "71b09c08efe42bc1bdf3592bc6fb2375";

export default node;
