namespace learning_dsa_csharp._01_strings_arrays_hash._060_minimum_cost_to_convert_string_i
{
    // https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5539929/easy-explanation-floyd-warshall-algorithm-java-c-python-javascript-go-rust
    internal class OthersSoln
    {
        private const int CHAR_COUNT = 5;
        private const int INF = int.MaxValue;

        public int[][] BuildConversionGraph(char[] original, char[] changed, int[] cost)
        {
            int[][] g = new int[CHAR_COUNT][];

            for (int i = 0; i < g.Length; ++i)
            {
                g[i] = new int[CHAR_COUNT];
                Array.Fill(g[i], INF);
            }

            for (int i = 0; i < CHAR_COUNT; ++i)
            {
                g[i][i] = 0;
            }

            for (int i = 0; i < cost.Length; ++i)
            {
                int from = original[i] - 'a';
                int to = changed[i] - 'a';

                g[from][to] = Math.Min(g[from][to], cost[i]);
            }

            return g;
        }

        // floyd warshall algorithm
        private void OptimizeConvertionPaths(int[][] graph)
        {
            for (int k = 0; k < CHAR_COUNT; ++k)
            {
                for (int i = 0; i < CHAR_COUNT; ++i)
                {
                    if (graph[i][k] < INF)
                    {
                        for (int j = 0; j < CHAR_COUNT; ++j)
                        {
                            if (graph[k][j] < INF)
                            {
                                graph[i][j] = Math.Min(graph[i][j], graph[i][k] + graph[k][j]);
                            }
                        }
                    }
                }
            }
        }

        public long MinimumCost(
            string source,
            string target,
            char[] original,
            char[] changed,
            int[] cost
        )
        {
            int[][] g = BuildConversionGraph(original, changed, cost);
            OptimizeConvertionPaths(g);

            long totalCost = 0;
            for (int i = 0; i < source.Length; ++i)
            {
                int sChar = source[i] - 'a';
                int dChar = target[i] - 'a';
                if (sChar != dChar)
                {
                    if (g[sChar][dChar] == INF)
                    {
                        return -1L;
                    }

                    totalCost += g[sChar][dChar];
                }
            }

            return totalCost;
        }
    }
}
