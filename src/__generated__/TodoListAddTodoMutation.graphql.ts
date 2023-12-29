/**
 * @generated SignedSource<<816456b360faee914d0e607346da0048>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListAddTodoMutation$variables = {
  title: string;
};
export type TodoListAddTodoMutation$data = {
  readonly createTodo: {
    readonly __typename: "Todo";
    readonly __id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_assignable_todo" | "Todo_todo">;
  };
};
export type TodoListAddTodoMutation = {
  response: TodoListAddTodoMutation$data;
  variables: TodoListAddTodoMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "title",
    "variableName": "title"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListAddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "createTodo",
        "plural": false,
        "selections": [
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
          (v2/*: any*/),
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListAddTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "createTodo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ebd233a042a58d63ff41b4592024f038",
    "id": null,
    "metadata": {},
    "name": "TodoListAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListAddTodoMutation(\n  $title: String!\n) {\n  createTodo(title: $title) {\n    ...Todo_todo\n    ...TodoList_assignable_todo\n    id\n  }\n}\n\nfragment TodoList_assignable_todo on Todo {\n  __typename\n}\n\nfragment Todo_todo on Todo {\n  id\n  title\n  completed\n}\n"
  }
};
})();

(node as any).hash = "a26f298091c045b7047b055e8f2b3452";

export default node;
