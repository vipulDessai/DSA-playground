function encodeStrings(stringArray: string[]) {
  let encodedString = '';

  for (let index = 0; index < stringArray.length; index++) {
    const singleString = stringArray[index];
    encodedString += singleString.length + '#' + singleString;
  }

  return encodedString;
}

function decodeString(str: string): string[] {
  const decodedStrings: string[] = [];
  let i = 0;
  while (i < str.length) {
    let j = i;
    while (str[j] !== '#') {
      ++j;
    }
    const length = parseInt(str.substring(i, j));
    decodedStrings.push(str.substring(j + 1, j + 1 + length));
    i = j + 1 + length;
  }

  return decodedStrings;
}

console.log(decodeString(encodeStrings(['#foo4', '#4#'])));
