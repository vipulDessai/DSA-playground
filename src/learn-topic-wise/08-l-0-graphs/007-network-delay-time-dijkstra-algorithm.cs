using System;
using System.Collections.Generic;

// https://leetcode.com/problems/network-delay-time/
namespace learning_dsa_csharp._11_graphs._007_network_delay_time_dijkstra_algorithm
{
    internal class Solution
    {
        // https://www.interviewcake.com/concept/java/dijkstras-algorithm
        public int NetworkDelayTime_Dijkstra_PriorityQueue(int[][] times, int n, int k)
        {
            List<List<(int n, int w)>> adjList = new List<List<(int n, int w)>>();

            for (int i = 0; i <= n; i++)
                adjList.Add(new List<(int n, int w)>());

            for (int i = 0; i < times.Length; i++)
            {
                adjList[times[i][0]].Add((times[i][1], times[i][2]));
            }

            int[] minDis = new int[n + 1];
            for (int i = 0; i < minDis.Length; ++i)
                minDis[i] = int.MaxValue;
            minDis[k] = 0;

            Dijkstra(k, new int[n + 1]);

            int max = 0;
            for (int i = 1; i <= n; i++)
            {
                if (minDis[i] == int.MaxValue)
                    return -1;

                max = Math.Max(max, minDis[i]);
            }

            return max;

            void Dijkstra(int node, int[] visited)
            {
                PriorityQueue<(int n, int dis)> qu = new PriorityQueue<(int n, int dis)>();
                qu.compare = (x, y) => x.dis.CompareTo(y.dis);
                qu.Enqueue((node, 0));

                while (qu.Count > 0)
                {
                    var cur = qu.Dequeue();
                    visited[cur.n] = 1;

                    foreach (var nd in adjList[cur.n])
                    {
                        if (visited[nd.n] == 1)
                            continue;

                        if (minDis[nd.n] > minDis[cur.n] + nd.w)
                        {
                            minDis[nd.n] = minDis[cur.n] + nd.w;
                            qu.Enqueue((nd.n, minDis[nd.n]));
                        }
                    }
                }
            }
        }

        // my own try with priority queue
        public int NetworkDelayTime_BruteForce_with_priority_queue(int[][] times, int n, int k)
        {
            PriorityQueue<(int nd, int w)> q = new PriorityQueue<(int nd, int w)>();
            q.compare = (x, y) => x.w.CompareTo(y.w);

            List<List<(int nd, int w)>> adList = new List<List<(int nd, int w)>>();
            int[] maxDis = new int[n + 1];
            int[] visited = new int[n + 1];
            for (int i = 0; i < n + 1; i++)
            {
                adList.Add(new List<(int nd, int w)>());
                maxDis[i] = int.MaxValue;
                visited[i] = -1;
            }

            // create the adjacency list
            for (int i = 0; i < times.Length; ++i)
            {
                var edge = times[i];
                adList[edge[0]].Add((edge[1], edge[2]));
            }

            maxDis[k] = 0;
            q.Enqueue((k, 0));

            while (q.Count > 0)
            {
                var qLen = q.Count;
                for (int i = 0; i < qLen; ++i)
                {
                    var curNode = q.Dequeue();
                    var (nd, w) = curNode;

                    // set the first calculated distance for the node visited first time
                    if (maxDis[nd] == int.MaxValue)
                    {
                        maxDis[nd] = w;
                    }

                    if (maxDis[nd] > w)
                    {
                        maxDis[nd] = w;
                    }

                    // for cases of 1 -> 2 and 2 -> 1, infinite loop
                    if (visited[nd] != -1)
                    {
                        continue;
                    }

                    // set 1 in visited so that iterations does not go in a infinite loop
                    visited[nd] = 1;

                    var allConnectedNodes = adList[nd];
                    for (int j = 0; j < allConnectedNodes.Count; ++j)
                    {
                        var nextN = allConnectedNodes[j];
                        q.Enqueue((nextN.nd, nextN.w + w));
                    }
                }
            }

            int maxTime = 0;
            for (int i = 1; i < maxDis.Length; ++i)
            {
                maxTime = Math.Max(maxTime, maxDis[i]);
            }
            return maxTime == int.MaxValue ? -1 : maxTime;
        }

        // my own try
        // TLE for the following - reason is the sorting or priority queue is not used which
        // fails to pick the lowest costing route on each iteration
        // and fastest route can be only picked if we know which is next smalledst costing route amoung the remaining nodes
        //
        // failing test case
        // [[4,2,76],[1,3,79],[3,1,81],[4,3,30],[2,1,47],[1,5,61],[1,4,99],[3,4,68],[3,5,46],[4,1,6],[5,4,7],[5,3,44],[4,5,19],[2,3,13],[3,2,18],[1,2,0],[5,1,25],[2,5,58],[2,4,77],[5,2,74]]
        // 5
        // 3
        public int NetworkDelayTime_BruteForce(int[][] times, int n, int k)
        {
            Queue<(int nd, int w)> q = new Queue<(int nd, int w)>();

            List<List<(int nd, int w)>> adList = new List<List<(int nd, int w)>>();
            int[] maxDis = new int[n + 1];
            int[] visited = new int[n + 1];
            for (int i = 0; i < n + 1; i++)
            {
                adList.Add(new List<(int nd, int w)>());
                maxDis[i] = int.MaxValue;
                visited[i] = -1;
            }

            // create the adjacency list
            for (int i = 0; i < times.Length; ++i)
            {
                var edge = times[i];
                adList[edge[0]].Add((edge[1], edge[2]));
            }

            maxDis[k] = 0;
            q.Enqueue((k, 0));

            while (q.Count > 0)
            {
                var qLen = q.Count;
                for (int i = 0; i < qLen; ++i)
                {
                    var curNode = q.Dequeue();
                    var (nd, w) = curNode;

                    // set the first calculated distance for the node visited first time
                    if (maxDis[nd] == int.MaxValue)
                    {
                        maxDis[nd] = w;
                    }

                    if (maxDis[nd] > w)
                    {
                        maxDis[nd] = w;
                    }

                    // for cases of 1 -> 2 and 2 -> 1, infinite loop
                    if (visited[nd] != -1)
                    {
                        continue;
                    }

                    // set 1 in visited so that iterations does not go in a infinite loop
                    visited[nd] = 1;

                    var allConnectedNodes = adList[nd];
                    for (int j = 0; j < allConnectedNodes.Count; ++j)
                    {
                        var nextN = allConnectedNodes[j];
                        q.Enqueue((nextN.nd, nextN.w + w));
                    }
                }
            }

            int maxTime = 0;
            for (int i = 1; i < maxDis.Length; ++i)
            {
                maxTime = Math.Max(maxTime, maxDis[i]);
            }
            return maxTime == int.MaxValue ? -1 : maxTime;
        }
    }
}
