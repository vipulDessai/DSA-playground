// https://leetcode.com/problems/sum-of-digits-of-string-after-convert
function getLucky(s: string, k: number): number {
  let numStr = '';
  for (let i = 0; i < s.length; ++i) {
    const c = s[i];
    numStr += c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  }

  while (k > 0) {
    let cur = 0;
    for (let i = 0; i < numStr.length; ++i) {
      const c = numStr[i];
      cur += parseInt(c);
    }
    numStr = cur.toString();
    --k;
  }

  return parseInt(numStr);
}

getLucky('iiii', 1);
