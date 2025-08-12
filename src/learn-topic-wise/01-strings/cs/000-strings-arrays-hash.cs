using System.Text;

namespace learning_dsa_csharp._01_strings_arrays_hash
{
    internal class StringsArraysHash
    {
        public static void Main(string[] args)
        {
            var s = new StringsArraysHash();

            // min moves to make palindrome
            // s.MinMoveToMakePalindrome();

            // word break 2
            // leet code - https://leetcode.com/problems/word-break-ii/description/
            // solution - https://leetcode.com/problems/word-break-ii/solutions/44243/java-dp-dfs-memoization-dfs-and-dp-pruning-solutions-with-analysis/
            // s.WordBreakII();

            // word break
            // leet code - https://leetcode.com/problems/word-break/
            // solution - https://www.youtube.com/watch?v=Sx9NNgInc3A
            //s.WordBreak();

            // zigzag conversion
            // problem - https://leetcode.com/problems/zigzag-conversion/
            // solution - own
            //s.ZigZapConversion();

            // Maximum Product Subarray
            // problem - https://leetcode.com/problems/maximum-product-subarray/description/
            // solution - own
            //s.MaximumProductSubarray();

            // Expressive Words
            // problem - https://leetcode.com/problems/expressive-words/description/
            // solution - own
            //s.ExpressiveWords();

            // Path Crossing
            // problem - https://leetcode.com/problems/path-crossing/description/
            // solution - own
            //s.IsPathCrossing();

            //s.FindPolygonWithLargestPerimeter();

            // 1758. Minimum Changes To Make Alternating Binary String
            // problem - https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/description
            // solution - own
            //s.MinChngesToMakeStringAlt();

            // problem - https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/
            // solution - own
            //s.RedistributeCharactersMakeAllStringsEqual();

            // problem - https://leetcode.com/problems/largest-substring-between-two-equal-characters/
            // solution - own
            //s.LargestSubstringBetweenTwoEqualCharacters();

            // problem - https://leetcode.com/problems/assign-cookies/description/
            // solution - own
            //s.AssignCookies();

            // problem - https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/
            // solution - own
            //s.ConvertAnArrayInto2DArrayWithConditions();

            // problem - https://leetcode.com/problems/number-of-laser-beams-in-a-bank/
            // solution - own
            //s.NumberLaserBeamsBank();

            // problem - https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/
            // solution - own
            //s.MinimumNumberOperationsMakeArrayEmpty();

            // solution - https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/description/
            // solution - own
            //s.SmallestMissingIntegerGreaterThanSequentialPrefixSum();

            // problem - https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/
            //s.MinimumStepsToMake2StringsAnagram();

            // problem - https://leetcode.com/problems/determine-if-two-strings-are-close/?envType=daily-question&envId=2024-01-14
            //s.DetermineIfTwoStringsAreClose();

            // problem - https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/
            //s.CountTheNumberOfIncremovableSubArrays1();

            // problem - https://leetcode.com/problems/find-players-with-zero-or-one-losses/
            //s.FindPlayersWith0or1Losses();

            // https://leetcode.com/problems/insert-delete-getrandom-o1/
            //s.InsertDeleteGetRandomO1();

            // https://leetcode.com/problems/minimum-falling-path-sum/
            //s.MinFallingPathSum();

            // https://leetcode.com/problems/minimize-length-of-array-using-operations/description/
            //s.MinimizeArrayUsingModOperation();

            //s.FindMinAndMissing();

            //s.MaximumLenghtOfAContenatedStringWithUniqueCharacters();

            //s.LongestConsecutiveSequnce();

            //s.DivideArrayIntoSubarrayWithMinimumCost1();

            //s.KInversePairsArray();

            // s.EvaluateReversePolishNotation();

            // s.DivideArrayIntoArraysWithMaxDifference();

            // s.GroupAnagram();

            // s.FirstPlaindrome();

            // s.RearrangeArrayElementsBySign();

            //s.LeastNumUniqueIntAfterKRemovals();

            //s.FurthestBuildingYouCanReach();

            //s.SortCharactorsByFrequency();

            //s.MaximumOddBinaryNumber();

            //s.IntersectionOf2Arrays();

            //s.BinarySubarrayWithSum();

            //s.ProductOfArrayExceptItself();

            //s.ContinousArrayOf0And1();

            //s.InsertInterval();

            //s.MinNoOfArrowToBurstBalloons();

            //s.TaskScheduler();

            //s.FindALlTheDuplicatesInAnArray();

            //s.IsomorphicStrings();

            //s.WordSearch();

            //s.RevealCardsInIncreasingOrder();

            //s.RemoveKDigits();

            //s.SubarrayProductLessThanK();

            //s.NumberOfWonderfulSubstrings();

            //s.CompareVersionNumbers();

            //s.BoatsToSavePeople();

            //s.MaximizeHappinessOfSelectedChildren();

            //s.LargestLocalValuesInMatrix();

            //s.RelativeRanks();

            // s.CustomSortString();

            // s.SortArrayByIncFreq();

            //s.SortJumbledNumbers();

            //s.MinCostToConvertStringI();

            //s.CountNumOfSoldiers();

            //s.LongestConsecutiveSequence();

            // s.PonyExpressRiders();

            // s.RangeSumOfSortedSubArraySums();

            //s.MinNumOfPushToTypeWordII();

            //s.SpiralMatrix();

            s.KthLargestElemInStream();
        }

