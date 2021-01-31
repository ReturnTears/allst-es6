/** 函数 */
/** 
 * 函数真没什么特殊的，你可以像对待任何其他数据类型一样对待它们——把它们存在数组里，当作参数传递，赋值给变量...等等 
 *  
 */ 
const hi = name => `Hi ${name}`;
// console.log(hi);
const greeting = name => hi(name);
// const greeting = hi;
/**
 * 用一个函数把另一个函数包起来，目的仅仅是延迟执行，真的是非常糟糕的编程习惯
 * 
 * 函数是不同数值之间的特殊关系：每一个输入值返回且只返回一个输出值。
 * 换句话说，函数只是两种数值之间的关系：输入和输出。尽管每个输入都只会有一个输出，但不同的输入却可以有相同的输出。
 * 
 * 纯函数就是数学上的函数，而且是函数式编程的全部。使用这些纯函数编程能够带来大量的好处，让我们来看一下为何要不遗余力地保留函数的纯粹性的原因
 * 
 * 追求“纯”的理由：
 * {
 *  可缓存性（Cacheable）：
 *      首先，纯函数总能够根据输入来做缓存。实现缓存的一种典型方式是 memoize 技术。
 *  可移植性／自文档化（Portable / Self-Documenting）:
 *      纯函数是完全自给自足的，它需要的所有东西都能轻易获得。
 *      在 JavaScript 的设定中，可移植性可以意味着把函数序列化（serializing）并通过 socket 发送。也可以意味着代码能够在 web workers 中运行。总之，可移植性是一个非常强大的特性。
 *  可测试性（Testable）：
 *      第三点，纯函数让测试更加容易，强烈推荐你去试试Quickcheck——一个为函数式环境量身定制的测试工具
 *  合理性（Reasonable）：
 *      很多人相信使用纯函数最大的好处是引用透明性（referential transparency）。如果一段代码可以替换成它执行所得的结果，而且是在不改变整个程序行为的前提下替换的，那么我们就说这段代码是引用透明的。
 *      由于纯函数总是能够根据相同的输入返回相同的输出，所以它们就能够保证总是返回同一个结果，这也就保证了引用透明性。
 *  并行代码:
 *      最后一点，也是决定性的一点：我们可以并行运行任意纯函数。因为纯函数根本不需要访问共享的内存，而且根据其定义，纯函数也不会因副作用而进入竞争态（race condition）。
 *      并行代码在服务端 js 环境以及使用了 web worker 的浏览器那里是非常容易实现的，因为它们使用了线程（thread）。不过出于对非纯函数复杂度的考虑，当前主流观点还是避免使用这种并行。
 * }
 */
var memoize = function(f) {
    var cache = {};
    return function() {
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str];
    };
};
var squareNumber  = memoize(function(x){ return x*x; });
// console.log(squareNumber(4));
// console.log(squareNumber(4));   // 从缓存中读取输入值为 4 的结果

/**
 * 我们可以使用一种叫做“等式推导”（equational reasoning）的技术来分析代码。所谓“等式推导”就是“一对一”替换，有点像在不考虑程序性执行的怪异行为（quirks of programmatic evaluation）的情况下，手动执行相关代码。
 * 总之，等式推导带来的分析代码的能力对重构和理解代码非常重要。
 * 
 */

 /**
  * 柯里化（curry）
  * 不可或缺的 curry:
  * {
  *     curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
  *     你可以一次性地调用 curry 函数，也可以每次只传一个参数分多次调用。
  * }
  */
 var add = function(x) {
    return function(y) {
      return x + y;
    };
  };
var increment = add(1);
var addTen = add(10);

// console.log(increment(2)) // 3
// console.log(addTen(2)) // 12

/**
 * Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
 * 安装：
 *      通过 npm：
 *      $ npm i -g npm
 *      $ npm i --save lodash
 *      或者 npm install lodash 安装 lodash
 *      Node.js：
 *      // Load the full build.
 *      var _ = require('lodash');
 *      // Load the core build.
 *      var _ = require('lodash/core');
 *      // Load the FP build for immutable auto-curried iteratee-first data-last methods.
 *      var fp = require('lodash/fp');
 *      // Load method categories.
 *      var array = require('lodash/array');
 *      var object = require('lodash/fp/object');
 *      // Cherry-pick methods for smaller browserify/rollup/webpack bundles.
 *      var at = require('lodash/at');
 *      var curryN = require('lodash/fp/curryN');
 * 
 *  只传给函数一部分参数通常也叫做局部调用（partial application），能够大量减少样板文件代码（boilerplate code）
 *  
 */
var curry = require('lodash').curry;
// console.log(curry)
var _ = require('lodash');
var result = _.chunk(['a', 'b', 'c', 'd'], 2)
console.log(result)

var match = curry(function(what, str) {
    return str.match(what);
});
  
var replace = curry(function(what, replacement, str) {
    return str.replace(what, replacement);
});
  
var filter = curry(function(f, ary) {
    return ary.filter(f);
});
  
var map = curry(function(f, ary) {
    return ary.map(f);
});

// console.log('add', map(add(2)));

const R = require('ramda');
// var words = function(str) {
//     return R.split(' ', str);
// };
// 
var words = R.split(' ');
console.log(words('hi world'))




