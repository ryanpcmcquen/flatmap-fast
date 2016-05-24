/*! flatmap-fast v2.0.1 by ryanpcmcquen */

/*global module*/
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