/**
 * @generated SignedSource<<cdbcaab5ef858ffeb60ee4ff9b77c771>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_todo$data = {
  readonly __typename: string;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_group" | "Todo_item">;
  readonly " $fragmentType": "Todo_todo";
};
export type Todo_todo$key = {
  readonly " $data"?: Todo_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__typename",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Todo_group"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Todo_item"
    }
  ],
  "type": "Todo",
  "abstractKey": "__isTodo"
};

(node as any).hash = "a26f9a2683c252ee5253c3e3d5001869";

export default node;
