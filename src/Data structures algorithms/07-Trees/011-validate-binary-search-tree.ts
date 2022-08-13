/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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
