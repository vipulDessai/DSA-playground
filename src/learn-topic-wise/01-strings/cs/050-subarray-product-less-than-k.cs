// https://leetcode.com/problems/subarray-product-less-than-k/
namespace learning_dsa_csharp._01_strings_arrays_hash._050_subarray_product_less_than_k
{
    internal class OthersSoln
    {
        public int NumSubarrayProductLessThanK(int[] nums, int k)
        {
            int count = 0;
            int dp_index = 0;
            int sum = 1;
            for (int i = 0; i < nums.Length; i++)
            {
                sum *= nums[i];
                while (sum >= k && dp_index <= i)
                {
                    sum /= nums[dp_index];
                    dp_index++;
                }
                count += (i - dp_index + 1);
            }
            return count;
        }
    }
}
