var num1 = 024;
// console.table(num1);
console.log(num1); // 20
var num2 = 079;
console.log(num2); // 79
var num3 = 0x3f;
console.log(num3); // 63
//var num4 = 0x2g;   // syntaxError

// Boolean类型转换为Number类型
console.log(Number(true)); // 1
console.log(Number(false)); // 0
// Null类型转换为Number类型
console.log(Number(null)); // 0
// Undefined类型转换为Number类型
console.log(Number(undefined)); // NaN
// String类型转换为Number类型
console.log(Number("0123"), Number("1.23"), Number(""), Number("123a")); // 123 1.23 0 NaN
// Object类型转换为Number类型

//  parseInt()函数
var num4 = parseInt('0x12', 16);
console.log(num4); // 18
var num5 = parseInt(0x12, 16);
console.log(num5); // 24
var num6 = parseInt("fg123", 16); 
console.log(num6); // 15
var num7 = parseInt(15 * 3, 10);
console.log(num7); // 45
var num8 = parseInt('15 * 3', 10);
console.log(num8); // 15

// 对包含字符e的不同数据的处理差异
var num9 = parseInt(6e3, 10);
console.log(num9); // 6000
var num10 = parseInt(6e3, 16);
console.log(num10); // 24576
var num11 = parseInt('6e3', 10);
console.log(num11); // 6
var num12 = parseInt('6e3', 16);
console.log(num12); // 1763

// 对浮点型数的处理
var num13 = parseInt('6.03', 10);
console.log(num13);  // 6
var num14 = parseInt('6.99', 10);
console.log(num14);  // 6

// map()函数与parseInt()函数的隐形坑
var arr = ['1', '2', '3', '4'];
var result = arr.map(parseInt);
console.log(result); // [ 1, NaN, NaN, NaN ]

var result2 = arr.map(function(val) {
    return parseInt(val, 10);
});
console.log(result2); // [1,2,3,4]

var num15 = parseFloat('22.3.56');
console.log(num15); // 22.3