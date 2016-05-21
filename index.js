/*! flatmap-fast v1.0.0 by ryanpcmcquen */
/*global exports*/
/*jshint esversion:6*/

exports.flatMap = (a) => {
  const flat = [];
  return a.map((i) => {
    return flat.push(i);
  });
};