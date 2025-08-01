/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let l = 0,
    curr = 0,
    r = nums.length - 1;

  while (curr <= r) {
    if (nums[curr] === 0) {
      [nums[curr], nums[l]] = [nums[l], nums[curr]];

      ++l;
      ++curr;
    } else if (nums[curr] === 1) {
      ++curr;
    } else {
      [nums[curr], nums[r]] = [nums[r], nums[curr]];

      --r;
    }
  }
}
