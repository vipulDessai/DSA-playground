import { BinaryTree } from './000-tree-from-array';

class TreeNode<T> {
  val: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(data: T) {
    this.val = data;
  }
}

// refer - https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/
class DFS_Inorder_Preorder_PostOrder {
  in_order<T>(r: TreeNode<T> | null) {
    if (r == null) {
      return '';
    }

    return `${this.in_order(r.left)} ${r.val} ${this.in_order(r.right)}`;
  }

  pre_order<T>(r: TreeNode<T> | null) {
    if (r == null) {
      return '';
    }

    return `${r.val} ${this.pre_order(r.left)} ${this.pre_order(r.right)}`;
  }

  post_order<T>(r: TreeNode<T> | null) {
    if (r) {
      let curStr = this.post_order(r.left);

      // check if left node was attached
      if (curStr) {
        curStr += ' ';
      }

      const rStr = this.post_order(r.right);

      // check if right node is attached
      // this it to prevent double space in case right tree is empty
      if (rStr) {
        curStr += rStr + ' ';
      }

      curStr += r.val;

      return curStr;
    }

    return '';
  }
}

class BFS_Level_order_traversal {
  // 1
  // 2 3
  // 4 5 6 7
  level_order<T>(r: TreeNode<T>) {
    let s = '';

    const q: TreeNode<T>[] = [];
    q.push(r);

    while (q.length > 0) {
      // very important to store the current queue length
      // before the child nodes are enqueued
      var qLen = q.length;
      for (let i = 0; i < qLen; i++) {
        const n = q.shift();

        s += `${n!.val} `;

        if (n!.left) {
          q.push(n!.left);
        }

        if (n!.right) {
          q.push(n!.right);
        }
      }
    }

    return s;
  }
}

var inputArray = [1, 2, 3, 4, null, 6, 7, null, 8, 9, 10];
var bTree = new BinaryTree(inputArray).bTree!;

const bfsQ = new BFS_Level_order_traversal();
const bfsResult = bfsQ.level_order(bTree);
console.log(bfsResult);

inputArray = [1, 2, 3, 4, null, 6, 7, null, 8, 9, 10];
bTree = new BinaryTree(inputArray).bTree!;
const dfsQ = new DFS_Inorder_Preorder_PostOrder();
const dfsResult = dfsQ.post_order(bTree);
console.log(dfsResult);
