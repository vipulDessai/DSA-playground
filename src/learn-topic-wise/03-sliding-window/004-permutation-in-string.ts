export const url =
  '[Permutation in string](https://leetcode.com/problems/permutation-in-string/description/)';

function checkInclusion(s1: string, s2: string): boolean {
  function isEqual(m1: number[], m2: number[]) {
    for (let i = 0; i < m1.length; ++i) {
      if (m1[i] !== m2[i]) {
        return false;
      }
    }

    return true;
  }

  const s1Map = Array(26).fill(0);
  const s2Map = Array(26).fill(0);

  let l = 0,
    r = 0;
  while (r < s1.length) {
    s1Map[s1.charCodeAt(r) - 'a'.charCodeAt(0)] += 1;
    s2Map[s2.charCodeAt(r) - 'a'.charCodeAt(0)] += 1;

    ++r;
  }

  --r;

  while (r < s2.length) {
    if (isEqual(s1Map, s2Map)) {
      return true;
    }

    s2Map[s2.charCodeAt(l) - 'a'.charCodeAt(0)] -= 1;
    ++l;

    ++r;
    s2Map[s2.charCodeAt(r) - 'a'.charCodeAt(0)] += 1;
  }

  return false;
}

var s1 = 'ab',
  s2 = 'eidbaooo';
var out = checkInclusion(s1, s2);

console.log(out);
