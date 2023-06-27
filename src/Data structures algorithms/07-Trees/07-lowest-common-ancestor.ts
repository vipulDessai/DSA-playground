import { BinaryTree, TreeNode } from './000-binary-tree-from-array';

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

const myTree = new BinaryTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);

// @ts-ignore
lowestCommonAncestor(myTree.bTree, myTree.bTree?.left, myTree.bTree?.right);
