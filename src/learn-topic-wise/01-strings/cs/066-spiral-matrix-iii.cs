// https://leetcode.com/problems/spiral-matrix-iii/

namespace learning_dsa_csharp._01_strings_arrays_hash._066_spiral_matrix_i
{
    internal class OthersSoln
    {
        public IList<int> SpiralOrder(int[][] matrix)
        {
            return [];
        }
    }
}

// https://leetcode.com/problems/spiral-matrix/description/
namespace learning_dsa_csharp._01_strings_arrays_hash._066_spiral_matrix_iii
{
    internal class OthersSoln
    {
        public int[][] SpiralMatrixIII(int rows, int cols, int rStart, int cStart)
        {
            int[] xD = [0, 1, 0, -1];
            int[] yD = [1, 0, -1, 0];

            List<int[]> res = new();
            int r = rStart,
                c = cStart,
                steps = 1,
                i = 0;
            while (res.Count < rows * cols)
            {
                for (int j = 0; j < 2; ++j)
                {
                    int dr = xD[i],
                        dc = yD[i];

                    for (int k = 0; k < steps; ++k)
                    {
                        if (r >= 0 && r < rows && c >= 0 && c < cols)
                        {
                            res.Add([r, c]);
                        }

                        r += dr;
                        c += dc;
                    }

                    // so that i value loops in 0, 1, 2, 3, 0, 1, 2, 3
                    i = (i + 1) % 4;
                }

                steps += 1;
            }

            return res.ToArray();
        }
    }
}
