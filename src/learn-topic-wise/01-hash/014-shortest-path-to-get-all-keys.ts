// https://leetcode.com/problems/shortest-path-to-get-all-keys/
function shortestPathAllKeys(grid: string[]): number {
  if (grid.length === 0) return 0;

  const rLen = grid.length;
  const cLen = grid[0].length;

  let keyCount = 0;
  let startPos: [number, number] = [0, 0];
  for (let i = 0; i < rLen; i++) {
    for (let j = 0; j < cLen; j++) {
      const cur = grid[i][j];
      if (cur === '@') {
        startPos = [i, j];
      }

      if (cur.charAt(0) >= 'a'.charAt(0) && cur.charAt(0) <= 'z'.charAt(0)) {
        ++keyCount;
      }
    }
  }

  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  const lockKeySet = new Set();
  const visited = new Set<string>();
  function dfs(r: number, c: number, pathLength: number, curKeyCount: number) {
    const cur = grid[r][c];

    visited.add(`${r}${c}`);

    if (
      cur.charAt(0) >= 'A'.charAt(0) &&
      cur.charAt(0) <= 'Z'.charAt(0) &&
      !lockKeySet.has(cur)
    ) {
      return Infinity;
    }

    let keyFound = false;
    if (cur.charAt(0) >= 'a'.charAt(0) && cur.charAt(0) <= 'z'.charAt(0)) {
      ++curKeyCount;
      lockKeySet.add(cur.toUpperCase());
      keyFound = true;
    }

    if (curKeyCount === keyCount) {
      return pathLength;
    }

    let minPathLen = Infinity;
    for (let i = 0; i < directions.length; i++) {
      const [dr, dc] = directions[i];
      const nR = r + dr;
      const nC = c + dc;

      if (
        nR >= 0 &&
        nR < rLen &&
        nC >= 0 &&
        nC < cLen &&
        grid[nR][nC] !== '#' &&
        !visited.has(`${nR}${nC}`)
      ) {
        minPathLen = Math.min(
          minPathLen,
          dfs(nR, nC, pathLength + 1, curKeyCount),
        );
      }
    }

    if (minPathLen === Infinity) {
      if (keyFound) {
        return pathLength;
      }

      return Infinity;
    } else {
      return minPathLen;
    }
  }

  return dfs(...startPos, 0, 0);
}

console.log(shortestPathAllKeys(['@..aA', '...#B', '....b']));
