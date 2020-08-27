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