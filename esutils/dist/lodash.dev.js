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
}

console.log(elements);

var diffBy = _.differenceBy([1, 2], [2, 3]);

console.log(diffBy);
var objects = [{
  'x': 1,
  y: 2
}, {
  'x': 2,
  'y': 1
}];

var diffWith = _.differenceWith(objects, [{
  'x': 1,
  'y': 2
}], _.isEqual);

console.log(diffWith); // _.drop(array [, n=1])

var drop1 = _.drop([1, 2, 3]);

console.log(drop1);

var drop2 = _.drop([1, 2, 3], 2);

console.log(drop2);

var drop3 = _.drop([1, 2, 3], 5);

console.log(drop3);

var drop4 = _.drop([1, 2, 3], 0);

console.log(drop4); // _.dropRight(array [,n=1])

var drop5 = _.dropRight([1, 2, 3]);

console.log(drop5);

var drop6 = _.dropRight([1, 2, 3], 2);

console.log(drop6);

var drop7 = _.dropRight([1, 2, 3], 5);

console.log(drop7);

var drop8 = _.dropRight([1, 2, 3], 0);

console.log(drop8); // _.dropRightWhile(array, predicate=_.identity)

var users = [{
  'user': 'barney',
  'active': true
}, {
  'user': 'fred',
  'active': false
}, {
  'user': 'pebbles',
  'active': false
}];

var res1 = _.dropRightWhile(users, function (o) {
  return !o.active;
});

console.log(res1);

var res2 = _.dropRightWhile(users, {
  user: 'pebbles',
  active: false
});

console.log(res2);

var res3 = _.dropRightWhile(users, ['active', false]);

console.log(res3);

var res4 = _.dropRightWhile(users, 'active');

console.log(res4); // _.dropWhile(array, predicate=_.identity) 与 dropRightWhile 相反

var number = [1, 2, 3];
var num1 = number.fill(1);
console.log(num1);

var num2 = _.fill(number, 'a');

console.log(num2);
console.log(number);

var num3 = _.fill(Array(3), 3);

console.log(num3); // _.fill(array, value, start=0, end=array.length) 填充的元素array与value来自start为止，但不包括end。

var num4 = _.fill([4, 6, 8, 10], '*', 1, 3);

console.log(num4);

var index1 = _.findIndex(users, function (o) {
  return o.user == 'barney';
});

console.log(index1);