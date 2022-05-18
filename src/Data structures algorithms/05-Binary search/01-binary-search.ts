function search(nums: number[], target: number): number {
  let l = 0,
    r = nums.length - 1;

  // its less than or equal to because the
  // array could be of length 1
  // so the mid (m) should be calculated properly
  while (l <= r) {
    const m = ((l + r) - ((l + r) % 2)) / 2;
    const mVal = nums[m];
    if (mVal === target) return m;
    if (mVal > target) {
      r = m - 1;
      continue;
    }

    l = m + 1;
  }

  return -1;
}
