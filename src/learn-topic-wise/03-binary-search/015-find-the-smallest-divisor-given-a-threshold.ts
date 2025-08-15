export const url =
  '[Find the Smallest Divisor Given a Threshold](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/)';

function smallestDivisor(nums: number[], threshold: number): number {
  function feasible(m: number) {
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
      sum += Math.ceil(nums[i] / m);

      if (sum > threshold) {
        return false;
      }
    }

    return true;
  }

  let l = 1,
    r = Math.max(...nums);

  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (feasible(m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}

var input = [1, 2, 5, 9],
  t = 6;
var out = smallestDivisor(input, t);

console.log(out);
