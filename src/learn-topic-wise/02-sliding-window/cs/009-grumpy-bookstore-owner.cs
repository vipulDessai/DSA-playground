namespace learning_dsa_csharp._03_sliding_window._009_grumpy_bookstore_owner
{
    // Solution incomplete
    internal class MySoln_brute_force
    {
        public int MaxSatisfied(int[] customers, int[] grumpy, int minutes)
        {
            int n = customers.Length;

            int total = 0;
            for (int i = 0; i < n; ++i)
            {
                if (grumpy[i] == 0)
                    total += customers[i];
            }

            int curSecretSum = 0;
            for (int i = 0; i < minutes; ++i)
            {
                curSecretSum += customers[i];
            }

            int l = 0,
                r = minutes;
            int res = total + curSecretSum;
            while (r < n)
            {
                curSecretSum -= customers[l];
                curSecretSum += customers[r];

                ++l;
                ++r;

                int curTotal = 0;
                for (int i = l; i < r && r < n; ++i)
                {
                    if (grumpy[i] == 0)
                        curTotal += customers[i];
                }

                res = Math.Max(res, curTotal + curSecretSum);
            }

            return res;
        }
    }

    // https://leetcode.com/problems/grumpy-bookstore-owner/solutions/299284/python-with-explanation-rolling-sum
    internal class OthersSoln
    {
        public int MaxSatisfied(int[] customers, int[] grumpy, int minutes)
        {
            int n = grumpy.Length;

            // Part 1 requires counting how many customers
            // are already satisfied, and removing them
            // from the customer list.
            int already_satisfied = 0;
            for (int i = 0; i < n; ++i)
            {
                // He's happy
                if (grumpy[i] == 0)
                {
                    already_satisfied += customers[i];
                    customers[i] = 0;
                }
            }

            // Part 2 requires finding the optinal number
            // of unhappy customers we can make happy.
            int best_we_can_make_satisfied = 0;
            int current_satisfied = 0;
            for (int i = 0; i < n; ++i)
            {
                int customers_at_time = customers[i];
                current_satisfied += customers_at_time; // Add current to rolling total

                if (i >= minutes) // We need to remove some from the rolling total
                    current_satisfied -= customers[i - minutes];

                best_we_can_make_satisfied = Math.Max(
                    best_we_can_make_satisfied,
                    current_satisfied
                );
            }

            // The answer is the sum of the solutions for the 2 parts.
            return already_satisfied + best_we_can_make_satisfied;
        }
    }
}
