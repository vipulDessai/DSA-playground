export const url = '[Combination Formula nCr - inverse mod](NA)';

const MOD = 1e9 + 7;
const MAX = 1e5; // Adjust based on problem constraints

// Precompute factorials and inverse factorials
const fact: number[] = Array(MAX + 1).fill(1);
const invFact: number[] = Array(MAX + 1).fill(1);

// Modular exponentiation (Fermat's Little Theorem)
function modPow(a: number, exp: number): number {
  let result = 1;

  a %= MOD;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * a) % MOD;

    a = (a * a) % MOD;
    exp = Math.floor(exp / 2);
  }

  return result;
}

// Precompute factorials and inverse factorials
function precomputeFactorials(): void {
  for (let i = 2; i <= MAX; i++) {
    fact[i] = (fact[i - 1] * i) % MOD;
  }

  invFact[MAX] = modPow(fact[MAX], MOD - 2); // inverse of MAX!

  for (let i = MAX - 1; i >= 0; i--) {
    invFact[i] = (invFact[i + 1] * (i + 1)) % MOD;
  }
}

// Modular-safe nCr
export function nCr(n: number, r: number): number {
  precomputeFactorials();

  if (r < 0 || r > n) return 0;
  return (((fact[n] * invFact[r]) % MOD) * invFact[n - r]) % MOD;
}

console.log(nCr(10, 3));
