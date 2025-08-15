export const url =
  '[Search Insert Position](https://leetcode.com/problems/search-insert-position/)';

function searchInsert(nums: number[], target: number): number {
  let l = 0,
    r = nums.length;

  // its less than or equal to because the
  // array could be of length 1
  // so the mid (m) should be calculated properly
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);

    if (nums[m] >= target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}

var input = [1, 3, 5, 6],
  t = 5;
var out = searchInsert(input, t);

console.log(out);
