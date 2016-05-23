# flatmap-fast

The fastest `flatMap` this side of `node`.

Takes two arguments:

  1. An array.
  2. A callback function (optional).

```javascript
const flatMap = require("flatmap-fast");

const arrNum = [[], [1], [2, 3]];

flatMap(arrNum);

// => [ 1, 2, 3 ]

flatMap(arrNum, (i) => {
  return i + i;
});

// => [ 2, 4, 6 ]

const arrLet = [
  [],
  ['a'],
  ['b', 'c']
];

flatMap(arrLet);

// => [ 'a', 'b', 'c' ]
```