        private void MinMoveToMakePalindrome()
        {
            var s = new _001_min_move_to_make_palindrome.Solution();
            var c = s.MinMovesToMakePalindrome("letelt");

            Console.WriteLine(c);
        }

        private void WordBreak()
        {
            var s = new _002_word_break.Solution();
            var result = s.WordBreak("leetcode", new List<string>() { "leet", "codes" });

            Console.WriteLine(result);
        }

        private void WordBreakII()
        {
            var s = new _003_word_break_2.Solution();
            //var result = s.WordBreak("catsanddog", new List<string>() { "cat", "cats", "and", "sand", "dog" });
            var result = s.WordBreak(
                "pineapplepenapple",
                new List<string>() { "apple", "pen", "applepen", "pine", "pineapple" }
            );
            //var result = s.WordBreak("catsandog", new List<string>() { "cat", "cats", "and", "sand", "dog" });

            Console.WriteLine(result);
        }

        private void ZigZapConversion()
        {
            var s = new _004_zigzag_conversion.Solution();

            var input = "PAYPALISHIRING";
            input = "ABCDEFGHIJKLNOPQURSTUVWXYZ";
            input = "ABCD";
            input = "PAYPALISHIRING";

            var res = s.Convert(input, 5);
            Console.WriteLine(res);
        }

        private void MaximumProductSubarray()
        {
            var s = new _005_maximum_product_subarray.Solution();

            var input = new int[] { 2, 3, -2, 4 };
            input = new int[] { -2, 0, -1 };
            input = new int[] { -3, -1, -1 };
            input = new int[] { 0, 2 };
            input = new int[] { -2, 0 };
            //input = new int[] { 3, -1, 4 };
            //input = new int[] { -2, 3, -4 };    // expected is 24
            input = new int[] { 2, -5, -2, -4, 3 };
            input = new int[] { -1, -2, -3, 0 };
            var res = s.MaxProduct(input);

            Console.WriteLine(res);
        }

        private void ExpressiveWords()
        {
            var s = new _006_expressive_words.Solution();

            string sInput = "heeellooo";
            string[] words = new string[] { "hello", "hi", "helo" };

            //sInput = "zzzzzyyyyy";
            //words = new string[] { "zzyy", "zy", "zyy" };

            //sInput = "sasa";
            //words = new string[] { "sa" };

            var res = s.ExpressiveWords(sInput, words);

            Console.WriteLine(res);
        }

        private void IsPathCrossing()
        {
            var s = new _007_is_path_crossing.Solution();

            string sInput = "NNSWWEWSSESSWENNW";
            sInput = "NNNNEESSWW";

            var res = s.IsPathCrossing(sInput);

            Console.WriteLine(res);
        }

