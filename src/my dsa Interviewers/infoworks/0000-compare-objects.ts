const o1 = {
  a: {
    b: '1',
    c: '2',
  },
  x: {
    y: '1',
    z: '2',
  },
};

const o2 = {
  a: {
    b: '1',
    c: '2',
  },
  x: {
    y: '1',
    z: '3',
  },
};

function compare(o1: object, o2: object) {
  if (typeof o1 === 'object') {
    for (const k in o1) {
      if (compare(o1[k], o2[k])) {
        continue;
      } else {
        return false;
      }
    }

    return true;
  } else {
    return o1 === o2;
  }
}

console.log(compare(o1, o2));
