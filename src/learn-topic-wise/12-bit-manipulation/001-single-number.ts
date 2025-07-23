function singleNumber(nums: number[]): number {
  let res = 0; // because n ^ 0 = n

  for (const n in nums) {
    if (Object.prototype.hasOwnProperty.call(nums, n)) {
      res = nums[n] ^ res;
    }
  }

  return res;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
