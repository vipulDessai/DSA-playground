﻿// https://leetcode.com/problems/compare-version-numbers/
namespace learning_dsa_csharp._01_strings_arrays_hash._052_compare_version_numbers
{
    // https://leetcode.com/problems/compare-version-numbers/solutions/5104306/c-solution-for-compare-version-numbers-problem
    internal class OthersSoln
    {
        public int CompareVersion(string version1, string version2)
        {
            int i = 0,
                j = 0;

            while (i < version1.Length || j < version2.Length)
            {
                int num1 = 0,
                    num2 = 0;

                while (i < version1.Length && version1[i] != '.')
                {
                    num1 = num1 * 10 + (version1[i] - '0');
                    i++;
                }

                while (j < version2.Length && version2[j] != '.')
                {
                    num2 = num2 * 10 + (version2[j] - '0');
                    j++;
                }

                if (num1 < num2)
                    return -1;
                else if (num1 > num2)
                    return 1;

                i++;
                j++;
            }

            return 0;
        }
    }
}
