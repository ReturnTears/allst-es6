console.log(123 + '');    // '123'
console.log([1, 2, 3] + '');  // '1,2,3'
console.log(true + '');   // 'true'
var str = 'hello JavaScript';  // 正确写法
var str2 = "hello html";       // 正确写法
// var str = 'hello css";         // 错误写法，首尾符号不一样

'hello'.indexOf('e');  // 1
'hello'.substring(1);  // 'ello'
'hello'.slice(1);      // 'ello'

var s1 = '2 + 2';               // 创建一个字符串字面量
var s2 = new String('2 + 2');   // 创建一个对象字符串
console.log(eval(s1));          // 4
console.log(eval(s2));          // String {"2 + 2"}