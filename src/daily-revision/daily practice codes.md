# string

## string manipulation

- KMP Algorithm for Pattern Searching

# Array

## divide array in groups of some number

- min difficulty to schedule jobs

## create permutation of array recursively

- k inverse pairs array - https://leetcode.com/problems/k-inverse-pairs-array/description

## compare

### compare arrays

- sliding window problem - find all anagram - https://leetcode.com/problems/find-all-anagrams-in-a-string/description

## Find some target sum

- kadane's algorithm

## Sort

- O(n \* log n)
  - radix
  - merge
  - heap

# BST (binary search tree)

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
  - using priority queue
    - https://leetcode.com/problems/network-delay-time/description/
- when dijktra fails - due to negetive (infinite) loop - use bellman ford
  - https://leetcode.com/problems/cheapest-flights-within-k-stops/description
- floyd warshall
  - https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5539929/easy-explanation-floyd-warshall-algorithm-java-c-python-javascript-go-rust

# 2d array

## simple traversal attributes

```ts
const rLen = matches.length;
const cLen = matches[0].length;
for (let i = 0; i < rLen; ++i) {
  for (let j = 0; j < cLen; ++j) {
    const cur = matches[i][j];
  }
}
```

# linked list

- LRU cache

# stack

- monotonic stack

# Queue

- Priority Queue
