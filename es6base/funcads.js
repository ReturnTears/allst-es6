/**
 * Default parameters
 * 函数默认参数允许在没有值或undefined被传入时使用默认形参。
 * JavaScript 中函数的参数默认是undefined。然而，在某些情况下可能需要设置一个不同的默认值。
 * 这是默认参数可以帮助的地方。
 * 
 */
// 传统方式
function multiply(a, b) {
    b = (typeof b !== 'undefined') ? b : 1;
    return a * b;
}
// console.log(multiply(5, 2));
// console.log(multiply(5, 1));
// console.log(multiply(5));
// 默认参数方式: 有了默认参数，我们不需要再在函数体内做不必要的检查。可以在函数头将b的默认值置为1
function multiply2(a, b = 1) {
    return a * b;
}
// console.log(multiply2(5, 2));
// console.log(multiply2(5, 1));
// console.log(multiply2(5));

// 传入undefined & 其他空值
function test(num = 1) {
    console.log(typeof num)
}
// test();
// test(undefined);
// test('');
// test(null);

// 调用时解析: 在函数被调用时，参数默认值会被解析
function append(value, array = []) {
    array.push(value);
    return array;
}
//console.log(append(1)); // [ 1 ]
//console.log(append(2)); // [ 2 ]

// 调用时解析规则对于函数和变量也是适用的
function callSomething(thing = something()) {
    return thing;
}
function something() {
    return 'sth';
}
//console.log(callSomething());

// 已经遇到的参数可用于以后的默认参数
function singleAutoPlural(singlar, plural = singlar + "s",
    rallyingCry = plural + ' ATTACK!!!') {
    return [singlar, plural, rallyingCry];
}
//console.log(singleAutoPlural('Hello'));
//console.log(singleAutoPlural('Hello', 'World'));
//console.log(singleAutoPlural('Hi', 'Every', 'One'));

// 示例
function go() {
    return ":P";
}
function withDefaults(a, b = 5, c = b, d = go(), e = this,
    f = arguments, g = this.value) {
    return [a, b, c, d, e, f, g];
}
function withoutDefaults(a, b, c, d, e, f, g) {
    switch (arguments.length) {
        case 0:
            a;
        case 1:
            b = 5;
        case 2:
            c = b;
        case 3:
            d = go();
        case 4:
            e = this;
        case 5:
            f = arguments;
        case 6:
            g = this.value;
        default:
    }
    return [a, b, c, d, e, f, g];
}
//console.log(withDefaults.call({value: '=^_^='}));
//console.log(withoutDefaults.call({value: '=^_^='}));

// 函数嵌套定义：默认参数总是会被首先执行，而在函数体内部的函数声明会在之后生效。
// Doesn't work! Throws ReferenceError.
function f(a = go()) {
    function go() { return ':P'; }
}

// 位于默认参数之后非默认参数，参数仍然设置为从左到右，覆盖默认参数，即使后面的参数没有默认值
function f(x = 1, y) {
    return [x, y];
}
// console.log(f());
// console.log(f(10));

// 有默认值的解构参数,以通过解构赋值为参数赋值
function fm([x, y] = [1, 2], { z: z } = { z: 3 }) {
    return x + y + z;
}
//console.log(fm());


/**
 * Function 构造函数 创建一个新的Function对象
 * 每个函数实际上都是一个Function对象。
 * 语法：
 * new Function ([arg1[, arg2[, ...argN]],] functionBody)
 * 参数：
 * arg1, arg2, ... argN被函数使用的参数的名称必须是合法命名的。
 * 参数名称是一个有效的JavaScript标识符的字符串，或者一个用逗号分隔的有效字符串的列表。
 * functionBody一个含有包括函数定义的JavaScript语句的字符串。
 * 
 * 使用Function构造器生成的Function对象是在函数创建时解析的。这比你使用函数声明或者函数表达式(function)并在你的代码中调用更为低效，
 * 因为使用后者创建的函数是跟其他代码一起解析的。所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序。
 * 以调用函数的方式调用Function的构造函数 (不是用new关键字) 跟以构造函数来调用是一样的.
 * 
 * Function的属性和方法
 * 全局的Function对象没有自己的属性和方法, 但是, 因为它本身也是函数，所以它也会通过原型链从Function.prototype上继承部分属性和方法。
 */
var fcn = new Function('a', 'b', 'return a + b');
// console.log(fcn(2, 6));
// console.log(fcn.caller);
// console.log(fcn.name);
// console.log(fcn.displayName);
// console.log(fcn.length);

/**
 * 函数构造器和函数声明的区别:
 * 使用Function构造器创建的函数不会为其创建上下文及闭包; 他们总是在全球范围内创建。
 * 在运行它们时，它们只能访问自己的局部变量和全局变量，而不能调用Function构造函数的范围。这与用eval函数表达式的代码不同。
 */
var x = 10;
function createFunction1() {
    var x = 20;
    return new Function('x', 'return x'); // this |x| refers global |x|
}
function createFunction2() {
    var x = 20;
    function f() {
        return x; // this |x| refers local |x| above
    }
    return f;
}
var f1 = createFunction1();
console.log(f1(x));
//var f2 = createFunction2();
//console.log(f2());

