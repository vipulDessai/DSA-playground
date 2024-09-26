function numIslands(grid: string[][]): number {
  if (grid.length === 0) return 0;

  let rows = grid.length;
  let cols = grid[0].length;

  let visit = new Set<string>();
  let islands = 0;

  // matrix to check up, down, left and right
  let directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  function bfs(r: number, c: number) {
    const queue: number[][] = [[r, c]];
    visit.add(String([r, c]));

    while (queue.length) {
      const qLen = queue.length;
      for (let i = 0; i < qLen; i++) {
        const node = queue.shift();
        let [row, col] = <[number, number]>node;

        for (const key in directions) {
          if (Object.prototype.hasOwnProperty.call(directions, key)) {
            const [dr, dc] = directions[key];
            const sideRow = row + dr;
            const sideCol = col + dc;
            if (
              sideRow < rows &&
              sideRow >= 0 &&
              sideCol < cols &&
              sideCol >= 0 &&
              grid[sideRow][sideCol] === '1' &&
              !visit.has(String([sideRow, sideCol]))
            ) {
              queue.push([sideRow, sideCol]);
              visit.add(String([sideRow, sideCol]));
            }
          }
        }
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1' && !visit.has(String([r, c]))) {
        bfs(r, c);
        islands += 1;
      }
    }
  }

  return islands;
}

console.log(
  numIslands([
    ['1', '1', '1', '0'],
    ['1', '1', '0', '0'],
    ['1', '1', '0', '0'],
    ['0', '0', '0', '1'],
  ]),
);
