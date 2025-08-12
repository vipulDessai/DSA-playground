namespace learning_dsa_csharp._06_linked_list._009_linked_list_cycle
{
    internal class Solution_with_pointers
    {
        public bool HasCycle(ListNode head)
        {
            ListNode slow = head,
                fast = head;

            while (fast != null && fast.next != null)
            {
                slow = slow.next;
                fast = fast.next.next;

                if (slow == fast)
                    return true;
            }

            return false;
        }
    }

    class Solution_overwriting_vars
    {
        public bool HasCycle(ListNode head)
        {
            if (head == null)
                return false;

            if (head.val == Int32.MaxValue)
                return true;

            head.val = Int32.MaxValue;

            return HasCycle(head.next);
        }
    }

    // fails for [-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]
    // as the hash only looks for repeated has value
    // i.e has will work for unique/distinct node values only
    class Solution_with_hash
    {
        HashSet<int?> h = new HashSet<int?>();

        public bool HasCycle(ListNode head)
        {
            if (head == null)
                return false;
            if (h.Contains(head.val))
            {
                return true;
            }

            h.Add(head.val);
            return HasCycle(head.next);
        }
    }
}
