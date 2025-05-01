// TODO: fix the binary search insert location

/**
 * @description the searching and insert in the max heap will be done in O(log n)
 * and every insert will be repeated n number of times (i.e. for n size of array)
 * @class MaxHeap_FullSortWithBinarySearch
 * @function push(number):void
 * @function get:max():number
 * @function get:array():number[]
 * @function pop():number
 * @function get:size():number
 */
export class MaxHeap_FullSortWithBinarySearch<T> {
  sortedDsc: T[];
  getKey: (m: number) => T;
  constructor(_getKey: (m: number) => T) {
    this.getKey = _getKey;
    this.sortedDsc = [];
  }

  sortInsert(target: T) {
    let arr = this.sortedDsc;

    let l = 0,
      r = arr.length - 1;

    while (l < r) {
      const m = Math.floor(l + (r - l) / 2);
      if (this.getKey(m) >= target) {
        r = m;
      } else {
        l = m + 1;
      }
    }

    this.sortedDsc = [...arr.slice(0, l), target, ...arr.slice(l)];
  }

  push(target: T) {
    this.sortInsert(target);
  }

  get max() {
    return this.sortedDsc[0];
  }

  pop() {
    return this.sortedDsc.shift();
  }

  get size() {
    return this.sortedDsc.length;
  }

  peek() {
    return this.sortedDsc[this.size - 1];
  }
}

const mHeap = new MaxHeap_FullSortWithBinarySearch<number>(function (
  index: number,
) {
  // @ts-ignore
  return this.sortedDsc[index];
});
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
