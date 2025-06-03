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

function longestPalindrome_dp(s: string): string {
  const n = s.length;
  if (n === 0) return '';

  // DP table initialization
  const dp: boolean[][] = Array.from({ length: n }, () => Array(n).fill(false));
  let start = 0,
    maxLength = 1;

  // Every single character is a palindrome
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // Check two-character palindromes
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // Check palindromes of length >= 3
  for (let length = 3; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      const j = i + length - 1; // Ending index
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = length;
      }
    }
  }

  return s.substring(start, start + maxLength);
}
