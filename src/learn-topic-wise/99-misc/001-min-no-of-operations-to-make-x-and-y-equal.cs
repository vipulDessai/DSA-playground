// problem - https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/description/

namespace learning_dsa_csharp._19_misc._001_min_ops_make_x_y_equal
{
    internal class MySoln
    {
        public int MinimumOperationsToMakeEqual(int x, int y)
        {
            int[] m = new int[10011];
            Array.Fill(m, -1);
            var input = Math.Max(x, y);
            var target = Math.Min(x, y);

            int minOpsCount(int cur)
            {
                if (cur <= y)
                {
                    return y - cur;
                }

                if (m[cur] != -1)
                    return m[cur];

                var res = int.MaxValue;
                if (cur % 11 == 0)
                {
                    res = Math.Min(res, 1 + minOpsCount(cur / 11));
                }
                else
                {
                    // increment operation
                    int c = (11 - (cur % 11));
                    res = Math.Min(res, 1 + c + minOpsCount((cur + c) / 11));
                }

                if (cur % 5 == 0)
                {
                    res = Math.Min(res, 1 + minOpsCount(cur / 5));
                }
                else
                {
                    // increment operation
                    int c = (5 - (cur % 5));
                    res = Math.Min(res, 1 + c + minOpsCount((cur + c) / 5));
                }

                res = Math.Min(res, 1 + minOpsCount(cur - 1));

                m[cur] = res;
                return res;
            }

            var r = minOpsCount(x);
            return r == int.MaxValue ? -1 : r;
        }
    }

    // solution - https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4518268/simple-bfs-with-complete-intution-c-java-python
    internal class OthersSoln
    {
        private int[] dp;

        public int solve(int x, int y)
        {
            if (x <= y)
                return y - x;
            if (dp[x] != -1)
                return dp[x];
            int res = Math.Abs(x - y);
            res = Math.Min(res, 1 + x % 5 + solve(x / 5, y));
            res = Math.Min(res, 1 + (5 - x % 5) + solve(x / 5 + 1, y));
            res = Math.Min(res, 1 + x % 11 + solve(x / 11, y));
            res = Math.Min(res, 1 + (11 - x % 11) + solve(x / 11 + 1, y));
            return dp[x] = res;
        }

        public int MinimumOperationsToMakeEqual(int x, int y)
        {
            dp = new int[10011];
            Array.Fill(dp, -1);
            return solve(x, y);
        }
    }
}
