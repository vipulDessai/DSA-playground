// [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

function subarraySum(nums: number[], k: number): number {
  const pMap = new Map<number, number>();

  pMap.set(0, 1);

  let prefixSum = 0,
    count = 0;

  for (const num of nums) {
    prefixSum += num;

    const cur = pMap.get(prefixSum - k);
    if (typeof cur === 'number') {
      count += cur;
    }

    pMap.set(prefixSum, (pMap.get(prefixSum) || 0) + 1);
  }

  return count;
}

export const foo = "bar";