export function sortStringArray(strArr: string[]) {
  return strArr.sort((a, b) => a.localeCompare(b));
}

console.log(sortStringArray(['xxx', 'yyy', 'aaa', 'bbb', 'ccc']));
