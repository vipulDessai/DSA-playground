// function hammingWeight(n: number): number {
//   let res = 0;
//   while (n) {
//     res += n % 2;
//     n = n >> 1;

//     console.log(n);
//   }

//   return res;
// }

function hammingWeight(n: number): number {
  let res = 0;
  while (n) {
    n &= n - 1;
    res += 1;

    console.log(n);
  }

  return res;
}

console.log(hammingWeight(1011));
