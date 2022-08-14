import { TreeNode } from './000-binary-tree-from-array';

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!root) return false;

  if (sameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

  function sameTree(root: TreeNode | null, subRoot: TreeNode | null) {
    if (!root && !subRoot) return true;

    if (root && subRoot && root.val === subRoot.val) {
      return (
        sameTree(root.left, subRoot.left) && sameTree(root.right, subRoot.right)
      );
    }
  }
}
