import { MaxHeap_FullSortWithBinarySearch } from './001-max-heap';

function lastStoneWeight(stones: number[]): number {
  const mHeap = new MaxHeap_FullSortWithBinarySearch<number>();

  for (let i = 0; i < stones.length; i++) {
    mHeap.push(stones[i]);
  }

  // if at least 2 stones are there then loop
  while (mHeap.size > 1) {
    const first = mHeap.pop();
    const second = mHeap.pop();

    if (first && second && first > second) {
      mHeap.push(first - second);
    }
  }

  const allStonesFromHeap = mHeap.sortedDsc;

  // in case the heap is empty
  allStonesFromHeap.push(0);
  return allStonesFromHeap[0];
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
