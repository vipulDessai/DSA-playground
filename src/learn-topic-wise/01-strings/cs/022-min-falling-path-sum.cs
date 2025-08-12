namespace learning_dsa_csharp._01_strings_arrays_hash._022_min_falling_path_sum
{
    internal class MySolnTopDown
    {
        public int MinFallingPathSum(int[][] matrix)
        {
            int rLen = matrix.Length;
            int cLen = matrix[0].Length;

            int[,] dp = new int[rLen, cLen];
            for (int i = 0; i < rLen; ++i)
            {
                for (int j = 0; j < cLen; ++j)
                {
                    dp[i, j] = -1;
                }
            }

            int[] yD = [1, 1, 1];
            int[] xD = [-1, 0, 1];

            int minRes = int.MaxValue;
            for (int i = 0; i < cLen; ++i)
            {
                int cur = dfs(0, i);

                if (cur < minRes)
                {
                    minRes = cur;
                }
            }

            return minRes;

            int dfs(int r, int c)
            {
                if (r < 0 || c < 0 || r == rLen || c == cLen)
                {
                    return int.MaxValue;
                }

                if (r == rLen - 1)
                {
                    dp[r, c] = matrix[r][c];
                    return matrix[r][c];
                }

                if (dp[r, c] != -1)
                {
                    return dp[r, c];
                }

                int min = int.MaxValue;
                for (int i = 0; i < 3; ++i)
                {
                    int nextR = r + yD[i];
                    int nextC = c + xD[i];

                    min = Math.Min(dfs(nextR, nextC), min);
                }

                dp[r, c] = matrix[r][c] + min;
                return dp[r, c];
            }
        }
    }

    internal class MySolnBottomUp
    {
        public int MinFallingPathSum(int[][] matrix)
        {
            int rLen = matrix.Length;
            int cLen = matrix[0].Length;

            int minR = int.MaxValue;
            if (rLen == 1)
            {
                for (int i = 0; i < cLen; ++i)
                {
                    minR = Math.Min(minR, matrix[0][i]);
                }

                return minR;
            }

            for (int i = 1; i < rLen; ++i)
            {
                minR = int.MaxValue;
                for (int j = 0; j < cLen; ++j)
                {
                    int minC = matrix[i][j] + matrix[i - 1][j];

                    if (j > 0)
                    {
                        minC = Math.Min(minC, matrix[i][j] + matrix[i - 1][j - 1]);
                    }

                    if (j < cLen - 1)
                    {
                        minC = Math.Min(minC, matrix[i][j] + matrix[i - 1][j + 1]);
                    }

                    matrix[i][j] = minC;
                    minR = Math.Min(minR, minC);
                }
            }

            return minR;
        }
    }
}
