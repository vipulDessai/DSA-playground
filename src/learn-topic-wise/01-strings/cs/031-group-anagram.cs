using System.Text;

namespace learning_dsa_csharp._01_strings_arrays_hash._031_group_anagram;

internal class MySoln
{
    public IList<IList<string>> GroupAnagrams(string[] strs)
    {
        int n = strs.Length;

        int[][] cC = new int[n][];
        for (int i = 0; i < n; ++i)
        {
            string cur = strs[i];
            int[] curC = new int[26];
            for (int j = 0; j < cur.Length; ++j)
            {
                curC[cur[j] - 'a']++;
            }

            cC[i] = curC;
        }

        Dictionary<string, IList<string>> m = new Dictionary<string, IList<string>>();
        for (int i = 0; i < n; ++i)
        {
            int[] curC = cC[i];
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < 26; ++j)
            {
                if (curC[j] > 0)
                {
                    char c = (char)(j + 'a');
                    sb.Append(c);
                    sb.Append(curC[j]);
                }
            }

            string sbStr = sb.ToString();

            if (!m.ContainsKey(sbStr))
            {
                m[sbStr] = new List<string>();
            }

            m[sbStr].Add(strs[i]);
        }

        return m.Values.ToList();
    }
}

internal class OthersSoln
{
    public IList<IList<string>> GroupAnagrams(string[] strs)
    {
        int n = strs.Length;

        Dictionary<string, IList<string>> m = new Dictionary<string, IList<string>>();
        for (int i = 0; i < n; ++i)
        {
            string str = strs[i];
            var cur = str.ToCharArray();
            Array.Sort(cur);
            string key = new string(cur);
            if (!m.ContainsKey(key))
            {
                m[key] = new List<string>();
            }
            m[key].Add(str);
        }

        return m.Values.ToList();
    }
}
