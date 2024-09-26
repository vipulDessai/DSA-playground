import { TreeNode } from './000-binary-tree-from-array';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;

  if (!p || !q || p.val != q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
