/**
 * @generated SignedSource<<41319261003b7be2eea774fe3b1f4039>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Todo_item$data = {
  readonly completed: boolean;
  readonly id: string;
  readonly title: string;
  readonly " $fragmentType": "Todo_item";
};
export type Todo_item$key = {
  readonly " $data"?: Todo_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo_item",
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
    }
  ],
  "type": "TodoItem",
  "abstractKey": null
};

(node as any).hash = "1f6f0c182ae2c43596c40b3dbe3afa2e";

export default node;
