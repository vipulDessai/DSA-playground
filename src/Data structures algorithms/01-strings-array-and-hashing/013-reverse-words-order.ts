function revStr(str) {
  const splitString: string[] = [];
  let word: string[] = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === ' ') {
      splitString.push(joinString(word));
      word = [];
    } else {
      word.push(char);

      if (i === str.length - 1) {
        splitString.push(joinString(word));
      }
    }
  }

  let reversedString = '';
  for (let i = splitString.length - 1; i > -1; --i) {
    reversedString += splitString[i] + ' ';
  }

  return reversedString.trim();
}

const joinString = (strArray) => {
  let seperatedString = '';
  for (let j = 0; j < strArray.length; j++) {
    seperatedString += strArray[j];
  }

  return seperatedString;
};

console.log(revStr('  hello how   are you  ')); // should print 'you are how hello'
