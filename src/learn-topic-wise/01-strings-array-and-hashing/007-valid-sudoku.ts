type DictionaryType<T extends string | number> = {
  [key in T]: string[];
};

function validSudoku(board: string[][]) {
  const cols: DictionaryType<number> = {};
  const rows: DictionaryType<number> = {};
  const squares: DictionaryType<string> = {};

  for (let index = 0; index < 9; index++) {
    cols[index] = [];
    rows[index] = [];
  }

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      squares[`${r}${c}`] = [];
    }
  }

  for (let r = 0; r < 9; r++) {
    const boardRow = board[r];

    for (let c = 0; c < 9; c++) {
      const boardElement = boardRow[c];
      const roundedKeyForSquareDictionary = `${Math.floor(r / 3)}${Math.floor(
        c / 3,
      )}`;
      if (boardElement == '.') {
        continue;
      } else if (
        rows[r].includes(boardElement) ||
        cols[c].includes(boardElement) ||
        squares[roundedKeyForSquareDictionary].includes(boardElement)
      ) {
        return false;
      } else {
        rows[r].push(boardElement);
        cols[c].push(boardElement);
        squares[roundedKeyForSquareDictionary].push(boardElement);
      }
    }
  }

  return true;
}

console.log(
  validSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);

console.log(
  validSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
);
