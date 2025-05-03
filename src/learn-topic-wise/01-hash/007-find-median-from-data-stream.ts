// https://leetcode.com/problems/find-median-from-data-stream/description/

// brute force
class MedianFinder_brute {
  private heap: number[]; // Max Heap (stores smaller half of numbers)

  constructor() {
    this.heap = [];
  }

  addNum(num: number): void {
    this.heap.push(num);
    this.heap.sort((a, b) => a - b);
  }

  findMedian(): number {
    const n = this.heap.length;
    if (n % 2 === 0) {
      const m = n / 2;
      return (this.heap[m] + this.heap[m - 1]) / 2.0;
    } else {
      return this.heap[(n - 1) / 2];
    }
  }
}

// var mf_brute = new MedianFinder_brute();
// mf_brute.addNum(6);
// mf_brute.addNum(10);
// console.log(mf_brute.findMedian()); // Output: 8.0
// mf_brute.addNum(2);
// console.log(mf_brute.findMedian()); // Output: 6
// mf_brute.addNum(3);
// console.log(mf_brute.findMedian()); // Output: 4.5

// optimal solution using two heaps
export class Heap {
  isMin: boolean;
  list: number[];

  constructor(isMin: boolean) {
    this.isMin = isMin;
    this.list = [];
  }

  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  add(num: number) {
    this.list.push(num);
    this.heapifyUp();
  }

  checkPriority(i: number, j: number) {
    return this.isMin
      ? this.list[i] > this.list[j]
      : this.list[i] < this.list[j];
  }

  swap(i: number, j: number) {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
  }

  get length() {
    return this.list.length;
  }

  heapifyUp() {
    let j = this.list.length - 1;
    let i = this.getParentIndex(j);

    while (i >= 0 && this.checkPriority(i, j)) {
      this.swap(i, j);

      j = i;
      i = this.getParentIndex(j);
    }
  }

  dequeue() {
    if (this.list.length === 0) {
      return null;
    }

    if (this.list.length === 1) {
      return this.list.pop();
    }

    const out = this.list[0];
    this.list[0] = this.list.pop()!;
    this.heapifyDown();
    return out;
  }

  getLeftChildIndex(i: number) {
    return 2 * i + 1;
  }

  getRightChildIndex(i: number) {
    return 2 * i + 2;
  }

  heapifyDown() {
    const n = this.list.length;

    let i = 0;
    let j = this.getLeftChildIndex(i);

    while (i < n && j < n) {
      let k = this.getRightChildIndex(i);
      if (k < n && this.checkPriority(j, k)) {
        j = k;
      }

      if (this.checkPriority(i, j)) {
        this.swap(i, j);

        i = j;
        j = this.getLeftChildIndex(i);
      } else {
        break;
      }
    }
  }

  peek() {
    return this.list[0];
  }
}

class MedianFinder_Heap {
  private maxHeap: Heap; // Max Heap (stores smaller half of numbers)
  private minHeap: Heap; // Min Heap (stores larger half of numbers)

  constructor() {
    this.maxHeap = new Heap(false);
    this.minHeap = new Heap(true);
  }

  addNum(num: number): void {
    if (this.maxHeap.length === 0 || num <= this.maxHeap.peek()) {
      this.maxHeap.add(num);
    } else {
      this.minHeap.add(num);
    }

    // Balance heaps by sizes (equalizing the heap size)
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.add(this.maxHeap.dequeue()!);
    }
    // why NOT this.minHeap.length > this.maxHeap.length + 1
    // maxHeap directly stores the median when count is odd
    // beside say we have
    // max 1 and min - 2,3 then 2 can be shifted to max as for odd length
    // we return maxHeap.peek
    else if (this.minHeap.length > this.maxHeap.length) {
      this.maxHeap.add(this.minHeap.dequeue()!);
    }
  }

  findMedian(): number {
    if (this.maxHeap.length === this.minHeap.length) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0;
    }

    return this.maxHeap.peek(); // Max Heap stores the median when odd count
  }
}

var mf_heap = new MedianFinder_Heap();
mf_heap.addNum(6);
mf_heap.addNum(10);
console.log(mf_heap.findMedian()); // Output: 8.0
mf_heap.addNum(2);
console.log(mf_heap.findMedian()); // Output: 6
mf_heap.addNum(3);
console.log(mf_heap.findMedian()); // Output: 4.5
