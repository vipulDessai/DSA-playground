namespace learning_dsa_csharp._03_sliding_window._010_count_number_of_nice_subarrays
{
    // https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/419378/java-c-python-sliding-window-o-1-space
    internal class OthersSoln_one_pass
    {
        public int NumberOfSubarrays(int[] nums, int k)
        {
            int n = nums.Length;

            int l = 0,
                r = 0;
            int res = 0,
                count = 0,
                curOdds = 0;
            while (r < n)
            {
                int cur = nums[r];

                if (cur % 2 == 1)
                {
                    ++curOdds;
                    count = 0;
                }

                while (curOdds == k)
                {
                    if (nums[l] % 2 == 1)
                    {
                        --curOdds;
                    }

                    ++count;

                    ++l;
                }

                res += count;

                ++r;
            }

            return res;
        }
    }

    // https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/419378/java-c-python-sliding-window-o-1-space
    internal class OthersSoln_at_most
    {
        public int AtMost(int[] A, int k)
        {
            int res = 0,
                l = 0,
                r = 0,
                n = A.Length;
            while (r < n)
            {
                k -= A[r] % 2; // if odd then decrement the k variable value

                while (k < 0)
                {
                    k += A[l] % 2; // if odd then increment the k variable value

                    ++l;
                }

                res += r - l + 1;
                ++r;
            }
            return res;
        }

        public int NumberOfSubarrays(int[] nums, int k)
        {
            var r1 = AtMost(nums, k);
            var r2 = AtMost(nums, k - 1);
            return r1 - r2;
        }
    }
}
