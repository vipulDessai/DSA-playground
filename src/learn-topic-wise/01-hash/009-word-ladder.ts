function preprocessWordList(wordList: string[]): Record<string, string[]> {
  const patternDict: Record<string, string[]> = {};

  for (const word of wordList) {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.substring(0, i) + '*' + word.substring(i + 1);
      if (!patternDict[pattern]) {
        patternDict[pattern] = [];
      }
      patternDict[pattern].push(word);
    }
  }

  return patternDict;
}

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const preprocessedDict = preprocessWordList(wordList);

  return 0;
}

console.log(
  ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
);
