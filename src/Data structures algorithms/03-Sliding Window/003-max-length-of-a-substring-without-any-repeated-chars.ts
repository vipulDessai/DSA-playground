// Q 1. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

function LongestSubStr(inStr) {
  const n = inStr.length;
  let res = 0;

  const mem = {
    [inStr[0]]: 1,
  };
  let l = 0;
  let r = 1;
  while (r < n) {
    const curR = inStr[r];

    if (mem[curR]) {
      mem[curR]++;
    } else {
      mem[curR] = 0;
    }

    const curL = inStr[l];
    while (mem[curL]) {
      if (mem[curL] > 0) {
        --mem[curL];
      } else {
        delete mem[curL];
      }

      l++;
    }

    res = Math.max(res, l - r);

    ++r;
  }

  return res;
}

console.log(LongestSubStr('abcabcbb'));
