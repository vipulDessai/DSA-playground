export const foo = 'bar';

function processWords(wordList: string[]): Map<string, string[]> {
  const n = wordList.length;

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

function findLadders(
  beginWord: string,
  endWord: string,
  wordList: string[],
): string[][] {
  const map = processWords(wordList);

  // TODO: need to use bidirectional BFS
  const q = [beginWord],
    visited = new Set<string>(),
    res: string[][] = [];
  visited.add(beginWord);

  let maxLen = 1;
  while (q.length > 0) {
    const qLen = q.length;

    for (let i = 0; i < qLen; ++i) {
      const curWord = q.shift()!;

      for (let j = 0; j < curWord.length; ++j) {
        const pattern =
          curWord.substring(0, j) + '*' + curWord.substring(j + 1);

        const pList = map.get(pattern) || [];
        for (let k = 0; k < pList.length; ++k) {
          const word = pList[k];

          if (word === endWord) {
            // use the DFS to find the string array path
            ++maxLen;
          }

          if (!visited.has(word)) {
            q.push(word);
            visited.add(word);
          }
        }
      }
    }

    ++maxLen;
  }

  return res;
}
