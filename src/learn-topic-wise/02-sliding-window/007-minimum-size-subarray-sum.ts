export const url =
  '[Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)';

function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  let l = 0,
    r = 0,
    res: number = Infinity,
    sum = 0;

  while (r < n) {
    sum += nums[r];

    while (sum >= target) {
      res = Math.min(res, r - l + 1);

      sum -= nums[l];

      ++l;
    }

    ++r;
  }

  return res === Infinity ? 0 : res;
}

var input = [2, 3, 1, 2, 4, 3],
  t = 7;
var out = minSubArrayLen(t, input);

console.log(out);
