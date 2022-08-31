function subsetsWithDup(nums: number[]): number[][] {
  let res: number[][] = [];
  nums.sort((a, b) => a - b);

  function backtrack(i: number, subset: number[]) {
    if (i === nums.length) {
      return res.push([...subset]);
    }

    // all subsets that include nums[i]
    subset.push(nums[i]);
    backtrack(i + 1, subset);
    subset.pop();

    // // all subsets that dont include nums[i]
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }

    backtrack(i + 1, subset);
  }

  backtrack(0, []);

  return res;
}

console.log(subsetsWithDup([1, 2, 2]));
