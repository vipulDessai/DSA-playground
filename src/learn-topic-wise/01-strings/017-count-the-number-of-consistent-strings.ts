// https://leetcode.com/problems/count-the-number-of-consistent-strings/?envType=daily-question&envId=2024-09-12
function countConsistentStrings(allowed: string, words: string[]): number {
  let n = words.length;

  let allowedLetters: number[] = [];
  allowedLetters.fill(0, 0, 25);

  for (let i = 0; i < allowed.length; ++i) {
    const j = allowed.charCodeAt(i) - 'a'.charCodeAt(0);
    allowedLetters[j] = 1;
  }

  let res = 0;
  for (let i = 0; i < n; ++i) {
    const word = words[i];

    let allowed = true;
    for (let j = 0; j < word.length; ++j) {
      const k = word.charCodeAt(j) - 'a'.charCodeAt(0);

      if (!allowedLetters[k]) {
        allowed = false;
        break;
      }
    }

    if (allowed) {
      ++res;
    }
  }
  return res;
}

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab']));
