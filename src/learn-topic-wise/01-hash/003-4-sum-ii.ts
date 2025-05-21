function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  const sumMap = new Map<number, number>();
  let count = 0;

  // Compute sum pairs for A & B and store them in a hashmap
  for (let a of nums1) {
    for (let b of nums2) {
      let sum = a + b;
      sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }
  }

  // Find complementary sums in C & D
  for (let c of nums3) {
    for (let d of nums4) {
      let target = -(c + d);
      if (sumMap.has(target)) {
        count += sumMap.get(target)!;
      }
    }
  }

  return count;
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
