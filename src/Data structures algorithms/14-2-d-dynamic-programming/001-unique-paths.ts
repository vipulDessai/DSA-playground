function uniquePaths(m: number, n: number): number {
  let resultingRow = Array(n).fill(1);

  for (let i = 0; i < m - 1; i++) {
    const currentRow = Array(n).fill(1);
    // coz the last resultingRow is always 1
    for (let j = n - 2; j >= 0; j--) {
      currentRow[j] = currentRow[j + 1] + resultingRow[j];
    }

    resultingRow = currentRow;
  }

  return resultingRow[0];
}

uniquePaths(7, 8);
