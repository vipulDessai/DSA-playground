export const url =
  '[Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)';

function removeDuplicates(nums: number[]): number {
  let k = 0;

  let prev = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    const cur = nums[i];
    if (cur !== prev) {
      nums[k] = prev;
      ++k;
    }

    prev = cur;
  }

  nums[k] = prev;
  ++k;

  return k;
}

var input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var out = removeDuplicates(input);

console.log(out);
