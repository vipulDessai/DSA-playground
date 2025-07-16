export const url =
  '[Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)';

interface PQItem {
  value: {
    num: number;
    row: number;
    col: number;
  };
  priority: number;
}

class PriorityQueue_kth_smallest_elem_sorted_matrix {
  queue: PQItem[] = [];
  getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  getLeftIndex(i: number) {
    return i * 2 + 1;
  }

  getRightIndex(i: number) {
    return i * 2 + 2;
  }

  swap(i: number, j: number) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }

  heapifyUp() {
    let r = this.queue.length - 1;
    let l = this.getParentIndex(r);
    while (l >= 0 && this.queue[l].priority > this.queue[r].priority) {
      this.swap(l, r);
      r = l;
      l = this.getParentIndex(r);
    }
  }

  enqueue(v: number, r: number, c: number) {
    this.queue.push({ value: { num: v, row: r, col: c }, priority: v });
    this.heapifyUp();
  }

  heapifyDown() {
    const n = this.queue.length;
    let i = 0;
    let l = this.getLeftIndex(i);
    while (l < n) {
      let j = l;

      const r = this.getRightIndex(i);

      // take the smallest
      if (r < n && this.queue[r].priority < this.queue[l].priority) {
        j = r;
      }

      if (this.queue[i].priority > this.queue[j].priority) {
        this.swap(i, j);
        i = j;
        l = this.getLeftIndex(i);
      } else {
        break;
      }
    }
  }

  dequeue() {
    if (this.queue.length === 0) {
      return null;
    }

    if (this.queue.length === 0) {
      return this.queue.pop()!.value;
    }

    const out = this.queue[0]!;
    this.queue[0] = this.queue.pop()!;
    this.heapifyDown();

    return out.value;
  }
}

function kthSmallest(matrix: number[][], k: number): number {
  const n = matrix.length;

  const pQ = new PriorityQueue_kth_smallest_elem_sorted_matrix();

  for (let i = 0; i < n; ++i) {
    pQ.enqueue(matrix[i][0], i, 0);
  }

  for (let i = 0; i < k - 1; ++i) {
    const { num, row, col } = pQ.dequeue()!;

    if (col + 1 < n) {
      pQ.enqueue(matrix[row][col + 1], row, col + 1);
    }
  }

  return pQ.dequeue()!.num;
}

var matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var k = 9;
var out = kthSmallest(matrix, k);

console.log(out);
