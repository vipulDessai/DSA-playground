import { BinaryTree, TreeNode } from './000-binary-tree-from-array';

var myBTree = new BinaryTree([
  5,
  1,
  6,
  null,
  2,
  null,
  null,
  null,
  null,
  null,
  5, // make it 3 for valid BST
]);

console.log(isValidBST(myBTree.bTree));

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