        private void FindPolygonWithLargestPerimeter()
        {
            var s = new _008_find_polygon_with_largest_perimeter.MySoln();
            //var res = s.LargestPerimeter(new int[] { 1, 12, 1, 2, 5, 50, 3 });
            //var res = s.LargestPerimeter(new int[] { 2, 2, 3 });
            //var res = s.LargestPerimeter(new int[] { 5, 5, 50 });

            var res = s.LargestPerimeter(
                [
                    300005055,
                    352368231,
                    311935527,
                    315829776,
                    327065463,
                    388851949,
                    319541150,
                    397875604,
                    311309167,
                    391897750,
                    366860048,
                    359976490,
                    325522439,
                    390648914,
                    359891976,
                    369105322,
                    350430086,
                    398592583,
                    354559219,
                    372400239,
                    344759294,
                    379931363,
                    308829137,
                    335032174,
                    336962933,
                    380797651,
                    378305476,
                    336617902,
                    393487098,
                    301391791,
                    394314232,
                    387440261,
                    316040738,
                    388074503,
                    396614889,
                    331609633,
                    374723367,
                    380418460,
                    349845809,
                    318514711,
                    308782485,
                    308291996,
                    375362898,
                    397542455,
                    397628325,
                    392446446,
                    368662132,
                    378781533,
                    372327607,
                    378737987
                ]
            );

            Console.WriteLine(res);
        }

        private void MinChngesToMakeStringAlt()
        {
            var s = new _009_min_changes_to_make_alternating_binary_str.Solution();

            var sInput = "010";
            sInput = "01101";
            var r = s.MinOperations(sInput);

            Console.WriteLine(r);
        }

        private void RedistributeCharactersMakeAllStringsEqual()
        {
            var s = new _010_redistribute_chars_make_all_strings_equal.Solution();

            var sInput = new string[] { "abc", "aabc", "bc" };
            var r = s.MakeEqual(sInput);

            Console.WriteLine(r);
        }

        private void LargestSubstringBetweenTwoEqualCharacters()
        {
            var s = new _011_largest_substring_btw_2_equal_chars.Solution();

            var sInput = "avzcdefghizxywzvabcdv";
            var r = s.MaxLengthBetweenEqualCharacters(sInput);

            Console.WriteLine(r);
        }

        private void AssignCookies()
        {
            var s = new _012_assign_cookies.Solution();

            var gIn = new int[] { 3, 4, 5 };
            var sIn = new int[] { 3, 1, 1, 1 };

            gIn = new int[] { 1, 2 };
            sIn = new int[] { 1, 2, 3 };

            var r = s.FindContentChildren(gIn, sIn);
            Console.WriteLine(r);
        }

        private void ConvertAnArrayInto2DArrayWithConditions()
        {
            var s = new _013_convert_array_to_2d_array_with_conditions.Solution();

            var inArr = new int[] { 1, 3, 1, 2, 3, 1 };
            inArr = new int[] { 1, 2, 3, 4 };
            //inArr = new int[] { 2, 1, 1 };

            var r = s.FindMatrix(inArr);

            Console.WriteLine(r);
        }

        private void NumberLaserBeamsBank()
        {
            var s = new _014_no_of_laser_beams_in_a_bank.Solution();

            var inArr = new string[] { "011001", "000000", "010100", "001001" };

            var r = s.NumberOfBeams(inArr);

            Console.WriteLine(r);
        }

        private void MinimumNumberOperationsMakeArrayEmpty()
        {
            var s = new _015_min_no_ops_to_make_array_empty.Solution();

            var inArr = new int[] { 2, 3, 3, 2, 2, 4, 2, 3, 4 };
            // inArr = new int[] { 2, 1, 2, 2, 3, 3 };
            // inArr = new int[]
            // {
            //     14,
            //     12,
            //     14,
            //     14,
            //     12,
            //     14,
            //     14,
            //     12,
            //     12,
            //     12,
            //     12,
            //     14,
            //     14,
            //     12,
            //     14,
            //     14,
            //     14,
            //     12,
            //     12
            // };

            var r = s.MinOperations_my_own_counting(inArr);

            Console.WriteLine(r);
        }

        private void SmallestMissingIntegerGreaterThanSequentialPrefixSum()
        {
            var s = new _016_smallest_missing_integer_gte_sequential_prefix_sum.Solution();

            var inArr = new int[] { 14, 9, 6, 9, 7, 9, 10, 4, 9, 9, 4, 4 };
            var r = s.MissingInteger(inArr);

            Console.WriteLine(r);
        }

