export const url =
  '[binary subarrays with sum](https://leetcode.com/problems/binary-subarrays-with-sum/)';

function numSubarraysWithSum(nums: number[], goal: number): number {
  return countAtMost(nums, goal) - countAtMost(nums, goal - 1);
}

function countAtMost(nums: number[], k: number): number {
  if (k < 0) return 0;
  let left = 0,
    count = 0,
    ones = 0;

  for (let right = 0; right < nums.length; right++) {
    ones += nums[right];
    while (ones > k) {
      ones -= nums[left];
      left++;
    }
    count += right - left + 1;
  }

  return count;
}

var input = [],
  g = 0;
var o = numSubarraysWithSum(input, g);
console.log(o);
