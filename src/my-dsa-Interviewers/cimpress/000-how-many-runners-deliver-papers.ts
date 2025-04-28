function numberOfRunners(input: number[], capacity: number): number {
  const n = input.length;
  let out = 1,
    sum = 0;

  for (const cur of input) {
    sum += cur;

    if (sum > capacity) {
      sum = cur;
      ++out;
    }
  }

  return out;
}

numberOfRunners([10, 20, 30, 15], 35); // output - 3
