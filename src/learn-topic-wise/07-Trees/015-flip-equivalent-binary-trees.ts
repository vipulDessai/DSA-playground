// https://leetcode.com/problems/flip-equivalent-binary-trees/

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

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  function dfs(n1: TreeNode | null, n2: TreeNode | null) {
    const curC = new Set();
    if (n1) {
      if (n1.left) curC.add(n1.left.val);

      if (n1.right) curC.add(n1.right.val);
    }

    if (n2) {
      if (n2.left && !curC.has(n2.left.val)) return false;

      if (n2.right && !curC.has(n2.right.val)) return false;
    }

    if (!n1 && !n2) {
      return true;
    }

    return false;
  }

  return dfs(root1, root2);
}
