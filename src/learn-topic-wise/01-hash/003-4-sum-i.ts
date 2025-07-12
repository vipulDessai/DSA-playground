export const url = '[4Sum](https://leetcode.com/problems/4sum/description/)';

function threeSum(nums: number[], i: number, t: number, res: Set<string>) {
  const n = nums.length;

  for (let j = i + 1; j < n - 2; ++j) {
    let l = j + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[i] + nums[j] + nums[l] + nums[r];
      if (sum < t) {
        ++l;
      } else if (sum > t) {
        --r;
      } else {
        res.add(JSON.stringify([nums[i], nums[j], nums[l], nums[r]]));
        ++l;
        --r;
      }
    }
  }
}

function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length;

  nums.sort((a, b) => a - b); // asc order sort

  const res = new Set<string>();
  for (let i = 0; i < n - 3; ++i) {
    threeSum(nums, i, target, res);
  }

  return Array.from(res).map((r) => JSON.parse(r));
}

var input = [0, 0, 0, 0],
  target = 0;
var out = fourSum(input, target);

console.log(out);
