function isPali(s: string, l: number, r: number) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

function partition(s: string): string[][] {
  const res: string[][] = [];
  const part: string[] = [];

  function dfs(i: number) {
    if (i >= s.length) return res.push([...part]);

    for (let j = i; j < s.length; j++) {
      if (isPali(s, i, j)) {
        part.push(s.substring(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  }

  dfs(0);

  return res;
}

console.log(partition('aab'));
