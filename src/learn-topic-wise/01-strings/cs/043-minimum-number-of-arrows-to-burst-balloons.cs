namespace learning_dsa_csharp._01_strings_arrays_hash._043_minimum_number_of_arrows_to_burst_balloons
{
    internal class MySoln
    {
        public int FindMinArrowShots(int[][] points)
        {
            int n = points.Length;

            if (n == 1)
                return 1;

            Array.Sort(
                points,
                (a, b) =>
                {
                    return a[1].CompareTo(b[1]);
                }
            );

            int res = 1;
            int i = 0;
            int p = points[0][1];
            while (i < n)
            {
                if (p < points[i][0])
                {
                    ++res;
                    p = points[i][1];
                }

                ++i;
            }

            return res;
        }
    }
}
