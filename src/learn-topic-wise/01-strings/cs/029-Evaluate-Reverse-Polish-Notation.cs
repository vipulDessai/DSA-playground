namespace learning_dsa_csharp._01_strings_arrays_hash._029_Evaluate_Reverse_Polish_Notation
{
    internal class MySoln
    {
        public int EvalRPN(string[] tokens)
        {
            int n = tokens.Length;

            Stack<int> s = new Stack<int>();

            for (int i = 0; i < n; ++i)
            {
                switch (tokens[i])
                {
                    case "+":

                        {
                            int n1 = s.Pop();
                            int n2 = s.Pop();
                            int sum = n2 + n1;
                            s.Push(sum);
                        }
                        break;

                    case "-":

                        {
                            int n1 = s.Pop();
                            int n2 = s.Pop();
                            int sum = n2 - n1;
                            s.Push(sum);
                        }
                        break;

                    case "*":

                        {
                            int n1 = s.Pop();
                            int n2 = s.Pop();
                            int sum = n2 * n1;
                            s.Push(sum);
                        }
                        break;

                    case "/":

                        {
                            int n1 = s.Pop();
                            int n2 = s.Pop();
                            int sum = n2 / n1;
                            s.Push(sum);
                        }
                        break;

                    default:
                        int num = Int32.Parse(tokens[i]);
                        s.Push(num);
                        break;
                }
            }

            return s.Pop();
        }
    }
}
