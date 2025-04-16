// Do NOT use Math.floor(x ** 0.5);
// coz it beats 100% on leetcode 🤣
// instead use binary search
function mySqrt(x: number): number {
  let l = 0;
  let r = x;

  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);

    if (m * m <= x) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l - 1;
}

mySqrt(8);
