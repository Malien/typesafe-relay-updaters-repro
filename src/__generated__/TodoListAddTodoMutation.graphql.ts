/**
 * @generated SignedSource<<fb730ed281c126f5da4c448d7bf9ecbd>>
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
    readonly __id: string;
    readonly __isTodoList_assignable_todo?: "TodoItem";
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "completed",
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
        "concreteType": "TodoItem",
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
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": "__isTodoList_assignable_todo",
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              }
            ],
            "type": "Todo",
            "abstractKey": "__isTodo"
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
        "concreteType": "TodoItem",
        "kind": "LinkedField",
        "name": "createTodo",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "TodoItem",
                    "kind": "LinkedField",
                    "name": "todos",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "type": "TodoGroup",
                "abstractKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "type": "TodoItem",
                "abstractKey": null
              }
            ],
            "type": "Todo",
            "abstractKey": "__isTodo"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0f7bdeabdd95f981b6004ee9e0e65eb5",
    "id": null,
    "metadata": {},
    "name": "TodoListAddTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListAddTodoMutation(\n  $title: String!\n) {\n  createTodo(title: $title) {\n    ...Todo_todo\n    ...TodoList_assignable_todo\n    id\n  }\n}\n\nfragment TodoList_assignable_todo on Todo {\n  __isTodo: __typename\n  __typename\n}\n\nfragment Todo_group on TodoGroup {\n  title\n  todos {\n    id\n    ...Todo_item\n  }\n}\n\nfragment Todo_item on TodoItem {\n  id\n  title\n  completed\n}\n\nfragment Todo_todo on Todo {\n  __isTodo: __typename\n  __typename\n  ...Todo_group\n  ...Todo_item\n}\n"
  }
};
})();

(node as any).hash = "a26f298091c045b7047b055e8f2b3452";

export default node;
