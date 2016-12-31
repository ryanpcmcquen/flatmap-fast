/*! flatmap-fast v2.0.3 by ryanpcmcquen */
// @flow

const flatten = (a) => {
  return a.reduce((x, y) => {
    return x.concat(y);
  });
};

const flatMap = (a /*:Array<any>*/ , f /*:Function*/ ) => {
  return (!f) ? flatten(a) : flatten(a.map(f));
};

module.exports = flatMap;