        private void MinimumStepsToMake2StringsAnagram()
        {
            var s = new _017_min_number_of_steps_to_make_2_strings_anagram.Solution();

            var s1 = "bab";
            var s2 = "aba";

            var r = s.MinSteps(s1, s2);

            Console.WriteLine(r);
        }

        private void DetermineIfTwoStringsAreClose()
        {
            var s = new _018_determine_if_2_strings_are_close.Solution_of_my_own();

            var s1 = "bab";
            var s2 = "aba";

            var r = s.CloseStrings(s1, s2);

            Console.WriteLine(r);
        }

        private void CountTheNumberOfIncremovableSubArrays1()
        {
            var s = new _019_count_incremovable_subarray_i.SolutionMyOwn_brute_force_optimized();

            var intArr = new int[] { 1, 2, 3, 4 };

            var r = s.IncremovableSubarrayCount(intArr);

            Console.WriteLine(r);
        }

        private void FindPlayersWith0or1Losses()
        {
            var s = new _020_find_players_with_0_or_1_losses.MyOwnSolution_bruteForce_optimized();

            var intArr = new int[][]
            {
                new int[] { 1, 2, 3, 4 },
                new int[] { 1, 2, 3, 4 },
                new int[] { 1, 2, 3, 4 },
                new int[] { 1, 2, 3, 4 },
            };

            var r = s.FindWinners(intArr);
            Console.WriteLine(r);
        }

        private void InsertDeleteGetRandomO1()
        {
            //var s = new _021_insert_delete_get_random.RandomizedSet();

            // TODO: use the input
            //["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
            //[[],[1],[2],[2],[],[1],[2],[]]
        }

        private void MinFallingPathSum()
        {
            var s = new _022_min_falling_path_sum.MySolnBottomUp();

            var intArr = new int[][]
            {
                new int[] { 2, 1, 3 },
                new int[] { 6, 4, 9 },
                new int[] { 7, 8, 5 },
            };

            var r = s.MinFallingPathSum(intArr);

            Console.WriteLine(r);
        }

        private void MinimizeArrayUsingModOperation()
        {
            var s = new _023_minimize_array_using_mod_operation.MyOwnSoln();

            var intArr = new int[] { 1, 2, 3, 4 };
            var r = s.MinimumArrayLength(intArr);

            Console.WriteLine(r);

            int n = intArr.Length;
            int i = 0;
            List<string> subSets = new List<string>();
            while (i < n)
            {
                StringBuilder c = new StringBuilder();
                for (int j = i; j < n; j++)
                {
                    c.Append(intArr[j].ToString());

                    subSets.Add(c.ToString());
                }

                ++i;
            }
        }

        private void FindMinAndMissing()
        {
            var s = new _024_find_min_and_missing.Find_missing_using_XOR_and_duplicate_using_SET();

            var intArr = new int[] { 1, 5, 3, 2, 2, 7, 6, 4, 8, 9 };
            var r = s.FindErrorNums(intArr);

            Console.WriteLine(r);
        }

        private void MaximumLenghtOfAContenatedStringWithUniqueCharacters()
        {
            var s =
                new _025_max_length_of_a_concatenated_str_with_unique_chars.Soln_Bit_manipulation();

            List<string> inArr = new List<string>() { "un", "iq", "ue" };

            var r = s.MaxLength(inArr);

            Console.WriteLine(r);
        }

        private void LongestConsecutiveSequnce()
        {
            var s = new _026_longest_consecutive_sequence.MySoln();

            var intArr = new int[] { 100, 4, 200, 1, 3, 2 };

            var r = s.LongestConsecutive(intArr);

            Console.WriteLine(r);
        }

        private void DivideArrayIntoSubarrayWithMinimumCost1()
        {
            var s = new _027_divide_array_into_subarrays_with_min_cost_i.Soln();

            var intArr = new int[] { 100, 4, 200, 1, 3, 2 };

            var r = s.MinimumCost(intArr);

            Console.WriteLine(r);
        }

