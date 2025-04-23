function twoSum(numbers: number[], target: number): number[] {
  const n = numbers.length;

  let l = 0,
    r = n - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      ++l;
    } else {
      --r;
    }
  }

  return [];
}
