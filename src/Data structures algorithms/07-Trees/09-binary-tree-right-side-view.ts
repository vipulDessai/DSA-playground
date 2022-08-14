import { TreeNode } from './000-binary-tree-from-array';

function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  const q = [root];

  while (q.length) {
    let rightSide: TreeNode | null = null;
    const qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      const node = q.shift();
      if (node) {
        // so the right side will always contain the last
        // element of any level
        rightSide = node;
        q.push(node.left);
        q.push(node.right);
      }
    }

    if (rightSide) res.push(rightSide.val);
  }

  return res;
}
