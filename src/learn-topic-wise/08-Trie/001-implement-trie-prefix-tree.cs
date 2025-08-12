using System.Collections.Generic;

namespace learning_dsa_csharp._8_tries
{
    class Info
    {
        public bool End { get; set; } = false;
        public Dictionary<char, Info> Child { get; set; } = new Dictionary<char, Info>();
    }

    // fails at test case 14/16
    public class Trie_Recursion_my_own
    {
        Info tree;

        public Trie_Recursion_my_own()
        {
            tree = new Info();
        }

        public void Insert(string word)
        {
            AddCharsToTrie(tree, 0);

            void AddCharsToTrie(Info currT, int i)
            {
                if (i == word.Length)
                {
                    currT.End = true;

                    return;
                }

                if (!currT.Child.ContainsKey(word[i]))
                {
                    currT.Child[word[i]] = new Info();
                }

                AddCharsToTrie(currT.Child[word[i]], ++i);
            }
        }

        public bool Search(string word)
        {
            bool wordCharExists(Info t, int i)
            {
                if (i == word.Length)
                {
                    return t.End;
                }

                if (t.Child.ContainsKey(word[i]))
                {
                    return wordCharExists(t.Child[word[i]], ++i);
                }
                else
                {
                    return false;
                }
            }

            return wordCharExists(tree, 0);
        }

        public bool StartsWith(string prefix)
        {
            bool partialWordExists(Info t, int i)
            {
                if (i == prefix.Length)
                {
                    return true;
                }

                if (t.Child.ContainsKey(prefix[i]))
                {
                    return partialWordExists(t.Child[prefix[i]], ++i);
                }
                else
                {
                    return false;
                }
            }

            return partialWordExists(tree, 0);
        }
    }

    // solution - https://www.youtube.com/watch?v=oobqoCJlHA0&t=1108s
    public class Trie_Iterative_neetcode
    {
        Info tree;

        public Trie_Iterative_neetcode()
        {
            tree = new Info();
        }

        public void Insert(string word)
        {
            var cur = tree;

            foreach (var c in word)
            {
                if (!cur.Child.ContainsKey(c))
                {
                    cur.Child[c] = new Info();
                }

                cur = cur.Child[c];
            }

            cur.End = true;
        }

        public bool Search(string word)
        {
            var cur = tree;

            foreach (var c in word)
            {
                if (!cur.Child.ContainsKey(c))
                {
                    return false;
                }

                cur = cur.Child[c];
            }

            return true;
        }

        public bool StartsWith(string prefix)
        {
            var cur = tree;

            foreach (var c in prefix)
            {
                if (!cur.Child.ContainsKey(c))
                {
                    return false;
                }

                cur = cur.Child[c];
            }

            return cur.End;
        }
    }
}
