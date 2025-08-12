using System.Collections.Generic;

namespace learning_dsa_csharp._01_strings_arrays_hash._006_expressive_words
{
    internal class Solution
    {
        public int ExpressiveWords(string s, string[] words)
        {
            List<string> inputStrGroups = new List<string>();

            char prev = s[0];
            string currGroup = s[0].ToString();
            for (int i = 1; i < s.Length; i++)
            {
                if (s[i] == prev)
                {
                    currGroup += s[i];
                }
                else
                {
                    inputStrGroups.Add(currGroup);
                    currGroup = s[i].ToString();
                }

                prev = s[i];
            }

            inputStrGroups.Add(currGroup);

            int res = 0;
            for (int i = 0; i < words.Length; ++i)
            {
                string word = words[i];
                char currStrPrevChar = word[0];
                string currStrCurrGrp = word[0].ToString();
                int currStrGroupCount = 0;
                bool wordCannotExpress = false;
                for (int j = 1; j < word.Length; j++)
                {
                    if (word[j] == currStrPrevChar)
                    {
                        currStrCurrGrp += word[j];
                    }
                    else
                    {
                        if (currStrGroupCount > inputStrGroups.Count - 1)
                        {
                            wordCannotExpress = true;
                            break;
                        }

                        string inputStrGroup = inputStrGroups[currStrGroupCount];
                        if (checkStrGroup(inputStrGroup, currStrCurrGrp))
                        {
                            wordCannotExpress = true;
                            break;
                        }

                        currStrCurrGrp = word[j].ToString();
                        ++currStrGroupCount;
                    }

                    currStrPrevChar = word[j];
                }

                // wordCannotExpress is true meaning letters are mismatching or char group cannot be extended
                // both input string groups and current word groups should be equal
                // last group should be checked too, which doesnt happen in the above iteration
                if (
                    wordCannotExpress
                    || currStrGroupCount != inputStrGroups.Count - 1
                    || checkStrGroup(inputStrGroups[currStrGroupCount], currStrCurrGrp)
                )
                {
                    continue;
                }

                ++res;
            }

            return res;

            bool checkStrGroup(string s1, string s2)
            {
                return s1[0] != s2[0] || (s1.Length == 2 && s2.Length < 2) || s2.Length > s1.Length;
            }
        }
    }
}
