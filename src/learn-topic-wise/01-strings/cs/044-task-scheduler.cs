// https://leetcode.com/problems/task-scheduler
namespace learning_dsa_csharp._01_strings_arrays_hash._044_task_scheduler
{
    internal class MySoln
    {
        public int LeastInterval(char[] tasks, int n)
        {
            Dictionary<char, int> c = new Dictionary<char, int>();
            for (int i = 0; i < tasks.Length; ++i)
            {
                if (!c.ContainsKey(tasks[i]))
                {
                    c.Add(tasks[i], 0);
                }
                c[tasks[i]]++;
            }

            MaxHeap mH = new MaxHeap(c.Values.ToArray());

            int t = 0;
            Queue<(int, int)> q = new Queue<(int, int)>();

            while (mH.Count > 0 || q.Count > 0)
            {
                ++t;

                if (mH.Count > 0)
                {
                    int cnt = mH.Get() - 1;
                    if (cnt > 0)
                        q.Enqueue((cnt, t + n));
                }

                if (q.Count > 0)
                {
                    var (pCur, pT) = q.Peek();
                    if (t == pT)
                    {
                        var (qCur, qT) = q.Dequeue();
                        mH.Add(qCur);
                    }
                }
            }

            return t;
        }
    }
}
