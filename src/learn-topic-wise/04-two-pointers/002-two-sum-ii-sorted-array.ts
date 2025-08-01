function towSumSortedArray(numberList: number[], target: number): number[] {
  let l = 0,
    r = numberList.length - 1;
  while (l < r) {
    const sum = numberList[l] + numberList[r];
    if (sum > target) {
      --r;
    } else if (sum < target) {
      ++l;
    } else {
      return [l + 1, r + 1];
    }
  }

  return [];
}

console.log(towSumSortedArray([-1, 0], -1));
