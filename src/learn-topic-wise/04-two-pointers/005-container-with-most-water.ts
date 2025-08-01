export const url =
  '[Container With Most Water](https://leetcode.com/problems/container-with-most-water/)';

function maxArea(height: number[]): number {
  const n = height.length;

  let l = 0,
    r = n - 1,
    res = 0;
  while (l < r) {
    res = Math.max(res, Math.min(height[l], height[r]) * (r - l));

    if (height[l] < height[r]) {
      ++l;
    } else {
      --r;
    }
  }

  return res;
}

var input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var out = maxArea(input);

console.log(out);
