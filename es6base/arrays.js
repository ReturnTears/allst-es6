// 创建数组
var color = ["Red", "Green", "Pink"];
// 通过索引访问数组元素
var first = color[0];
var last = color[color.length - 1];
// console.log(first, last);
// 遍历数组
color.forEach(function(item, index, array) {
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
'var' : 'text',
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
var longWords = words.filter(function(word){
  return word.length > 6;
});
var longWords2 = words.filter(w => w.length > 7);
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);

// filter
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
var longWords = words.filter(function(word){
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
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];
var invalidEntries = 0;
function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
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
  return fruits_eight.filter(function(el) {
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
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
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
feArr.forEach(function(element) {
  console.log(element);
});

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
};
var obj = new Counter();
obj.add([2,5,6,7]);
console.log(obj.count);
console.log(obj.sum);