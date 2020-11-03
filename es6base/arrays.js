// 创建数组
var color = ["Red", "Green", "Pink"];
// 通过索引访问数组元素
var first = color[0];
var last = color[color.length - 1];
// console.log(first, last);
// 遍历数组
color.forEach(function (item, index, array) {
  // console.log(item, index);
});
// 添加元素到数组的末尾
var newLength = color.push('Blue');
// console.log(color);
// 删除数组末尾的元素
var lastEle = color.pop();
// console.log(color);
// 删除数组首个元素
var firstEle = color.shift();
// console.log(color);
// 添加元素到数组的头部
var newLength2 = color.unshift('Yellow');
// console.log(color);
// 找出某个元素在数组中的索引,未找到返回-1
var pos = color.indexOf('Pink');
// console.log(pos)
// 通过索引删除某个元素
var removeEle = color.splice(pos, 1);
// console.log(color);
// 从一个索引位置删除多个元素
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot', 'xx'];
// console.log(vegetables);
var removeItem = vegetables.splice(1, 2);
// console.log(vegetables);
// console.log(removeItem);
// 复制一个数组
var shallowCopy = vegetables.slice();
// console.log(shallowCopy);
// 创建数组的其他两种方式
var arr2 = new Array("Green", "Red", "Blue");
// console.log(arr2);
var arr3 = new Array(4);
// console.log(arr3);
arr3.push("Hello");
// console.log(arr3);
// 访问数组元素
var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
// console.log(years[0]);
// 也可以将数组的索引用引号引起来,years[2]中的 2 会被 JavaScript 解释器通过调用toString 隐式转换成字符串
//console.log(years['2'] != years['02']);
// 如果对象的属性名称是保留字（！），那么就只能通过字符串的形式用方括号来访问
var promise = {
  'var': 'text',
  'array': [1, 2, 3, 4]
};
// console.log(promise['var']);
// 正则匹配结果所返回的数组
var myRe = /d(b+)(d)/i;
var myArray = myRe.exec('cdbBdbsbz');
// console.log(myArray);
// 属性
// console.log(Array.length);
// 属性
let set = new Set();
set.add('a');
set.add('b');
set.add('c');
var setArr = Array.from(set);
// console.log(setArr);
// console.log(Array.isArray(setArr));

// for...of
var ofArr = ['H', 'E', 'L', 'L', 'O'];
var eArr = ofArr[Symbol.iterator]();
// console.log(eArr.next().value);
for (let letter of eArr) {
  //console.log(letter);
}

// concat
var arr1 = ['a', 'b', 'c'];
var arr2 = ['d', 'e', 'f'];
var arr3 = ['g', 'h', 'i'];
var arr4 = arr1.concat(arr2);
//console.log(arr3);
var arr5 = arr1.concat(arr2, arr3);
//console.log(arr5);
// 合并嵌套数组
var num1 = [[1]];
var num2 = [2, [3]];
var nums = num1.concat(num2);
// console.log(nums);
num1[0].push(5);
// console.log(nums);

// copyWithin
var cArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// console.log(cArr.copyWithin(2, 3));

// entries
var ena = ['a', 'b', 'c'];
var iterator = ena.entries();
// console.log(iterator.next().value)

// every
function isBigEnough(element, index, array) {
  return element >= 10;
}
// console.log([12,7,8,9,11].every(isBigEnough));
// console.log([12,17,18,19,11].every(isBigEnough));
// Using arrow functions
// console.log([12,7,8,9,11].every(x => x >= 10));
// console.log([12,17,18,19,11].every(x => x >= 10));

// fill
var numbers = new Array(5);
// numbers.fill(1);
// numbers.fill(1, 2);
numbers.fill(1, 2, 3);
// console.log(numbers);
// console.log([1, 2, 3].fill(4, 1, 1));

// filter
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var longWords = words.filter(function (word) {
  return word.length > 6;
});
var longWords2 = words.filter(w => w.length > 7);
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);

// filter
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var longWords = words.filter(function (word) {
  return word.length > 6;
});
// console.log(longWords);
var longWords2 = words.filter(word => word.length > 6);
// console.log(longWords2);

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);
var jsonArr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];
var invalidEntries = 0;
function isNumber(obj) {
  return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj);
}
function filterByID(item) {
  if (isNumber(item.id)) {
    return true;
  }
  invalidEntries++;
  return false;
}
var arrByID = jsonArr.filter(filterByID);
//console.log('Filtered Array\n', arrByID);
//console.log('Number of Invalid Entries = ', invalidEntries); 
var fruits_eight = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
  return fruits_eight.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
const filterItems2 = (query) => {
  return fruits_eight.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}
// console.log(filterItems('ap'));
// console.log(filterItems2('an'));

// find 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回undefined
// console.log([12, 5, 8, 130, 44].find(isBigEnough));
let myEleIndex = [12, 5, 8, 130, 44].indexOf(8);
// console.log(myEleIndex);
// console.log([12, 5, 8, 130, 44].includes(8));
// 用对象的属性查找数组里的对象
var inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];
function findCherries(fruit) {
  return fruit.name === 'cherries';
}
// console.log(inventory.find(findCherries));
// 寻找数组中的质数
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
// console.log([4, 6, 8, 12].find(isPrime));
// console.log([4, 5, 8, 12].find(isPrime));
// console.log(Math.sqrt(6));

