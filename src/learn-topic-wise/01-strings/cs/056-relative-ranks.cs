// https://leetcode.com/problems/relative-ranks/description/
namespace learning_dsa_csharp._01_strings_arrays_hash._056_relative_ranks
{
    // https://leetcode.com/problems/relative-ranks/solutions/5127969/faster-less-mem-3-methods-detailed-approach-sorting-heap-map-python-java-c
    internal class OthersSoln
    {
        public string[] FindRelativeRanks(int[] score)
        {
            PriorityQueue<(int, int)> pq = new PriorityQueue<(int, int)>();
            pq.compare = (a, b) =>
            {
                var (v1, i1) = a;
                var (v2, i2) = b;

                return v2.CompareTo(v1);
            };

            int n = score.Length;

            for (int i = 0; i < n; i++)
            {
                pq.Enqueue((score[i], i));
            }

            string[] res = new string[n];
            int p = 1;
            while (pq.Count > 0)
            {
                var (v, i) = pq.Dequeue();
                switch (p)
                {
                    case 1:
                        res[i] = "Gold Medal";
                        break;

                    case 2:
                        res[i] = "Silver Medal";
                        break;

                    case 3:
                        res[i] = "Bronze Medal";
                        break;

                    default:
                        res[i] = p.ToString();
                        break;
                }

                ++p;
            }

            return res;
        }
    }
}
