// https://leetcode.com/problems/number-of-wonderful-substrings/description
namespace learning_dsa_csharp._01_strings_arrays_hash._051_number_of_wonderful_substrings
{
    // https://leetcode.com/problems/number-of-wonderful-substrings/solutions/1299525/count-bitmasks-with-picture
    internal class OthersSoln
    {
        public long WonderfulSubstrings(string word)
        {
            long[] cnt = new long[1024];
            long res = 0;
            int mask = 0;
            cnt[0] = 1;
            foreach (var ch in word)
            {
                mask ^= 1 << (ch - 'a');
                res += cnt[mask];
                for (var n = 0; n < 10; ++n)
                {
                    int i = mask ^ (1 << n);
                    res += cnt[i];
                }
                ++cnt[mask];
            }
            return res;
        }
    }
}
