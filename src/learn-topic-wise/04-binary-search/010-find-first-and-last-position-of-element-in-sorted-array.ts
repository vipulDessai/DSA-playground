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
    let left = 0,
      right = nums.length - 1;
    let bound = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return bound;
  }

  return [findBound(true), findBound(false)];
}
