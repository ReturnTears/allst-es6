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

/**
 * Arrow functions: 箭头函数
 * 箭头函数表达式的语法比函数表达式更短，并且不绑定自己的this，arguments，super或 new.target。
 * 这些函数表达式最适合用于非方法函数，并且它们不能用作构造函数。
 * 
 * 基础语法:
 * (param1, param2, …, paramN) => { statements } 
 * (param1, param2, …, paramN) => expression
 * 当只有一个参数时，圆括号是可选的:
 * (singleParam) => { statements }
 * singleParam => { statements }
 * 没有参数的函数应该写成一对圆括号:
 * () => { statements }
 * 
 * 高级语法:
 * //加括号的函数体返回对象字面量表达式：
 * params => ({foo: bar})
 * //支持剩余参数和默认参数
 * (param1, param2, ...rest) => { statements }
 * (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
 * //同样支持参数列表解构
 * let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
 */
console.log('-----------------arrow function------------------');
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log(f());
/**
 * 引入箭头函数有两个方面的作用：更简短的函数并且不绑定this
 * 更短的函数
 */
var langsElements = [
    "Java",
    "JavaScript",
    "Scala",
    "Golang",
    "Python",
    "Haskell"
];
// 普通函数
var fn1 = langsElements.map(function(e) {
    return e.length;
});
// 箭头函数
var fn2 = langsElements.map((e) => {return e.length;});
// 箭头函数只有一个参数时，可以省略参数的圆括号
var fn2 = langsElements.map(e => {return e.length;});
// 当箭头函数的函数体只有一个 `return` 语句时，可以省略 `return` 关键字和方法体的花括号
var fn3 = langsElements.map(e => e.length);
/**
 * 如果只需要一个属性, 例如: `length` 属性，所以可以使用参数解构
 * 需要注意的是字符串 `"length"` 是我们想要获得的属性的名称
 */
var fn4 = langsElements.map(({"length": eLen}) => eLen);
console.log(fn4);

/**
 * 在ECMAScript 3/5中，通过将this值分配给封闭的变量，可以解决this问题。
 */
function Personal() {
    var that = this;
    // Personal() 构造函数定义 `this`作为它自己的实例.
    that.name = "嘿呀";
    that.age = 0;

    setInterval(function growUp() {
        that.age++;
        console.log(that.name + "_" + that.age);
    }, 2000);
}

function Personal2() {
    this.age = 0;
    setInterval(() => {
        this.age++; // |this| 正确地指向 p 实例
        console.log("_" + this.age);
    }, 1000);
}
//let p = new Personal2();
//console.log(p);

// 与严格模式的关系
//var fn5 = () => {'use strict'; return this;};
//console.log(fn5());

/** 
 * 通过 call 或 apply 调用
 * 由于箭头函数没有自己的this指针，
 * 通过call()或apply()方法调用一个函数时，只能传递参数，
 * 他们的第一个参数会被忽略。
 */
