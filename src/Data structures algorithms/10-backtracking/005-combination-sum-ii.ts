function combinationSum2(candidates: number[], target: number): number[][] {
  const res: number[][] = [];

  candidates.sort((a, b) => a - b);

  function dfs(cur: number[], i: number, total: number) {
    if (total === target) {
      return res.push([...cur]);
    }

    if (total > target) {
      return;
    }

    let prev = -1;
    for (let j = i; j < candidates.length; j++) {
      const candidate = candidates[j];

      if (candidate === prev) {
        continue;
      }

      cur.push(candidate);
      dfs(cur, j + 1, total + candidate);
      cur.pop();

      prev = candidate;
    }
  }

  dfs([], 0, 0);

  return res;
}

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([1, 1, 2, 5], 8));
