// find max length of a subarray whose sum is equals to target
export function largestSubArrayKSum(nums: number[], target: number): number {
  let max = 0;
  let prefixSum = 0;

  const sumMap = new Map();
  sumMap.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (sumMap.has(prefixSum - target)) {
      max = Math.max(max, i - sumMap.get(prefixSum - target));
    } else {
      sumMap.set(prefixSum, i);
    }
  }

  return max;
}

console.log(largestSubArrayKSum([5, 1, 4, 3, -4, -1, 8, 23], 8));
