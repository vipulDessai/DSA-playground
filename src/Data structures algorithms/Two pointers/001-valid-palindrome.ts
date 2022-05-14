const isAlphaNum = (c: string) => {
  return (
    (c.charCodeAt(0) >= 'A'.charCodeAt(0) &&
      c.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
    (c.charCodeAt(0) >= 'a'.charCodeAt(0) &&
      c.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
    (c.charCodeAt(0) >= '0'.charCodeAt(0) &&
      c.charCodeAt(0) <= '9'.charCodeAt(0))
  );
};

function isPalindrome(str: string): boolean {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(str[left])) {
      ++left;
    }
    while (right > left && !isAlphaNum(str[right])) {
      --right;
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    ++left;
    --right;
  }

  return true;
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
