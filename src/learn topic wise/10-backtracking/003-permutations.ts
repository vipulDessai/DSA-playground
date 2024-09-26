function permute(nums: number[]): number[][] {
  let res: number[][] = [];

  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let i = 0; i < nums.length; i++) {
    const n = <number>nums.shift();

    const perms = permute(nums);
    for (const key in perms) {
      if (Object.prototype.hasOwnProperty.call(perms, key)) {
        perms[key].push(n);
      }
    }

    res = [...res, ...perms];

    nums.push(n);
  }

  return res;
}

console.log(permute([1, 2, 3]));
