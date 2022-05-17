// lodash
var _ = require('lodash');

// 数组相关函数
// 1、chunk(array, size=1) 根据size参数将数组分组，size是每一组的长度。如果数组不能均分，最后一组就会包含剩下的元素
const _chunk1 = _.chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']] 
console.log(_chunk1)

const _chunk2 = _.chunk(['a', 'b', 'c', 'd'], 3); // => [['a', 'b', 'c'], ['d']]
console.log(_chunk2)

// 创建一个数组，其中删除所有false值
const _compact = _.compact([0, 1, false, 2, '', 3]); // => [1, 2, 3]
console.log(_compact)

// 创建array与任何其他数组和/或值连接的新数组。
let array = [1];
let other = _.concat(array, 2, [3], [[4]]);
console.log(other)

// array使用SameValueZero相等性比较创建未包含在其他给定数组中的值数组。结果值的顺序和引用由第一个数组确定。
let diff = _.difference([2, 1], [2, 3]);
console.log(diff)

// 实用函数
var elements = _.attempt(function(selector) {
    console.log(selector)
    return document.querySelectorAll(selector);
}, '>_>');

if (_.isError(elements)) {
    elements = [];
}

console.log(elements)

let diffBy = _.differenceBy([1, 2], [2, 3]);
console.log(diffBy)

let objects = [{'x': 1, y: 2}, {'x': 2, 'y': 1}]
let diffWith = _.differenceWith(objects, [{'x': 1, 'y': 2}], _.isEqual)
console.log(diffWith)

// _.drop(array [, n=1])

let drop1 = _.drop([1, 2, 3]);
console.log(drop1)

let drop2 = _.drop([1, 2, 3], 2);
console.log(drop2)
 
let drop3 = _.drop([1, 2, 3], 5);
console.log(drop3)
 
let drop4 = _.drop([1, 2, 3], 0);
console.log(drop4)

// _.dropRight(array [,n=1])

let drop5 = _.dropRight([1, 2, 3]);
console.log(drop5)
 
let drop6 = _.dropRight([1, 2, 3], 2);
console.log(drop6)
 
let drop7 = _.dropRight([1, 2, 3], 5);
console.log(drop7)
 
let drop8 = _.dropRight([1, 2, 3], 0);
console.log(drop8)

// _.dropRightWhile(array, predicate=_.identity)
var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
];
let res1 = _.dropRightWhile(users, function(o) { return !o.active; });
console.log(res1);

let res2 = _.dropRightWhile(users, { user: 'pebbles', active: false });
console.log(res2);

let res3 = _.dropRightWhile(users, ['active', false]);
console.log(res3);

let res4 = _.dropRightWhile(users, 'active');
console.log(res4);

// _.dropWhile(array, predicate=_.identity) 与 dropRightWhile 相反

var number = [1, 2, 3]
let num1 = number.fill(1)
console.log(num1);

let num2 = _.fill(number, 'a')
console.log(num2);
console.log(number);

let num3 = _.fill(Array(3), 3);
console.log(num3);

// _.fill(array, value, start=0, end=array.length) 填充的元素array与value来自start为止，但不包括end。

let num4 = _.fill([4,6,8,10], '*', 1, 3)
console.log(num4);

let index1 = _.findIndex(users, function(o) {return o.user == 'barney'})
console.log(index1);

let index2 = _.findIndex(users, { 'user': 'fred', 'active': false });
console.log(index2);

let index3 = _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
console.log(index3);

// flatten
let flat1 = _.flatten([1, [2, [3, [4]], 5]])
console.log(flat1);

// flattenDeep
let flat2 = _.flattenDeep([1, [2, [3, [4]], 5]])
console.log(flat2);

// flattenDepth(array, depth = 1)
let flat3 = _.flattenDepth([1, [2, [3, [4]], 5]], 2)
console.log(flat3);

// fromPairs
let fp1 = _.fromPairs([['a', 1], ['b', 2]])
console.log(fp1)

let fp2 = _.toPairs(fp1)
console.log(fp2)

let he = _.head([1, 2, 3])
console.log(he)

let la = _.last([1, 2, 3])
console.log(la)

let he2 = _.head([]);
console.log(he2)

let idf1 = _.indexOf([1, 2, 1, 2], 2);
console.log(idf1);

let last1 = _.lastIndexOf([1, 2, 1, 2], 2);
console.log(last1);

let idf2 = _.indexOf([1, 2, 1, 2], 2, 2);
console.log(idf2);

let last2 = _.lastIndexOf([1, 2, 1, 2], 2, 2);
console.log(last2);


let ini1 = _.initial([1, 2, 3, 4, 5])
console.log(ini1);

let int1 = _.intersection([1, 2], [2, 3])
console.log(int1);

let int2 = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
console.log(int2);

let int3 = _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
console.log(int3);

var objs = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
let int4 = _.intersectionWith(objs, others, _.isEqual);
console.log(int4);

let jo1 = [1, 2, 3, 4].join('|')
console.log(jo1)

let jo2 = _.join([1, 2, 3, 4], '~')
console.log(jo2);

let nth1 = _.nth(['a', 'b', 'c', 'd'], 1);
console.log(nth1);

let nth2 = _.nth(['a', 'b', 'c', 'd'], -2);
console.log(nth2);

let pu1 = _.pull(['a', 'b', 'c', 'd'], 'a', 'c')
console.log(pu1);

let pu2 = _.pullAll(['a', 'b', 'c', 'd', 'a', 'c'], ['a', 'c'])
console.log(pu2);

let pu3 = _.pullAllBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(pu3);

let pu4 = _.pullAllWith([{ 'x': 1, 'y': 2 }, { 'x': 3 , 'y': 4 },  { 'x': 5 , 'y': 6 }]
        , [ { 'x': 3 , 'y': 4 }], _.isEqual);
console.log(pu4);

let pu5 = _.pullAt(['a', 'b', 'c', 'd'], [1, 3]);
console.log(pu5);
