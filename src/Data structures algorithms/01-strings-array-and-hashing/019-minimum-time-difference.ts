// https://leetcode.com/problems/minimum-time-difference
function findMinDifference(timePoints: string[]): number {
  const n = timePoints.length;

  const numTime = timePoints.map((t) => convertToMins(t)).sort((a, b) => a - b);

  // check first and last elements (smallest and largest)
  let res = compareTime(numTime[0], numTime[n - 1], Infinity);

  for (let i = 0; i < n - 1; i++) {
    const t1 = numTime[i];
    const t2 = numTime[i + 1];

    res = compareTime(t1, t2, res);
  }

  return res;
}

const convertToMins = (time: string) => {
  if (time === '00:00') return 1440;

  const numTime = time.split(':');
  let hours = parseInt(numTime[0]) * 60;
  let mins = parseInt(numTime[1]);
  return hours + mins;
};

const compareTime = (t1: number, t2: number, min: number) => {
  let d1 = Math.abs(t1 - t2);
  let d2 = Math.abs(t1 + 1440 - t2);
  return Math.min(d1, d2, min);
};

let tPtsIn = ['10:00', '23:59', '20:00'];
const r = findMinDifference(tPtsIn);
tPtsIn;
console.log(r);
