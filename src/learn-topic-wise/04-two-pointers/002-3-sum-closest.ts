export const url =
  '[3 Sum Closest](https://leetcode.com/problems/3sum-closest/description/)';

function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  let res = Infinity;
  for (let i = 0; i < n - 2; ++i) {
    let l = i + 1;
    let r = n - 1;

    let sum = 0;
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];

      if (Math.abs(target - sum) < Math.abs(target - res)) {
        res = sum;
      }

      if (sum < target) {
        ++l;
      } else {
        --r;
      }
    }
  }

  return res;
}

var input = [-1, 2, 1, -4],
  t = 1;
var out = threeSumClosest(input, t);

console.log(out);
