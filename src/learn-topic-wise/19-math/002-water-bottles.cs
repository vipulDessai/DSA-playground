// https://leetcode.com/problems/water-bottles/
namespace learning_dsa_csharp._20_math._002_water_bottles
{
    // https://leetcode.com/problems/water-bottles/solutions/5434369/simple-math-based-solution-explaination
    internal class MySoln
    {
        public int NumWaterBottles(int numBottles, int numExchange)
        {
            if (numExchange > numBottles)
            {
                return numBottles;
            }

            if (numExchange == numBottles)
            {
                return numBottles + 1;
            }

            int res = 0;
            while (numBottles >= numExchange)
            {
                int curExBottles = numBottles / numExchange;
                int curRemainingBottles = numBottles % numExchange;

                // so far the number of drank bottles
                res += curExBottles * numExchange;

                // exchanged + remaining bottles
                numBottles = curExBottles + curRemainingBottles;
            }

            return res + numBottles;
        }
    }
}
