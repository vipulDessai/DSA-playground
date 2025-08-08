export const url = '[Fast Exponenial](NA)';

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

  return largeOut;
}

// console.log(factorial());

// const MOD = 1000000007;
const MOD = 1000;
function fastExp(base, exp) {
  if (exp == 1) {
    return base;
  } else {
    if (exp % 2 == 0) {
      const base1 = Math.pow(fastExp(base, exp / 2), 2);
      if (base1 >= MOD) return base1 % MOD;
      else return base1;
    } else {
      const ans = base * Math.pow(fastExp(base, (exp - 1) / 2), 2);
      if (ans >= MOD) return ans % MOD;
      else return ans;
    }
  }
}

// console.log(fastExp(2, 14));

/**
 * Calculates (base ** exponent) % modulus efficiently using modular exponentiation.
 * Handles arbitrarily large integers using BigInt.
 *
 * @param base The base number.
 * @param exponent The exponent.
 * @param modulus The modulus.
 * @returns The result of (base ** exponent) % modulus.
 */
function calculateModularPower(
  base: bigint,
  exponent: bigint,
  modulus: bigint,
): bigint {
  if (modulus === BigInt(1)) {
    return BigInt(0); // Any number modulo 1 is 0
  }

  let result = BigInt(1);
  base %= modulus; // Reduce base modulo modulus initially

  while (exponent > BigInt(0)) {
    // If exponent is odd, multiply result by current base and apply modulo
    if (exponent % BigInt(2) === BigInt(1)) {
      result = (result * base) % modulus;
    }

    // Square the base and take the modulo
    base = (base * base) % modulus;

    // Divide the exponent by 2 (right shift by 1 bit)
    exponent = exponent >> BigInt(1);
  }

  return result;
}

// Example usage: 10 raised to the power of 1000, modulo 7
const base1 = BigInt(10);
const exponent1 = BigInt(1000);
const modulus1 = BigInt(7);

const result1 = calculateModularPower(base1, exponent1, modulus1);
console.log(`(${base1}^${exponent1}) % ${modulus1} = ${result1}`); // Expected: (10^1000) % 7 = 4

// Example with a larger modulus (common in competitive programming)
const base2 = BigInt(10);
const exponent2 = BigInt(1000);
const modulus2 = BigInt(10 ** 9 + 7); //  10^9 + 7

const result2 = calculateModularPower(base2, exponent2, modulus2);
console.log(`(${base2}^${exponent2}) % ${modulus2} = ${result2}`);

// Example with very large numbers
const largeBase = BigInt('1234567890123456789012345678901234567890');
const largeExponent = BigInt('9876543210987654321098765432109876543210');
const largeModulus = BigInt('1000000007');

const resultLarge = calculateModularPower(
  largeBase,
  largeExponent,
  largeModulus,
);
console.log(`(largeBase^largeExponent) % ${largeModulus} = ${resultLarge}`);
