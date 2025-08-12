namespace learning_dsa_csharp._20_math._001_pass_the_pillow
{
    // https://leetcode.com/problems/pass-the-pillow/solutions/5425272/beats-100-00-of-users-with-java-simple-easy-well-explained-math-solution/
    internal class OthersSoln
    {
        public int PassThePillow(int n, int time)
        {
            int completed = time / (n - 1);
            int remaining = time % (n - 1);
            int ans = 0;
            if (completed % 2 != 0)
            {
                ans = n - remaining;
            }
            else
            {
                ans = remaining + 1;
            }

            return ans;
        }
    }
}
