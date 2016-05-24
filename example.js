(() => {
  'use strict';
  const flatMap = require('./index.js');

  const arrNum = [
    [],
    [1],
    [2, 3]
  ];

  const arrLet = [
    [],
    ['a'],
    ['b', 'c']
  ];
  console.log(flatMap(arrNum, (i) => {
    return i + i;
  }), flatMap(arrLet));
})();

// => [ 2, 4, 6 ] [ 'a', 'b', 'c' ]