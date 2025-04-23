function productExceptSelf(numberList: number[]): number[] {
  const output = Array(numberList.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < numberList.length; i++) {
    output[i] = prefix;
    prefix *= numberList[i];
  }

  let postfix = 1;
  for (let i = numberList.length - 1; i >= 0; --i) {
    output[i] *= postfix;
    postfix *= numberList[i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));
