import { BinaryTree, TreeNode } from './000-binary-tree-from-array';

const myBTree = new BinaryTree([5, 3, 6, 2, 4, null, null, 1]);

kthSmallest(myBTree.bTree, 3);

function kthSmallest(root: TreeNode | null, k: number): number {
  const stack: (TreeNode | null)[] = [];

  stack.push(root);

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }

  console.log(stack);

  return 1;
}
