using System.Text;

namespace learning_dsa_csharp._10_backtracking._004_palindromic_partitioning
{
    internal class MySoln
    {
        public IList<IList<string>> Partition(string s)
        {
            int n = s.Length;

            bool isPal(int l, int r)
            {
                while (l < r)
                {
                    if (s[l] != s[r])
                    {
                        return false;
                    }

                    l++;
                    --r;
                }

                return true;
            }

            IList<IList<string>> res = new List<IList<string>>();
            void dfs(int i, List<string> p)
            {
                if (i >= n)
                {
                    res.Add(new List<string>(p));
                    return;
                }

                for (int j = i; j < n; ++j)
                {
                    if (isPal(i, j))
                    {
                        StringBuilder sb = new StringBuilder();
                        for (int k = i; k < j + 1; ++k)
                        {
                            sb.Append(s[k]);
                        }

                        p.Add(sb.ToString());
                        dfs(j + 1, p);
                        p.RemoveAt(p.Count - 1);
                    }
                }
            }

            dfs(0, []);

            return res;
        }
    }
}
