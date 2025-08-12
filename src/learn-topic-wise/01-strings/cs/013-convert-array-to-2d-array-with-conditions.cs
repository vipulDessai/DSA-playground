using System.Collections.Generic;

namespace learning_dsa_csharp._01_strings_arrays_hash._013_convert_array_to_2d_array_with_conditions
{
    internal class Solution
    {
        public IList<IList<int>> FindMatrix(int[] nums)
        {
            List<IList<int>> res = new List<IList<int>>() { new List<int>() { nums[0] } };

            for (int i = 1; i < nums.Length; i++)
            {
                int j = 0;
                while (j < res.Count)
                {
                    var curRow = res[j];

                    if (!curRow.Contains(nums[i]))
                    {
                        curRow.Add(nums[i]);
                        break;
                    }
                    ;

                    if (j == res.Count - 1)
                    {
                        res.Add(new List<int>());
                    }

                    j++;
                }
            }

            return res;
        }
    }
}
