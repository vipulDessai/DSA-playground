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
      // in case of finding only 1 largest subarray,
      // we store the first index where the the current
      // prefix sum had occurred
      //
      // this cant be outside the else part
      // coz we need first index, having it outside the
      // the else will give the last index where
      // the current prefix sum had occurred
      sumMap.set(prefixSum, i);
    }
  }

  return max;
}

console.log(largestSubArrayKSum([5, 1, 4, 3, -4, -1, 8, 23], 8));
