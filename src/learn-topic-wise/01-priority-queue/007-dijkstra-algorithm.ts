// https://www.interviewcake.com/concept/java/dijkstras-algorithm
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

export function dijkstra(v: number, edges: number[][], src: number) {
  const res = Array(v).fill(Infinity);

  res[src] = 0;

  const adjList: Record<number, { dst: number; w: number }[]> = {};
  for (let i = 0; i < edges.length; ++i) {
    const [s, d, w] = edges[i];

    if (!adjList[s]) {
      adjList[s] = [];
    }

    adjList[s].push({ dst: d, w });
  }

  function bfs() {
    const pQ = new priorityQueue_Dijkstra<number>();

    pQ.enqueue(src, 0);

    while (pQ.length > 0) {
      const qLen = pQ.length;
      const queuedNodes: { value: number; priority: number }[] = [];
      for (let i = 0; i < qLen; i++) {
        queuedNodes.push(pQ.dequeue()!);
      }

      for (let i = 0; i < queuedNodes.length; i++) {
        const node = queuedNodes[i];

        if (node) {
          const curDistance = node.priority;
          const connectedNodes = adjList[node.value];

          if (connectedNodes) {
            for (const curNode of connectedNodes) {
              if (curDistance + curNode.w < res[curNode.dst]) {
                pQ.enqueue(curNode.dst, curDistance + curNode.w);

                res[curNode.dst] = curDistance + curNode.w;
              }
            }
          }
        }
      }
    }
  }

  bfs();

  return res;
}

console.log(
  dijkstra(
    3,
    [
      [0, 1, 1],
      [1, 2, 3],
      [0, 2, 6],
    ],
    0,
  ),
);
