export const url = '[Combination Formula nCr - Dynamic Porgramming](NA)';

const MOD = 1e9 + 7;
const MAX = 1000; // adjust based on your problem constraints

const dp: number[][] = Array.from({ length: MAX + 1 }, () =>
  Array(MAX + 1).fill(0),
);

// Build Pascal's Triangle
for (let n = 0; n <= MAX; n++) {
  for (let r = 0; r <= n; r++) {
    if (r === 0 || r === n) {
      dp[n][r] = 1;
    } else {
      dp[n][r] = (dp[n - 1][r - 1] + dp[n - 1][r]) % MOD;
    }
  }
}

function nCr(n: number, r: number): number {
  if (r > n) return 0;
  const C = Array(r + 1).fill(0);
  C[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = Math.min(i, r); j > 0; j--) {
      C[j] = (C[j] + C[j - 1]) % MOD;
    }
  }

  return C[r];
}

console.log(nCr(10, 3)); // Output: 120
