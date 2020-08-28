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
//console.log(allbooks);

/*
reduceRight()方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
reduceRight为数组中每个元素调用一次callback回调函数，但是数组中被删除的索引或从未被赋值的索引会跳过
*/
var flattened2 = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
//console.log(flattened2);
var numbers9 = ['1', '2', '3', '4', '5']; 
var left  = numbers9.reduce(function(prev, cur)      { return prev + cur; }); 
var right = numbers9.reduceRight(function(prev, cur) { return prev + cur; }); 
//console.log(left);
//console.log(right);


/* 
 reverse() 方法将数组中元素的位置颠倒。
*/
var arr1 = ['one', 'two', 'three'];
arr1.reverse();
//console.log(arr1);

/*
shift()方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
如果数组为空则返回undefined
shift方法移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 1。
如果length属性的值为 0 (长度为 0)，则返回undefined。
shift方法并不局限于数组：这个方法能够通过 call或apply 方法作用于类似数组的对象上.
*/
var arr2 = [1, 2, 3, 4]
var sarr = arr2.shift();
/*console.log(arr2);
console.log(sarr);*/
// 移除数组中的一个元素
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
//console.log(typeof myFish); // obejct
var myFish2 = JSON.stringify(myFish);
//console.log(typeof myFish2); // string
var shifted = myFish.shift(); 
/*console.log(myFish);
console.log(shifted);*/

/*
slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
原始数组不会被修改。
*/
var arr3 = ['zero', 'one', 'two', 'three'];
var sliced = arr3.slice(1, 3);
//console.log(sliced);
var myBMW = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 3.7 } };
var myCar = [myBMW, 2, 'cherry condition', 'purchased 2997'];
var newCar = myCar.slice(0, 2);
/*console.log(JSON.stringify(myCar));
console.log(JSON.stringify(newCar));
console.log(myCar[0].color);
console.log(newCar[0].color);
myBMW.color = 'yellow';
console.log(myCar[0].color);
console.log(newCar[0].color);*/
/*
slice方法可以用来将一个类数组（Array-like）对象/集合转换成一个数组。
只需将该方法绑定到这个对象上。
*/
function list() {
   // return Array.prototype.slice.call(arguments);
   return [].slice.call(arguments); // 两种方式效果一致
}
var list1 = list(1, 2, 3, 4, 5);
//console.log(list1);
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);
function list2() {
  return slice(arguments);
}
var list2 = list2(1, 2, 3);
//console.log(list2);

/*
some()方法测试数组中的某些元素是否通过由提供的函数实现的测试。
some为数组中的每一个元素执行一次 callback函数，直到找到一个使得 callback返回一个“真值”（即可转换为布尔值 true 的值）。
如果找到了这样一个值，some 将会立即返回 true。否则，some返回false。
*/
function isBiggerThan10(element, index, array) {
  return element > 10;
}
/*console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));
console.log([2, 5, 8, 1, 4].some(x => x > 10));
console.log([12, 5, 8, 1, 4].some(x => x > 10));*/
// 检查数组中是否存在值, 模仿includes()的功能
var fruits = ['apple', 'banana', 'mango', 'guava'];
function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
   return val === arrVal;
  });
}
function checkAvailability2(arr, val) {
  return arr.some(arrVal => val === arrVal);
}
//console.log(checkAvailability2(fruits, 'kela'));
// 将任何值转换为布尔值
var TRUTHY_VALUES = [true, 'true', 1];
function getBoolean(a) {
  'use strict';
  var value = a;
  if (typeof value === 'string') { 
    value = value.toLowerCase().trim();
  }
  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}
/*console.log(getBoolean(false));
console.log(getBoolean('false'));
console.log(getBoolean(1));
console.log(getBoolean('true'));*/

/*
sort()方法用就地（ in-place ）的算法对数组的元素进行排序，
并返回数组。 sort 排序不一定是稳定的。默认排序顺序是根据字符串Unicode码点。
*/
fruits.sort();
//console.log(fruits);
var scores = [1, 10, 21, 2]; 
scores.sort();
//console.log(scores);
function compareNumbers(a, b) {
  return a - b;
}
//console.log(scores.sort(compareNumbers));
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  return a.value - b.value;
});
//console.log(items);
/*
当排序非 ASCII 字符的字符串（如包含类似 e, é, è, a, ä 等字符的字符串）。
一些非英语语言的字符串需要使用String.localeCompare。这个函数可以将函数排序到正确的顺序
*/
var items2 = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items2.sort(function (a, b) {
  return a.localeCompare(b);
});
//console.log(items2);
/* 
使用映射改善排序:
compareFunction可能需要对元素做多次映射以实现排序，尤其当compareFunction较为复杂，
且元素较多的时候，某些compareFunction可能会导致很高的负载。使用map辅助排序将会是一个好主意。
基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。
*/
var list3 = ['Delta', 'alpha', 'CHARLIE', 'bravo'];
var mapped = list3.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});
var result = mapped.map(function(el){
  return list3[el.index];
});
//console.log(result);

/*
splice()方法通过删除现有元素和/或添加新元素来更改一个数组的内容。
splice方法使用deleteCount参数来控制是删除还是添加
*/
var myFish3 = ['angel', 'clown', 'mandarin', 'sturgeon'];
myFish3.splice(7, 1, 'drum', 'jiyu');
//myFish3.splice(2, 0, 'drum');
//console.log(myFish3);

/*
toLocaleString()返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString方法转成字符串，
这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
*/
var num = 1337;
var date = new Date();
var myArr2 = [num, date, 'foo'];
var toStr = myArr2.toLocaleString();
//console.log(toStr);
var prices = ['￥7', 500, 8123, 12]; 
prices.toLocaleString('en-GB-u-ca-islamic', { style: 'currency', currency: 'JPY' });
//console.log(prices);

/*
toString()返回一个字符串，表示指定的数组及其元素。
*/
var months = ['Jan', 'Feb', 'Mar', 'Apr'];
//console.log(months.toString());

/*
unshift()方法将一个或多个元素添加到数组的开头，并返回新数组的长度。
unshift特意被设计成具有通用性；这个方法能够通过 call或apply 方法作用于类似数组的对象上
*/
var uns = [1, 2, 3];
uns.unshift(4, 5);
//console.log(uns); 


/*
values()方法返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。
*/
var avals = ['w', 'y', 'k', 'o', 'p']; 
var iterator = avals.values();
//console.log(iterator.next().value); 
//console.log(iterator.next().value);
// 使用 for...of 循环进行迭代
var avals2 = ['w', 'y', 'k', 'o', 'p'];
var iterator2 = avals2.values();
for (let letter of iterator2) {
  console.log(letter);
}