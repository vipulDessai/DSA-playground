namespace learning_dsa_csharp._01_strings_arrays_hash._062_longest_consecutive_sequence
{
    internal class OthersSoln
    {
        public int LongestConsecutive(int[] nums)
        {
            int n = nums.Length;
            HashSet<int> h = new HashSet<int>();
            for (int i = 0; i < n; ++i)
            {
                h.Add(nums[i]);
            }

            int rMax = 0;
            for (int i = 0; i < n; ++i)
            {
                if (!h.Contains(nums[i] - 1))
                {
                    int cur = nums[i] + 1;
                    while (h.Contains(cur))
                    {
                        cur += 1;
                    }

                    rMax = Math.Max(rMax, cur - nums[i]);
                }
            }

            return rMax;
        }
    }
}
