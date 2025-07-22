function canBeEqual(target: number[], arr: number[]): boolean {
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (arrMap.has(arr[i])) {
      const count = arrMap.get(arr[i]) + 1;
      arrMap.set(arr[i], count);
    } else {
      arrMap.set(arr[i], 1);
    }
  }

  for (let i = 0; i < target.length; i++) {
    if (arrMap.has(target[i])) {
      const count = arrMap.get(target[i]) - 1;

      if (count < 0) {
        return false;
      } else {
        arrMap.set(target[i], count);
      }
    } else {
      return false;
    }
  }

  return true;
}

console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3]));
