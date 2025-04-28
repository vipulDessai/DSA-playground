# Numbers

## floor

```ts
const dividend = 3;
const divisor = 6;

const floorValue = (dividend - (dividend % divisor)) / divisor;
```

## ceiling

```ts
const dividend = 3;
const divisor = 6;
const ceilingValue = (dividend - 1) / divisor + 1;
```

## repeat numbers

```ts
const n = 3;
const repeatTimes = 4;

const someArr: number[] = [];
for (let i = 0; i < n * repeatTimes; ++i) {
  someArr.push(i % n);
}

// someArr - 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2
```

# Operations

## calculate max gap without going out of bound

```ts
const positions = [1, 2, 3, 5, ... , 100];
const maxPositions = Math.max(...positions);    // 100
const m = 3;    // we need to place 3 people in positions

// find the max gap so that we wont out run position 100, i.e. no person will stand after 100
const maxGap = Math.ceil(maxPositions / m - 1); // any number higher than maxGap will outrun number 100
```

## distribute all items equally in all bags with number of operations

```ts
const nums = [2, 4, 8, 2];
const n = nums.length;

const maxOperations = 2;

let sum = nums.reduce((acc, cur) => acc + cur, 0);

// divide the items so that every bag same number of balls
const result = sum / (n + maxOperations);
```

## number of operations to split and then split again

```ts
// we have array [2, 4, 8, 2] and if we want to find the count of operations required to make group of 2
// i.e. 4 => 2, 2 so 1 operation
// 8 will be 4,4 => 2,2,4 => 2,2,2,2 i.e. 3 operations
// Answer is

total += Math.ceil(num / curMaxBalls) - 1;
// because the number of operations is always one less than the number of groups
```

# String

## substring length

```ts
// In a sliding window of left and right pointers
minLen = r - l + 1;
```
