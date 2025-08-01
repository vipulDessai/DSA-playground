export const url =
  'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/';

function searchRange_my_own(nums: number[], target: number): number[] {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);

    if (nums[m] === target) {
      let s = m - 1;
      while (nums[s] === target) {
        --s;
      }

      let e = m + 1;
      while (nums[e] === target) {
        ++e;
      }

      return [s + 1, e - 1];
    }

    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return [-1, -1];
}

function searchRange_pure_binary_search(
  nums: number[],
  target: number,
): number[] {
  function findBound(isFirst: boolean): number {
    let l = 0,
      r = nums.length - 1,
      bound = -1;

    while (l <= r) {
      const m = Math.floor(l + (r - l) / 2);
      if (nums[m] === target) {
        bound = m;
        if (isFirst) {
          r = m - 1;
        } else {
          l = m + 1;
        }
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }

    return bound;
  }

  return [findBound(true), findBound(false)];
}

console.log(searchRange_pure_binary_search([5, 7, 7, 8, 8, 10], 8));
