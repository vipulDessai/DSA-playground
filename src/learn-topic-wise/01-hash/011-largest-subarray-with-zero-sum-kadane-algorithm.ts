export function largestSubArray(nums: number[]): number {
  let max = 0;
  let prefixSum = 0;

  const sumMap = new Map();
  sumMap.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    if (sumMap.has(prefixSum)) {
      max = Math.max(max, i - sumMap.get(prefixSum));
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

console.log(largestSubArray([1, -1, 3, 2, -2, -8, 1, 7, 10, 23]));
