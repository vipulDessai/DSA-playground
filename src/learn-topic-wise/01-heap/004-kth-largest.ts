import { MaxHeap_FullSortWithBinarySearch } from './001-max-heap';

class KthLargest {
  mHeap = new MaxHeap_FullSortWithBinarySearch<number>();
  kthIndex: number;
  constructor(k: number, nums: number[]) {
    this.kthIndex = k;
    for (let i = 0; i < nums.length; i++) {
      this.mHeap.push(nums[i]);
    }
  }

  add(val: number): number {
    this.mHeap.push(val);

    return this.mHeap.sortedDsc[this.kthIndex - 1];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
