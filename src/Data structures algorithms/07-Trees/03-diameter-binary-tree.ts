// Math
// height = 1 + max(left, right)
// diameter = left + right + 2
function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  const dfs = (root: TreeNode | null) => {
    if (!root) return -1;
    const left = dfs(root.left);
    const right = dfs(root.right);

    diameter = Math.max(diameter, 2 + left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);
  return diameter;
}
