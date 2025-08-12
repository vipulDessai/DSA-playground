namespace learning_dsa_csharp._01_strings_arrays_hash._017_min_number_of_steps_to_make_2_strings_anagram
{
    internal class Solution
    {
        public int MinSteps(string s, string t)
        {
            int n = s.Length;

            Dictionary<char, int> sD = new Dictionary<char, int>();
            Dictionary<char, int> tD = new Dictionary<char, int>();

            for (int i = 0; i < n; i++)
            {
                if (!sD.ContainsKey(s[i]))
                {
                    sD[s[i]] = 0;
                }
                sD[s[i]]++;

                if (!tD.ContainsKey(t[i]))
                {
                    tD[t[i]] = 0;
                }
                tD[t[i]]++;
            }

            int c1 = 0;
            int tLen = 0;
            foreach (var (k, v) in sD)
            {
                if (tD.ContainsKey(k))
                {
                    if (v > tD[k])
                    {
                        c1 += v - tD[k];
                        tLen += v;
                    }
                    else
                    {
                        tLen += v;
                    }
                }
            }
            c1 += n - tLen;

            int c2 = 0;
            int sLen = 0;
            foreach (var (k, v) in tD)
            {
                if (sD.ContainsKey(k))
                {
                    if (v > sD[k])
                    {
                        c2 += v - sD[k];
                        sLen += v - sD[k];
                    }
                    else
                    {
                        sLen += v;
                    }
                }
            }
            c2 += n - sLen;

            return Math.Min(c1, c2);
        }
    }
}
