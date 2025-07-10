export const url =
  '[Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)';

function findAnagrams(s: string, p: string): number[] {
  let l = 0,
    r = 0;

  const sMap = Array(26).fill(0);
  const pMap = Array(26).fill(0);
  while (r < p.length) {
    sMap[s.charCodeAt(r) - 'a'.charCodeAt(0)] += 1;
    pMap[p.charCodeAt(r) - 'a'.charCodeAt(0)] += 1;

    ++r;
  }

  // decrement r so that r stands on the last index of string 'p'
  // and NOT beyond it
  --r;

  const res: number[] = [];

  while (r < s.length) {
    // can do this also, which is little slower
    // if (sMap.join('') === pMap.join('')) {
    //   res.push(l);
    // }

    // or this is faster, slightly
    if (isEqual(sMap, pMap)) {
      res.push(l);
    }

    sMap[s.charCodeAt(l) - 'a'.charCodeAt(0)] -= 1;
    ++l;

    ++r;
    sMap[s.charCodeAt(r) - 'a'.charCodeAt(0)] += 1;
  }

  return res;
}

function isEqual(a: number[], b: number[]) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

var s = 'cbaebabacd',
  p = 'abc';
var s = 'cbac',
  p = 'abc';
var out = findAnagrams(s, p);

console.log(out);
