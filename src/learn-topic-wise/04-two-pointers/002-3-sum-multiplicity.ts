export const url =
  '[3 Sum Multiplicity](https://leetcode.com/problems/3sum-with-multiplicity/)';

const MOD = 1e9 + 7;

function threeSumMulti(arr: number[], target: number): number {
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
        if (arr[l] === arr[r]) {
          const n = r - l + 1;
          res = (res + (((n * (n - 1)) / 2) % MOD)) % MOD;

          break;
        } else {
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
  }

  return res;
}

var input = [1, 1, 2, 2, 3, 3, 4, 4],
  t = 8;
var out = threeSumMulti(input, t);

console.log(out);
