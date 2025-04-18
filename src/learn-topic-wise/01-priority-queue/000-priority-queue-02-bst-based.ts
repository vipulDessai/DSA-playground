// | Operation  | Best Case | Worst Case  |
// |------------|-----------|-------------|
// | enqueue    | O(log n)  | O(n)        |
// | dequeue    | O(log n)  | O(n)        |
// | peek       | O(log n)  | O(n)        |
// | isEmpty    | O(1)      | O(1)        |
// | clear      | O(1)      | O(1)        |
// | size       | O(1)      | O(1)        |
// | toArray    | O(n)      | O(n)        |

interface PriorityQueueItem<T> {
  value: T;
  priority: number;
}

class PqTreeNode<T> {
  data: T;
  left: PqTreeNode<T> | null = null;
  right: PqTreeNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class BSTPriorityQueue<T> {
  private root: PqTreeNode<PriorityQueueItem<T>> | null = null;
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
    const newNode = new PqTreeNode(newItem);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
    this.sizeValue++;
  }

  private insertNode(
    node: PqTreeNode<PriorityQueueItem<T>>,
    newNode: PqTreeNode<PriorityQueueItem<T>>,
  ): void {
    const compareResult = this.comparePriority(
      node.data.priority,
      newNode.data.priority,
    );

    // if value is negative that means the current node is greater
    // so add it to the left
    if (compareResult < 0) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
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

    let minMaxNodeParent: PqTreeNode<PriorityQueueItem<T>> | null = null;
    let minMaxNode: PqTreeNode<PriorityQueueItem<T>> = this.root;

    // for min-priority traverse to the right most node
    // for max-priority traverse to the left most node
    while (this.isMinPriority ? minMaxNode.right : minMaxNode.left) {
      minMaxNodeParent = minMaxNode;
      minMaxNode = this.isMinPriority ? minMaxNode.right! : minMaxNode.left!;
    }

    const dequeuedValue = minMaxNode.data.value;

    if (minMaxNodeParent) {
      if (this.isMinPriority) {
        minMaxNodeParent.right = this.removeNode(minMaxNode);
      } else {
        minMaxNodeParent.left = this.removeNode(minMaxNode);
      }
    } else {
      this.root = this.removeNode(this.root);
    }

    this.sizeValue--;
    return dequeuedValue;
  }

  private removeNode(
    nodeToRemove: PqTreeNode<PriorityQueueItem<T>>,
  ): PqTreeNode<PriorityQueueItem<T>> | null {
    if (nodeToRemove.left) {
      return nodeToRemove.left;
    }

    if (nodeToRemove.right) {
      return nodeToRemove.right;
    }

    return null;
  }

  private comparePriority(priorityA: number, priorityB: number): number {
    return priorityA - priorityB;
  }

  toArray(): PriorityQueueItem<T>[] {
    const result: PriorityQueueItem<T>[] = [];
    this.inOrderTraversal(this.root, result);
    return this.isMinPriority ? result : result.reverse(); // Adjust order for max-priority
  }

  private inOrderTraversal(
    node: PqTreeNode<PriorityQueueItem<T>> | null,
    result: PriorityQueueItem<T>[],
  ): void {
    if (node) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
  }
}

// Example Usage (Max-Priority Queue):
console.log('\n--- BST Max-Priority Queue Example ---');
const bstMaxPQ = new BSTPriorityQueue<string>(false);
bstMaxPQ.enqueue('Low Priority Task 1', 1);
bstMaxPQ.enqueue('Medium Priority Task 1', 2);
bstMaxPQ.enqueue('High Priority Task 1', 3);
bstMaxPQ.enqueue('Medium Priority Task 1', 2);
bstMaxPQ.enqueue('High Priority Task 2', 3);
bstMaxPQ.enqueue('Low Priority Task 2', 1);

console.log('BST Max PQ Size:', bstMaxPQ.size);
console.log('BST Max PQ is empty:', bstMaxPQ.isEmpty());
console.log('BST Max PQ Peek:', bstMaxPQ.peek());

console.log('Dequeueing BST Max-Priority Queue:');
while (!bstMaxPQ.isEmpty()) {
  console.log(bstMaxPQ.dequeue());
}

// Example Usage (Min-Priority Queue):
// console.log('\n--- BST Min-Priority Queue Example ---');
// const bstMinPQ = new BSTPriorityQueue<string>(true);
// bstMinPQ.enqueue('Urgent', 1);
// bstMinPQ.enqueue('Normal', 3);
// bstMinPQ.enqueue('Low', 5);
// bstMinPQ.enqueue('Medium', 4);
// bstMinPQ.enqueue('High', 2);

// console.log('BST Min PQ Size:', bstMinPQ.size);
// console.log('BST Min PQ Peek:', bstMinPQ.peek());
// while (!bstMinPQ.isEmpty()) {
//   console.log('BST Min PQ Dequeue:', bstMinPQ.dequeue());
// }
