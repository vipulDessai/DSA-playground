export const url = "[Next Permutation](https://leetcode.com/problems/next-permutation)";

function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;

    // Step 1: Find the pivot
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        // Step 2: Find the successor
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Step 3: Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 4: Reverse the suffix
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

var input = [1, 2, 3];
var out  = nextPermutation(input);
console.log(out);