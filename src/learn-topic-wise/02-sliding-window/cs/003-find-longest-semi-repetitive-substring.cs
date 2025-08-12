namespace learning_dsa_csharp._03_sliding_window._003_find_longest_semi_repetitive_substring
{
    internal class MySoln
    {
        public int LongestSemiRepetitiveSubstring(string s)
        {
            return 0;
        }
    }

    // https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/3622843/java-sliding-window-approach-easy-to-understand
    internal class OthersSoln
    {
        public int LongestSemiRepetitiveSubstring(string s)
        {
            int l = 0,
                r = 0;
            int count = 0;
            int ans = 1;
            while (r < s.Length - 1 && l <= r)
            {
                r++;
                if (s[r] == s[r - 1])
                    count++;

                while (count >= 2)
                {
                    l++;
                    if (s[l] == s[l - 1])
                        count--;
                }

                ans = Math.Max(ans, r - l + 1);
            }

            return ans;
        }
    }
}
