// https://leetcode.com/problems/largest-number/solutions/864518/javascript-typescript-solution/
function largestNumber(nums: number[]): string {
  const res = nums
    .map(String)
    .sort((a, b) => (a.concat(b) > b.concat(a) ? -1 : 1))
    .join('');

  return res.charAt(0) === '0' ? '0' : res;
}
