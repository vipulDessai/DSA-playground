// https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/
namespace learning_dsa_csharp._03_sliding_window._012_minimum_swaps_to_group_all_1s_together_ii
{
    // https://www.youtube.com/watch?v=BueoreUIkcE
    internal class OthersSoln
    {
        public int MinSwaps(int[] nums)
        {
            int totalOnes = 0;

            // find the total number of ones
            foreach (int num in nums)
            {
                totalOnes += num;
            }

            int n = nums.Length;
            int l = 0;
            int cur1 = 0,
                max1 = 0;

            // find a length of window in the array with max number of 1s
            for (int r = 0; r < 2 * n; ++r)
            {
                cur1 += nums[r % n];

                // always the window that we are looking for should be
                // less than total number of ones found in the entire array
                if (r - l + 1 > totalOnes)
                {
                    cur1 -= nums[l % n];
                    l += 1;
                }

                max1 = Math.Max(max1, cur1);
            }

            // the answer is
            // total 1s in the array - a window with highest number of 1s
            return totalOnes - max1;
        }
    }
}
