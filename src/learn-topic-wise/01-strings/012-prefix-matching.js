const prefixMatcher = {
  // param A : array of strings
  // param B : string
  // return a array of integers
  solve: function (A, B) {
    let l = -1,
      r = -1;
    for (let i = 0; i < A.length; i++) {
      if (A[i].length >= B.length && checkPrefix(A[i], B)) {
        l = i;
        break;
      }
    }

    for (let i = A.length - 1; i >= 0; --i) {
      if (A[i].length >= B.length && checkPrefix(A[i], B)) {
        r = i;
        break;
      }
    }

    return [l, r];
  },
};

function checkPrefix(strA, strB) {
  let l = 0,
    r = strB.length - 1;
  while (l <= r && strA[l] === strB[l] && strA[r] === strB[r]) {
    l++;
    r--;
  }

  return l > r;
}

console.log(
  prefixMatcher.solve(['a', 'aa', 'aab', 'b', 'bb', 'bba', 'bbb'], 'bb'),
);
