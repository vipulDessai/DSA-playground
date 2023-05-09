// for O(s + t), space O(s + t)
const checkValidAnagram = (s: string, t: string) => {
  if (s.length !== t.length) {
    return false;
  }

  const countS = {};
  const countT = {};

  for (let index = 0; index < s.length; index++) {
    countS[s[index]] = 1 + (countS[s[index]] || 0);
    countT[s[index]] = 1 + (countT[t[index]] || 0);
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) return false;
  }

  return true;
};

checkValidAnagram('foo', 'ofo');
checkValidAnagram('bar', 'zba');

const sortingCallback = (a: string, b: string) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();

  return aLower < bLower ? -1 : 1;
};
const checkValidAnagramSort = (s: string, t: string) => {
  const sortedS = [...s];
  const sortedT = [...t];

  return (
    sortedS.sort(sortingCallback).join() ===
    sortedT.sort(sortingCallback).join()
  );
};

console.log(checkValidAnagramSort('foo', 'ofo'));
