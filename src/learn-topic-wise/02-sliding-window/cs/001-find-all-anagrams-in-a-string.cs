// problem - https://leetcode.com/problems/find-all-anagrams-in-a-string/

namespace learning_dsa_csharp._03_sliding_window._001_find_all_anagrams_in_a_string
{
    internal class MySoln
    {
        int[] sH = new int[26];
        int[] pH = new int[26];

        public IList<int> FindAnagrams(string s, string p)
        {
            IList<int> res = new List<int>();
            int sLen = s.Length;
            int pLen = p.Length;

            if (sLen < pLen)
            {
                return res;
            }

            int l = 0;
            int r = 0;
            while (r < pLen)
            {
                sH[s[r] - 'a']++;
                pH[p[r] - 'a']++;

                r++;
            }

            if (IsHashEqual())
            {
                res.Add(l);
            }

            while (r < sLen)
            {
                sH[s[l] - 'a'] -= 1;
                l++;
                sH[s[r] - 'a'] += 1;

                if (IsHashEqual())
                {
                    res.Add(l);
                }

                r++;
            }

            return res;
        }

        private bool IsHashEqual()
        {
            for (int i = 0; i < 26; i++)
            {
                if (sH[i] != pH[i])
                {
                    return false;
                }
            }

            return true;
        }
    }

    // solution - https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739169/c-sliding-window-hash-table-intuitive
    internal class OtherSoln
    {
        int[] sH = new int[26];
        int[] pH = new int[26];

        public IList<int> FindAnagrams(string s, string p)
        {
            IList<int> res = new List<int>();
            int sLen = s.Length;
            int pLen = p.Length;

            if (sLen < pLen)
            {
                return res;
            }

            int l = 0;
            int r = 0;
            while (r < pLen)
            {
                sH[s[r] - 'a']++;
                pH[p[r] - 'a']++;

                r++;
            }

            r -= 1;

            while (r < sLen)
            {
                if (IsHashEqual())
                {
                    res.Add(l);
                }

                r++;
                if (r != sLen)
                {
                    sH[s[r] - 'a'] += 1;
                }
                sH[s[l] - 'a'] -= 1;
                l++;
            }

            return res;
        }

        private bool IsHashEqual()
        {
            for (int i = 0; i < 26; i++)
            {
                if (sH[i] != pH[i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}
