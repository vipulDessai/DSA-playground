class PriorityQueueBinaryHeap {
  queue: { val: number; priority: number }[] = [];
  constructor(private _minHeap: boolean) {}

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private getLeftIndex(i: number) {
    return i * 2 + 1;
  }
  private getRightIndex(i: number) {
    return i * 2 + 2;
  }

  private swap(i: number, j: number) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }
  private shouldSwap(i: number, j: number) {
    if (this._minHeap) {
      return this.queue[i].priority > this.queue[j].priority;
    } else {
      return this.queue[i].priority < this.queue[j].priority;
    }
  }

  private heapifyUp() {
    let i = this.queue.length - 1;
    let parentInd = this.getParentIndex(i);

    while (parentInd >= 0 && this.shouldSwap(parentInd, i)) {
      this.swap(parentInd, i);

      i = parentInd;
      parentInd = this.getParentIndex(i);
    }
  }
  public enqueue(_v: number, _p: number) {
    this.queue.push({ val: _v, priority: _p });
    this.heapifyUp();
  }

  private heapifyDown() {
    const n = this.queue.length;
    let i = 0;
    let leftInd = this.getLeftIndex(i);

    while (leftInd < n) {
      let j = leftInd;

      const rightInd = this.getRightIndex(i);
      if (rightInd < n && this.shouldSwap(j, rightInd)) {
        j = rightInd;
      }

      if (this.shouldSwap(i, j)) {
        this.swap(i, j);

        i = j;
        leftInd = this.getLeftIndex(i);
      } else {
        break;
      }
    }
  }
  public dequeue() {
    const n = this.queue.length;
    if (n == 0) {
      return null;
    }

    if (n == 1) {
      return this.queue.pop();
    }

    const out = this.queue[0];
    this.queue[0] = this.queue.pop()!;
    this.heapifyDown();
    return out;
  }
}

function maxSubsequence(nums: number[], k: number): number[] {
  const n = nums.length;
  const maxPq = new PriorityQueueBinaryHeap(false);

  for (let i = 0; i < n; ++i) {
    maxPq.enqueue(i, nums[i]);
  }

  const minPq = new PriorityQueueBinaryHeap(true);

  for (let i = 0; i < k; ++i) {
    const { val: ind, priority: val } = maxPq.dequeue()!;
    minPq.enqueue(val, ind);
  }

  const res: number[] = [];
  for (let i = 0; i < k; ++i) {
    const { val, priority } = minPq.dequeue()!;
    res.push(val);
  }

  return res;
}
