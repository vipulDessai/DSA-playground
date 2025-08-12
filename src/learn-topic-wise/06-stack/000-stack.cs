namespace learning_dsa_csharp._04_stack
{
    internal class DS
    {
        public static void Main(string[] args)
        {
            var ds = new DS();

            // ds.MonotonicStackNextGreaterElem();

            // ds.SumOfSubarrayMinimums();

            // ds.DailyTemperature();

            //ds.CrawlerLogFolder();

            ds.MaximumScoreFromRemovingSubstring();
        }

        private void MonotonicStackNextGreaterElem()
        {
            var s = new _001_monotonic_stack_next_greater_element.MonotonicStackApproach();

            int[] inArr = [3, 2, 5, 6, 1];
            inArr = [5, 10, 6, 8];

            var (r, l) = s.NextGraeterElem(inArr);

            for (int i = 0; i < r.Length; i++)
            {
                Console.WriteLine(r[i]);
            }
            Console.WriteLine();
            for (int i = 0; i < l.Length; i++)
            {
                Console.WriteLine(l[i]);
            }

            var s1 = new _001_monotonic_stack_next_greater_element.MySolnNextGreaterElement();
            int[] a1 = [137, 59, 92, 122, 52, 131, 79, 236, 94, 171];
            int[] a2 = [137, 59, 92, 122, 52, 131, 79, 236, 94, 171];

            var res = s1.NextGreaterElement(a1, a2);
            Console.WriteLine(res);
        }

        private void SumOfSubarrayMinimums()
        {
            //var s = new _002_sum_of_subarry_minimums.MySolnBruteForce();
            var s = new _002_sum_of_subarry_minimums.StackSolutionO_N();

            var inArr = new int[] { 3, 1, 2, 4 };
            //inArr = new int[] { 11, 81, 94, 43, 3 };

            var r = s.SumSubarrayMins(inArr);

            Console.WriteLine(r);
        }

        private void DailyTemperature()
        {
            var s = new _004_daily_temperature.MySoln();

            var inArr = new int[] { 373, 74, 75, 71, 69, 72, 76, 73 };

            var r = s.DailyTemperatures(inArr);

            Console.WriteLine(r);
        }

        private void CrawlerLogFolder()
        {
            var s = new _005_crawler_log_folder.MySoln();

            string[] inArr = ["d1/", "d2/", "./", "d3/", "../", "d31/"];

            var r = s.MinOperations(inArr);

            Console.WriteLine(r);
        }

        private void MaximumScoreFromRemovingSubstring()
        {
            var s = new _006_maximum_score_from_removing_substrings.OthersSoln();

            string inStr = "cdbcbbaaabab";
            int x = 6,
                y = 5;

            var r = s.MaximumGain(inStr, x, y);

            Console.WriteLine(r);
        }
    }
}
