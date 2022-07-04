function canCompleteCircuit(gas: number[], cost: number[]): number {
  if (sum(gas) < sum(cost)) {
    return -1;
  }

  let total = 0;
  let res = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    if (total < 0) {
      total = 0;
      res = i + 1;
    }
  }

  return res;

  function sum(nums: number[]) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      res += nums[i];
    }

    return res;
  }
}
