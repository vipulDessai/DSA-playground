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