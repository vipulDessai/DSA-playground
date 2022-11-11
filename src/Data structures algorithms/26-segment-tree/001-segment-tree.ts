function constructTree(l: number, h: number, pos: number) {
  if (l === h) {
    return (segTree[pos] = input[l]);
  }

  const m = (l + h - ((l + h) % 2)) / 2;

  constructTree(l, m, 2 * pos + 1);
  constructTree(m, h, 2 * pos + 2);

  return (segTree[pos] = Math.min(segTree[2 * pos + 1], segTree[2 * pos + 2]));
}

const input = [-1, 2, 4, 0];
const segTree: number[] = [];
for (let i = 0; i < 4 * 2 - 1; i++) {
  segTree.push(Infinity);
}

console.log(constructTree(0, input.length - 1, 0));
