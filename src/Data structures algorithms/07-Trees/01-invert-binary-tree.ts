import { TreeNode } from './000-binary-tree-from-array';

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root?.val) return null;

  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);

  return root;
}
