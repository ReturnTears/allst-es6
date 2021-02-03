// lodash
var _ = require('lodash');

// 数组相关函数
// 1、chunk()
const _chunk1 = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']] 
console.log(_chunk1)

const _chunk2 = _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
console.log(_chunk2)

const _compact = _.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
console.log(_compact)



// 实用函数
var elements = _.attempt(function(selector) {
    console.log(selector)
    return document.querySelectorAll(selector);
}, '>_>');

if (_.isError(elements)) {
    elements = [];
}

// console.log(elements)

