namespace learning_dsa_csharp._01_strings_arrays_hash._040_product_of_array_except_itself
{
    internal class MySoln
    {
        public int[] ProductExceptSelf(int[] nums)
        {
            int n = nums.Length;

            int preF = 1,
                postF = 1;

            int[] res = new int[n];
            for (int i = 0; i < n; ++i)
            {
                res[i] = preF;
                preF *= nums[i];
            }

            for (int i = n - 1; i >= 0; --i)
            {
                res[i] *= postF;
                postF *= nums[i];
            }

            return res;
        }
    }
}
