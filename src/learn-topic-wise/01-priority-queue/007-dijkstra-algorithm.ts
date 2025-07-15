// https://www.interviewcake.com/concept/java/dijkstras-algorithm
// https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1
class priorityQueue_Dijkstra<T> {
  private queue: { value: T; priority: number }[];
  constructor() {
    this.queue = [];
  }

  private parentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private leftChildIndex(i: number) {
    return i * 2 + 1;
  }

  private rightChildIndex(i: number) {
    return i * 2 + 2;
  }

  private swap(i: number, j: number) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }

  private heapifyUp() {
    let i = this.queue.length - 1;
    let parentIndex = this.parentIndex(i);

    while (
      parentIndex >= 0 &&
      this.queue[parentIndex].priority > this.queue[i].priority
    ) {
      this.swap(parentIndex, i);

      i = parentIndex;
      parentIndex = this.parentIndex(i);
    }
  }

  enqueue(value: T, priority: number) {
    this.queue.push({ value, priority });
    this.heapifyUp();
  }

  private heapifyDown() {
    const n = this.queue.length;

    let i = 0;
    let leftChildIndex = this.leftChildIndex(i);

    while (leftChildIndex < n) {
      let j = leftChildIndex;

      let rightChildIndex = this.rightChildIndex(i);
      if (
        rightChildIndex < n &&
        this.queue[leftChildIndex].priority >
          this.queue[rightChildIndex].priority
      ) {
        j = rightChildIndex;
      }

      if (this.queue[i].priority > this.queue[j].priority) {
        this.swap(i, j);
        i = j;
        leftChildIndex = this.leftChildIndex(i);
      } else {
        break;
      }
    }
  }

  dequeue() {
    const n = this.queue.length;
    if (n === 0) return null;

    if (n === 1) return this.queue.pop()!;

    const out = this.queue[0];
    this.queue[0] = this.queue.pop()!;
    this.heapifyDown();
    return out;
  }

  get length() {
    return this.queue.length;
  }
}

// here the edges are bidirectional
export function dijkstra(v: number, edges: number[][], src: number) {
  const res = Array(v).fill(Infinity);

  const adjList = new Map<number, { dst: number; w: number }[]>();
  for (const e of edges) {
    const [s, d, w] = e;

    if (!adjList.has(s)) {
      adjList.set(s, []);
    }

    if (!adjList.has(d)) {
      adjList.set(d, []);
    }

    adjList.get(s)?.push({ dst: d, w });
    adjList.get(d)?.push({ dst: s, w });
  }

  function bfs() {
    const pQ = new priorityQueue_Dijkstra<number>();
    pQ.enqueue(src, 0);
    res[src] = 0;

    while (pQ.length > 0) {
      const q: { value: number; priority: number }[] = [];

      while (pQ.length) {
        q.push(pQ.dequeue()!);
      }

      for (const { value, priority: distance } of q) {
        const dstList = adjList.get(value);
        if (dstList) {
          for (const { dst, w } of dstList) {
            const curDistance = distance + w;
            if (curDistance < res[dst]) {
              pQ.enqueue(dst, curDistance);
              res[dst] = curDistance;
            }
          }
        }
      }
    }
  }

  bfs();

  return res;
}

// console.log(
//   dijkstra(
//     3,
//     [
//       [0, 1, 1],
//       [1, 2, 3],
//       [0, 2, 6],
//     ],
//     2,
//   ),
// );

console.log(
  dijkstra(
    4,
    [
      [0, 1, 1],
      [0, 2, 20],
      [1, 3, 1],
      [2, 3, 1],
    ],
    0,
  ),
);

// console.log(
//   dijkstra(
//     5,
//     [
//       [0, 1, 4],
//       [0, 2, 8],
//       [1, 4, 6],
//       [2, 3, 2],
//       [3, 4, 10],
//     ],
//     0,
//   ),
// );
