(() => {
  'use strict';
  const flatMap = require('flatmap-fast');

  const arrNum = [
    [],
    [1],
    [2, 3]
  ];

  return (
    flatMap(arrNum, (i) => {
      return i + i;
    })
  );
})();