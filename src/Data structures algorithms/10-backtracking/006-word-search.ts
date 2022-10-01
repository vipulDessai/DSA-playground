function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const path = new Set();

  function dfs(r: number, c: number, i: number) {
    if (i === word.length) return true;

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      board[r][c] !== word[i] ||
      path.has(JSON.stringify([r, c]))
    )
      return false;

    path.add(JSON.stringify([r, c]));
    const res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    path.delete(JSON.stringify([r, c]));

    return res;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABD',
  ),
);
