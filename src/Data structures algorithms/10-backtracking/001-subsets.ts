function subsets(nums: number[]): number[][] {
  const res: number[][] = [];

  function dfs(i: number, cur: number[]) {
    if (i >= nums.length) {
      res.push([...cur]);
      return;
    }

    // decision to include nums[i]
    cur.push(nums[i]);
    dfs(i + 1, cur);

    // decision NOT to include nums[i]
    cur.pop();
    dfs(i + 1, cur);
  }

  dfs(0, []);

  return res;
}

console.log(subsets([1, 2, 3]));
