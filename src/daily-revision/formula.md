# floor

```ts
const dividend = 3;
const divisor = 6;

const floorValue = (dividend - (dividend % divisor)) / divisor;
```

# ceiling

```ts
const dividend = 3;
const divisor = 6;
const ceilingValue = (dividend - 1) / divisor + 1;
```

# repeat numbers

```ts
const n = 3;
const repeatTimes = 4;

const someArr: number[] = [];
for (let i = 0; i < n * repeatTimes; ++i) {
  someArr.push(i % n);
}

// someArr - 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2
```

# calculate max gap without going out of bound

```ts
const positions = [1, 2, 3, 5, ... , 100];
const maxPositions = Math.max(...positions);    // 100
const m = 3;    // we need to place 3 people in positions

// find the max gap so that we wont out run position 100, i.e. no person will stand after 100
const maxGap = Math.ceil(maxPositions / m - 1); // any number higher than maxGap will outrun number 100
```
