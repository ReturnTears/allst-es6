"use strict";

// lodash
var _ = require('lodash'); // 数组相关函数
// 1、chunk(array, size=1) 根据size参数将数组分组，size是每一组的长度。如果数组不能均分，最后一组就会包含剩下的元素


var _chunk1 = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']] 


console.log(_chunk1);

var _chunk2 = _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]


console.log(_chunk2); // 创建一个数组，其中删除所有false值

var _compact = _.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]


console.log(_compact); // 创建array与任何其他数组和/或值连接的新数组。

var array = [1];

var other = _.concat(array, 2, [3], [[4]]);

console.log(other); // array使用SameValueZero相等性比较创建未包含在其他给定数组中的值数组。结果值的顺序和引用由第一个数组确定。

var diff = _.difference([2, 1], [2, 3]);

console.log(diff); // 实用函数

var elements = _.attempt(function (selector) {
  console.log(selector);
  return document.querySelectorAll(selector);
}, '>_>');

if (_.isError(elements)) {
  elements = [];
} // console.log(elements)