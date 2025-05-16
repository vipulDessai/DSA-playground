export const foo = 'bar';

function processWords(wordList: string[]) {
  const map = new Map<string, string[]>();
  for (const word of wordList) {
    for (let i = 0; i < word.length; ++i) {
      const pattern = word.substring(0, i) + '*' + word.substring(i + 1);

      if (!map.has(pattern)) {
        map.set(pattern, []);
      }

      map.get(pattern)!.push(word);
    }
  }

  return map;
}

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const map = processWords(wordList);

  const q = [beginWord],
    visited = new Set<string>();
  let res = 1;

  visited.add(beginWord);

  while (q.length > 0) {
    const qLen = q.length;

    for (let i = 0; i < qLen; ++i) {
      const word = q.shift()!;

      for (let j = 0; j < word.length; ++j) {
        const pattern = word.substring(0, j) + '*' + word.substring(j + 1);

        const pList = map.get(pattern) || [];

        for (let k = 0; k < pList.length; ++k) {
          const childWord = pList[k];

          if (childWord === endWord) {
            return ++res;
          }

          if (!visited.has(childWord)) {
            q.push(childWord);
            visited.add(childWord);
          }
        }
      }
    }

    ++res;
  }

  return 0;
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
);
