namespace learning_dsa_csharp._18_segment_tree
{
    internal class SegmentTree
    {
        public static void Main(string[] args)
        {
            var s = new SegmentTree();

            s.RangeSumQuery();
        }

        private void RangeSumQuery()
        {
            var s = new _001_range_sum_query.NumArray([]);

            var r = s.SumRange(0, 0);

            Console.WriteLine(r);
        }
    }
}
