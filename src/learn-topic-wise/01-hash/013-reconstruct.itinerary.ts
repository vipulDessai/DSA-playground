// https://leetcode.com/problems/reconstruct-itinerary/description/
function findItinerary(tickets: string[][]): string[] {
  const adjList = new Map<string, string[]>();

  for (let i = 0; i < tickets.length; ++i) {
    const [dep, arr] = tickets[i];

    if (!adjList.has(dep)) {
      adjList.set(dep, []);
    }

    adjList.get(dep)!.push(arr);
  }

  for (const cur of adjList) {
    const [key, val] = cur;
    val.sort((a, b) => a.localeCompare(b));
  }

  const res: string[] = [];

  function dfs(n: string) {
    const childNodes = adjList.get(n);

    if (childNodes) {
      while (childNodes.length) {
        dfs(childNodes.shift()!);
      }
    }

    res.unshift(n);
  }

  dfs('JFK');

  return res;
}

console.log(
  findItinerary([
    ['JFK', 'SFO'],
    ['JFK', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'JFK'],
    ['ATL', 'SFO'],
  ]),
);
