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
  public traverseTree<T>(r: TreeNode<T>) {
    console.log(this.in_order(r));
    console.log(this.pre_order(r));
    console.log(this.post_order(r));
  }

  private in_order<T>(r: TreeNode<T> | null) {
    if (r == null) {
      return '';
    }

    return `${this.in_order(r.left)} ${r.val} ${this.in_order(r.right)}`;
  }

  private pre_order<T>(r: TreeNode<T>) {
    if (r == null) {
      return '';
    }

    return `${r.val} ${this.in_order(r.left)} ${this.in_order(r.right)}`;
  }

  private post_order<T>(r: TreeNode<T>) {
    if (r == null) {
      return '';
    }

    return `${this.in_order(r.left)} ${this.in_order(r.right)} ${r.val}`;
  }
}

class BFS_Level_order_traversal {
  // 1
  // 2 3
  // 4 5 6 7
  public traverseTree<T>(r: TreeNode<T>) {
    console.log(this.level_order(r));
  }

  private level_order<T>(r: TreeNode<T>) {
    const s = new String();

    const q: TreeNode<T>[] = [];
    q.push(r);

    while (q.length > 0) {
      // very important to store the current queue length
      // before the child nodes are enqueued
      var qLen = q.length;
      for (let i = 0; i < qLen; i++) {
        const n = q.shift();

        s.concat(`${n!.val} `);

        if (n!.left != null) {
          q.push(n!.left);
        }

        if (n!.right != null) {
          q.push(n!.right);
        }
      }
    }

    return s.toString();
  }
}

export const trickToCreateJsModule = '';
