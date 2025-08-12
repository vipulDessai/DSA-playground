using System;

namespace learning_dsa_csharp._01_strings_arrays_hash._005_maximum_product_subarray
{
    internal class Solution
    {
        public int MaxProduct(int[] nums)
        {
            // find the max
            int max = nums[0];
            for (int i = 0; i < nums.Length; i++)
            {
                if (nums[i] > max)
                {
                    max = nums[i];
                }
            }

            int curProductLR = 1;
            int maxProductLR = nums[0];
            int curProductRL = 1;
            int maxProductRL = nums[nums.Length - 1];
            for (int i = 0; i < nums.Length; i++)
            {
                // from left to right
                if (curProductLR == 0)
                {
                    curProductLR = nums[i];
                }
                else
                {
                    curProductLR *= nums[i];
                }

                if (curProductLR > maxProductLR)
                {
                    maxProductLR = curProductLR;
                }

                // from right to left
                if (curProductRL == 0)
                {
                    curProductRL = nums[nums.Length - 1 - i];
                }
                else
                {
                    curProductRL *= nums[nums.Length - 1 - i];
                }

                if (curProductRL > maxProductRL)
                {
                    maxProductRL = curProductRL;
                }
            }

            return Math.Max(Math.Max(maxProductLR, maxProductRL), max);
        }
    }
}
