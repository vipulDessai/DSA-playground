class Node {
  value: number;
  priority: number;
  left: Node | null;
  right: Node | null;
  constructor(value: number, priority: number) {
    this.value = value;
    this.priority = priority;
    this.left = null;
    this.right = null;
  }
}

export class PriorityQueue_BST {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value: number, priority: number) {
    const newNode = new Node(value, priority);
    if (this.isEmpty()) {
      this.root = newNode;
      return;
    }

    let current = this.root as Node;
    while (true) {
      if (priority < current.priority) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  _findMinNode(node: Node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    // If there's only one node
    if (this.root && this.root.left === null && this.root.right === null) {
      const min = this.root;
      this.root = null;
      return min.value;
    }

    let parentOfMin: Node | null = null;
    let current = this.root as Node;
    while (current.left !== null) {
      parentOfMin = current;
      current = current.left;
    }

    const min = current;
    if (parentOfMin) {
      parentOfMin.left = min.right; // Replace min with its right subtree
    } else {
      this.root = min.right; // Special case: min was the root
    }

    return min.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    let current = this.root as Node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }
}

const pq = new PriorityQueue_BST();
pq.insert(5, 5);
pq.insert(2, 2);
pq.insert(8, 8);
pq.insert(1, 1);

console.log(pq.extractMin()); // Output: 1
console.log(pq.extractMin()); // Output: 2
console.log(pq.peek()); // Output: 5
