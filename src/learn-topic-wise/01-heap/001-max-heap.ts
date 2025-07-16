/**
 * @description the searching and insert in the max heap will be done in O(n log n)
 * @class MaxHeap_FullSortWithBinarySearch
 * @function push(number):void
 * @function get:max():number
 * @function get:array():number[]
 * @function pop():number
 * @function get:size():number
 */
export class MaxHeap_FullSortWithBinarySearch<T> {
  sortedDsc: T[];
  constructor() {
    this.sortedDsc = [];
  }

  sortInsert(target: T) {
    let arr = this.sortedDsc;

    let l = 0,
      r = arr.length;

    while (l < r) {
      const m = Math.floor(l + (r - l) / 2);
      if (this.sortedDsc[m] >= target) {
        r = m;
      } else {
        l = m + 1;
      }
    }

    // this is O(n log n)
    this.sortedDsc = [...arr.slice(0, l), target, ...arr.slice(l)];
  }

  push(target: T) {
    this.sortInsert(target);
  }

  get max() {
    return this.sortedDsc[0];
  }

  pop() {
    return this.sortedDsc.pop();
  }

  get size() {
    return this.sortedDsc.length;
  }

  peek() {
    return this.sortedDsc[this.size - 1];
  }
}

const mHeap = new MaxHeap_FullSortWithBinarySearch<number>();
mHeap.push(30);
mHeap.push(1);
mHeap.push(25);
mHeap.push(3);
mHeap.push(66);
mHeap.push(5);
mHeap.push(3);

console.log(mHeap.peek());

mHeap.pop();
mHeap.pop();
mHeap.push(4);
mHeap.pop();

console.log(mHeap.peek());
