function minWindow(s: string, t: string): string {
  const tMap = new Map();
  for (const c of t) {
    const cCount = tMap.get(c);
    if (typeof cCount === 'number') {
      tMap.set(c, cCount + 1);
    } else {
      tMap.set(c, 1);
    }
  }

  const n = s.length;
  let l = 0,
    r = 0,
    matched = 0,
    minLen = Infinity,
    startInd = 0;

  while (r < n) {
    const rightC = s[r];

    const curRightCount = tMap.get(rightC);
    if (typeof curRightCount === 'number') {
      if (curRightCount - 1 === 0) {
        ++matched;
      }

      tMap.set(rightC, curRightCount - 1);
    }

    while (l <= r && matched === tMap.size) {
      if (r - l + 1 < minLen) {
        startInd = l;
        minLen = r - l + 1;
      }

      const leftC = s[l];

      const curLeftCount = tMap.get(leftC);
      if (typeof curLeftCount === 'number') {
        if (curLeftCount === 0) {
          --matched;
        }

        tMap.set(leftC, curLeftCount + 1);
      }

      ++l;
    }

    ++r;
  }

  if (minLen != Infinity) {
    return s.substring(startInd, startInd + minLen);
  } else {
    return '';
  }
}

minWindow('ADOBECODEBANC', 'ABC'); // Output: "BANC"
// minWindow('a', 'a'); // Output: "a"
// minWindow('a', 'aa'); // Output: ""
