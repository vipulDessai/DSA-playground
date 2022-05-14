const groupAnagram = (listOfStrings: string[]): string[][] => {
  const groupedStrings = {};
  for (let index = 0; index < listOfStrings.length; index++) {
    const singleString = listOfStrings[index];

    // here count of length 26 because a...z is 26
    // will act like a key
    let count = Array(26).fill(0);

    for (let index = 0; index < singleString.length; index++) {
      const c = singleString[index];

      // basically count is array of 26 length because a....z are 26
      // for for each char in singleString we want to fill the array value with +1
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    groupedStrings[count.join()] = groupedStrings[count.join()]
      ? [...groupedStrings[count.join()], singleString]
      : [singleString];
  }

  return Object.values(groupedStrings);
};

console.log(groupAnagram(['eat', 'ate', 'nat', 'tan', 'bat', 'tea']));
