function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;

  function dfs(board: string[][], r: number, c: number, i: number) {
    if (i === word.length) return true;

    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i])
      return false;

    const letter = board[r][c];
    board[r][c] = '*';

    const res =
      dfs(board, r + 1, c, i + 1) ||
      dfs(board, r - 1, c, i + 1) ||
      dfs(board, r, c + 1, i + 1) ||
      dfs(board, r, c - 1, i + 1);

    board[r][c] = letter;

    return res;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(board, i, j, 0)) return true;
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
    'ABCCS',
  ),
);
