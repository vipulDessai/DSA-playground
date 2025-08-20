export const url =
  '[Fruits into baskets](https://leetcode.com/problems/fruit-into-baskets/description/)';

function totalFruit_pure_tp(fruits: number[]): number {
  const n = fruits.length;

  if (n === 1 || n === 2) {
    return n;
  }

  let l = 0,
    r = 1;

  let b1 = fruits[0];
  // handles cases like [3, 3, 3, 3, 3, 3] and [3, 3, 1]
  while (fruits[r] == b1 && r < n - 1) {
    ++r;
  }
  let b2 = fruits[r];
  let res = r - l + 1;
  ++r;
  while (r < n) {
    const cur = fruits[r];
    if (cur === b1 || cur === b2) {
      res = Math.max(res, r - l + 1);
    } else {
      b2 = cur;

      l = r - 1;
      b1 = fruits[l];

      // handles case like [0, 1, 6, 6, 4, 4, 6]
      // i.e. find the first occurence of b1
      while (fruits[l] == b1) {
        --l;
      }
      // why increment? coz the l index is decremented
      // to a item that is before the b1 so restore it
      ++l;
    }

    ++r;
  }

  return res;
}

// var input = [3, 3, 3, 3, 3, 3];
// input = [1, 2, 1];
// input = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
// input = [0, 1, 6, 6, 4, 4, 6];
// var out = totalFruit_pure_tp(input);

// console.log(out);

// TODO - understand the MAP solution as well
function totalFruit_tp_map(fruits: number[]): number {
  let left = 0;
  let maxFruits = 0;
  const count = new Map<number, number>();

  for (let right = 0; right < fruits.length; right++) {
    const fruit = fruits[right];
    count.set(fruit, (count.get(fruit) || 0) + 1);

    while (count.size > 2) {
      const leftFruit = fruits[left];
      count.set(leftFruit, count.get(leftFruit)! - 1);
      if (count.get(leftFruit) === 0) count.delete(leftFruit);
      left++;
    }

    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
}

var input = [3, 3, 3, 3, 3, 3];
input = [1, 2, 1];
input = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
input = [0, 1, 6, 6, 4, 4, 6];
var out = totalFruit_tp_map(input);

console.log(out);
