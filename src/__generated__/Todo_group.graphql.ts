/**
 * @generated SignedSource<<1168535a053a20b072e947c02595ad3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_group$data = {
  readonly title: string;
  readonly todos: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"Todo_item">;
  }>;
  readonly " $fragmentType": "Todo_group";
};
export type Todo_group$key = {
  readonly " $data"?: Todo_group$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_group">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_group",
  "selections": [
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
      "concreteType": "TodoItem",
      "kind": "LinkedField",
      "name": "todos",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Todo_item"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TodoGroup",
  "abstractKey": null
};

(node as any).hash = "880f9dea0f323cbcf07b71df81c8af34";

export default node;
