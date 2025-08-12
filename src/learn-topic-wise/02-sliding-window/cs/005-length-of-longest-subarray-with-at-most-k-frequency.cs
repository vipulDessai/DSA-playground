﻿namespace learning_dsa_csharp._03_sliding_window._005_length_of_longest_subarray_with_at_most_k_frequency
{
    internal class MySoln
    {
        public int MaxSubarrayLength(int[] nums, int k)
        {
            int n = nums.Length;
            Dictionary<int, int> m = new();
            int l = 0,
                r = 0;
            int c = int.MinValue;
            while (r < n)
            {
                int cur = nums[r];

                if (!m.ContainsKey(cur))
                {
                    m[cur] = 0;
                }

                if (m[cur] < k)
                {
                    m[cur]++;
                    r++;

                    c = Math.Max(c, r - l);
                }
                else
                {
                    int lN = nums[l];
                    m[lN]--;
                    if (m[lN] == 0)
                    {
                        m.Remove(lN);
                    }
                    l++;
                }
            }

            return c;
        }
    }
}
