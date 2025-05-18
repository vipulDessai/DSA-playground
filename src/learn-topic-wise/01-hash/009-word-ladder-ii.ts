// https://leetcode.com/problems/word-ladder-ii/description/
// TLE at 33 - refer - https://leetcode.com/problems/word-ladder-ii/solutions/6319954/i-spent-3-hours-developing-this-fastest-approach-check-it-out-and-don-t-forget-to-drop-a-like/
export class WordLadderII_MySoln {
  wordSet: Set<string>;
  beginWord: string;
  endWord: string;
  graph: Map<string, string[]> = new Map();
  res: Set<string> = new Set();
  minLenRes: number = Infinity;
  adjList: Map<string, string[]> = new Map();

  constructor(_beginWord: string, _endWord: string, _wordList: string[]) {
    this.beginWord = _beginWord;
    this.endWord = _endWord;
    this.wordSet = new Set([_beginWord, ..._wordList]);

    this.createAdjList();
  }

  public findLadders() {
    if (!this.wordSet.has(this.endWord)) {
      return [];
    }

    this.bfs();

    return [...this.res].map((item) => JSON.parse(item));
  }

  private createAdjList() {
    for (const word of this.wordSet) {
      this.adjList.set(word, []);

      for (let i = 0; i < word.length; i++) {
        for (const c of 'abcdefghijklmnopqrstuvwxyz') {
          const pattern = word.substring(0, i) + c + word.substring(i + 1);

          if (this.wordSet.has(pattern) && word !== pattern) {
            this.adjList.get(word)!.push(pattern);
          }
        }
      }
    }
  }

  private bfs() {
    const qFront = [this.beginWord],
      frontVisited = new Set<string>(),
      frontGraph = new Map<string, string[]>();

    const qBack = [this.endWord],
      backVisited = new Set<string>([this.endWord]),
      backGraph = new Map<string, string[]>();

    while (qFront.length > 0 && qBack.length > 0) {
      // why set front queue visited after the next level is calculated
      // because if a pattern is set to be ignored while the next level is calculated
      // then few graph node that can lead to the same pattern will NOT be calculated
      //
      // similarly front queue visited cant be set while processing the next level
      // beacause if we dont process the entire next level batch
      // then while iterating over the next level, the earlier nodes will visit the
      // nodes which are part of the current level
      // ex. next level is [dog, log], while we process dog, if we do not know log is not
      // to be visited then dog graph will have cog and log
      // but instead its suppose to be dog -> cog and log -< cog
      for (const nextLvlWord of qFront) {
        frontVisited.add(nextLvlWord);
      }

      for (const nextLvlWord of qBack) {
        backVisited.add(nextLvlWord);
      }

      for (const nextLvlWord of qFront) {
        if (backVisited.has(nextLvlWord)) {
          this.initGraph(frontGraph, backGraph);

          this.dfs(this.beginWord, [this.beginWord]);

          return;
        }
      }

      // Just using a single BFS doesnt at all work
      // if (frontVisited.has(this.endWord)) {
      //   this.initGraph(frontGraph, backGraph);

      //   this.dfs(this.beginWord, [this.beginWord]);

      //   return;
      // }

      const qFLen = qFront.length;
      for (let i = 0; i < qFLen; ++i) {
        const word = qFront.shift()!;
        frontGraph.set(word, []);

        const nextLvlWords = this.adjList.get(word) || [];

        for (let j = 0; j < nextLvlWords.length; j++) {
          const nextWord = nextLvlWords[j];
          if (
            // below check is for checking the previous visited node
            // ex. while on hot, hot can lead to dot, lot, hit
            // but hit is already visited
            !frontVisited.has(nextWord)
          ) {
            if (!frontGraph.has(word)) {
              frontGraph.set(word, []);
            }

            frontGraph.get(word)!.push(nextWord);

            qFront.push(nextWord);
          }
        }
      }

      const qBLen = qBack.length;
      for (let i = 0; i < qBLen; ++i) {
        const word = qBack.shift()!;

        const nextLvlWords = this.adjList.get(word) || [];

        for (let j = 0; j < nextLvlWords.length; j++) {
          const nextWord = nextLvlWords[j];
          if (!backVisited.has(nextWord)) {
            if (!backGraph.has(nextWord)) {
              backGraph.set(nextWord, []);
            }

            backGraph.get(nextWord)!.push(word);

            qBack.push(nextWord);
          }
        }
      }
    }
  }

  private initGraph(
    _front: Map<string, string[]>,
    _back: Map<string, string[]>,
  ) {
    for (const [key, value] of _front) {
      this.graph.set(key, value);
    }

    for (const [key, value] of _back) {
      this.graph.set(key, value);
    }
  }

  private dfs(word: string, path: string[]) {
    if (word === this.endWord) {
      if (path.length < this.minLenRes) {
        this.res = new Set([JSON.stringify(path)]);
        this.minLenRes = path.length;
      } else if (path.length === this.minLenRes) {
        this.res.add(JSON.stringify(path));
      }

      return;
    }

    if (!this.graph.has(word)) return;

    for (const nextWord of this.graph.get(word)!) {
      path.push(nextWord);
      this.dfs(nextWord, path);
      path.pop();
    }
  }
}

