namespace learning_dsa_csharp._20_math._000_math
{
    internal class DS
    {
        public static void Main(string[] args)
        {
            var ds = new DS();

            //ds.PassThePillow();

            //ds.WaterBottles();

            ds.AvgWaitingTime();
        }

        private void PassThePillow()
        {
            var s = new _001_pass_the_pillow.OthersSoln();

            int n = 4,
                t = 5;
            var r = s.PassThePillow(n, t);

            Console.WriteLine(r);
        }

        private void WaterBottles()
        {
            var s = new _002_water_bottles.MySoln();

            int numBottles = 15,
                numExchange = 4;
            var r = s.NumWaterBottles(numBottles, numExchange);

            Console.WriteLine(r);
        }

        private void AvgWaitingTime()
        {
            var s = new _003_average_waiting_time.MySoln();

            int[][] customers =
            [
                [1, 2],
                [2, 5],
                [4, 3]
            ];
            var r = s.AverageWaitingTime(customers);

            Console.WriteLine(r);
        }
    }
}
