function jump(nums: number[]): number {
  let res: number, l: number, r: number;
  res = l = r = 0;

  while (r < nums.length - 1) {
    let farthest = 0;

    for (let i = l; i < r + 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }

    l = r + 1;
    r = farthest;
    res++;
  }

  return res;
}
