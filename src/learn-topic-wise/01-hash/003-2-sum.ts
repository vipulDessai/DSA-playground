export const url =
  '[2 Sum](https://leetcode.com/problems/two-sum/description/)';

function twoSum_hash(nums: number[], target: number): number[] | false {
  const n = nums.length;
  const prevMap = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    const diff = target - nums[i];
    const diffExistInHashMap = prevMap.get(diff);
    if (diffExistInHashMap) {
      return [diffExistInHashMap, i];
    } else {
      prevMap.set(nums[i], i);
    }
  }

  return false;
}

console.log(twoSum_hash([2, 1, 5, 3], 4));
