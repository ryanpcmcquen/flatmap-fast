# flatmap-fast

The fastest `flatMap` this side of node.

Speed test vs. other `flatMap` methods:

https://repl.it/CTc3


```javascript
const flatMap = require("flatmap-fast");
const arr = [[], [1], [2, 3]];

flatMap(arr);

// => [ 1, 2, 3 ]
```
