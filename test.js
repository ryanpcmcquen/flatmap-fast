(() => {
  'use strict';
  const flatMap = require('./index.js');

  const arr = [
    [],
    [1],
    [2, 3]
  ];

  console.log(flatMap(arr));
})();

// => [ 1, 2, 3]