        private void KInversePairsArray()
        {
            var s = new _028_k_inverse_pairs_array.MySoln();

            var r = s.KInversePairs(0, 0);

            Console.WriteLine(r);
        }

        private void EvaluateReversePolishNotation()
        {
            var s = new _029_Evaluate_Reverse_Polish_Notation.MySoln();

            var strArr = new string[] { "2", "1", "+", "3", "*" };

            var r = s.EvalRPN(strArr);

            Console.WriteLine(r);
        }

        private void DivideArrayIntoArraysWithMaxDifference()
        {
            var s = new _030_divide_array_into_arrays_with_max_difference.MySoln();

            var strArr = new int[] { 1, 3, 4, 8, 7, 9, 3, 5, 1 };
            int k = 2;

            var r = s.DivideArray(strArr, k);

            Console.WriteLine(r);
        }

        private void GroupAnagram()
        {
            // var s = new _031_group_anagram.MySoln();
            var s = new _031_group_anagram.OthersSoln();

            var strArr = new string[] { "eat", "tea", "tan", "ate", "nat", "bat" };

            var r = s.GroupAnagrams(strArr);

            Console.WriteLine(r);
        }

        private void FirstPlaindrome()
        {
            var s = new _032_first_palindrome.MySoln();
            var r = s.FirstPalindrome(
                [
                    "ujvoejixvaioikkwzxgtmkchckrigfejjpheiiehpjjefgirkchckmtgxzwkkioiavxijeovju",
                    "pop"
                ]
            );

            Console.WriteLine(r);
        }

        private void RearrangeArrayElementsBySign()
        {
            var s = new _033_rearrange_array_elements_by_sign.MySoln();
            var r = s.RearrangeArray([3, 1, -2, -5, 2, -4]);

            Console.WriteLine(r);
        }

        private void LeastNumUniqueIntAfterKRemovals()
        {
            var s = new _034_least_number_of_unique_integers_after_k_removals.MySoln();
            var r = s.FindLeastNumOfUniqueInts([4, 3, 1, 1, 3, 3, 2], 3);

            Console.WriteLine(r);
        }

        private void FurthestBuildingYouCanReach()
        {
            var s = new _035_furthest_building_you_can_reach.MySoln();

            var r = s.FurthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 1);

            Console.WriteLine(r);
        }

        private void SortCharactorsByFrequency()
        {
            var s = new _036_sort_char_by_frequency.MySoln();

            var r = s.FrequencySort("tree");

            Console.WriteLine(r);
        }

        private void MaximumOddBinaryNumber()
        {
            var s = new _037_maximum_odd_binary_number.OthersSoln();
            var r = s.MaximumOddBinaryNumber("010");
            Console.WriteLine(r);
        }

        private void IntersectionOf2Arrays()
        {
            var s = new _038_intersection_of_2_arrays.MySoln();
            int[] n1 = [4, 9, 5];
            int[] n2 = [9, 4, 9, 8, 4];
            var r = s.Intersection(n1, n2);
            Console.WriteLine(r);
        }

        private void BinarySubarrayWithSum()
        {
            var s = new _039_binary_subarray_with_sum.MySoln();
            int[] nums = [1, 0, 1, 0, 1];
            int g = 2;
            var r = s.NumSubarraysWithSum(nums, g);
            Console.WriteLine(r);
        }

        private void ProductOfArrayExceptItself()
        {
            var s = new _040_product_of_array_except_itself.MySoln();
            int[] nums = [1, 2, 3, 4];
            var r = s.ProductExceptSelf(nums);
            Console.WriteLine(r);
        }

        private void ContinousArrayOf0And1()
        {
            var s = new _041_continous_array_of_0_and_1.MySoln();
            int[] nums = [0, 0, 1, 1];
            nums = [0, 0, 1, 0, 0, 0, 1, 1];
            var r = s.FindMaxLength(nums);
            Console.WriteLine(r);
        }

        private void InsertInterval()
        {
            var s = new _042_insert_interval.OthersSoln();
            int[][] nums =
            [
                [1, 3],
                [6, 9]
            ];
            int[] newInterval = [2, 5];
            var r = s.Insert(nums, newInterval);

            Console.WriteLine(r);
        }

