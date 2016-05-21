(() => {
  'use strict';
  const flatMap = require('flatmap-fast');

  const arr = [
    [],
    [1],
    [2, 3]
  ];

  return flatMap(arr);
})();