function firstMissingPositive_additional_hash(nums: number[]): number {
  const n = nums.length;

  // this is a sorted array like 0, 1, 2, 3, ... , n + 1
  // why n + 1
  // because nums can contain item == n
  const seen = new Array(n + 1).fill(false);

  // so mark existing numbers from nums into the sorted array
  for (const num of nums) {
    // why n + 1
    // because nums can contain item == n
    if (num > 0 && num < n + 1) {
      seen[num] = true;
    }
  }

  // iterate over the sorted array and the first index where its false
  // is our first missing positive
  // why
  // we have marked true for all positive number that are there in nums
  // so the first missing number is the answer
  for (let i = 1; i < n + 1; ++i) {
    if (!seen[i]) {
      return i;
    }
  }

  // if all the nums are there in seen
  // then nothing is missing
  // so number after the last available number is the answer
  return n + 1;
}

// using auxiliary space
function firstMissingPositive_input_array_as_hash(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < n; ++i) {
    if (nums[i] <= 0) {
      nums[i] = Infinity;
    }
  }

  for (let i = 0; i < n; ++i) {
    const index = Math.abs(nums[i]) - 1;
    if (index < n && nums[index] > 0) {
      nums[index] *= -1;
    }
  }

  for (let i = 0; i < n; ++i) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;
}
