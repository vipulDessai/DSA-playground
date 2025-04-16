/** Problem - https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * find a smallest ship (with capacity which is the output) that can ship
 * all the input "weights" within given input "days"
 */
function shipWithinDays(weights: number[], days: number): number {
  // check if this much `capacity` is possible
  // within this many `days`
  function feasible(capacity: number) {
    let curDays = 1;
    let total = 0;

    for (const w of weights) {
      total += w;
      if (total > capacity) {
        total = w;
        ++curDays;

        if (curDays > days) return false;
      }
    }

    return true;
  }

  let l = Math.max(...weights);
  let r = weights.reduce((acc, cur) => acc + cur, 0);
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);

    if (feasible(m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;
}

var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var days = 5;

shipWithinDays(input, days);

export const tmp = '';
