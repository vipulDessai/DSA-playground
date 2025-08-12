namespace learning_dsa_csharp._01_strings_arrays_hash._004_zigzag_conversion
{
    internal class Solution
    {
        public string Convert(string s, int numRows)
        {
            if (numRows == 1 || numRows == s.Length || numRows > s.Length)
            {
                return s;
            }

            string res = "";

            int m = (numRows - 1) * 2;
            for (int i = 0; i < s.Length; ++i)
            {
                if (i % m == 0)
                {
                    res += s[i];
                }
            }

            int l = 1;
            bool f = true;

            int len = m;
            int multiplier = 1;
            while (len < s.Length)
            {
                len = len * multiplier;

                ++multiplier;
            }
            len += 1;

            do
            {
                int prevIndex = 0;
                for (int i = 0; i < len; ++i)
                {
                    if (i % m == 0)
                    {
                        if (prevIndex + l == i - l)
                        {
                            f = false;
                        }

                        // if flag f is true that means its not the last iteration
                        if (f)
                        {
                            if (i - l > 0 && i - l < s.Length)
                            {
                                res += s[i - l];
                            }

                            if (i + l < s.Length)
                            {
                                res += s[i + l];
                            }
                        }
                        // for last iteration only single char from the input string will be
                        // picked up
                        else
                        {
                            if (i + l < s.Length)
                            {
                                res += s[i + l];
                            }
                        }

                        prevIndex = i;
                    }
                }

                ++l;
            } while (f);

            return res;
        }
    }
}
