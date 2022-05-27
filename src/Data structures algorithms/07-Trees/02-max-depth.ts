// binary tree
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// with queue - BFS
function maxDepthBfs(root: TreeNode | null): number {
  if (!root) return 0;

  let level = 0;
  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    const qLen = queue.length;
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift();
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
    }

    ++level;
  }

  return level;
}

// iterative DFS
function maxDepthDfs(root: TreeNode | null): number {
  if (!root) return 0;

  const stack: [node: TreeNode, depth: number][] = [[root, 1]];
  let res = 1;

  while (stack.length) {
    const value = stack.pop();
    const node = value?.[0];
    const depth = value?.[1] || 1;
    if (node) {
      res = Math.max(res, depth);
      if (node.left) stack.push([node.left, depth + 1]);
      if (node.right) stack.push([node.right, depth + 1]);
    }
  }

  return res;
}
