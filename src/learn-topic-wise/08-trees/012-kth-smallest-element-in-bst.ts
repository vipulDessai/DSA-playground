import { BinaryTree, TreeNode } from './000-binary-tree-from-array';

var myBTree = new BinaryTree([5, 3, 6, 2, 4, null, null, 1]);
var k = 3;
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
  3, // make it 3 for valid BST
]);
var k = 4;

console.log(kthSmallest(myBTree.bTree, k));

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return 0;

  const stack: (TreeNode | null)[] = [];
  let n = 0;
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = <TreeNode>cur.left;
    }

    cur = <TreeNode>stack.pop();

    n++;

    if (n === k) return cur.val;

    cur = <TreeNode>cur.right;
  }

  // simply returning a value as its always
  // gauranteed to find the kth element in the while loop
  return 0;
}
