// https://leetcode.com/problems/isomorphic-strings
namespace learning_dsa_csharp._01_strings_arrays_hash._046_isomorphic_strings
{
    // https://leetcode.com/problems/isomorphic-strings/solutions/2472118/very-easy-100-fully-explained-java-c-python-javascript-python3-using-hashmap
    internal class OthersSoln
    {
        public bool IsIsomorphic(string s, string t)
        {
            int[] m1 = new int[256];
            int[] m2 = new int[256];
            // Traverse all elements through the loop...
            for (int i = 0; i < s.Length; ++i)
            {
                // Compare the maps, if not equal, return false...
                if (m1[s[i]] != m2[t[i]])
                    return false;

                // Insert each character if string s and t into seperate map...
                m1[s[i]] = i + 1;
                m2[t[i]] = i + 1;
            }

            return true;
        }
    }
}
