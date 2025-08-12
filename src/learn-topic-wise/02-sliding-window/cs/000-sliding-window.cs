namespace learning_dsa_csharp._03_sliding_window
{
    internal class SlidingWindow
    {
        public static void Main(string[] args)
        {
            var s = new SlidingWindow();

            //s.FindAllAngramsInString();

            //s.MaxSumOfDistinctSubArraysWithLengthK();

            //s.FindLongestSemiRepetitiveSubstring();

            //s.SubarrayProductLessThanK();

            //s.LengthOfLongestSubarrayWithAtMostKFrequency();

            //s.CountSubarraysWhereMaxElementAppearsAtLeastKTimes();

            //s.SubarraysWithKDifferentIntegers();

            //s.CountSubarraysWithFixedBounds();

            //s.GrumpyBookstoreOwner();

            //s.CountNumberOfNiceSubarrays();

            //s.LongestContinousSubArrayWithAbsoluteDiffLessThanOrEqToLimit();

            s.MinSwapsGroupAllOnesTogetherII();
        }

        private void FindAllAngramsInString()
        {
            var s = new _001_find_all_anagrams_in_a_string.MySoln();

            var r = s.FindAnagrams("cbaebabacd", "abc");

            Console.WriteLine(r);
        }

        private void MaxSumOfDistinctSubArraysWithLengthK()
        {
            var s = new _002_max_sum_of_distinct_subarrays_with_length_k.MySoln();

            var inArr = new int[] { 1, 5, 4, 2, 9, 9, 9 };
            int k = 3;
            var r = s.MaximumSubarraySum(inArr, k);

            Console.WriteLine(r);
        }

        private void FindLongestSemiRepetitiveSubstring()
        {
            var s = new _003_find_longest_semi_repetitive_substring.OthersSoln();

            var inStr = "52233";
            inStr = "1101234883";
            var r = s.LongestSemiRepetitiveSubstring(inStr);

            Console.WriteLine(r);
        }

        private void SubarrayProductLessThanK()
        {
            var s = new _004_subarray_product_less_than_k.MySoln();
            int[] input = [10, 5, 2, 6];
            int k = 100;
            var r = s.NumSubarrayProductLessThanK(input, k);

            Console.WriteLine(r);
        }

        private void LengthOfLongestSubarrayWithAtMostKFrequency()
        {
            var s = new _005_length_of_longest_subarray_with_at_most_k_frequency.MySoln();
            int[] input = [1, 2, 3, 1, 2, 3, 1, 2];
            int k = 2;
            var r = s.MaxSubarrayLength(input, k);

            Console.WriteLine(r);
        }

        private void CountSubarraysWhereMaxElementAppearsAtLeastKTimes()
        {
            var s = new _006_count_suarrays_where_max_element_appears_at_least_k_times.OthersSoln();
            int[] input = [1, 3, 2, 3, 3];
            int k = 2;
            var r = s.CountSubarrays(input, k);

            Console.WriteLine(r);
        }

        private void SubarraysWithKDifferentIntegers()
        {
            var s = new _007_subarrays_with_k_different_integers.MySoln();
            int[] input = [1, 2, 1, 2, 3];
            int k = 2;

            //input = [1,2,1,3,4];
            //k = 3;

            //input = [2, 1, 2, 1, 2];
            //k = 2;

            var r = s.SubarraysWithKDistinct(input, k);

            Console.WriteLine(r);
        }

        private void CountSubarraysWithFixedBounds()
        {
            var s = new _008_count_subarrays_with_fixed_bounds.MySoln();
            int[] input = [1, 3, 5, 2, 7, 5];
            int minK = 1;
            int maxK = 5;

            //input = [1, 1, 1, 1];
            //minK = 1;
            //maxK = 1;

            var r = s.CountSubarrays(input, minK, maxK);

            Console.WriteLine(r);
        }

        private void GrumpyBookstoreOwner()
        {
            var s = new _009_grumpy_bookstore_owner.OthersSoln();
            int[] customers = [1, 0, 1, 2, 1, 1, 7, 5],
                grumpy = [0, 1, 0, 1, 0, 1, 0, 1];
            int minutes = 3;

            var r = s.MaxSatisfied(customers, grumpy, minutes);

            Console.WriteLine(r);
        }

        private void CountNumberOfNiceSubarrays()
        {
            var s = new _010_count_number_of_nice_subarrays.OthersSoln_at_most();
            int[] nums = [1, 1, 2, 1, 1];
            int k = 3;

            var r = s.NumberOfSubarrays(nums, k);

            Console.WriteLine(r);
        }

        private void LongestContinousSubArrayWithAbsoluteDiffLessThanOrEqToLimit()
        {
            var s =
                new _011_longest_continuous_subarray_with_absolute_diff_less_than_or_equal_to_limit.MySoln();
            int[] nums = [8, 2, 4, 7];
            int l = 3;

            var r = s.LongestSubarray(nums, l);

            Console.WriteLine(r);
        }

        private void MinSwapsGroupAllOnesTogetherII()
        {
            var s = new _012_minimum_swaps_to_group_all_1s_together_ii.OthersSoln();

            int[] nums = [0, 1, 0, 1, 1, 0, 0];

            var r = s.MinSwaps(nums);

            Console.WriteLine(r);
        }
    }
}
