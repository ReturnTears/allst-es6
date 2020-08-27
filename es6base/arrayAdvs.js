// map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回
var numbers1 = [1, 5, 10, 15];
var doubles = numbers1.map(function(x) {
   return x * 2;
});
console.log(doubles);
var numbers2 = [1, 4, 9];
var roots = numbers2.map(Math.sqrt);
console.log(roots);