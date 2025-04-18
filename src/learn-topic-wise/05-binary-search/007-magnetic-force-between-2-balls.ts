function maxDistance(position: number[], m: number): number {
  function feasible(capacity: number) {
    // Place the first ball at the first position.
    let prevBallPos = position[0];
    let ballsPlaced = 1;

    // Iterate on each 'position' and place a ball there if we can place it.
    for (let i = 1; i < position.length && ballsPlaced < m; ++i) {
      const currPos = position[i];
      // Check if we can place the ball at the current position.
      if (currPos - prevBallPos >= capacity) {
        ballsPlaced += 1;
        prevBallPos = currPos;
      }
    }
    // If all 'm' balls are placed, return 'true'.
    return ballsPlaced == m;
  }

  position = position.sort((a, b) => a - b);
  let l = 1;

  const maxPosition = position[position.length - 1];
  let r = Math.ceil(maxPosition / (m - 1));

  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (feasible(m)) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l - 1;
}

console.log(maxDistance([1, 2, 3, 4, 5, 100], 3));
