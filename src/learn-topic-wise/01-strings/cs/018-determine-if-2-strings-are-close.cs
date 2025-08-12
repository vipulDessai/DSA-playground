namespace learning_dsa_csharp._01_strings_arrays_hash._018_determine_if_2_strings_are_close
{
    internal class Solution_of_my_own
    {
        public bool CloseStrings(string word1, string word2)
        {
            if (word1.Length != word2.Length)
                return false;

            int n = word1.Length;

            int[] w1 = new int[26];
            int[] w2 = new int[26];
            for (int i = 0; i < n; ++i)
            {
                w1[word1[i] - 'a']++;
                w2[word2[i] - 'a']++;
            }

            // there should be at least one common char between the 2
            for (int i = 0; i < w1.Length; ++i)
            {
                if (w1[i] > 0)
                {
                    if (w2[i] == 0)
                    {
                        return false;
                    }
                }

                if (w2[i] > 0)
                {
                    if (w1[i] == 0)
                    {
                        return false;
                    }
                }
            }

            for (int i = 0; i < w1.Length; ++i)
            {
                if (w1[i] > 0)
                {
                    bool cExists = false;
                    for (int j = 0; j < w2.Length; ++j)
                    {
                        if (w2[j] == w1[i])
                        {
                            w2[j] = 0;
                            cExists = true;
                            break;
                        }
                    }

                    if (!cExists)
                    {
                        return false;
                    }
                }
            }

            return true;
        }
    }
}
