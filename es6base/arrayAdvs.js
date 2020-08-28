// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回
var numbers1 = [1, 5, 10, 15];
var doubles = numbers1.map(function (x) {
   return x * 2;
});
//console.log(doubles);
// 求数组中每个元素的平方根
var numbers2 = [1, 4, 9];
var roots = numbers2.map(Math.sqrt);
//console.log(roots);
// 规范中定义了算法，如果被调用的映射数组是稀疏的，那么得到的数组也将保持相同的索引空白。
// 使用 map 重新格式化数组中的对象
var kvArray = [
   { key: 1, value: 10 },
   { key: 2, value: 20 },
   { key: 3, value: 30 }
];
var reformattedArray = kvArray.map(function (obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});
//console.log(reformattedArray);
var doubles = numbers2.map(n => n * 2);
//console.log(doubles);
//在一个String 上使用 map 方法获取字符串中每个字符所对应的 ASCII 码组成的数组
var map = Array.prototype.map;
var charCode = map.call('Hello World', function (x) {
   return x.charCodeAt(0);
});
//console.log(charCode);
// 从屏幕上获得所有选择的选项并打印在控制台上
/** var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});*/
// 反转字符串
var str = '1234567';
var values = Array.prototype.map.call(str, function (obj) {
   return obj;
}).reverse().join('');
//console.log(values);
// 使用技巧案例
// console.log(['1', '2', '3'].map(parseInt)); // [ 1, NaN, NaN ]
function returnInt(element) {
   return parseInt(element, 10); // 转换10进制
}
/* console.log(['1', '2', '3'].map(returnInt));
['1', '2', '3'].map(str => console.log(parseInt(str)));
console.log(['1', '2', '3'].map(Number));
console.log(['1.1', '2.2e2', '3e300'].map(Number)); */

/*
 * Array.of()方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
 * Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素7的数组，
 * 而 Array(7) 创建一个包含7个undefined元素的数组。
 */
/*console.log(Array.of(3));
console.log(Array(3));
console.log(Array(1, 2, 3));
console.log(Array.of(1, 2, 3));*/

/*
 * pop()方法从数组中删除最后一个元素，并返回该元素的值。此方法更改数组的长度
 */
/* let popArr = [1, 2, '3', undefined];
 console.log(popArr);
 console.log(popArr.length);
 let lastEle = popArr.pop();
 console.log(lastEle);
console.log(popArr.length);*/

/*
 * Array.prototype  属性表示Array 构造函数的原型，并允许您向所有Array对象添加新的属性和方法。
 * Array.prototype本身也是一个 Array
 */

/*
 * push() 方法将一个或多个元素添加到数组的末尾，并返回新数组的长度。
 * push 方法有意具有通用性。该方法和call()或apply()一起使用时，可应用在类似数组的对象上。
 */
var numbers3 = [1, 2, 3, 4, 5];
numbers3.push(6);
numbers3.push(7, 8);
//console.log(numbers3);
var numbers4 = ['a', 'b', 'c'];
//numbers3.push.apply(numbers3, numbers4);
Array.prototype.push.apply(numbers3, numbers4); // 效果同上
//console.log(numbers3);
/*
 像数组一样使用对象
 注意，尽管 obj 不是数组，
 但是push方法成功地使 obj 的 length 属性增长了，就像我们处理一个实际的数组一样。
 */
var obj = {
   length: 0,
   addElem: function addElem(elem) {
      [].push.call(this, elem);
   }
};
/*console.log(obj.length);
obj.addElem({});
obj.addElem('hello');
console.log(obj.length);
console.log(obj);*/

/*
 reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值
 回调函数第一次执行时，accumulator和currentValue的取值有两种情况：
 调用reduce时提供initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；
 没有提供initialValue，accumulator取数组中的第一个值，currentValue取数组中的第二个值
*/
var numbers5 = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 5);
//console.log(numbers5);
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
//console.log(flattened);
var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
var maxCallback2 = (acc, cur) => Math.max(acc, cur);
let maxValue = [{x: 22}, {x: 42}].reduce(maxCallback); 
//console.log(maxValue);
let maxValue2 = [{x: 22}, {x: 42}].map(el => el.x).reduce(maxCallback2, -Infinity);
//console.log(maxValue2);
var numbers6 = [0, 1, 2, 3, 4].reduce(
  function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + currentValue;
  }
);
//console.log(numbers6);
var numbers7 = [0, 1, 2, 3, 4, 5].reduce( (prev, curr) => prev + curr );
//console.log(numbers7);
var numbers8 = [0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue;
  },
  10
);
//console.log(numbers8);
/* 计算数组中每个元素出现的次数 */
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
//console.log(countedNames);
/* 使用扩展运算符和initialValue绑定包含在对象数组中的数组 */
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);
console.log(allbooks);