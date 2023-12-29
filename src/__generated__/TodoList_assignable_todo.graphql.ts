/**
 * @generated SignedSource<<5b3ba1851a3482741388dfe80bcd9fff>>
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
  readonly __id: string;
  readonly __isTodoList_assignable_todo?: string;
  readonly " $fragmentSpreads": TodoList_assignable_todo$fragmentType;
}): false | {
  readonly __id: string;
  readonly __isTodoList_assignable_todo: string;
  readonly " $fragmentSpreads": TodoList_assignable_todo$fragmentType;
} {
  return value.__isTodoList_assignable_todo != null ? value : false;
};
