namespace learning_dsa_csharp._01_strings_arrays_hash._047_word_search
{
    internal class MySoln
    {
        public bool Exist(char[][] board, string word)
        {
            int wLen = word.Length;

            int m = board.Length;
            int n = board[0].Length;

            int[] xD = [-1, 0, 1, 0];
            int[] yD = [0, 1, 0, -1];
            bool dfs(int r, int c, int wI)
            {
                if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] == 1)
                {
                    return false;
                }

                if (board[r][c] == word[wI])
                {
                    if (wI == wLen - 1)
                        return true;
                    else
                    {
                        char t = board[r][c];
                        board[r][c] = '1';

                        for (int dI = 0; dI < 4; ++dI)
                        {
                            int nR = r + xD[dI];
                            int nC = c + yD[dI];

                            bool res = dfs(nR, nC, wI + 1);

                            if (res)
                            {
                                return true;
                            }
                        }

                        board[r][c] = t;

                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }

            for (int i = 0; i < m; ++i)
            {
                for (int j = 0; j < n; ++j)
                {
                    if (board[i][j] == word[0] && dfs(i, j, 0))
                    {
                        return true;
                    }
                }
            }

            return false;
        }
    }
}
