function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let t = 0;
  let b = rows - 1;
  while (t <= b) {
    const m = (t + b - ((t + b) % 2)) / 2;
    if (target > matrix[m][matrix[m].length - 1]) {
      t = m + 1;
    } else if (target < matrix[m][matrix[m].length - 1]) {
      b = m - 1;
    } else {
      break;
    }
  }

  // if the while loop ended
  if (!(t <= b)) {
    return false;
  }

  const filteredRowIndex = (t + b - ((t + b) % 2)) / 2;
  let l = 0,
    r = cols - 1;
  while (l <= r) {
    const m = (l + r - ((l + r) % 2)) / 2;
    const mVal = matrix[filteredRowIndex][m];
    if (target === mVal) return true;
    if (target > mVal) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3,
  ),
);
