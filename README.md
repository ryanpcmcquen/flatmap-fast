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
```

Run `npm test` to test this flatMap against other flatMaps.

```javascript
$ node --version
v7.8.0
$ npm test

> flatmap-fast@3.0.0 test /Users/ryan.mcquen/flatmap-fast
> node --harmony test.js

// => flatMapFast took: 916.847606 milliseconds.
[ 'H', 'i', 'W', 'o', 'r', 'l', 'd' ]
// => flatmapjs took: 1176.175518 milliseconds.
[ 'H', 'i', 'W', 'o', 'r', 'l', 'd' ]
```

