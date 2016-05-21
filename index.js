/*! flatmap-fast v1.0.1 by ryanpcmcquen */
/*global exports*/
/*jshint esversion:6*/

const flatMap = (a) => {
  const flat = [];
  return a.map((i) => {
    return flat.push(i);
  });
};

module.exports = flatMap;