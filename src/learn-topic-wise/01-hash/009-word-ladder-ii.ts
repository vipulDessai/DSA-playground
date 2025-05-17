export const foo = 'bar';

// https://leetcode.com/problems/word-ladder-ii/description/
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

function findLadders_my_solution(
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

class WordLadderII {
  private wordSet: Set<string>;
  private graph: Map<string, string[]> = new Map();

  constructor(
    private beginWord: string,
    private endWord: string,
    wordList: string[],
  ) {
    this.wordSet = new Set(wordList);
  }

  public createAdjList(beginWord: string, wordList: string[]) {
    wordList.unshift(beginWord);
    const words = new Set([...wordList]);

    const adjList = new Map<string, string[]>();
    for (const word of wordList) {
      adjList.set(word, []);

      for (let i = 0; i < word.length; i++) {
        for (const c of 'abcdefghijklmnopqrstuvwxyz') {
          const pattern = word.substring(0, i) + c + word.substring(i + 1);

          if (words.has(pattern) && word !== pattern) {
            adjList.get(word)!.push(pattern);
          }
        }
      }
    }

    return adjList;
  }

  public findLadders(): string[][] {
    if (!this.wordSet.has(this.endWord)) return [];

    if (!this.bfs()) return [];

    const results: string[][] = [];
    this.dfs(this.beginWord, [this.beginWord], results);
    return results;
  }

  private bfs(): boolean {
    let frontQueue: Set<string> = new Set([this.beginWord]);
    let backQueue: Set<string> = new Set([this.endWord]);
    let frontVisited: Set<string> = new Set([this.beginWord]);
    let backVisited: Set<string> = new Set([this.endWord]);
    let found = false;

    while (frontQueue.size && backQueue.size && !found) {
      if (frontQueue.size > backQueue.size) {
        [frontQueue, backQueue] = [backQueue, frontQueue];
        [frontVisited, backVisited] = [backVisited, frontVisited];
      }

      let nextLevel: Set<string> = new Set();
      for (let word of frontQueue) {
        for (let i = 0; i < word.length; i++) {
          for (let c of 'abcdefghijklmnopqrstuvwxyz') {
            let newWord = word.slice(0, i) + c + word.slice(i + 1);
            if (backVisited.has(newWord)) {
              found = true;
            }
            if (this.wordSet.has(newWord) && !frontVisited.has(newWord)) {
              nextLevel.add(newWord);
              frontVisited.add(newWord);
              if (!this.graph.has(word)) this.graph.set(word, []);
              this.graph.get(word)!.push(newWord);
            }
          }
        }
      }
      frontQueue = nextLevel;
    }
    return found;
  }

  private dfs(word: string, path: string[], results: string[][]): void {
    if (word === this.endWord) {
      results.push([...path]);
      return;
    }
    if (!this.graph.has(word)) return;

    for (const nextWord of this.graph.get(word)!) {
      path.push(nextWord);
      this.dfs(nextWord, path, results);
      path.pop();
    }
  }
}

// Example usage:
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
const ladder = new WordLadderII('hit', 'cog', wordList);
// console.log(ladder.findLadders()); // Output: [["hit","hot","dot","dog","cog"], ["hit","hot","lot","log","cog"]]

console.log(ladder.createAdjList('hit', wordList));
