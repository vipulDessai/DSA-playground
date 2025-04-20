function feasible(nums: number[], maxOperations: number, curMaxBalls: number) {
  let total = 0;

  for (const num of nums) {
    total += Math.ceil(num / curMaxBalls) - 1;

    if (total > maxOperations) {
      return false;
    }
  }

  return true;
}

function minimumSize(nums: number[], maxOperations: number): number {
  const n = nums.length;
  let l = 1;
  let r = Math.max(...nums);

  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (feasible(nums, maxOperations, m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}

export const moduleHack = '';
