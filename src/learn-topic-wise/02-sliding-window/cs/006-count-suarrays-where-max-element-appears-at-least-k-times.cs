// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times
namespace learning_dsa_csharp._03_sliding_window._006_count_suarrays_where_max_element_appears_at_least_k_times
{
    internal class MySoln
    {
        // technique is find count of all the subarrays where the max is not more than k
        // and subtract this count from the total subarrays
        // fails at 624/633, may be due to int overflow
        public long CountSubarrays(int[] nums, int k)
        {
            int n = nums.Length;

            int max = int.MinValue;
            for (int i = 0; i < n; ++i)
            {
                max = Math.Max(max, nums[i]);
            }

            long t = (n * (n + 1)) / 2;
            int mC = 0;
            int l = 0,
                r = 0;
            long res = 0;
            while (r < n)
            {
                int cur = nums[r];

                if (cur == max)
                    ++mC;

                if (mC < k)
                {
                    ++r;
                    res += r - l;
                }
                else
                {
                    while (mC != k - 1)
                    {
                        int curL = nums[l];
                        if (curL == max)
                            --mC;
                        ++l;
                    }

                    --mC;
                }
            }

            return t - res;
        }
    }

    // https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4940242/simplified-algorithm-explained-with-visual-example-c-java
    internal class OthersSoln
    {
        public long CountSubarrays(int[] nums, int k)
        {
            int n = nums.Length;

            int max = int.MinValue;
            for (int i = 0; i < n; ++i)
            {
                max = Math.Max(max, nums[i]);
            }

            int mC = 0;
            int l = 0,
                r = 0;
            long res = 0;
            while (r < n)
            {
                int cur = nums[r];

                if (cur == max)
                    ++mC;

                while (mC >= k)
                {
                    int curL = nums[l];
                    if (curL == max)
                        --mC;

                    ++l;

                    res += n - r;
                }

                ++r;
            }

            return res;
        }
    }
}
