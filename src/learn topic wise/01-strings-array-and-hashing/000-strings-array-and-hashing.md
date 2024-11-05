# array - strings - hash map
- https://leetcode.com/discuss/study-guide/2428868/Array-Problems-classified-into-different-types

# sorting
- sort based on firstname & dept.name
```ts
const employees = [
  { firstName: 'John', lastName: 'Doe', dept: { id: 1, name: 'nn' } },
  { firstName: 'Anna', lastName: 'Smith', dept: { id: 2, name: 'ff' } },
  { firstName: 'Peter', lastName: 'Jones', dept: { id: 3, name: 'ss' } },
  { firstName: 'John', lastName: 'Hue', dept: { id: 4, name: 'aa' } },
];

const nObj = employees.sort((a, b) => {
  return b.firstName - a.firstName;
});

console.log(nObj);
```