export const url =
  '[Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)';

function findMaxAverage(nums: number[], k: number): number {
  const n = nums.length;
  let l = 0,
    r = 0;

  let sum = 0;
  while (r < k) {
    sum += nums[r];
    ++r;
  }
  --r;

  let res = sum / k;
  while (r < n) {
    res = Math.max(res, sum / k);

    sum -= nums[l];
    ++l;
    ++r;
    sum += nums[r];
  }

  return res;
}

var input = [],
  k = 0;
var out = findMaxAverage(input, k);

console.log(out);
