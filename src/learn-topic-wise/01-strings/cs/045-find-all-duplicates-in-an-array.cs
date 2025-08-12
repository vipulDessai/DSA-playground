// https://leetcode.com/problems/find-all-duplicates-in-an-array
namespace learning_dsa_csharp._01_strings_arrays_hash._045_find_all_duplicates_in_an_array
{
    // https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/775798/c-four-solution-o-n-n-to-o-n-explain-all
    internal class OthersSoln
    {
        public IList<int> FindDuplicates(int[] nums)
        {
            IList<int> result = new List<int>();

            foreach (int num in nums)
            {
                int index = Math.Abs(num) - 1;
                if (nums[index] < 0)
                {
                    result.Add(index + 1);
                }
                else
                {
                    nums[index] = -nums[index];
                }
            }

            return result;
        }
    }
}
