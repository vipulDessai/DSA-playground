export const url =
  'https://leetcode.com/problems/maximum-number-of-removable-characters';

function maximumRemovals(s: string, p: string, removable: number[]): number {
  function feasible(m: number) {
    const remIndexSet = new Set(removable.slice(0, m));

    let curStr = '';
    for (let i = 0; i < s.length; ++i) {
      if (!remIndexSet.has(i)) {
        curStr += s[i];
      }
    }

    let j = 0;
    for (let i = 0; i < curStr.length; ++i) {
      if (curStr[i] === p[j]) {
        ++j;
      }
    }

    return j === p.length;
  }

  // corner case - where max is removable.length
  if (feasible(removable.length)) return removable.length;

  let l = 0,
    r = removable.length;
  while (l < r) {
    const m = Math.floor(l + (r - l) / 2);
    if (feasible(m)) {
      l = m + 1;
    } else {
      r = m;
    }
  }

  return l - 1;
}

var s = 'qlevcvgzfpryiqlwy',
  p = 'qlecfqlw',
  r = [12, 5];
var out = maximumRemovals(s, p, r);

console.log(out);
