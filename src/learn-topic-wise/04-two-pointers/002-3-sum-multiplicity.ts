export const url =
  '[3 Sum Multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/)';

const MOD = 1e9 + 7;

function threeSumMulti_two_pointers_smart_ai_math_formula(
  arr: number[],
  target: number,
): number {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let res = 0;
  for (let i = 0; i < n - 2; ++i) {
    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = arr[i] + arr[l] + arr[r];

      if (sum < target) {
        ++l;
      } else if (sum > target) {
        --r;
      } else {
        // optimization step
        // but required for [1,1,2,2,2,2] and t = 5
        // this is `Combinatorics`
        // below is formula for picking 2 out of n items
        //
        // NOTE:
        // for picking 3 its n(n-1)(n-2) / 6
        // for picking 4 its n(n-1)(n-2) / 24
        // for picking r its n(n-1)(n-2)....(n-r-1) / r!
        // but computing factorial will overflow therefore
        // these types of computations are handled using DP or inverse mod
        //
        // if (arr[l] === arr[r]) {
        //   const n = r - l + 1;
        //   res = (res + (((n * (n - 1)) / 2) % MOD)) % MOD;

        //   break;
        // }

        // Replacing Combinatorics with Explicit Pair of 2 numbers
        // the linear loop is only for for pair of 2, for more than 2
        // either DP or mod inverse for computing nCr (combination formula) has to be used
        if (arr[l] === arr[r]) {
          const curLen = r - l + 1;
          let pairs = 0;
          for (let k = 1; k < curLen; k++) {
            pairs += k;
          }
          res += pairs;
          res %= MOD;
          break;
        }

        let leftCount = 1,
          rightCount = 1;

        while (l + 1 < r && arr[l] === arr[l + 1]) {
          leftCount++;
          l++;
        }

        while (r - 1 > l && arr[r] === arr[r - 1]) {
          rightCount++;
          r--;
        }

        res = (res + leftCount * rightCount) % MOD;

        ++l;
        --r;
      }
    }
  }

  return res;
}

// var input = [1, 1, 2, 2, 3, 3, 4, 4],
//   t = 8;

// input = [1, 1, 2, 2, 2, 2];
// t = 5;

// var out = threeSumMulti_two_pointers_smart_ai_math_formula(input, t);

// console.log(out);

function threeSumMulti_two_pointers_dp(arr: number[], target: number): number {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let res = 0;
  for (let i = 0; i < n - 2; ++i) {
    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = arr[i] + arr[l] + arr[r];

      if (sum < target) {
        ++l;
      } else if (sum > target) {
        --r;
      } else {
        // TODO - use dp to find the count of 3 paired tuple
      }
    }
  }

  return res;
}

// var input = [1, 1, 2, 2, 3, 3, 4, 4],
//   t = 8;

// input = [1, 1, 2, 2, 2, 2];
// t = 5;

// var out = threeSumMulti_two_pointers_dp(input, t);

// console.log(out);

function threeSumMulti_two_pointers_mod_inverse_combination_formula(
  arr: number[],
  target: number,
): number {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  let res = 0;
  for (let i = 0; i < n - 2; ++i) {
    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = arr[i] + arr[l] + arr[r];

      if (sum < target) {
        ++l;
      } else if (sum > target) {
        --r;
      } else {
        if (arr[l] === arr[r]) {
          // TODO - use modulo inverse to compute nCr (combination formula)

          break;
        }

        let leftCount = 1,
          rightCount = 1;

        while (l + 1 < r && arr[l] === arr[l + 1]) {
          leftCount++;
          l++;
        }

        while (r - 1 > l && arr[r] === arr[r - 1]) {
          rightCount++;
          r--;
        }

        res = (res + leftCount * rightCount) % MOD;

        ++l;
        --r;
      }
    }
  }

  return res;
}

var input = [1, 1, 2, 2, 3, 3, 4, 4],
  t = 8;

input = [1, 1, 2, 2, 2, 2];
t = 5;

var out = threeSumMulti_two_pointers_mod_inverse_combination_formula(input, t);

console.log(out);