        private void MinNoOfArrowToBurstBalloons()
        {
            var s = new _043_minimum_number_of_arrows_to_burst_balloons.MySoln();
            int[][] nums =
            [
                [10, 16],
                [2, 8],
                [1, 6],
                [7, 12]
            ];
            nums =
            [
                [-2147483646, -2147483645],
                [2147483646, 2147483647]
            ];
            var r = s.FindMinArrowShots(nums);

            Console.WriteLine(r);
        }

        private void TaskScheduler()
        {
            var s = new _044_task_scheduler.MySoln();
            char[] input = ['A', 'A', 'A', 'B', 'B', 'B'];
            int n = 2;
            var r = s.LeastInterval(input, n);

            Console.WriteLine(r);
        }

        private void FindALlTheDuplicatesInAnArray()
        {
            var s = new _045_find_all_duplicates_in_an_array.OthersSoln();
            int[] input = [4, 3, 2, 7, 8, 2, 3, 1];
            var r = s.FindDuplicates(input);

            Console.WriteLine(r);
        }

        private void IsomorphicStrings()
        {
            var s = new _046_isomorphic_strings.OthersSoln();

            string s1 = "abcdefghijklmnopqrstuvwxyzva";
            string s2 = "abcdefghijklmnopqrstuvwxyzck";
            var r = s.IsIsomorphic(s1, s2);

            Console.WriteLine(r);
        }

        private void WordSearch()
        {
            var s = new _047_word_search.MySoln();

            char[][] input =
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E']
            ];
            string w = "ABCCED";
            var r = s.Exist(input, w);

