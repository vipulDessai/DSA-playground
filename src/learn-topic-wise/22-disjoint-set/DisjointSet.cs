// also know as Union Find
// https://leetcode.com/problems/find-if-path-exists-in-graph
namespace learning_dsa_csharp
{
    internal class DisjointSetUnion_non_rank
    {
        private int[] parent;
        private int N;

        public DisjointSetUnion_non_rank(int n)
        {
            N = n;
            parent = new int[N];

            // initialize every node's parent as itself
            for (int i = 0; i < N; i++)
            {
                parent[i] = i;
            }
        }

        public bool areConnected(int u, int v)
        {
            return find(u) == find(v);
        }

        public void union(int u, int v)
        {
            if (u != v)
            {
                int a = find(u);
                int b = find(v);
                parent[a] = b;
            }
        }

        private int find(int u)
        {
            int x = u;
            while (x != parent[x])
            {
                x = parent[x];
            }

            parent[u] = x;
            return x;
        }
    }

    internal class DisjointSet_rank_based
    {
        int[] parent;
        int[] rank;

        public DisjointSet_rank_based(int n)
        {
            rank = new int[n];
            parent = new int[n];

            for (int i = 0; i < n; ++i)
            {
                parent[i] = i;
            }
        }

        private int FindUParent(int node)
        {
            if (node == parent[node])
                return node;

            return parent[node] = FindUParent(parent[node]);
        }

        public bool AreConnected(int u, int v)
        {
            return FindUParent(u) == FindUParent(v);
        }

        public void UnionByRank(int u, int v)
        {
            int uPU = FindUParent(u);
            int uPV = FindUParent(v);

            if (uPU == uPV)
                return;

            if (rank[uPU] < rank[uPV])
            {
                parent[uPU] = uPV;
            }
            else if (rank[uPV] < rank[uPU])
            {
                parent[uPV] = uPU;
            }
            else
            {
                parent[uPV] = uPU;
                rank[uPU]++;
            }
        }
    }

    internal class DisjointSet_size_based
    {
        int[] parent;
        int[] size;

        public DisjointSet_size_based(int n)
        {
            size = new int[n];
            parent = new int[n];

            for (int i = 0; i < n; ++i)
            {
                parent[i] = i;
            }
        }

        private int FindUParent(int node)
        {
            if (node == parent[node])
                return node;

            return parent[node] = FindUParent(parent[node]);
        }

        public bool AreConnected(int u, int v)
        {
            return FindUParent(u) == FindUParent(v);
        }

        public void UnionByRank(int u, int v)
        {
            int uPU = FindUParent(u);
            int uPV = FindUParent(v);

            if (uPU == uPV)
                return;

            if (size[uPU] < size[uPV])
            {
                parent[uPU] = uPV;
                size[uPV] += size[uPU];
            }
            else
            {
                parent[uPV] = uPU;
                size[uPU] += size[uPV];
            }
        }
    }
}
