function productExceptSelf(numberList: number[]): number[] {
  const output = Array(numberList.length).fill(1);

  let prefix = 1;
  for (let index = 0; index < numberList.length; index++) {
    output[index] = prefix;
    prefix *= numberList[index];
  }

  let postfix = 1;
  for (let index = numberList.length - 1; index >= 0; --index) {
    output[index] *= postfix;
    postfix *= numberList[index];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));