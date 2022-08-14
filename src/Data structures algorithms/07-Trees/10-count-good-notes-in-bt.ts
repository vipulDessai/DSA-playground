import { TreeNode } from './000-binary-tree-from-array';

function goodNodes(root: TreeNode | null): number {
  if (!root) return 0;

  function dfs(node: TreeNode | null, maxVal: number) {
    if (!node) return 0;

    let res = node.val >= maxVal ? 1 : 0;
    maxVal = Math.max(node.val, maxVal);
    res += dfs(node.left, maxVal);
    res += dfs(node.right, maxVal);
    return res;
  }

  return dfs(root, root.val);
}
