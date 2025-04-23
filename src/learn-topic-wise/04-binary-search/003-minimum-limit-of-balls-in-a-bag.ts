function minimumSize(nums: number[], maxOperations: number): number {
  function isFeasible(mid: number) {
    let curOps = 0;
    for (let i = 0; i < nums.length; i++) {
      curOps += (nums[i] - 1) / mid;

      if (curOps > maxOperations) {
        return false;
      }
    }

    return true;
  }

  let l = 1;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }
  let r = max;

  while (l <= r) {
    const mid = (l + r) / 2;
    if (isFeasible(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

var inArr = [9];
var maxOps = 2;

console.log(minimumSize(inArr, maxOps));

export const trickToCreateJsModule = '';
