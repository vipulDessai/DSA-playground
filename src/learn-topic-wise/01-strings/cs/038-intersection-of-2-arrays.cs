namespace learning_dsa_csharp._01_strings_arrays_hash._038_intersection_of_2_arrays
{
    internal class MySoln
    {
        public int[] Intersection(int[] nums1, int[] nums2)
        {
            int m = nums1.Length;
            int n = nums2.Length;
            HashSet<int> n1_m = new HashSet<int>();
            for (int i = 0; i < m; i++)
            {
                n1_m.Add(nums1[i]);
            }

            List<int> res = new();
            for (int i = 0; i < m; i++)
            {
                int cur = nums2[i];
                if (n1_m.Contains(cur))
                {
                    n1_m.Remove(cur);
                    res.Add(cur);
                }
            }

            return res.ToArray();
        }
    }
}
