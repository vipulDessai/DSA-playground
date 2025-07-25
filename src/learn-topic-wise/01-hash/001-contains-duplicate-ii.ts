export const url = 'https://leetcode.com/problems/contains-duplicate-ii/';

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const n = nums.length;

  const uSet = new Set();
  for (let i = 0; i < n; ++i) {
    if (i > k) {
      uSet.delete(nums[i - k - 1]);
    }

    const cur = nums[i];
    if (uSet.has(cur)) {
      return true;
    }

    uSet.add(cur);
  }

  return false;
}

var input = [1, 2, 3, 1],
  k = 3;
var out = containsNearbyDuplicate(input, k);

console.log(out);
