# floor

```cs
int dividend = 3;
int divisor = 6;

int floorValue = (dividend - (dividend % divisor)) / divisor;
```

# ceiling

```cs
int dividend = 3;
int divisor = 6;
int ceilingValue = ((dividend - 1) / divisor) + 1;
```

# repeat numbers

```cs
int n = 3;

int[] someArr = new int[n * 4];
for(int i = 0; i < n * 4; ++i) {
    someArr[i] = (i % n);
}

// someArr - 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2
```
