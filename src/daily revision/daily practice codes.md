# create subarray
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
```

# find sum
- kadane's algorithm

# BST
- BFS, DFS
- practice simple dfs and bfs
    - example - https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree

# Subsequnces
- using knapsack (bottoms up)

# divide array in groups of some number
- min difficulty to schedule jobs

# Path traversal
- dijkstra algorithm 
    - using prioiry queue

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