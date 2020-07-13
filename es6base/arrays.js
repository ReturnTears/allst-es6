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
  'var'  : 'text',
  'array': [1, 2, 3, 4]
};
console.log(promise['var']);