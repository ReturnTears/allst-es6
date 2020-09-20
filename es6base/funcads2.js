/**
 * function 高级应用
 * 
 * function.apply
 * apply()方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数
 * call()方法的作用和 apply() 方法类似，只有一个区别，就是 call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组。
 * 
 */

/**
 *  使用apply来链接构造器， 可以使用apply来给一个对象链接构造器，类似于Java.
 *  下面的例子会创建一个叫做construct的全局的Function函数,来使你能够在构造器中使用一个类数组对象而非参数列表。
 */
Function.prototype.construct = function (aArgs) {
    var oNew = Object.create(this.prototype);
    this.apply(oNew, aArgs);
    return oNew;
};
// 上面使用的Object.create()方法相对来说比较新。另一种可选的方法是使用闭包，
// Object.__proto__
Function.prototype.construct = function (aArgs) {
    var oNew = {};
    oNew.__proto__ = this.prototype;
    this.apply(oNew, aArgs);
    return oNew;
};
// 使用群
Function.prototype.construct = function (aArgs) {
    var fConstructor = this, fNewConstr = function () {
        fConstructor.apply(this, aArgs);
    };
    fNewConstr.prototype = fConstructor.prototype;
    return new fNewConstr();
};
// 使用Function构造函数
Function.prototype.construct = function (aArgs) {
    var fNewConstr = new Function("");
    fNewConstr.prototype = this.prototype;
    var oNew = new fNewConstr();
    this.apply(oNew, aArgs);
    return oNew;
};
// 示例
function MyConstructor() {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
    }
}
var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);
// console.log(myInstance.property0);
// console.log(myInstance instanceof MyConstructor);
// console.log(myInstance.constructor);

/**
 * 使用apply和内置函数
 * 聪明的apply用法允许你在某些本来需要写成遍历数组变量的任务中使用内建的函数。
 */
var numbers = [11, 2, 3, 4, 5, 6];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max);
console.log(min);

/**
 * 如果你的参数数组可能非常大, 那么推荐使用下面这种策略来处理: 将参数数组切块后循环传入目标方法:
 */
function minOfArray(arr) {
    var min = Infinity;
    var QUANTUM = 32768;
    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
        var submin = Math.min.apply(null,
            arr.slice(i, Math.min(i + QUANTUM, len)));
        min = Math.min(submin, min);
    }
    return min;
}
var minArr = minOfArray([5, 6, 2, 3, 7]);
console.log(minArr);
