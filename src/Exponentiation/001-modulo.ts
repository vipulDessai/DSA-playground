function factorial() {
  let ans = 1;
  let base = 2;
  let exp = 11;
  const MOD = 10;
  const largeOut: number[] = [];
  for (let i = 1; i <= exp; i++) {
    ans *= base % MOD;
    largeOut.push(ans);
  }
}

// console.log(factorial());

function fastExp(base, exp) {
  if (exp == 1) {
    return base;
  } else {
    if (exp % 2 == 0) {
      const base1 = Math.pow(fastExp(base, exp / 2), 2);
      if (base1 >= 1000000007) return base1 % 1000000007;
      else return base1;
    } else {
      const ans = base * Math.pow(fastExp(base, (exp - 1) / 2), 2);
      if (ans >= 1000000007) return ans % 1000000007;
      else return ans;
    }
  }
}

// console.log(fastExp(2, 1000));

let num = 2004;
const arr: number[] = [];
while (num > 0) {
  arr.push(num % 10);
  num = (num - (num % 10)) / 10;
}
console.log(arr);
