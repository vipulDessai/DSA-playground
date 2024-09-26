/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[c]] = [nums[c], nums[i]];
      c++;
    }
  }
}

const nums = [0, 1, 0, 0, 0, 6, 3, 12];
moveZeroes(nums);
console.log(nums);
