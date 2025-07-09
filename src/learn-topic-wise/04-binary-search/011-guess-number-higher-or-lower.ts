export const url =
  'https://leetcode.com/problems/guess-number-higher-or-lower/';

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
var guess = function (num) {
  const target = 10;
  if (num === target) {
    return 0;
  } else if (num > target) {
    return -1;
  } else {
    return 1;
  }
};

function guessNumber(n: number): number {
  let l = 1,
    r = n;

  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);

    const cur = guess(m);
    if (cur === 0) {
      return m;
    } else if (cur === -1) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
}
