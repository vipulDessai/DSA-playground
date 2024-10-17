// https://leetcode.com/problems/rank-transform-of-an-array/description/


function arrayRankTransform(arr: number[]): number[] {
  let n = arr.length;
  const arrMap = Array.from(arr, (elem, i) => [elem, i]);
  arrMap.sort((a, b) => a[0] - b[0]);

  const res = new Array(n);
  for (let i = 0; i < n; ++i) {
    const [val, ind] = arrMap[i];
    res[ind] = i + 1;
  }

  return res;
}

var inArr = [40, 10, 20, 30];
console.log(arrayRankTransform(inArr));

export const trickToCreateJsModule = '';
