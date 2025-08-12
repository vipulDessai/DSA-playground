namespace learning_dsa_csharp._19_misc
{
    internal class Miscellaneous
    {
        public static void Main(string[] args)
        {
            var m = new Miscellaneous();

            m.MinOpsToMakeXYEqual();

            //m.SequentialDigits();
        }

        private void MinOpsToMakeXYEqual()
        {
            var s = new _001_min_ops_make_x_y_equal.MySoln();

            var x = 26;
            var y = 1;

            x = 53;
            y = 2;

            //x = 25;
            //y = 30;

            //x = 1;
            //y = 4;

            var r = s.MinimumOperationsToMakeEqual(x, y);

            Console.WriteLine(r);
        }

        private void SequentialDigits()
        {
            var s = new _002_sequential_digits.NeetCodeSoln();

            var x = 1000;
            var y = 13000;

            var r = s.SequentialDigits(x, y);

            Console.WriteLine(r);
        }
    }
}
