// return a positive number in an array not present in an array
// refer - https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/

function solution(array) {
  const unsortedSet = new Set();
  for (let i = 0; i < array.length; i++) {
    if (!unsortedSet.has(array[i]) && array[i] > 0) {
      unsortedSet.add(array[i]);
    }
  }

  if (unsortedSet.size === 0) return 1;

  const sortedArray = [...unsortedSet].sort((a, b) => a - b);

  sortedArray.push(sortedArray[sortedArray.length - 1] + 2);

  for (let i = 0; i < sortedArray.length - 1; i++) {
    // skip
    if (sortedArray[i] < 0) {
      continue;
    }

    const subtractionResult = sortedArray[i + 1] - sortedArray[i];
    if (subtractionResult > 1) {
      return sortedArray[i] + 1;
    }
  }
}

// const res = solution([-1, -3]);
// const res = solution([1, 3, 6, 4, 1, 2]);
const res = solution([2]);
// const res = solution([-3, -1, 0]);

console.log(res);
