function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = [];

  const q = [root];

  while (q.length) {
    const level: number[] = [];
    const qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      const node = q.shift();
      if (node) {
        level.push(node.val);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }

    if (level.length) res.push(level);
  }

  return res;
}
