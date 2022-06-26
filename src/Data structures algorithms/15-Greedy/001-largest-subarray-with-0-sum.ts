function largestSubArray(nums: number[]): number {
  let max = 0;
  let prefixSum = 0;

  const sumMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (prefixSum === 0) {
      max = i + 1;
    } else {
      if (sumMap.has(prefixSum)) {
        max = Math.max(max, i - sumMap.get(prefixSum));
      } else {
        sumMap.set(sumMap, i);
      }
    }
  }

  return max;
}
