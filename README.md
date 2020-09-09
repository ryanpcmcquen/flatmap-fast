[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ryanpcmcquen/flatmap-fast)

# flatmap-fast

The fastest `flatMap` this side of `node`.

Takes two arguments:

  1. An array.
  2. A callback function (optional).

```javascript
const flatMap = require("flatmap-fast");

const testArr = ['Hi', 'World'];
const splitWord = (word) => word.split('');

flatMap(testArr, splitWord);

// => ['H', 'i', 'W', 'o', 'r', 'l', 'd']

flatMap([1, 2, 3, 4], (x) => [x, x * 2]);

// => [1, 2, 2, 4, 3, 6, 4, 8]
```

Run `npm test` to test this flatMap against other flatMaps.

```javascript
$ node --version
v12.18.3
$ yarn test
yarn run v1.22.4
$ node test.js
// => flatMapFast took: 650.86651 milliseconds.
[
  'H', 'i', 'W',
  'o', 'r', 'l',
  'd'
]
// => flatmapjs took: 667.361729 milliseconds.
[
  'H', 'i', 'W',
  'o', 'r', 'l',
  'd'
]
// => flatMapFast took: 517.463478 milliseconds.
[
  1, 2, 2, 4,
  3, 6, 4, 8
]
// => flatmapjs took: 676.208413 milliseconds.
[
  1, 2, 2, 4,
  3, 6, 4, 8
]
Done in 2.74s.
```

