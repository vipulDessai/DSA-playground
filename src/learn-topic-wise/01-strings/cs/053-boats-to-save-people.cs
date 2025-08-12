namespace learning_dsa_csharp._01_strings_arrays_hash._053_boats_to_save_people
{
    // sorting solution fails for TC [5, 1, 4, 2] and l = 6
    internal class MySoln
    {
        public int NumRescueBoats(int[] people, int limit)
        {
            Array.Sort(people);

            int n = people.Length;

            int res = 0,
                c = 0,
                sum = 0,
                i = 0;
            while (i < n)
            {
                int cur = people[i];
                sum += cur;
                ++c;

                if ((c == 2 || i == n - 1) && sum <= limit || sum == limit)
                {
                    ++res;
                    c = 0;
                    sum = 0;

                    ++i;
                }
                else if (sum > limit)
                {
                    ++res;
                    c = 0;
                    sum = 0;
                }
                else
                {
                    ++i;
                }
            }

            return res;
        }
    }

    // https://leetcode.com/problems/boats-to-save-people/solutions/156740/c-java-python-two-pointers
    internal class OthersSoln
    {
        public int NumRescueBoats(int[] people, int limit)
        {
            Array.Sort(people);

            int i,
                j;
            for (i = 0, j = people.Length - 1; i <= j; --j)
            {
                if (people[i] + people[j] <= limit)
                {
                    ++i;
                }
            }

            return people.Length - 1 - j;
        }
    }
}
