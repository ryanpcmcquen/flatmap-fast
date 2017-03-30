(() => {
  'use strict';
  
  const flatMap = require("flatmap-fast");

  const testArr = ['Hi', 'World'];
  const splitWord = (word) => word.split('');

  flatMap(testArr, splitWord);

  // => ['H', 'i', 'W', 'o', 'r', 'l', 'd']
})();
