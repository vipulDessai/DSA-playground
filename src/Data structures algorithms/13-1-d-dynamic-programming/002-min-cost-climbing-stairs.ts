function minCostClimbingStairs(cost: number[]): number {
  // add 0 coz the cost.length + 1 is the floor that should be reached
  // and also we are doing cost[i + 2]
  cost.push(0);
  for (let i = cost.length - 3; i > -1; --i) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }

  return Math.min(cost[0], cost[1]);
}
