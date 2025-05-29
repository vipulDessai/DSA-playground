function leastBricks(wall: number[][]): number {
  const m = new Map<number, number>();
  let max = 0;

  for (let i = 0; i < wall.length; i++) {
    const row = wall[i];
    let pSum = 0;
    for (let j = 0; j < row.length - 1; j++) {
      pSum += row[j];

      let cur = m.get(pSum) || 0;
      m.set(pSum, ++cur);
      max = Math.max(max, cur);
    }
  }

  return wall.length - max;
}
