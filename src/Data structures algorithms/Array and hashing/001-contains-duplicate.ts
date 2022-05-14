function containsDuplicate(numberList: number[]): boolean {
  const numberListHashSet = new Set();

  for (let i = 0; i < numberList.length; i++) {
    const num = numberList[i];
    if (numberListHashSet.has(num)) {
      return true;
    }

    numberListHashSet.add(num);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 5]));
