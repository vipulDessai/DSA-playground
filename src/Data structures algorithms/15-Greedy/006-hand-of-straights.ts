function isNStraightHand(hand: number[], groupSize: number): boolean {
  // if mod is NOT zero then we cant
  // make enough groups
  if (hand.length % groupSize) return false;

  const countMap = {};
  for (let i = 0; i < hand.length; i++) {
    countMap[hand[i]] = 1 + (countMap[hand[i]] || 0);
  }

  // the countMap keys will be sorted, coz its a object
  // so this loop is heapify
  const minH: number[] = [];
  for (const key in countMap) {
    if (Object.prototype.hasOwnProperty.call(countMap, key)) {
      minH.push(parseInt(key));
    }
  }

  while (minH.length) {
    const first = minH[0];

    for (let i = first; i < first + groupSize; i++) {
      if (!countMap[i]) {
        return false;
      } else {
        --countMap[i];
      }

      if (countMap[i] === 0) {
        if (i !== minH[0]) {
          return false;
        }
        // pop out the first element
        else {
          minH.shift();
        }
      }
    }
  }

  return true;
}

isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
