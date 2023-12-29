/**
 * @generated SignedSource<<fb020b7c650fd400319d7599ff62500b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { FragmentRefs } from "relay-runtime";

const node: any = {};

(node as any).hash = "e94dfd40b01880649176832898b81f3e";

export default node;

module.exports.validate = function validate(value: {
  readonly __typename: string;
  readonly __id: string;
  readonly " $fragmentSpreads": TodoList_assignable_todo$fragmentType;
}): false | {
  readonly __typename: "Todo";
  readonly __id: string;
  readonly " $fragmentSpreads": TodoList_assignable_todo$fragmentType;
} {
  return value.__typename === 'Todo' ? value : false;
};
