// https://leetcode.com/problems/xor-queries-of-a-subarray 🚀
function xorQueries(arr: number[], queries: number[][]): number[] {
  const n = arr.length;
  let pre = new Array(n);

  pre[0] = arr[0];
  for (let i = 1; i < n; ++i) {
    pre[i] = pre[i - 1] ^ arr[i];
  }

  const res: number[] = [];
  for (let [sInd, eInd] of queries) {
    if (sInd === 0) {
      res.push(0 ^ pre[eInd]);
    } else {
      res.push(pre[sInd - 1] ^ pre[eInd]);
    }
  }
  return res;
}

let inArr = [1, 3, 4, 8],
  inQueries = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3],
  ];
console.log(xorQueries(inArr, inQueries));
