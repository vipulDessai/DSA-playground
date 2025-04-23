// https://leetcode.com/problems/binary-tree-maximum-path-sum/

import { BinaryTree, TreeNode } from './000-binary-tree-from-array';

var myBTree = new BinaryTree([
  -10,
  9,
  20,
  null,
  null,
  15,
  7,
  null,
  null,
  null,
  null,
  2,
  3,
  null,
  null,
]);

console.log(maxPathSum(myBTree.bTree));

function maxPathSum(root: TreeNode | null): number {
  let res = dfs(root);

  return res.maxSum;
}

interface CalcSumAsRootReturnType {
  maxSum: number;
  maxSumAsBranch: number;
}
function dfs(node: TreeNode | null): CalcSumAsRootReturnType {
  if (!node) {
    return { maxSum: -Infinity, maxSumAsBranch: 0 };
  }

  let l = dfs(node.left);
  let r = dfs(node.right);

  return {
    maxSum: calcSumAsRoot(l, r, node.val),
    maxSumAsBranch: calcSumAsBranch(l, r, node.val),
  };
}

function calcSumAsRoot(
  left: CalcSumAsRootReturnType,
  right: CalcSumAsRootReturnType,
  currentValue: number,
) {
  const maxSum = Math.max(left.maxSum, right.maxSum);
  let currentPathSum = currentValue;

  currentPathSum += Math.max(left.maxSumAsBranch, 0);
  currentPathSum += Math.max(right.maxSumAsBranch, 0);

  return Math.max(maxSum, currentPathSum);
}

function calcSumAsBranch(
  left: CalcSumAsRootReturnType,
  right: CalcSumAsRootReturnType,
  currentValue: number,
) {
  const maxSumAsBranch = Math.max(left.maxSumAsBranch, right.maxSumAsBranch, 0);
  return maxSumAsBranch + currentValue;
}
