class MinHeap_linear {
  arr: number[];
  constructor() {
    this.arr = [];
  }

  push(n: number) {
    for (let i = 0; i < this.arr.length; ++i) {
      if (n < this.arr[i]) {
        [this.arr[i], n] = [n, this.arr[i]];
      }
    }

    this.arr.push(n);
  }
}

const mH_o_n = new MinHeap_linear();
mH_o_n.push(1);
mH_o_n.push(9);
mH_o_n.push(16);
mH_o_n.push(25);
mH_o_n.push(0);
mH_o_n.push(6);
mH_o_n.push(18);

console.log(mH_o_n.arr);
