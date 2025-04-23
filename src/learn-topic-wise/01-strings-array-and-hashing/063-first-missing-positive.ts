function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  let count = n + 1;
  for (let i = 0; i < n; ++i) {
    if (nums[i] <= 0) {
      nums[i] = count++;
    }
  }

  for (let i = 0; i < n; ++i) {
    const cur = Math.abs(nums[i]) - 1;
    if (cur < n && nums[cur] > 0) {
      nums[cur] *= -1;
    }
  }

  for (let i = 0; i < n; ++i) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;
}
