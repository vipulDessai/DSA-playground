function createMap(s: string) {
  // basically count is array of 26 length because a....z are 26
  const sMap = Array(26).fill(0);

  for (const c of s) {
    // for each char `c` in `s` we want to fill the array value with +1
    //
    // ex. str = 'abcd';
    // str.charCodeAt(0) is asking to give the ASCII char code at index 0 of str
    // i.e. at 0 its char `a` whose ASCII is 97
    sMap[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }

  return sMap.join(); // count as "10,3,5,8"
}

function groupAnagrams_brute(strs: string[]): string[][] {
  const VISITED = '-1';
  const n = strs.length;

  const output: string[][] = [];
  for (let i = 0; i < n; ++i) {
    if (strs[i] === VISITED) {
      continue;
    }

    const strMap = createMap(strs[i]);

    const group: string[] = [];
    group.push(strs[i]);

    strs[i] = VISITED;
    for (let j = i + 1; j < n; ++j) {
      if (strs[j] === VISITED) {
        continue;
      }

      const curStrMap = createMap(strs[j]);
      if (curStrMap === strMap) {
        group.push(strs[j]);

        strs[j] = VISITED;
      }
    }

    output.push(group);
  }

  return output;
}

console.log(groupAnagrams_brute(['eat', 'ate', 'nat', 'tan', 'bat', 'tea']));

function createMap_usingPrime(s: string) {
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  let key = 1;
  for (let i = 0; i < s.length; ++i) {
    key *= primes[s.charCodeAt(i) - 97];
  }

  return key.toString();
}

function groupAnagrams_pureHashmap(strs: string[]): string[][] {
  const output = new Map<string, string[]>();
  for (let i = 0; i < strs.length; ++i) {
    const curStr = strs[i];
    const strMap = createMap_usingPrime(curStr);

    if (output.has(strMap)) {
      output.set(strMap, [...output.get(strMap)!, curStr]);
    } else {
      output.set(strMap, [curStr]);
    }
  }

  return [...output.values()];
}

console.log(
  groupAnagrams_pureHashmap(['eat', 'ate', 'nat', 'tan', 'bat', 'tea']),
);
