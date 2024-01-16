# create subarray
- using brute force

# find sum
- kadane's algorithm

# BST
- BFS, DFS

# Subsequnces
- using knapsack

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