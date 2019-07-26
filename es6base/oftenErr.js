// --------------------------------------------------Offen Errors-------------------------------------------------------
(function () {

})();
// No.1
// 尽管typeof bar === "object"是检查bar是否对象的可靠方法发，但是在JavaScript中null也被认为是对象
function fno1() {
    let bar = null;
    console.log(typeof bar === "object");
    console.log(bar !== null);
    // 同时检查bar是否为null
    console.log((bar !== null) && (typeof bar === "object"));
    // 当bar是一个函数时，但当你也想对函数返回 true 的话
    console.log((bar !== null) && ((typeof bar === "object")) || (typeof bar === "function"));
    // 当bar是一个数组时
    console.log((bar !== null) && (typeof bar === "object") && (toString.call(bar) !== "[object Array]"));
    // 使用jquery
    console.log((bar !== null) && (typeof bar === "object") && (! $.isArray(bar)));
}
// No.2
function fno2() {
    // "use strict"; 使用严格模式时下面语句就会报错
    var a = b = 3;
    // var a = b = 3是b = 3; var a = b;的简写, b最终成为了一个全局变量(因为他没有前缀var关键字)
    // 因此（如果你不使用严格模式的话），该代码段的输出是：false true
}
console.log("a defined ?" + (typeof a !== "undefined"));
console.log("b defined ?" + (typeof b !== 'undefined'));
// No.3
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
// 在外部函数中,this和self两者都指向了myObject,因此两者都可以正确地引用和访问foo。
// 在内部函数中,this不再指向myObject.其结果是,this.foo没有在内部函数中被定义,相反,指向到本地的变量self保持在范围内,并且可以访问
myObject.func();
// No.4
function fno4_1() {
    return {
        bar: "Hello"
    };
}
// 分号在JavaScript中是一个可选项, 但当碰到fno4_2()中包含return语句的代码行(代码行上没有其他任何代码),分号会立即自动插入到返回语句之后
function fno4_2() {
    return
    {
      bar: "World"
    };
}
console.log("foo1 returns:");
console.log(fno4_1());
console.log("foo2 returns:");
console.log(fno4_2());
// No.5
console.log(typeof NaN === "number");
// NaN 和任何东西比较——甚至是它自己本身,结果是false
console.log(typeof NaN === NaN);
// ES6
console.log(Number.isNaN());
// No.6
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
// No.7
(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();
// No.8
// 简单的函数（少于80个字符），要求返回一个布尔值指明字符串是否为回文结构
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
// No.9
// 写一个 sum方法，在使用下面任一语法调用时，都可以正常工作
function sum(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) { return x + y; };
    }
}
function sum2(x, y) {
    if (y !== undefined) {
        return x + y;
    } else {
        return function(y) { return x + y; };
    }
}
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
//

