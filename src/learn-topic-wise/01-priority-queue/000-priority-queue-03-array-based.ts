interface PriorityQueueItem<T> {
  value: T;
  priority: number;
}

class ArrayPriorityQueue<T> {
  private items: PriorityQueueItem<T>[] = [];

  /**
   * Adds an item to the priority queue.
   * Items are added to the end of the array.
   * @param value The value of the item to add.
   * @param priority The priority of the item.
   */
  enqueue(value: T, priority: number): void {
    this.items.push({ value, priority });
  }

  /**
   * Removes and returns the item with the highest priority.
   * This implementation requires iterating through the array to find the highest priority element.
   * Returns undefined if the queue is empty.
   * @returns The value of the item with the highest priority, or undefined if empty.
   */
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let highestPriorityIndex = 0;
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i].priority > this.items[highestPriorityIndex].priority) {
        highestPriorityIndex = i;
      }
    }

    const highestPriorityItem = this.items.splice(highestPriorityIndex, 1)[0];
    return highestPriorityItem.value;
  }

  /**
   * Returns the item with the highest priority without removing it.
   * This implementation requires iterating through the array to find the highest priority element.
   * Returns undefined if the queue is empty.
   * @returns The value of the item with the highest priority, or undefined if empty.
   */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    let highestPriorityItem = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i].priority > highestPriorityItem.priority) {
        highestPriorityItem = this.items[i];
      }
    }
    return highestPriorityItem.value;
  }

  /**
   * Returns the number of items in the priority queue.
   * @returns The size of the queue.
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Checks if the priority queue is empty.
   * @returns True if the queue is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Clears all items from the priority queue.
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Returns all items in the priority queue as an array.
   * @returns An array of all items in the queue.
   */
  toArray(): PriorityQueueItem<T>[] {
    return [...this.items];
  }
}

// Example Usage:
const taskQueue = new ArrayPriorityQueue<string>();

taskQueue.enqueue('Low Priority Task 1', 1);
taskQueue.enqueue('High Priority Task 1', 3);
taskQueue.enqueue('Medium Priority Task 1', 2);
taskQueue.enqueue('High Priority Task 2', 3);
taskQueue.enqueue('Low Priority Task 2', 1);

console.log('Queue size:', taskQueue.size()); // Output: Queue size: 5
console.log('Is empty:', taskQueue.isEmpty()); // Output: Is empty: false
console.log('Peek:', taskQueue.peek()); // Output: Peek: High Priority Task 1

console.log('Dequeueing tasks (highest priority first):');
while (!taskQueue.isEmpty()) {
  console.log(taskQueue.dequeue());
}
// Output:
// Dequeuing tasks (highest priority first):
// High Priority Task 1
// High Priority Task 2
// Medium Priority Task 1
// Low Priority Task 1
// Low Priority Task 2

console.log('Queue size after dequeueing:', taskQueue.size()); // Output: Queue size after dequeueing: 0
console.log('Is empty after dequeueing:', taskQueue.isEmpty()); // Output: Is empty after dequeueing: true

taskQueue.enqueue('Another Task', 2);
console.log('Queue after adding:', taskQueue.toArray());
taskQueue.clear();
console.log('Queue size after clearing:', taskQueue.size()); // Output: Queue size after clearing: 0
