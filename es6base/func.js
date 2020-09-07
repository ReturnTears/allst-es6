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

/**
 * @@iterator 属性的初始值是和Array.prototype.values属性的初始值相同的对象
 */
function func6() {
    console.log(arguments);
    for (const letter of arguments) {
        console.log(letter);
    }
}
func6('S','c','r','i','p','t');

/**
 * arguments.callee 属性包含当前正在执行的函数。
 * 
 * callee是arguments对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。
 * 这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内,也就是说
 * 在具名函数下不能使用这个
 */
function func7(n) {
    return !(n > 1) ? 1 : func7(n - 1) * n;
}
let func7Result = [1,2,3,4,5].map(func7);
console.log(func7Result);

let func8Result = [1, 2, 3, 4, 5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
console.log(func8Result);

let func8Result2 = [1, 2, 3, 4, 5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n-1) * n;
});
console.log(func8Result2);

/**
 * 在匿名递归函数中使用 arguments.callee
 * 
 * 递归函数必须能够引用它本身。很典型的，函数通过自己的名字调用自己。
 * 然而，匿名函数 (通过函数表达式 或者函数构造器 创建) 没有名称。
 * 因此如果没有可访问的变量指向该函数，唯一能引用它的方式就是通过 arguments.callee
 */
function func9() {
    return function(n) {
        if (n <= 1)
           return 1;
        return n * arguments.callee(n - 1);
    };
}
let func9Result = func9()(5);
console.log(func9Result);


/**
 * 该 arguments.length 属性包含传递给该函数的参数的数量。
 * arguments.length表示的是实际上向函数传入了多少个参数,这个数字可以比形参数量大,
 * 也可以比形参数量小(形参数量的值可以通过Function.length获取到
 */
console.log(arguments.length);
console.log(Function.length);
function func10(base) {
    base = Number(base);
    for (var i = 1; i < arguments.length; i++) {
        base += Number(arguments[i]);
    }
    return base;
}
let func10Result = func10(5);
console.log(func10Result);  