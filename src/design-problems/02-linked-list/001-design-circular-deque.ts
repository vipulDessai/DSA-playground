// circular means without using inbuilt array or queues

interface QueueLinkedElemType {
  prev: QueueLinkedElemType | null;
  val: number;
  next: QueueLinkedElemType | null;
}

class QueueLinkedList implements QueueLinkedElemType {
  public prev: QueueLinkedList | null = null;
  public val: number;
  public next: QueueLinkedList | null = null;

  constructor(value: number) {
    this.val = value;
  }
}

export class MyCircularDeque {
  maxSize: number;
  size: number = 0;
  l: QueueLinkedList | null = null;
  r: QueueLinkedList | null = null;
  constructor(k: number) {
    this.maxSize = k;
  }

  insertFront(value: number): boolean {
    if (this.size === this.maxSize) return false;

    const elem = new QueueLinkedList(value);
    elem.prev = null;

    // if no elem are inserted or the size is 0
    if (!this.l && !this.r) {
      this.l = this.r = elem;
    } else {
      elem.next = this.l;
      this.l = elem;
    }

    this.size += 1;

    return true;
  }

  insertLast(value: number): boolean {
    if (this.size === this.maxSize) return false;

    const elem = new QueueLinkedList(value);
    elem.next = null;

    // if no elem are inserted or the size is 0
    if (!this.l && !this.r) {
      this.l = this.r = elem;
    } else {
      elem.prev = this.r;
      this.r = elem;
    }

    this.size += 1;

    return true;
  }

  deleteFront(): boolean {
    if (this.l && this.r) {
      if (this.l === this.r) {
        this.l = this.r = null;
      } else {
        this.l = this.l.next;
      }

      this.size -= 1;

      return true;
    } else {
      return false;
    }
  }

  deleteLast(): boolean {
    if (this.l && this.r) {
      if (this.l === this.r) {
        this.l = this.r = null;
      } else {
        this.r = this.r.prev;
      }

      this.size -= 1;

      return true;
    } else {
      return false;
    }
  }

  getFront(): number {
    if (this.l) return this.l.val;

    return -1;
  }

  getRear(): number {
    if (this.r) return this.r.val;

    return -1;
  }

  isEmpty(): boolean {
    return !this.l && !this.r;
  }

  isFull(): boolean {
    return this.size === this.maxSize;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

const inTasks = [
  'MyCircularDeque',
  'insertFront',
  'getFront',
  'insertFront',
  'getFront',
  'insertFront',
  'insertFront',
  'getRear',
  'getFront',
  'getRear',
  'getRear',
];

const inValues = [[52], [80], [], [27], [], [60], [81], [], [], [], []];

const res: (number | boolean)[] = [];
const cDQueue = new MyCircularDeque(inValues[0][0]);
for (let i = 1; i < inTasks.length; ++i) {
  res.push(cDQueue[inTasks[i]](inValues[i][0]));
}

for (let i = 0; i < res.length; ++i) {
  console.log(res[i]);
}
