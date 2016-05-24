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
  return !f ? flatten(a) : flatten(a).map(f);
};

// This will have to wait for node 6 becoming an LTS.
/*
const flatMapConcatRest = (a, f) => {
  const flatten = () => {
    return Array.prototype.concat(...a);
  };
  return !f ? flatten(a) : flatten(a).map(f);
};
*/

const flatMapApplyBind = (a, f) => {
  const flatten = () => {
    return Function.apply.bind(Array.prototype.concat, [])(a);
  };
  return !f ? flatten(a) : flatten(a).map(f);
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

const profilePerf = function (name, fn) {
  const args = Array.prototype.slice.call(arguments, 2);
  const i = [];
  i.length = 11001000;
  i.fill(0);
  const start = Date.now();
  i.map(() => {
    fn.apply(fn, args);
  });
  const end = Date.now();
  console.log(name + " took: " + (end - start));
};

profilePerf("flatMapFast", flatMapFast, arrNum, (i) => {
  return i + i;
});
console.log(flatMapFast(arrNum, (i) => {
  return i + i;
}));
console.log(flatMapFast(arrLet));
profilePerf("flatMapConcatApply", flatMapConcatApply, arrNum, (i) => {
  return i + i;
});
console.log(flatMapConcatApply(arrNum, (i) => {
  return i + i;
}));
console.log(flatMapConcatApply(arrLet));

/*
profilePerf("flatMapConcatRest", flatMapConcatRest, arrNum, (i) => {
  return i + i;
});
console.log(flatMapConcatRest(arrNum, (i) => {
  return i + i;
}));
*/

profilePerf("flatMapApplyBind", flatMapApplyBind, arrNum, (i) => {
  return i + i;
});
console.log(flatMapApplyBind(arrNum, (i) => {
  return i + i;
}));
console.log(flatMapApplyBind(arrLet));

profilePerf("flatmapjs", flatmapjs, arrNum, (i) => {
  return i + i;
});
console.log(flatmapjs(arrNum, (i) => {
  return i + i;
}));
console.log(flatmapjs(arrLet, (i) => {
  return i;
}));