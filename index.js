/*! flatmap-fast v4.0.1 by ryanpcmcquen */
// @flow

const flatten = (arr /*:Array<any>*/) => {
    const result = [];
    if (Array.isArray(arr)) {
        for (var outerIndex = 0; outerIndex < arr.length; outerIndex++) {
            if (Array.isArray(arr[outerIndex])) {
                for (var innerIndex = 0; innerIndex < arr[outerIndex].length; innerIndex++) {
                    result.push(arr[outerIndex][innerIndex]);
                }
            } else {
                result.push(arr[outerIndex]);
            }
        }
    } else {
        result.push(arr);
    }

    return result;
};



const flatMap = (arr /*:Array<any>*/, func /*:Function*/) => {
    return (func) ? flatten(arr.map(func)) : flatten(arr);
};

module.exports = flatMap;

