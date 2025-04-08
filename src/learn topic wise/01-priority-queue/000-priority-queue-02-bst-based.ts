interface PriorityQueueItem<T> {
  value: T;
  priority: number;
}

class BSTPriorityQueue<T> {
  private root: TreeNode<PriorityQueueItem<T>> | null = null;
  private sizeValue: number = 0;
  private isMinPriority: boolean;

  constructor(isMinPriority: boolean = false) {
    this.isMinPriority = isMinPriority;
  }

  get size(): number {
    return this.sizeValue;
  }

  isEmpty(): boolean {
    return this.root === null;
  }

  clear(): void {
    this.root = null;
    this.sizeValue = 0;
  }

  /**
   * Inserts a new item into the BST based on its priority.
   * @param value The value of the item.
   * @param priority The priority of the item.
   */
  enqueue(value: T, priority: number): void {
    const newItem: PriorityQueueItem<T> = { value, priority };
    const newNode = new TreeNode(newItem);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.sizeValue++;
  }

  private insertNode(
    node: TreeNode<PriorityQueueItem<T>>,
    newNode: TreeNode<PriorityQueueItem<T>>,
  ): void {
    const compareResult = this.comparePriority(
      newNode.data.priority,
      node.data.priority,
    );

    if (compareResult < 0) {
      // newNode has higher priority (for max-priority) or lower priority (for min-priority)
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // newNode has lower or equal priority (for max-priority) or higher or equal priority (for min-priority)
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * Returns the item with the highest/lowest priority without removing it.
   * @returns The value of the item with the highest/lowest priority, or undefined if empty.
   */
  peek(): T | undefined {
    if (!this.root) {
      return undefined;
    }

    let current = this.root;
    while (this.isMinPriority ? current.left : current.right) {
      current = this.isMinPriority ? current.left! : current.right!;
    }
    return current.data.value;
  }

  /**
   * Removes and returns the item with the highest/lowest priority.
   * @returns The value of the item with the highest/lowest priority, or undefined if empty.
   */
  dequeue(): T | undefined {
    if (!this.root) {
      return undefined;
    }

    let minMaxNodeParent: TreeNode<PriorityQueueItem<T>> | null = null;
    let minMaxNode: TreeNode<PriorityQueueItem<T>> = this.root;

    while (this.isMinPriority ? minMaxNode.left : minMaxNode.right) {
      minMaxNodeParent = minMaxNode;
      minMaxNode = this.isMinPriority ? minMaxNode.left! : minMaxNode.right!;
    }

    const dequeuedValue = minMaxNode.data.value;

    if (minMaxNodeParent) {
      if (this.isMinPriority) {
        minMaxNodeParent.left = this.removeNode(minMaxNode, minMaxNode.right);
      } else {
        minMaxNodeParent.right = this.removeNode(minMaxNode, minMaxNode.left);
      }
    } else {
      this.root = this.removeNode(
        this.root,
        this.isMinPriority ? this.root.right : this.root.left,
      );
    }

    this.sizeValue--;
    return dequeuedValue;
  }

  private removeNode(
    nodeToRemove: TreeNode<PriorityQueueItem<T>>,
    replacementNode: TreeNode<PriorityQueueItem<T>> | null,
  ): TreeNode<PriorityQueueItem<T>> | null {
    if (!nodeToRemove.left && !nodeToRemove.right) {
      return null;
    } else if (!nodeToRemove.left) {
      return nodeToRemove.right;
    } else if (!nodeToRemove.right) {
      return nodeToRemove.left;
    } else {
      // Node has two children, find the in-order successor (for min) or predecessor (for max)
      let temp = this.isMinPriority ? nodeToRemove.right : nodeToRemove.left;
      let tempParent = nodeToRemove;
      while (this.isMinPriority ? temp.left : temp.right) {
        tempParent = temp;
        temp = this.isMinPriority ? temp.left! : temp.right!;
      }

      nodeToRemove.data = temp.data;

      if (tempParent) {
        if (this.isMinPriority) {
          tempParent.left = temp.right;
        } else {
          tempParent.right = temp.left;
        }
      } else {
        // The successor/predecessor was the direct child
        if (this.isMinPriority) {
          nodeToRemove.right = temp.right;
        } else {
          nodeToRemove.left = temp.left;
        }
      }
      return nodeToRemove;
    }
  }

  private comparePriority(priorityA: number, priorityB: number): number {
    return this.isMinPriority ? priorityA - priorityB : priorityB - priorityA;
  }

  toArray(): PriorityQueueItem<T>[] {
    const result: PriorityQueueItem<T>[] = [];
    this.inOrderTraversal(this.root, result);
    return this.isMinPriority ? result : result.reverse(); // Adjust order for max-priority
  }

  private inOrderTraversal(
    node: TreeNode<PriorityQueueItem<T>> | null,
    result: PriorityQueueItem<T>[],
  ): void {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
  }
}

class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

// Example Usage (Max-Priority):
const bstMaxPQ = new BSTPriorityQueue<string>();
bstMaxPQ.enqueue('Low', 1);
bstMaxPQ.enqueue('High', 3);
bstMaxPQ.enqueue('Medium', 2);
bstMaxPQ.enqueue('Another High', 3);

console.log('BST Max PQ Size:', bstMaxPQ.size);
console.log('BST Max PQ Peek:', bstMaxPQ.peek());
while (!bstMaxPQ.isEmpty()) {
  console.log('BST Max PQ Dequeue:', bstMaxPQ.dequeue());
}

console.log('\n--- BST Min-Priority Example ---');
const bstMinPQ = new BSTPriorityQueue<string>(true);
bstMinPQ.enqueue('Urgent', 1);
bstMinPQ.enqueue('Normal', 3);
bstMinPQ.enqueue('Low', 5);
bstMinPQ.enqueue('Medium', 4);
bstMinPQ.enqueue('High', 2);

console.log('BST Min PQ Size:', bstMinPQ.size);
console.log('BST Min PQ Peek:', bstMinPQ.peek());
while (!bstMinPQ.isEmpty()) {
  console.log('BST Min PQ Dequeue:', bstMinPQ.dequeue());
}
