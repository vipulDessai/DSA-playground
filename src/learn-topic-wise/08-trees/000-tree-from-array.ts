class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(data: T) {
    this.val = data;
  }
}

export class BinaryTree<T> {
  private bTreeInternal: TreeNode<T> | null;
  get bTree() {
    return this.bTreeInternal;
  }
  constructor(arr: T[]) {
    if (!arr || arr.length === 0) {
      this.bTreeInternal = null;
      return;
    }

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
      const currentNode = queue.shift()!;

      // Process left child
      if (arr[i] && i < arr.length) {
        currentNode.left = new TreeNode(arr[i]);
        queue.push(currentNode.left);
      }
      i++;

      // Process right child
      if (arr[i] && i < arr.length) {
        currentNode.right = new TreeNode(arr[i]);
        queue.push(currentNode.right);
      }
      i++;
    }

    this.bTreeInternal = root;
  }
}

// Example input array
const inputArray = [1, 2, 3, 4, null, 6, 7, null, 8, 9, 10];

const bTreeObj = new BinaryTree(inputArray);

// Function to print the tree (for verification) - Breadth-First Traversal
function printTree<T>(root: TreeNode<T> | null) {
  if (!root) {
    console.log('Tree is empty.');
    return;
  }

  const queue: (TreeNode<T> | null)[] = [root];
  const result: (T | null)[][] = [];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelNodes: (T | null)[] = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift()!;
      levelNodes.push(currentNode ? currentNode.val : null);

      if (currentNode) {
        queue.push(currentNode.left);
        queue.push(currentNode.right);
      }
    }
    result.push(levelNodes);
  }

  return result;
}

// console.log('Constructed Tree (Level-by-Level):');
// const originalTree = printTree(bTreeObj.bTree);
// console.log(originalTree);

// Expected structure based on the problem description:
// Level 0: [1]
// Level 1: [2, 3]
// Level 2: [4, null, 6, 7]
// Level 3: [null, 8, 9, 10, null, null]
// Level 4: [null, null, null, null]

// Note: The printTree function will output the tree structure level by level,
// including null nodes to represent missing children. The structure should align
// with the described parent-child relationships.
