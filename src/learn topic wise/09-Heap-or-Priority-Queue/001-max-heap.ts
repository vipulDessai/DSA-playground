/**
 * @description the searching and insert in the max heap will be done in O(log n)
 * and every insert will be repeated n number of times (i.e. for n size of array)
 * @class MaxHeap
 * @function push(number):void
 * @function get:max():number
 * @function get:array():number[]
 * @function pop():number
 * @function get:size():number
 */
export class MaxHeap<T> {
  sortedDsc: T[];
  getKey: Function;
  constructor(_getKey: Function) {
    this.getKey = _getKey;
    this.sortedDsc = [];
  }
  push(n: T) {
    const sortAndPushMax = (arr: T[]): T[] => {
      let l = 0,
        r = arr.length - 1;

      while (l <= r) {
        const m = (l + r - ((l + r) % 2)) / 2;
        if (n === this.getKey(m)) {
          return [...arr.slice(0, m), n, ...arr.slice(m)];
        } else if (n > this.getKey(m)) {
          r = m - 1;
        } else {
          l = m + 1;
        }
      }

      return [...arr.slice(0, l), n, ...arr.slice(l)];
    };

    this.sortedDsc = sortAndPushMax(this.sortedDsc);

    this.getKey(0);
  }
  get max() {
    return this.sortedDsc[0];
  }
  get array() {
    return this.sortedDsc;
  }
  pop() {
    return this.sortedDsc.shift();
  }
  get size() {
    return this.sortedDsc.length;
  }
}

// const mHeap = new MaxHeap();
// mHeap.push(30);
// mHeap.push(1);
// mHeap.push(25);
// mHeap.push(3);
// mHeap.push(66);
// mHeap.push(5);
// mHeap.push(3);

// console.log(mHeap.peekMax());
// console.log(mHeap.peekAll());

// mHeap.pop();
// mHeap.pop();
// mHeap.push(4);
// mHeap.pop();

// console.log(mHeap.peekMax());
// console.log(mHeap.peekAll());
