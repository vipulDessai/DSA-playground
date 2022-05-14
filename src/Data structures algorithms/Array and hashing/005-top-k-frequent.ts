function topKFrequent(numsList: number[], k: number): number[] {
  const count = {};
  const freq: number[][] = [];
  for (let index = 0; index < numsList.length; index++) {
    freq.push([]);
  }

  for (let index = 0; index < numsList.length; index++) {
    const num = numsList[index];
    count[num] = 1 + (count[num] || 0);
  }

  Object.entries(count).forEach(([key, value]: [string, unknown]) => {
    freq[value as number].push(parseInt(key));
  });

  const topK: number[] = [];
  for (let index = freq.length - 1; index >= 0; --index) {
    const groupedNumsArray: number[] = freq[index];
    for (let j = 0; j < groupedNumsArray.length; j++) {
      topK.push(groupedNumsArray[j]);
      if (topK.length === k) {
        return topK;
      }
    }
  }

  return [];
}

console.log(topKFrequent([6, 9, 9, 2, 2], 2));
