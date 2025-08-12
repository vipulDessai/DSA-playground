namespace learning_dsa_csharp._01_strings_arrays_hash._042_insert_interval
{
    public class OthersSoln
    {
        public int[][] Insert(int[][] intervals, int[] newInterval)
        {
            List<int[]> result = new List<int[]>();

            // Iterate through intervals and add non-overlapping intervals before newInterval
            int i = 0;
            while (i < intervals.Length && intervals[i][1] < newInterval[0])
            {
                result.Add(intervals[i]);
                i++;
            }

            // Merge overlapping intervals
            while (i < intervals.Length && intervals[i][0] <= newInterval[1])
            {
                newInterval[0] = Math.Min(newInterval[0], intervals[i][0]);
                newInterval[1] = Math.Max(newInterval[1], intervals[i][1]);
                i++;
            }

            // Add merged newInterval
            result.Add(newInterval);

            // Add non-overlapping intervals after newInterval
            while (i < intervals.Length)
            {
                result.Add(intervals[i]);
                i++;
            }

            return result.ToArray();
        }
    }
}
