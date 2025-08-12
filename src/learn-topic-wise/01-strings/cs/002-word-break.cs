using System.Collections.Generic;

namespace learning_dsa_csharp._01_strings_arrays_hash._002_word_break
{
    internal class Solution
    {
        public bool WordBreak(string s, IList<string> wordDict)
        {
            List<bool> dp = new List<bool>();
            for (int i = 0; i < s.Length + 1; i++)
            {
                dp.Add(false);
            }
            dp[s.Length] = true;

            for (int i = s.Length - 1; i >= 0; --i)
            {
                foreach (string w in wordDict)
                {
                    if ((i + w.Length <= s.Length) && s.Substring(i, w.Length) == w)
                    {
                        dp[i] = dp[i + w.Length];
                    }

                    // for s = cars and wordDict = ["car", "ca", "rs"]
                    if (dp[i])
                        break;
                }
            }

            return dp[0];
        }
    }
}
