/*
 * arguments 是一个对应于传递给函数的参数的类数组对象。
 * arguments对象是所有（非箭头）函数中都可用的局部变量。
 * 你可以使用arguments对象在函数中引用函数的参数。此对象包含传递给函数的每个参数的条目，第一个条目的索引从0开始
 */
console.log(arguments.length);
//console.log(arguments);
console.log(arguments[0]);
/**
 * arguments对象不是一个Array 。它类似于Array，但除了长度之外没有任何Array属性
 */
let args = Array.from(arguments);
//console.log(args);

console.log(typeof arguments); // object
/**
 * 对参数使用扩展语法: Array.from(arguments)
 * 属性:
 *      arguments.callee指向当前执行的函数。
 *      arguments.caller指向调用当前函数的函数。 arguments.caller 已经不可使用了，但是你还可以使用 Function.caller。
 *      arguments.length指向传递给当前函数的参数数量。
 *      arguments[@@iterator]返回一个新的Array迭代器对象，该对象包含参数中每个索引的值。
 * @param {zhang} name 
 * @param {12} age 
 */
function myarg(name, age) {
    console.log(arguments[0]);
    // let args = [...arguments];
    let args =  Array.from(arguments);
    console.log(args);
    console.log(arguments.callee);
    console.log(arguments.length);
}
//myarg('zhang', 12);

function callFun() {
    console.log('callFun');
    myarg('kang shuai', 18);
}
callFun();

// 定义连接字符串的函数
function myConcat(separator) {
    var args = Array.prototype.slice.call(arguments, 1);
    return args.join(separator);
}
let result = myConcat(', ', 'red', 'orange', 'blue');
console.log(result);

// 定义创建HTML列表的方法
function list(type) {
    var result = '<' + type + 'l><li>';
    var args = Array.prototype.slice.call(arguments, 1);
    result += args.join('</li><li>');
    result += '</li></' + type + 'l>'; // end list
  
    return result;
}
var listHTML = list('u', 'One', 'Two', 'Three');
console.log(listHTML);

/**
 * 剩余参数、默认参数和解构赋值参数
 * arguments对象可以与剩余参数、默认参数和解构赋值参数结合使用。
 */
function foo(...args) {
    return args;
  }
console.log(foo(1, 2, 3));

/**
 * 在严格模式下，剩余参数、默认参数和解构赋值参数的存在不会改变arguments对象的行为，
 * 但是在非严格模式下就有所不同了。当非严格模式中的函数没有包含剩余参数、默认参数和解构赋值，
 * 那么arguments对象中的值会跟踪参数的值（反之亦然）
 */
function func(a) { 
    arguments[0] = 99;
    console.log(a);
  }
func(10);
function func2(a) { 
    a = 99;
    console.log(arguments[0]);
}
func2(10); 

/**
 * 当非严格模式中的函数有包含剩余参数、默认参数和解构赋值，
 * 那么arguments对象中的值不会跟踪参数的值（反之亦然）。相反,arguments反映了调用时提供的参数：
 */
function func3(a = 55) { 
    arguments[0] = 99;
    console.log(a);
}
func3(10);
function func4(a = 55) { 
    a = 99;
    console.log(arguments[0]);
  }
func4(10);
function func5(a = 55) { 
    console.log(arguments[0]);
}
func5();