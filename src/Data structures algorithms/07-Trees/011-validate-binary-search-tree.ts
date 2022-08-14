import { TreeNode } from './000-binary-tree-from-array';

function isValidBST(root: TreeNode | null): boolean {
  function valid(node: TreeNode | null, left: number, right: number): boolean {
    if (!node) return true;

    if (node.val <= left || node.val >= right) return false;

    return (
      valid(node?.left, left, node?.val) && valid(node?.right, node?.val, right)
    );
  }

  return valid(root, -Infinity, Infinity);
}
