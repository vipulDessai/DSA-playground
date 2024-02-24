# Array

## mutate

### create subarray

- using brute force

```c#
int[] arr = new int[] {3, 1, 2, 4};
int n = arr.Length;
int i = 0;
List<string> subSets = new List<List<int>>();
while (i < n) {
    StringBuilder c = new StringBuilder();
    for(int j = i; j < n; j++) {
        c.Append(arr[j].ToString());

        subSets.Add(c.ToString());
    }

    ++i;
}
// Output
// i = 0 => 3, 31, 312, 3124
// i = 1 => 1, 12, 124
// i = 2 => 2, 24
// i = 3 => 4
```

### divide array in groups of some number

- min difficulty to schedule jobs

## create permutation of array recursively

- k inverse pairs array - https://leetcode.com/problems/k-inverse-pairs-array/description

## compare

### compare arrays

- sliding window problem - find all anagram - https://leetcode.com/problems/find-all-anagrams-in-a-string/description

# Find some target sum

- kadane's algorithm

# BST

- BFS, DFS
- practice simple dfs and bfs
  - example - https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree

# Subsequnces

## with repeat item

- find a subsequence by repeating the item in an array
  - example of subsequence - [1, 4, 9] => [9, 9, 9], [9, 9, 4], [9, 9, 1], [9, 4, 4], [9, 4, 1]...[1, 1, 1]
  - perfect square - https://leetcode.com/problems/perfect-squares
  - coin change - https://leetcode.com/problems/coin-change

## without repeat item

- using knapsack (bottoms up)
- find int array subsequence without repeat

# graph traversal

- dijkstra algorithm
  - using prioiry queue
- when dijktra fails - due to negetive (infinite) loop - use bellman ford

# 2d array

## simple traversal attributes

```c#
int rLen = matches.Length;
int cLen = matches.Length;
for(int i = 0; i < rLen; ++i) {
    for(int j = 0; j < cLen; ++j) {

    }
}
```

# binary search

- find the minimum in a rotated sorted array

```c#
while (l < r) {
    int m = ((l + r) - ((l + r) % 2)) / 2;
    if(nums[m] > nums[r]) {
        l = m + 1;
    }
    else {
        r = m;
    }
}
```

# linked list

- LRU cache

# stack

- monotonic stack
