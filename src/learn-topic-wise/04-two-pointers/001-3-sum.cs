namespace learning_dsa_csharp._02_two_pointers._001_3_sum
{
    internal class MySoln
    {
        public IList<IList<int>> ThreeSum(int[] nums)
        {
            var sortNums = nums.ToList();
            sortNums.Sort((a, b) => a.CompareTo(b));
            nums = sortNums.ToArray();

            List<IList<int>> res = new List<IList<int>>();

            if (nums.Length < 3 || nums[0] > 0)
            {
                return res;
            }

            int n = nums.Length;
            for (int i = 0; i < n; ++i)
            {
                if (nums[i] > 0)
                    break;

                if (i > 0 && nums[i] == nums[i - 1])
                {
                    continue;
                }
                else
                {
                    int l = i + 1,
                        h = n - 1,
                        sum = 0;
                    while (l < h)
                    {
                        sum = nums[i] + nums[l] + nums[h];

                        if (sum > 0)
                        {
                            h--;
                        }
                        else if (sum < 0)
                        {
                            l++;
                        }
                        else
                        {
                            res.Add(new List<int>() { nums[i], nums[l], nums[h] });

                            int ll = nums[l],
                                hh = nums[h];
                            while (l < h && nums[l] == ll)
                            {
                                l++;
                            }
                            while (l < h && nums[h] == hh)
                            {
                                h--;
                            }
                        }
                    }
                }
            }

            return res;
        }
    }
}
