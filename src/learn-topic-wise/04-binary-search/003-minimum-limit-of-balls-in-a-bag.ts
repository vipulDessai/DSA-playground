// https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/description/
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
  // if we had infinite operation then the minimum penalty would have been
  // 1, coz each ball would have been in a seperate bag
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

console.log(minimumSize([3, 3, 6], 2));

export const moduleHack = '';
