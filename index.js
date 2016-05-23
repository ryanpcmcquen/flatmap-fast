/*! flatmap-fast v2.0.0 by ryanpcmcquen */

/*global exports*/
/*jshint esversion:6*/

const flatMap = (a, f) => {
  const flatten = () => {
    return a.reduce((x, y) => {
      return x.concat(y);
    });
  };
  return !f ? flatten(a) : flatten(a).map(f);
};

module.exports = flatMap;
