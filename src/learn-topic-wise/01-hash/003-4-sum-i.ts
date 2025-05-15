function threeSum(
  nums: number[],
  start: number,
  target: number,
  res: Set<string>,
) {
  const n = nums.length;

  for (let j = start + 1; j < nums.length; ++j) {
    let l = j + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[start] + nums[j] + nums[l] + nums[r];

      if (sum < target) {
        ++l;
      } else if (sum > target) {
        --r;
      } else {
        res.add(JSON.stringify([nums[start], nums[j], nums[l], nums[r]]));
        ++l;
        --r;
      }
    }
  }
}

function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const res = new Set<string>();
  for (let i = 0; i < n; ++i) {
    threeSum(nums, i, target, res);
  }

  return Array.from(res).map((r) => JSON.parse(r));
}
