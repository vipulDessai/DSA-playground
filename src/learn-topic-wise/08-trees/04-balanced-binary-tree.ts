import { TreeNode } from './000-binary-tree-from-array';

function isBalanced(root: TreeNode | null): boolean {
  function dfs_getHeight(root: TreeNode | null): [boolean, number] {
    if (!root) return [true, 0];

    const left = dfs_getHeight(root.left);
    const right = dfs_getHeight(root.right);

    const balance = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;

    return [balance, 1 + Math.max(left[1], right[1])];
  }

  return dfs_getHeight(root)[0];
}