// Example usage:
var wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
var b = 'hit',
  e = 'cog';

b = 'aaaaa';
e = 'ggggg';
wordList = [
  'aaaaa',
  'caaaa',
  'cbaaa',
  'daaaa',
  'dbaaa',
  'eaaaa',
  'ebaaa',
  'faaaa',
  'fbaaa',
  'gaaaa',
  'gbaaa',
  'haaaa',
  'hbaaa',
  'iaaaa',
  'ibaaa',
  'jaaaa',
  'jbaaa',
  'kaaaa',
  'kbaaa',
  'laaaa',
  'lbaaa',
  'maaaa',
  'mbaaa',
  'naaaa',
  'nbaaa',
  'oaaaa',
  'obaaa',
  'paaaa',
  'pbaaa',
  'bbaaa',
  'bbcaa',
  'bbcba',
  'bbdaa',
  'bbdba',
  'bbeaa',
  'bbeba',
  'bbfaa',
  'bbfba',
  'bbgaa',
  'bbgba',
  'bbhaa',
  'bbhba',
  'bbiaa',
  'bbiba',
  'bbjaa',
  'bbjba',
  'bbkaa',
  'bbkba',
  'bblaa',
  'bblba',
  'bbmaa',
  'bbmba',
  'bbnaa',
  'bbnba',
  'bboaa',
  'bboba',
  'bbpaa',
  'bbpba',
  'bbbba',
  'abbba',
  'acbba',
  'dbbba',
  'dcbba',
  'ebbba',
  'ecbba',
  'fbbba',
  'fcbba',
  'gbbba',
  'gcbba',
  'hbbba',
  'hcbba',
  'ibbba',
  'icbba',
  'jbbba',
  'jcbba',
  'kbbba',
  'kcbba',
  'lbbba',
  'lcbba',
  'mbbba',
  'mcbba',
  'nbbba',
  'ncbba',
  'obbba',
  'ocbba',
  'pbbba',
  'pcbba',
  'ccbba',
  'ccaba',
  'ccaca',
  'ccdba',
  'ccdca',
  'cceba',
  'cceca',
  'ccfba',
  'ccfca',
  'ccgba',
  'ccgca',
  'cchba',
  'cchca',
  'cciba',
  'ccica',
  'ccjba',
  'ccjca',
  'cckba',
  'cckca',
  'cclba',
  'cclca',
  'ccmba',
  'ccmca',
  'ccnba',
  'ccnca',
  'ccoba',
  'ccoca',
  'ccpba',
  'ccpca',
  'cccca',
  'accca',
  'adcca',
  'bccca',
  'bdcca',
  'eccca',
  'edcca',
  'fccca',
  'fdcca',
  'gccca',
  'gdcca',
  'hccca',
  'hdcca',
  'iccca',
  'idcca',
  'jccca',
  'jdcca',
  'kccca',
  'kdcca',
  'lccca',
  'ldcca',
  'mccca',
  'mdcca',
  'nccca',
  'ndcca',
  'occca',
  'odcca',
  'pccca',
  'pdcca',
  'ddcca',
  'ddaca',
  'ddada',
  'ddbca',
  'ddbda',
  'ddeca',
  'ddeda',
  'ddfca',
  'ddfda',
  'ddgca',
  'ddgda',
  'ddhca',
  'ddhda',
  'ddica',
  'ddida',
  'ddjca',
  'ddjda',
  'ddkca',
  'ddkda',
  'ddlca',
  'ddlda',
  'ddmca',
  'ddmda',
  'ddnca',
  'ddnda',
  'ddoca',
  'ddoda',
  'ddpca',
  'ddpda',
  'dddda',
  'addda',
  'aedda',
  'bddda',
  'bedda',
  'cddda',
  'cedda',
  'fddda',
  'fedda',
  'gddda',
  'gedda',
  'hddda',
  'hedda',
  'iddda',
  'iedda',
  'jddda',
  'jedda',
  'kddda',
  'kedda',
  'lddda',
  'ledda',
  'mddda',
  'medda',
  'nddda',
  'nedda',
  'oddda',
  'oedda',
  'pddda',
  'pedda',
  'eedda',
  'eeada',
  'eeaea',
  'eebda',
  'eebea',
  'eecda',
  'eecea',
  'eefda',
  'eefea',
  'eegda',
  'eegea',
  'eehda',
  'eehea',
  'eeida',
  'eeiea',
  'eejda',
  'eejea',
  'eekda',
  'eekea',
  'eelda',
  'eelea',
  'eemda',
  'eemea',
  'eenda',
  'eenea',
  'eeoda',
  'eeoea',
  'eepda',
  'eepea',
  'eeeea',
  'ggggg',
  'agggg',
  'ahggg',
  'bgggg',
  'bhggg',
  'cgggg',
  'chggg',
  'dgggg',
  'dhggg',
  'egggg',
  'ehggg',
  'fgggg',
  'fhggg',
  'igggg',
  'ihggg',
  'jgggg',
  'jhggg',
  'kgggg',
  'khggg',
  'lgggg',
  'lhggg',
  'mgggg',
  'mhggg',
  'ngggg',
  'nhggg',
  'ogggg',
  'ohggg',
  'pgggg',
  'phggg',
  'hhggg',
  'hhagg',
  'hhahg',
  'hhbgg',
  'hhbhg',
  'hhcgg',
  'hhchg',
  'hhdgg',
  'hhdhg',
  'hhegg',
  'hhehg',
  'hhfgg',
  'hhfhg',
  'hhigg',
  'hhihg',
  'hhjgg',
  'hhjhg',
  'hhkgg',
  'hhkhg',
  'hhlgg',
  'hhlhg',
  'hhmgg',
  'hhmhg',
  'hhngg',
  'hhnhg',
  'hhogg',
  'hhohg',
  'hhpgg',
  'hhphg',
  'hhhhg',
  'ahhhg',
  'aihhg',
  'bhhhg',
  'bihhg',
  'chhhg',
  'cihhg',
  'dhhhg',
  'dihhg',
  'ehhhg',
  'eihhg',
  'fhhhg',
  'fihhg',
  'ghhhg',
  'gihhg',
  'jhhhg',
  'jihhg',
  'khhhg',
  'kihhg',
  'lhhhg',
  'lihhg',
  'mhhhg',
  'mihhg',
  'nhhhg',
  'nihhg',
  'ohhhg',
  'oihhg',
  'phhhg',
  'pihhg',
  'iihhg',
  'iiahg',
  'iiaig',
  'iibhg',
  'iibig',
  'iichg',
  'iicig',
  'iidhg',
  'iidig',
  'iiehg',
  'iieig',
  'iifhg',
  'iifig',
  'iighg',
  'iigig',
  'iijhg',
  'iijig',
  'iikhg',
  'iikig',
  'iilhg',
  'iilig',
  'iimhg',
  'iimig',
  'iinhg',
  'iinig',
  'iiohg',
  'iioig',
  'iiphg',
  'iipig',
  'iiiig',
  'aiiig',
  'ajiig',
  'biiig',
  'bjiig',
  'ciiig',
  'cjiig',
  'diiig',
  'djiig',
  'eiiig',
  'ejiig',
  'fiiig',
  'fjiig',
  'giiig',
  'gjiig',
  'hiiig',
  'hjiig',
  'kiiig',
  'kjiig',
  'liiig',
  'ljiig',
  'miiig',
  'mjiig',
  'niiig',
  'njiig',
  'oiiig',
  'ojiig',
  'piiig',
  'pjiig',
  'jjiig',
  'jjaig',
  'jjajg',
  'jjbig',
  'jjbjg',
  'jjcig',
  'jjcjg',
  'jjdig',
  'jjdjg',
  'jjeig',
  'jjejg',
  'jjfig',
  'jjfjg',
  'jjgig',
  'jjgjg',
  'jjhig',
  'jjhjg',
  'jjkig',
  'jjkjg',
  'jjlig',
  'jjljg',
  'jjmig',
  'jjmjg',
  'jjnig',
  'jjnjg',
  'jjoig',
  'jjojg',
  'jjpig',
  'jjpjg',
  'jjjjg',
  'ajjjg',
  'akjjg',
  'bjjjg',
  'bkjjg',
  'cjjjg',
  'ckjjg',
  'djjjg',
  'dkjjg',
  'ejjjg',
  'ekjjg',
  'fjjjg',
  'fkjjg',
  'gjjjg',
  'gkjjg',
  'hjjjg',
  'hkjjg',
  'ijjjg',
  'ikjjg',
  'ljjjg',
  'lkjjg',
  'mjjjg',
  'mkjjg',
  'njjjg',
  'nkjjg',
  'ojjjg',
  'okjjg',
  'pjjjg',
  'pkjjg',
  'kkjjg',
  'kkajg',
  'kkakg',
  'kkbjg',
  'kkbkg',
  'kkcjg',
  'kkckg',
  'kkdjg',
  'kkdkg',
  'kkejg',
  'kkekg',
  'kkfjg',
  'kkfkg',
  'kkgjg',
  'kkgkg',
  'kkhjg',
  'kkhkg',
  'kkijg',
  'kkikg',
  'kkljg',
  'kklkg',
  'kkmjg',
  'kkmkg',
  'kknjg',
  'kknkg',
  'kkojg',
  'kkokg',
  'kkpjg',
  'kkpkg',
  'kkkkg',
  'ggggx',
  'gggxx',
  'ggxxx',
  'gxxxx',
  'xxxxx',
  'xxxxy',
  'xxxyy',
  'xxyyy',
  'xyyyy',
  'yyyyy',
  'yyyyw',
  'yyyww',
  'yywww',
  'ywwww',
  'wwwww',
  'wwvww',
  'wvvww',
  'vvvww',
  'vvvwz',
  'avvwz',
  'aavwz',
  'aaawz',
  'aaaaz',
];

const wl = new WordLadderII_MySoln(b, e, wordList);
console.log(wl.findLadders());
