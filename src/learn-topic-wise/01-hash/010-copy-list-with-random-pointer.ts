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
    let copy = new _Node(cur.val);

    const next = cur.next;
    cur.next = copy;
    cur = copy.next = next;
  }

  // Step 2: Assign random pointers
  cur = head;
  while (cur) {
    const next = cur.next!.next;

    if (cur.random) {
      // here cur.random is the original linked list
      // and cur.random.next is the cloned linked list
      cur.next!.random = cur.random.next;
    }

    cur = next;
  }

  // Step 3: Separate the copied list
  cur = head;
  // very important to start with a fresh node
  // because the output is in out.next
  let copyCur: _Node | null = new _Node(0);
  const out = copyCur;
  while (cur) {
    const next = cur.next!.next;

    // extract the copy
    if (copyCur) {
      copyCur.next = cur.next;
      copyCur = copyCur.next;
    }

    // restore the original (optional)
    cur.next = next;

    // iterate to next original linked list node
    cur = cur.next;
  }

  return out.next;
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

function CreateLinkedList(_input: (number | null)[][]): _Node | null {
  const n = _input.length;

  if (n === 0) {
    return null;
  }

  const nodeArray: _Node[] = [];
  for (let i = 0; i < _input.length; ++i) {
    nodeArray.push(new _Node(_input[i][0]!));
  }

  for (let i = 0; i < nodeArray.length; ++i) {
    const [val, random] = _input[i];
    if (i + 1 < n) {
      nodeArray[i].next = nodeArray[i + 1];
    }

    if (typeof random === 'number' && random < n) {
      nodeArray[i].random = nodeArray[random];
    }
  }

  return nodeArray[0];
}

var input = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
input = [
  [7, null],
  [13, 0],
  // [11, 0],
];
// input = [[-1, null]];
const inputLinkedList = CreateLinkedList(input);

const out = copyRandomList_pure_linkedList(inputLinkedList);
console.log(out);
