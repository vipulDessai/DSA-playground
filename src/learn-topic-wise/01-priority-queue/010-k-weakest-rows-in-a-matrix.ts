export const url =
  'https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/description/';

interface PQItem {
  val: number;
  priority: number;
}

class PriorityQueue_SortBased {
  queue: PQItem[] = [];
  enqueue(index: number, val: number) {
    this.queue.push({ val: index, priority: val });
    this.queue.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    if (this.queue.length === 0) return null;

    return this.queue.shift();
  }
}

function kWeakestRows(mat: number[][], k: number): number[] {
  const m = mat.length,
    n = mat[0].length;

  const pQ = new PriorityQueue_SortBased();
  for (let i = 0; i < m; ++i) {
    let sum = 0;
    for (let j = 0; j < n; ++j) {
      sum += mat[i][j];
    }

    pQ.enqueue(i, sum);
  }
  const res: number[] = [];

  for (let i = 0; i < k; ++i) {
    res.push(pQ.dequeue()!.val);
  }
  return res;
}

var mat = [
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  k = 3;
var out = kWeakestRows(mat, k);
console.log(out);
