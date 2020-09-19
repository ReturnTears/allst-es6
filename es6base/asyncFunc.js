/**
 * TODO
 * AsyncFunction 构造函数用来创建新的 异步函数对象，JavaScript 中每个异步函数都是 AsyncFunction 的对象。
 * 注意，AsyncFunction并不是一个全局对象，需要通过下面的方法来获取:
 * Object.getPrototypeOf(async function(){}).constructor
 * 
 * 语法：
 * new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)
 * 参数描述：
 * 执行AsyncFunction 构造函数的时候，会创建一个异步函数对象。但是这种方式不如先用 异步函数表达式定义一个异步函数，然后再调用其来创建 异步函数对象来的高效，因为第二种方式中异步函数是与其他代码一起被解释器解析的，而第一种方式的函数体是单独解析的。
 * 传递给 AsyncFunction 构造函数的所有参数，都会成为新函数中的变量，变量的名称和定义顺序与各参数相同。
 * 
 * 注意：使用AsyncFunction 构造函数创建的异步函数并不会在当前上下文中创建闭包，其作用域始终是全局的。
 * 因此运行的时候只能访问它们自己的本地变量和全局变量，但不能访问构造函数被调用的那个作用域中的变量。
 * 这是它与 eval不同的地方。
 * 调用 AsyncFunction构造函数时可以省略 new，其效果是一样的。
 * 
 * 属性：
 * AsyncFunction.lengthAsyncFunction构造函数的 length 属性，值为 1。
 * AsyncFunction.prototype通过原型对象可以为所有异步函数对象定义额外的属性。
 * 
 * AsyncFunction 原型对象
 * 属性：
 * AsyncFunction.constructor默认值为AsyncFunction.AsyncFunction.prototype[@@toStringTag]Returns "AsyncFunction".
 * 
 * AsyncFunction 实例
 * AsyncFunction实例继承了AsyncFunction.prototype的方法和属性。
 * 和所有构造函数一样，修改 AsyncFunction 构造函数的原型对象会同时对所有 AsyncFunction 实例上生效。
 */
// 通过 AsyncFunction 构造器创建一个异步函数
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}
var AsyncFunction = Object.getPrototypeOf(async function () { }).constructor
var a = new AsyncFunction('a',
    'b',
    'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');
a(10, 20).then(v => {
    console.log(v);
});
/**
 * AsyncFunction.prototype属性表示AsyncFunction的原型对象.
 * 描述
 * AsyncFunction对象继承自 AsyncFunction.prototype.AsyncFunction.prototype不能被修改.
 * 
 * 属性
 * AsyncFunction.constructor默认值为AsyncFunction.AsyncFunction.prototype[@@toStringTag]Returns "AsyncFunction".
 * 
 */