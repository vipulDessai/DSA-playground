export const url =
  '[binary subarrays with sum](https://leetcode.com/problems/binary-subarrays-with-sum/)';

function numSubarraysWithSum(nums: number[], goal: number): number {
  const pMap = new Map();
  pMap.set(0, 1);

  let sum = 0,
    res = 0;
  for (const num of nums) {
    sum += num;

    const c = pMap.get(sum - goal);
    if (typeof c === 'number') {
      res += c;
    }

    pMap.set(sum, (pMap.get(sum) || 0) + 1);
  }

  return res;
}

var input = [1, 0, 1, 0, 1],
  g = 2;
var o = numSubarraysWithSum(input, g);
console.log(o);
