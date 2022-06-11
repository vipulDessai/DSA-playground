// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList_iterative(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null,
    curr = head;

  while (curr) {
    let nxt = curr.next;
    [curr.next, prev] = [prev, curr];

    curr = nxt;
  }

  return prev;
}

function reverseList(head: ListNode | null): ListNode | null {
  function reverse(
    cur: ListNode | null,
    prev: ListNode | null,
  ): ListNode | null {
    if (!cur) {
      return prev;
    } else {
      const next = cur.next;
      cur.next = prev;

      return reverse(next, cur);
    }
  }

  return reverse(head, null);
}
