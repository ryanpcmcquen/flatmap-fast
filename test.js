'use strict';
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

const flatMapFast = require('./index.js');

const flatMapConcatApply = (a, f) => {
  const flatten = () => {
    return Array.prototype.concat.apply([], a);
  };
  return (!f) ? flatten(a) : flatten(a).map(f);
};

// Note that this version requires the `--harmony` flag.
const flatMapConcatRest = (a, f) => {
  const flatten = () => {
    return Array.prototype.concat(...a);
  };
  return (!f) ? flatten(a) : flatten(a).map(f);
};

const flatMapApplyBind = (a, f) => {
  const flatten = () => {
    return Function.apply.bind(Array.prototype.concat, [])(a);
  };
  return (!f) ? flatten(a) : flatten(a).map(f);
};

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

testPerf("flatMapFast", flatMapFast, arrNum, (i) => {
  return i + i;
});
console.log(flatMapFast(arrNum, (i) => {
  return i + i;
}));
console.log(flatMapFast(arrLet));
testPerf("flatMapConcatApply", flatMapConcatApply, arrNum, (i) => {
  return i + i;
});
console.log(flatMapConcatApply(arrNum, (i) => {
  return i + i;
}));
console.log(flatMapConcatApply(arrLet));

// Note that this version requires the `--harmony` flag.
testPerf("flatMapConcatRest", flatMapConcatRest, arrNum, (i) => {
  return i + i;
});
console.log(flatMapConcatRest(arrNum, (i) => {
  return i + i;
}));

testPerf("flatMapApplyBind", flatMapApplyBind, arrNum, (i) => {
  return i + i;
});
console.log(flatMapApplyBind(arrNum, (i) => {
  return i + i;
}));
console.log(flatMapApplyBind(arrLet));

testPerf("flatmapjs", flatmapjs, arrNum, (i) => {
  return i + i;
});
console.log(flatmapjs(arrNum, (i) => {
  return i + i;
}));
console.log(flatmapjs(arrLet, (i) => {
  return i;
}));
