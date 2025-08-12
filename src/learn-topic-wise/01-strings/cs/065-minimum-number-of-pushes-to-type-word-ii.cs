// https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/description
namespace learning_dsa_csharp._01_strings_arrays_hash._065_minimum_number_of_pushes_to_type_word_ii
{
    internal class MySoln
    {
        private int ALPHABETS_COUNT = 27;

        public int MinimumPushes(string word)
        {
            int n = word.Length;

            (char ch, int count)[] letterCount = new (char, int)[ALPHABETS_COUNT];
            for (int i = 0; i < ALPHABETS_COUNT; ++i)
            {
                letterCount[i] = ((char)(i + 'a'), 0);
            }

            for (int i = 0; i < n; ++i)
            {
                var (ch, count) = letterCount[word[i] - 'a'];
                ++count;
                letterCount[word[i] - 'a'] = (ch, count);
            }

            Array.Sort(
                letterCount,
                (a, b) =>
                {
                    var (aCh, aCount) = a;
                    var (bCh, bCount) = b;

                    return bCount.CompareTo(aCount);
                }
            );

            int res = 0;
            int multiplier = 1;
            for (int i = 0; i < ALPHABETS_COUNT; i++)
            {
                if (i != 0 && i % 8 == 0)
                {
                    ++multiplier;
                }

                var (ch, count) = letterCount[i];
                res += multiplier * count;
            }
            return res;
        }
    }
}
