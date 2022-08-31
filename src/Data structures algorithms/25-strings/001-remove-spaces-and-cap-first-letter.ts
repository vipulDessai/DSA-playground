// input - "    hi  how      are        you     "
// Output – “Hi How Are You”

function removeSpaceAndCapFirstLetter(str: string) {
  let capFirsLetter = false;
  let wStarted = false;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char !== ' ' || wStarted) {
      wStarted = true;

      if (char === ' ') {
        wStarted = false;
        capFirsLetter = false;
      } else {
        if (!capFirsLetter) {
          capFirsLetter = true;
          if (res) {
            res += ' ' + char.toUpperCase();
          } else {
            res += char.toUpperCase();
          }
        } else {
          res += char;
        }
      }
    }
  }

  return res;
}

console.log(
  removeSpaceAndCapFirstLetter('    hi  how      are        you     '),
);
