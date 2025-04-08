// https://leetcode.com/problems/my-calendar-i/description/
// soln - https://leetcode.com/problems/my-calendar-i/solutions/5752330/segment-trees-o-logn-complexity-bst-faster-than-99-sumbissions
class SegTree {
  start: number;
  end: number;
  left: SegTree | null = null;
  right: SegTree | null = null;
  constructor(s: number, e: number) {
    this.start = s;
    this.end = e;
  }
}

class MyCalendar {
  _tree: SegTree | null = null;

  book(start: number, end: number): boolean {
    if (!this._tree) {
      this._tree = new SegTree(start, end);
      return true;
    }

    return this.update(this._tree, start, end);
  }

  update(node: SegTree, start: number, end: number) {
    if (node) {
      if (start >= node.end) {
        if (node.right) {
          return this.update(node.right, start, end);
        } else {
          node.right = new SegTree(start, end);
          return true;
        }
      }

      if (end <= node.start) {
        if (node.left) {
          return this.update(node.left, start, end);
        } else {
          node.left = new SegTree(start, end);
          return true;
        }
      }
    }

    return false;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
