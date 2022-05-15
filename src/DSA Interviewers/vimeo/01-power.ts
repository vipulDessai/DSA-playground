function myPow(x: number, n: number): number {
  function simpleDivide(a: number, b: number) {
    return (a - (a % b)) / b;
  }

  function helper(x: number, n: number): number {
    if (x === 0) return 0;
    if (n === 0) return 1;

    let res = helper(x, simpleDivide(n, 2));
    res *= res;

    return n % 2 ? x * res : res;
  }

  let res = helper(x, Math.abs(n));
  return n >= 0 ? res : 1 / res;
}

console.log(myPow(2, 99124));
