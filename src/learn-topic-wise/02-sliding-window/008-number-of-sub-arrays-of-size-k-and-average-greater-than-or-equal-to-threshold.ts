export const url =
  '[Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/)';

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  const n = arr.length;
  let l = 0,
    r = 0,
    res = 0,
    sum = 0;

  while (r < k) {
    sum += arr[r];

    ++r;
  }
  --r;

  while (r < n) {
    if (sum / k >= threshold) {
      ++res;
    }

    sum -= arr[l];
    ++l;
    ++r;
    sum += arr[r];
  }

  return res;
}

var input = [2, 2, 2, 2, 5, 5, 5, 8],
  k = 3,
  t = 4;
var out = numOfSubarrays(input, k, t);

console.log(out);
