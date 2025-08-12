// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/
namespace learning_dsa_csharp._03_sliding_window._002_max_sum_of_distinct_subarrays_with_length_k
{
    internal class MySoln
    {
        public long MaximumSubarraySum(int[] nums, int k)
        {
            int n = nums.Length;
            Dictionary<int, int> m = new();
            long sum = 0,
                max = 0;
            int prev = nums[0];
            for (int i = 0; i < k; i++)
            {
                int cur = nums[i];
                if (!m.ContainsKey(cur))
                {
                    m[cur] = 0;
                }
                m[cur]++;
                sum += cur;
            }

            if (m.Count == k)
            {
                max = sum;
            }

            int l = 1;
            int r = k;
            while (r < n)
            {
                int cur = nums[r];

                m[prev]--;
                if (m[prev] == 0)
                {
                    m.Remove(prev);
                }

                sum -= prev;
                sum += cur;

                if (!m.ContainsKey(cur))
                {
                    m[cur] = 0;
                }

                m[cur]++;

                if (m.Count == k && max < sum)
                {
                    max = sum;
                }

                prev = nums[l];

                l++;
                r++;
            }

            return max;
        }
    }
}
