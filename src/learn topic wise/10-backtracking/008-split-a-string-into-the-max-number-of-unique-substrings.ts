function maxUniqueSplit(s: string): number {
  const set = new Set();
  function dfs(i: number) {
    if (i === s.length) {
      return 0;
    }

    let res = 0;
    for (let j = i + 1; j <= s.length; ++j) {
      let sub = s.substring(i, j);

      if (!set.has(sub)) {
        set.add(sub);
        res = Math.max(res, 1 + dfs(j));
        set.delete(sub);
      }
    }

    return res;
  }

  return dfs(0);
}
