import { TreeNode } from './000-binary-tree-from-array';

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode | null {
  let c = root;

  while (c) {
    if (p && p.val > c.val && q && q.val > c.val) {
      c = c.right;
    } else if (p && p.val < c.val && q && q.val < c.val) {
      c = c.left;
    } else {
      return c;
    }
  }

  return null;
}
