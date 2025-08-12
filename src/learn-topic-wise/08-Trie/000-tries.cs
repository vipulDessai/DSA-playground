using System;
using System.Collections.Generic;

namespace learning_dsa_csharp._8_tries
{
    public class Tries
    {
        public static void Main(string[] args)
        {
            var t = new Tries();

            // problem - https://leetcode.com/problems/implement-trie-prefix-tree/description/
            // solution - https://www.youtube.com/watch?v=oobqoCJlHA0
            t.ImpelementPrefixTreeTrie();
        }

        private void ImpelementPrefixTreeTrie()
        {
            List<bool> res = new List<bool>();

            var inputOp = new string[]
            {
                "Trie",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "search",
                "search",
                "search",
                "search",
                "startsWith",
                "startsWith",
                "startsWith",
                "startsWith"
            };
            var opVal = new string[][]
            {
                new string[] { "" },
                new string[] { "app" },
                new string[] { "apple" },
                new string[] { "beer" },
                new string[] { "add" },
                new string[] { "jam" },
                new string[] { "rental" },
                new string[] { "apps" },
                new string[] { "app" },
                new string[] { "ad" },
                new string[] { "applepie" },
                new string[] { "rest" },
                new string[] { "jan" },
                new string[] { "rent" },
                new string[] { "beer" },
                new string[] { "jam" },
                new string[] { "apps" },
                new string[] { "app" },
                new string[] { "ad" },
                new string[] { "applepie" },
                new string[] { "rest" },
                new string[] { "jan" },
                new string[] { "rent" },
                new string[] { "beer" },
                new string[] { "jam" },
            };

            inputOp = new string[]
            {
                "Trie",
                "insert",
                "insert",
                "insert",
                "insert",
                "insert",
                "search",
                "startsWith"
            };
            opVal = new string[][]
            {
                new string[] { "" },
                new string[] { "aaa" },
                new string[] { "aab" },
                new string[] { "aa" },
                new string[] { "ab" },
                new string[] { "aca" },
                new string[] { "ab" },
                new string[] { "aaa" },
            };

            var s = new Trie_Iterative_neetcode();
            for (int i = 1; i < inputOp.Length; ++i)
            {
                var action = inputOp[i];
                switch (action)
                {
                    case "insert":
                        s.Insert(opVal[i][0]);
                        break;

                    case "search":
                        res.Add(s.Search(opVal[i][0]));
                        break;

                    case "startsWith":
                        res.Add(s.StartsWith(opVal[i][0]));
                        break;

                    default:
                        break;
                }
            }

            foreach (var r in res)
            {
                Console.WriteLine(r);
            }
        }
    }
}
