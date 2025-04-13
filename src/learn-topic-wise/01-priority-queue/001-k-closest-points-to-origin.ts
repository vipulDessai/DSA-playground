import { BSTPriorityQueue } from './000-priority-queue-02-bst-based';

function kClosest(points: number[][], k: number): number[][] {
  const pQ = new BSTPriorityQueue<number[]>(true);

  const n = points.length;
  for (let i = 0; i < n; ++i) {
    const cur = points[i];
    const curPriority = cur[0] ** 2 + cur[1] ** 2;
    pQ.enqueue(cur, curPriority);
  }

  const result: number[][] = [];
  for (let i = 0; i < k; ++i) {
    result.push(pQ.dequeue()!);
  }

  return result;
}

var out = kClosest(
  [
    [1, 3],
    [-2, 2],
  ],
  1,
);
console.log(out);
