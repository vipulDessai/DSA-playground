namespace learning_dsa_csharp._19_misc._002_sequential_digits
{
    internal class NeetCodeSoln
    {
        public IList<int> SequentialDigits(int low, int high)
        {
            Queue<int> q = new Queue<int>();
            for (int i = 0; i < 9; ++i)
            {
                q.Enqueue(i + 1);
            }

            IList<int> res = new List<int>();

            while (q.Count > 0)
            {
                int n = q.Dequeue();

                if (n > high)
                {
                    continue;
                }

                if (n >= low && n <= high)
                {
                    res.Add(n);
                }

                int last = n % 10;
                if (last < 9)
                {
                    int nextN = n * 10 + (last + 1);
                    q.Enqueue(nextN);
                }
            }

            return res;
        }
    }
}
