// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/
// solution - https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5768300/simple-and-easy-javascript-solution
function minBitFlips(start: number, goal: number): number {
  // Perform bitwise XOR between 'start' and 'goal'.
  // The XOR operation results in a number where each bit is 1 if the corresponding bits of 'start' and 'goal' are different, otherwise it's 0.
  let xor = start ^ goal;

  // Initialize a variable 'ans' to count the number of bit flips required.
  let ans = 0;

  // Loop while there are still bits set to 1 in 'xor'.
  // The loop will terminate when 'xor' becomes 0, meaning all bits have been checked.
  while (xor) {
    // Use bitwise AND with 1 to check if the least significant bit (rightmost) of 'xor' is 1.
    // If it's 1, it means there's a difference between the corresponding bits of 'start' and 'goal', so increment 'ans'.
    ans += xor & 1;

    // Right shift 'xor' by 1 bit to move to the next bit in the XOR result.
    // This effectively divides 'xor' by 2, discarding the least significant bit.
    xor >>= 1;
  }

  // Return the total number of bit flips needed.
  return ans;
}
