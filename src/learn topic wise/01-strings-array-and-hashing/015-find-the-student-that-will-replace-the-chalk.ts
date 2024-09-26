function chalkReplacer(chalk: number[], k: number): number {
  const n = chalk.length;

  let pSum = 0;
  for (let i = 0; i < n; ++i) {
    pSum += chalk[i];
  }

  let lastItr = k % pSum;
  // finding mod is just equivalent of the following
  // const itrCount = Math.floor(k / pSum);
  // let lastItr = k - (pSum * itrCount);

  let i = 0;
  while (i < n) {
    lastItr -= chalk[i];
    if (lastItr < 0) {
      return i;
    }

    ++i;
  }

  return i;
}

console.log(chalkReplacer([3, 4, 1, 2], 25));
