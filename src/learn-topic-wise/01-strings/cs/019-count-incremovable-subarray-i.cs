namespace learning_dsa_csharp._01_strings_arrays_hash._019_count_incremovable_subarray_i
{
    internal class SolutionMyOwn_brute_force
    {
        public int IncremovableSubarrayCount(int[] nums)
        {
            if (nums.Length == 0)
            {
                return 1;
            }

            int res = 0;
            int n = nums.Length;
            for (int i = 0; i < n; ++i)
            {
                for (int j = 0; j < n; ++j)
                {
                    int s = j;
                    int e = j + i;

                    if (e >= n)
                    {
                        break;
                    }

                    bool subInc = true;

                    int prevI = -1;
                    for (int k = 0; k < n; ++k)
                    {
                        if (k < s || k > e)
                        {
                            if (prevI != -1 && nums[k] <= nums[prevI])
                            {
                                subInc = false;
                                break;
                            }

                            prevI = k;
                        }
                    }

                    if (subInc)
                    {
                        res++;
                    }
                }
            }

            return res;
        }
    }

    internal class SolutionMyOwn_brute_force_optimized
    {
        public int IncremovableSubarrayCount(int[] nums)
        {
            if (nums.Length == 0)
            {
                return 1;
            }

            int res = 0;
            int n = nums.Length;
            for (int i = 0; i < n; ++i)
            {
                for (int j = 0; j < n; ++j)
                {
                    int s = j;
                    int e = j + i;

                    if (e >= n)
                    {
                        break;
                    }

                    bool subInc = true;

                    int prevI = -1;
                    for (int k = 0; k < s; ++k)
                    {
                        if (prevI != -1 && nums[k] <= nums[prevI])
                        {
                            subInc = false;
                            break;
                        }

                        prevI = k;
                    }

                    if (!subInc)
                    {
                        continue;
                    }

                    for (int k = e + 1; k < n; ++k)
                    {
                        if (prevI != -1 && nums[k] <= nums[prevI])
                        {
                            subInc = false;
                            break;
                        }

                        prevI = k;
                    }

                    if (subInc)
                    {
                        res++;
                    }
                }
            }

            return res;
        }
    }
}
