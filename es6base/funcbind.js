/**
 * function.bind
 * bind()方法创建一个新的函数, 当被调用时，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列.
 * 
 * 语法::
 * fun.bind(thisArg[, arg1[, arg2[, ...]]])
 * 参数
 * thisArg当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用new操作符调用绑定函数时，该参数无效。
 * arg1, arg2, ...当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。
 * 返回值
 * 返回由指定的this值和初始化参数改造的原函数拷贝
 * 
 * 描述::
 * bind() 函数会创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的call属性）。
 * 当新函数被调用时 this 值绑定到 bind() 的第一个参数，该参数不能被重写。
 * 
 * 常见绑定函数::
 * bind() 最简单的用法是创建一个函数，使这个函数不论怎么调用都有同样的 this 值。
 * 
 */
// 'use strict' 在浏览器开发者工具下执行
this.x = 9;
var module = {
    x: 81,
    getX: function() {return this.x;}
};
console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());   // 9

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81