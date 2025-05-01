// https://leetcode.com/problems/longest-happy-string/description/

import { MaxHeap_FullSortWithBinarySearch } from './001-max-heap';

function longestDiverseString(a: number, b: number, c: number): string {
  const mH = new MaxHeap_FullSortWithBinarySearch<{ [key: string]: number }>(
    (index: number) => {
      return mH.sortedDsc[index];
    },
  );
  mH.push({ c });
  mH.push({ a });
  mH.push({ b });

  return '';
}

var a = 1,
  b = 1,
  c = 7;
const res = longestDiverseString(a, b, c);
console.log(res);

export const trickToCreateJsModule = '';
