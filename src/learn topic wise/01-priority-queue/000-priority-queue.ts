class PriorityQueue {
  heap: number[];
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  _parent(i: number) {
    return Math.floor((i - 1) / 2); // because its not an array but its a binary tree representation
  }

  _leftChild(i: number) {
    return 2 * i + 1;
  }

  _rightChild(i: number) {
    return 2 * i + 2;
  }

  _swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  _heapifyUp(i: number) {
    while (i > 0 && this.heap[i] < this.heap[this._parent(i)]) {
      this._swap(i, this._parent(i));
      i = this._parent(i);
    }
  }

  _heapifyDown(i: number) {
    let smallest = i;

    const left = this._leftChild(i);
    if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    const right = this._rightChild(i);
    if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      this._swap(i, smallest);
      this._heapifyDown(smallest);
    }
  }

  insert(item: number) {
    this.heap.push(item);
    this._heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }
    const minItem = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this._heapifyDown(0);
    return minItem;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.heap[0];
  }
}

const pq = new PriorityQueue();
pq.insert(5);
pq.insert(2);
pq.insert(8);
pq.insert(1);

console.log(pq.extractMin()); // Output: 1
console.log(pq.extractMin()); // Output: 2
console.log(pq.peek()); // Output: 5
