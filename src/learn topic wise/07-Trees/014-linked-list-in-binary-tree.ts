import {
  LinkedList,
  ListNode,
} from '../06-Linked-List/000-linked-list-from-array';
import { BinaryTree, TreeNode } from './000-binary-tree-from-array';

const newTree = new BinaryTree([2, null, 2, null, 2, null, 1]);
const newList = new LinkedList([2, 2, 1]);

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (head === null) return true;

  if (root === null) return false;

  return (
    dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
  );
}

function dfs(l: ListNode | null, n: TreeNode | null) {
  if (l === null) return true;

  if (n === null) return false;

  return l.val === n.val && (dfs(l.next, n.left) || dfs(l.next, n.right));
}

isSubPath(newList.singlyList, newTree.bTree);
