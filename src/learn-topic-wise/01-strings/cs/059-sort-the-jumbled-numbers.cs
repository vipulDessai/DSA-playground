// https://leetcode.com/problems/sort-array-by-increasing-frequency/
namespace learning_dsa_csharp._059_sort_the_jumbled_numbers
{
    internal class MySoln
    {
        public int[] SortJumbled(int[] mapping, int[] nums)
        {
            int n = nums.Length;

            (int Num, int MapVal)[] numMap = new (int, int)[n];
            for (int i = 0; i < n; ++i)
            {
                int cur = nums[i];

                int mappedCur = 0;
                int j = 0;
                while (cur >= 0)
                {
                    int endDigit = cur % 10;
                    int mappedVal = mapping[endDigit];
                    j = j * 10;

                    if (j == 0)
                    {
                        j = 1;
                        mappedCur = mappedVal;
                    }
                    else
                    {
                        mappedCur += j * mappedVal;
                    }

                    cur /= 10;

                    if (cur == 0)
                    {
                        break;
                    }
                }

                numMap[i] = (nums[i], mappedCur);
            }

            Array.Sort(numMap, (a, b) => a.MapVal.CompareTo(b.MapVal));

            int[] res = new int[n];
            for (int i = 0; i < n; ++i)
            {
                res[i] = numMap[i].Num;
            }
            return res;
        }
    }
}
