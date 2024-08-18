// top down - memoisation
function fibonacci_top_down_memoisation(num: number) {
  const dp = {};
  function dfs(n: number) {
    if (dp[n]) return dp[n];

    if (n <= 1) {
      dp[n] = n;
    } else {
      dp[n] = dfs(n - 1) + dfs(n - 2);
    }

    return dp[n];
  }

  const res = dfs(num);
  return res;
}

console.log(fibonacci_top_down_memoisation(10));

// bottom up - tabulation
function fibonacci_bottom_up_tabulation(n: number) {
  const dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(fibonacci_bottom_up_tabulation(10));
