namespace learning_dsa_csharp._20_math._003_average_waiting_time
{
    internal class MySoln
    {
        public double AverageWaitingTime(int[][] customers)
        {
            int n = customers.Length;

            double res = 0;

            double prevWait = 0;
            for (int i = 0; i < n; ++i)
            {
                int aT = customers[i][0];
                int oT = customers[i][1];

                if (aT > prevWait)
                {
                    prevWait = aT;
                }

                res += prevWait + oT - aT;
                prevWait += oT;
            }

            return res / n;
        }
    }
}
