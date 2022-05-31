// https://leetcode.com/problems/maximum-subarray
function maxSubArray(nums: number[]): number {
  let curSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }

    if (curSum < 0) {
      curSum = 0;
    }
  }

  return maxSum;
}