// findIndex 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
function isBigEnoughById(element) {
  return element >= 20;
}
let myArr = [12, 7, 25, 22, 30];
let condIndex = myArr.findIndex(isBigEnoughById);
//console.log(condIndex); // 2
//console.log(myArr.findIndex(isPrime));  // 1 查询数组中首个质数元素的索引

// forEach 方法对数组的每个元素执行一次提供的函数。
let feArr = ['a', 'b', 'c', 'd'];
feArr.forEach(function (element) {
  //console.log(element);
});

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};
var obj = new Counter();
obj.add([2, 5, 6, 7]);
//console.log(obj.count);
//console.log(obj.sum);

// from方法从一个类似数组或可迭代对象中创建一个新的数组实例
const bar = ["a", "b", "c", "d"];
let arrBar = Array.from(bar);
//console.log(arrBar);
let fooArr = Array.from('fooooo'); // 从字符串获得数组
//console.log(fooArr);
var setArray = new Set(['Linux', 'window', 101]); // 从集合中获得数组
//console.log(Array.from(setArray));
var mapArr = new Map([[1, 2], [3, 4], [5, 6]]); // 从映射中获得数组
//console.log(Array.from(mapArr));
function fnnArr() {
  return Array.from(arguments); // 从一个类似数组的对象中获得数组（其作为array构造时的参数）
}
//console.log(fnnArr(1, 'a', 2));
let arrowArr = Array.from([1, 2, 3], x => x + x); // 使用箭头函数和 Array.from
//console.log(Array.from({length: 5}, (v, i) => i));
//console.log(arrowArr);

// includes(searchElement, fromIndex)方法用来判断一个数组是否包含一个指定的值，根据情况返回 true否false。
// fromIndex可选从该索引处开始查找searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。
// 如果计算出的索引小于 0，则整个数组都会被搜索。
//console.log([1, 2, 3].includes(2, -1)); // false
//console.log([1, 2, 3].includes(3, -1)); // true
//console.log([1, 2, NaN].includes(NaN)); // true
// includes() 作为一个通用方法
/*(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');*/

// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
// arr.indexOf(searchElement[, fromIndex])
var ioArray = [2, 9, 9, 9];
//console.log(ioArray.indexOf(9, 2));
// 找出指定元素出现的所有位置
var indices = [];
var ioArrays = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = ioArrays.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = ioArrays.indexOf(element, idx + 1);
}
//console.log(indices);

// Array.isArray(obj) 用于确定传递的值是否是一个Array。
//console.log(Array.isArray([]));
//console.log(Array.isArray([1]));
//console.log(Array.isArray(new Array()));
//console.log(Array.isArray(Array.prototype));

// join()方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
var ajoin = ['Wind', 'Rain', 'Fire'];
let defjoin = ajoin.join();
//console.log(defjoin);
let mydefjoin = ajoin.join('-');
//console.log(mydefjoin);

// keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。
var keysArr = ['a', 'b', 'c', 'd'];
let iteratorArr = keysArr.keys();
//console.log(iteratorArr.next());
//console.log(iteratorArr.next());
// key迭代器不会忽略空洞
var keysarrs = ['a', , 'c'];
var sparseKeys = Object.keys(keysarrs);
var denseKeys = [...keysarrs.keys()];
//console.log(sparseKeys); // ['0', '2']
//console.log(denseKeys);  // [0, 1, 2]

// lastIndexOf()方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从fromIndex处开始。
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
var indicelio = [];
var arraylio = ['a', 'b', 'a', 'c', 'a', 'd'];
var elementlio = 'a';
var idxlio = arraylio.lastIndexOf(elementlio);
while (idxlio != -1) {
  indicelio.push(idxlio);
  idxlio = (idxlio > 0 ? arraylio.lastIndexOf(elementlio, idxlio - 1) : -1);
}
//console.log(indicelio);

// length是Array的实例属性。返回或设置一个数组中的元素个数。该值是一个无符号 32-bit 整数，并且总是大于数组最高项的下标。
// length属性的值是一个 0 到 2^32的-1次方 的整数。
var itemsLength = ['shoes', 'shirts', 'socks', 'sweaters'];
//console.log(itemsLength.length); 
/*
你可以设置length 属性的值来截断任何数组。当通过改变length属性值来扩展数组时，实际元素的数目将会增加。例
如：将一个拥有 2 个元素的数组的 length 属性值设为 3 时，那么这个数组将会包含3个元素，并且，第三个元素的值将会是undefined
*/
// 遍历数组
var numberslength = [1, 2, 3, 4, 5];
var numlength = numberslength.length;
for (var i = 0; i < numlength; i++) {
  numberslength[i] *= 2;
}
// 截断数组
var jieduannumbers = [7, 2, 3, 4, 5];
if (jieduannumbers.length > 3) {
  jieduannumbers.length = 3;
}
// console.log(jieduannumbers);

/**
 * sort()方法用就地（ in-place ）的算法对数组的元素进行排序，并返回数组。 
 * sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点
 * @param {*} v1 
 * @param {*} v2 
 */
function compare(v1, v2) {
  if (v1 < v2) {
    return -1
  } else if (v1 > v2) {
    return 1
  } else {
    return 0
  }
}
jieduannumbers.sort(compare)
console.log(jieduannumbers)

/**
 * reduce
 * 参数说明:前一个值,当前值,索引位置,array
 */
const reduceArr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
var result = reduceArr.reduce(function (prev, cur, index, array) {
  return prev + cur
})
console.log(result)