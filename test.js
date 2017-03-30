'use strict';

const testArr = ['Hi', 'World'];
const splitWord = (word) => word.split('');

const flatMapFast = require('./index.js');

/* https://www.npmjs.com/package/flatmap v0.0.3 */
const flatmapjs = function (arr, iter, context) {
  var results = [];
  if (!Array.isArray(arr)) return results;
  arr.forEach(function (value, index, list) {
    var res = iter.call(context, value, index, list);
    if (Array.isArray(res)) {
      results.push.apply(results, res);
    } else if (res != null) {
      results.push(res);
    }
  });
  return results;
};

const testPerf = require('testperf');

testPerf("flatMapFast", flatMapFast, testArr, splitWord);
console.log(flatMapFast(testArr, splitWord));

testPerf("flatmapjs", flatmapjs, testArr, splitWord);
console.log(flatmapjs(testArr, splitWord));


