namespace learning_dsa_csharp._01_strings_arrays_hash._014_no_of_laser_beams_in_a_bank
{
    internal class Solution
    {
        public int NumberOfBeams(string[] bank)
        {
            int rowCount = bank.Length;
            int strLen = bank[0].Length;

            int getLaserBeamCount(int i, int total, int curMultiplier)
            {
                if (i == rowCount)
                {
                    return total;
                }

                string curStr = bank[i];
                int curDeviceCount = 0;
                for (int j = 0; j < strLen; ++j)
                {
                    if (curStr[j] == '1')
                    {
                        ++curDeviceCount;
                    }
                }

                if (curDeviceCount == 0)
                {
                    curDeviceCount = curMultiplier;
                }
                else if (curMultiplier != 0)
                {
                    total = total + (curDeviceCount * curMultiplier);
                }

                return getLaserBeamCount(i + 1, total, curDeviceCount);
            }

            return getLaserBeamCount(0, 0, 0);
        }
    }
}
