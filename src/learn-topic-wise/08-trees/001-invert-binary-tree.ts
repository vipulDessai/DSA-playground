import { BinaryTree, TreeNode } from './000-binary-tree-from-array';

var myBTree = new BinaryTree([-10, 9, 20, null, null, 15, 7]);

const invertedTree = invertTree(myBTree.bTree);
console.log(invertedTree);

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root?.val) return null;

  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);

  return root;
}
