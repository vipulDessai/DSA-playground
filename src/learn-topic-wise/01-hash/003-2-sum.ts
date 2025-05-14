function twoSum_hash(nums: number[], target: number): number[] | false {
  const n = nums.length;
  const prevMap = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    const diff = target - nums[i];
    const diffExistInHashMap = prevMap.get(diff);
    if (diffExistInHashMap) {
      return [diffExistInHashMap, i];
    } else {
      prevMap.set(nums[i], i);
    }
  }

  return false;
}

console.log(twoSum_hash([2, 1, 5, 3], 4));

/**
 * 
# Intuition && Approach
- once sorted we can apply the binary saerch logic to locate the target, but if sort how we will have the original indices
- for that create a numsWithIndices whose type is { index: number; value: number }[]
```ts
const numsWithIndices: { index: number; value: number }[] = nums.map(
  (n, i) => ({ index: i, value: n }),
);
```
- now apply the same binary search logic and return the `[numsWithIndices[l].index, numsWithIndices[r].index]`

# Complexity
- Time complexity: O(N log N)
- Space complexity: O(N)

 * @param nums 
 * @param target 
 * @returns number[]
 */

function twoSum_2_pointers(nums: number[], target: number): number[] | false {
  const n = nums.length;
  const numsWithIndices: { index: number; value: number }[] = nums.map(
    (n, i) => ({ index: i, value: n }),
  );
  numsWithIndices.sort((a, b) => a.value - b.value);

  let l = 0;
  let r = n - 1;

  while (l < r) {
    const sum = numsWithIndices[l].value + numsWithIndices[r].value;
    if (sum < target) {
      ++l;
    } else if (sum > target) {
      --r;
    } else {
      return [numsWithIndices[l].index, numsWithIndices[r].index];
    }
  }

  return [];
}

console.log(twoSum_2_pointers([2, 1, 5, 3], 4));

export const moduleThisFile = 'okay';
