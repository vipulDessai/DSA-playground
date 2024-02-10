// https://leetcode.com/problems/longest-palindromic-substring/
function longestPalindrome(s: string): string {
  let left = 0,
    right = 0;

  function findPal(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      const currentLength = r - l + 1;
      if (currentLength > right - left + 1) {
        left = l;
        right = r;
      }

      --l;
      ++r;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // finding any odd palidromic string
    findPal(i, i);
    // finding any even palidromic string
    findPal(i, i + 1);
  }

  return s.substring(left, right + 1);
}