            Console.WriteLine(r);
        }

        private void RevealCardsInIncreasingOrder()
        {
            var s = new _048_reveal_cards_in_increasing_order.MySoln();

            int[] inArr = [17, 13, 11, 2, 3, 5, 7];
            var r = s.DeckRevealedIncreasing(inArr);

            Console.WriteLine(r);
        }

        private void RemoveKDigits()
        {
            var s = new _049_remove_k_digits.MySoln();

            var inStr = "1432219";
            int k = 3;
            var r = s.RemoveKdigits(inStr, k);

            Console.WriteLine(r);
        }

        private void SubarrayProductLessThanK()
        {
            var s = new _050_subarray_product_less_than_k.OthersSoln();

            int[] inArr = [10, 5, 2, 6];
            int k = 100;
            var r = s.NumSubarrayProductLessThanK(inArr, k);

            Console.WriteLine(r);
        }

        private void NumberOfWonderfulSubstrings()
        {
            var s = new _051_number_of_wonderful_substrings.OthersSoln();

            string input = "aba";
            var r = s.WonderfulSubstrings(input);

            Console.WriteLine(r);
        }

        private void CompareVersionNumbers()
        {
            var s = new _052_compare_version_numbers.OthersSoln();

            string input1 = "1.01";
            string input2 = "1.001";
            var r = s.CompareVersion(input1, input2);

            Console.WriteLine(r);
        }

        private void BoatsToSavePeople()
        {
            var s = new _053_boats_to_save_people.OthersSoln();

            int[] input = [3, 2, 2, 1];
            int l = 3;
            var r = s.NumRescueBoats(input, l);

            Console.WriteLine(r);
        }

        private void MaximizeHappinessOfSelectedChildren()
        {
            var s = new _054_maximize_happiness_of_selected_children.OthersSoln();

            int[] input = [2, 3, 4, 5];
            int k = 2;
            var r = s.MaximumHappinessSum(input, k);

            Console.WriteLine(r);
        }

        private void LargestLocalValuesInMatrix()
        {
            var s = new _055_largest_local_values_in_a_matrix.MySoln();

            int[][] input =
            [
                [9, 9, 8, 1],
                [5, 6, 2, 6],
                [8, 2, 6, 4],
                [6, 2, 2, 2]
            ];
            var r = s.LargestLocal(input);

            Console.WriteLine(r);
        }

        private void RelativeRanks()
        {
            var s = new _056_relative_ranks.OthersSoln();

            int[] input = [5, 4, 3, 2, 1];
            var r = s.FindRelativeRanks(input);

            Console.WriteLine(r);
        }

        private void CustomSortString()
        {
            var s = new _057_custom_sort_string.MySoln();

            string order = "cba";
            string sInput = "abcd";

            order = "kqep";
            sInput = "pekeq";

            var r = s.CustomSortString(order, sInput);

            Console.WriteLine(r);
        }

        private void SortArrayByIncFreq()
        {
            var s = new _058_sort_array_by_increasing_frequency.MySoln();

            // TODO: fails for this case expected is - [2,1,-6,-2,-2,-2,-3,-3,-3], i.e. -2, -3
            int[] nums = [-3, -6, -2, 2, -2, -3, -3, 1, -2];

            var r = s.FrequencySort(nums);

            Console.WriteLine(r);
        }

        private void SortJumbledNumbers()
        {
            var s = new _059_sort_the_jumbled_numbers.MySoln();

            int[] mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6],
                nums = [991, 338, 38];

            mapping = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
            nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            var r = s.SortJumbled(mapping, nums);

            Console.WriteLine(r);
        }

        private void MinCostToConvertStringI()
        {
            var s = new _060_minimum_cost_to_convert_string_i.OthersSoln();

            string source = "abcd",
                target = "acbe";
            char[] original = ['a', 'b', 'c', 'c', 'e', 'd'],
                changed = ['b', 'c', 'b', 'e', 'b', 'e'];
            int[] cost = [2, 5, 5, 1, 2, 20];

            var r = s.MinimumCost(source, target, original, changed, cost);

            Console.WriteLine(r);
        }

        private void CountNumOfSoldiers()
        {
            var s = new _061_count_number_of_teams.OthersSoln();

            int[] rating = [2, 5, 5, 1, 2, 20];

            var r = s.NumTeams(rating);

            Console.WriteLine(r);
        }

        private void LongestConsecutiveSequence()
        {
            var s = new _062_longest_consecutive_sequence.OthersSoln();

            int[] nums = [100, 4, 200, 1, 3, 2];

            var r = s.LongestConsecutive(nums);

            Console.WriteLine(r);
        }

        private void PonyExpressRiders()
        {
            int[] stations = [38, 12, 37, 21, 36, 33, 34, 38, 31, 46, 43];

            var r = _063_count_pony_express_riders.MySoln.Riders(stations);

            Console.WriteLine(r);
        }

        private void RangeSumOfSortedSubArraySums()
        {
            int[] nums = [1, 2, 3, 4];
            int n = 4,
                left = 1,
                right = 5;

            var s = new _064_range_sum_of_sorted_subarray_sums.MySoln();
            var r = s.RangeSum(nums, n, left, right);

            Console.WriteLine(r);
        }

        private void MinNumOfPushToTypeWordII()
        {
            string w = "abcde";
            w = "aabbccddeeffgghhiiiiii";

            var s = new _065_minimum_number_of_pushes_to_type_word_ii.MySoln();
            var r = s.MinimumPushes(w);

            Console.WriteLine(r);
        }

        private void SpiralMatrix()
        {
            int rows = 1,
                cols = 4,
                rStart = 0,
                cStart = 0;

            var s3 = new _066_spiral_matrix_iii.OthersSoln();
            var r3 = s3.SpiralMatrixIII(rows, cols, rStart, cStart);

            Console.WriteLine(r3);

            //// spiral matrix 1
            //int[][] matrix =
            //[
            //    [1, 2, 3],
            //    [4, 5, 6],
            //    [7, 8, 9]
            //];

            //var s1 = new _066_spiral_matrix_i.OthersSoln();
            //var r1 = s1.SpiralOrder(matrix);
            //Console.WriteLine(r1);
        }

        private void KthLargestElemInStream()
        {
            int k = 3;
            int[] nums = [4, 5, 8, 2];
            var s = new _067_kth_largest_element_in_a_stream.OthersSoln_PriorityQueueBased(k, nums);
            int[][] inNums =
            [
                [3],
                [5],
                [10],
                [9],
                [4]
            ];

            List<int> res = new List<int>();
            foreach (var num in inNums)
            {
                res.Add(s.Add(num[0]));
            }

            foreach (var num in res)
            {
                Console.WriteLine(num);
            }
        }
    }
}
