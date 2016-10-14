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

Run `npm test` to test this flatMap against other algorithms.

```javascript
$ npm test

> flatmap-fast@2.0.3 test /home/ry/flatmap-fast
> node --harmony test.js

// => flatMapFast took: 407.334872 milliseconds.
[ 2, 4, 6 ]
[ 'a', 'b', 'c' ]
// => flatMapConcatApply took: 1282.610349 milliseconds.
[ 2, 4, 6 ]
[ 'a', 'b', 'c' ]
// => flatMapConcatRest took: 1206.846642 milliseconds.
[ 2, 4, 6 ]
// => flatMapApplyBind took: 2407.537111 milliseconds.
[ 2, 4, 6 ]
[ 'a', 'b', 'c' ]
// => flatmapjs took: 1249.354175 milliseconds.
[ '', '11', '2,32,3' ]
[ 'a', 'b', 'c' ]
```
