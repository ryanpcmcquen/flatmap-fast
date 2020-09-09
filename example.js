(() => {
    'use strict';

    const flatMap = require("flatmap-fast");

    const testArr = ['Hi', 'World'];
    const splitWord = (word) => word.split('');

    console.log(
        flatMap(testArr, splitWord)
    );

    // => ['H', 'i', 'W', 'o', 'r', 'l', 'd']

    console.log(
        flatMap([1, 2, 3, 4], (x) => [x, x * 2])
    );

    // => [1, 2, 2, 4, 3, 6, 4, 8]
})();
