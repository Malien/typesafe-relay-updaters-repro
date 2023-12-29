/**
 * @generated SignedSource<<aa00987f3c867855ee4f2a13ae7aa720>>
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
    readonly __id: string;
    readonly __isTodoList_assignable_todo: string;
    readonly id?: string;
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
  "kind": "InlineFragment",
  "selections": [
    (v0/*: any*/)
  ],
  "type": "Node",
  "abstractKey": "__isNode"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = [
  (v0/*: any*/),
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "completed",
    "storageKey": null
  }
];
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
        "concreteType": null,
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
          {
            "alias": "__isTodoList_assignable_todo",
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
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
        "concreteType": null,
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v1/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isTodo"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "TodoItem",
                "kind": "LinkedField",
                "name": "todos",
                "plural": true,
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "type": "TodoGroup",
            "abstractKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": (v3/*: any*/),
            "type": "TodoItem",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3fc52cb99c21aa79d49a4b37b7c8a813",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  todos {\n    __typename\n    ... on Node {\n      __isNode: __typename\n      id\n    }\n    ...Todo_todo\n    ...TodoList_assignable_todo\n  }\n}\n\nfragment TodoList_assignable_todo on Todo {\n  __isTodo: __typename\n  __typename\n}\n\nfragment Todo_group on TodoGroup {\n  title\n  todos {\n    id\n    ...Todo_item\n  }\n}\n\nfragment Todo_item on TodoItem {\n  id\n  title\n  completed\n}\n\nfragment Todo_todo on Todo {\n  __isTodo: __typename\n  __typename\n  ...Todo_group\n  ...Todo_item\n}\n"
  }
};
})();

(node as any).hash = "2f2cfd3fef312da5ce76ae88a4b21e7e";

export default node;
