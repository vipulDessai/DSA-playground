// https://leetcode.com/problems/copy-list-with-random-pointer

// Definition for _Node.
export class _Node {
  val: number;
  next: _Node | null;
  random: _Node | null;

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList_pure_linkedList(head: _Node | null): _Node | null {
  if (!head) return null;

  // Step 1: Clone nodes and insert them next to original nodes
  let cur: _Node | null = head;
  while (cur) {
    let copy = new _Node(cur.val, cur.next!, null!);
    cur.next = copy;
    cur = copy.next;
  }

  // Step 2: Assign random pointers
  cur = head;
  while (cur) {
    if (cur.random) cur.next!.random = cur.random.next;
    cur = cur.next!.next;
  }

  // Step 3: Separate the copied list
  cur = head;
  let newHead = head.next;
  let copyCur: _Node | null = newHead;
  while (cur) {
    cur.next = cur.next!.next;
    if (copyCur?.next) copyCur.next = copyCur.next.next;
    cur = cur.next;
    copyCur = copyCur?.next!;
  }

  return newHead;
}

function copyRandomList_using_hash(head: _Node | null): _Node | null {
  if (!head) return null;

  const map = new Map<_Node, _Node>();
  let cur: _Node | null = head;

  while (cur) {
    map.set(cur, new _Node(cur.val));
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const copy = map.get(cur)!;
    copy.next = map.get(cur.next!) || null;
    copy.random = map.get(cur.random!) || null;

    cur = cur.next;
  }

  return map.get(head)!;
}
