// call、apply的简单用法，绑定一些函数
function sum(x, y) {
    return x + y
}
function call1(n1, n2) {
    // 将一个函数绑定到特定的作用域中去执行
    return sum.call(this, n1, n2)
}
function apply1(n1, n2) {
    return sum.apply(this, [n1, n2])
}
// console.log(apply1(10, 20)) // 30

function add(x, y) { return x + y }
// js中有一个约定俗成的规范，函数名大写了，就认为是一个对象
// Obj自定义对象
function Obj(x, y) {
    this.x = x;
    this.y = y;
    return x * y;
}
var o = new Obj(33, 12)
o.method = sum
console.log(o.method(o.x, o.y))
delete o.method
console.log(add.call(o, o.x, o.y))