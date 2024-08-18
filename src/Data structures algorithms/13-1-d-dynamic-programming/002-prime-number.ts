function isPrime_recursion(num: number) {
  function dfs(i: number) {
    // corner cases
    if (num == 0 || num == 1) {
      return false;
    }

    // Checking Prime
    if (num == i) return true;

    if (num % i === 0) {
      return false;
    }

    return dfs(i + 1);
  }

  return dfs(2);
}

console.log(isPrime_recursion(23));

function isPrime_iterative(num: number) {
  if (num <= 1) return false;

  // Check from 2 to sqrt(n)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime_iterative(23));

// prime number can be repersented as 6n + 1 and 6n - 1
function isPrime_iterative_6n(num: number) {
  if (num <= 1) return false;

  // Check if n=2 or n=3
  if (num == 2 || num == 3) return true;

  // Check whether num is divisible by 2 or 3
  if (num % 2 == 0 || num % 3 == 0) return false;

  // Check from 5 to square root of n
  // Iterate i by (i + 6)
  for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime_iterative_6n(23));
