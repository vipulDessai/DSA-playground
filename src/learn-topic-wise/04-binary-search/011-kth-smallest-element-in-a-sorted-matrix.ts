export const url =
  '[Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)';

function kthSmallest(matrix: number[][], k: number): number {
  const n = matrix.length;

  function feasible(mid: number): boolean {
    let count = 0;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) {
      if (matrix[row][col] <= mid) {
        count += row + 1;
        col++;
      } else {
        row--;
      }
    }

    return count >= k;
  }

  let l = matrix[0][0];
  let r = matrix[n - 1][n - 1];

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

var matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
var k = 8;

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
k = 9;

var out = kthSmallest(matrix, k);

console.log(out);
