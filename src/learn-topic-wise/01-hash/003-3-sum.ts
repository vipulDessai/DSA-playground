export const url = '[3Sum](https://leetcode.com/problems/3sum/description/)';

function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b); // Sorting helps with efficient searching, a - b sorts in asc order
  const result = new Set<string>(); // Using a Set to store unique triplets

  for (let i = 0; i < n - 2; i++) {
    let low = i + 1,
      high = n - 1;

    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];

      if (sum < 0) {
        low++;
      } else if (sum > 0) {
        high--;
      } else {
        result.add(JSON.stringify([nums[i], nums[low], nums[high]]));
        low++;
        high--;
      }
    }
  }

  return Array.from(result).map((triplet) => JSON.parse(triplet));
}

var input = [-1, 0, 1, 2, -1, -4];
var out = threeSum(input);
console.log(out); // Output: [[-1, -1, 2], [-1, 0, 1]]
