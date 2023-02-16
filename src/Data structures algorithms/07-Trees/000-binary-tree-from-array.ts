export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class BinaryTree {
  #treeArr: (number | null)[];
  #bTreeInternal: TreeNode | null;
  #buildTree(i: number) {
    const value = this.#treeArr[i];
    if (value) {
      const node = new TreeNode();
      node.val = value;
      node.left = this.#buildTree(i * 2 + 1);
      node.right = this.#buildTree(i * 2 + 2);

      return node;
    } else {
      return null;
    }
  }
  get bTree() {
    return this.#bTreeInternal;
  }
  constructor(a: (number | null)[]) {
    this.#treeArr = a;
    this.#bTreeInternal = this.#buildTree(0);
  }
}

const myTree = new BinaryTree([
  -10,
  9,
  20,
  null,
  null,
  15,
  7,
  null,
  null,
  null,
  null,
  2,
  3,
  null,
  null,
]);

console.log(myTree);

//   5,
//   3,
//   7,
//   1,
//   4,
//   6,
//   8,
//   1,
//   1,
//   null,
//   null,
//   null,
//   null,
//   8,
//   9,
