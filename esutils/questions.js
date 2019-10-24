/*面试题*/
// No.1 意外的全局变量
function foo() {
    // 该语句声明了局部变量a.但同时它也声明了全局变量b
    let a = b = 0;
    a++;
    return a;
}
// 在 foo()或全局作用域中都没有声明变量 b。因此，JavaScript将b=0表达式解释为window.b=0。
foo();
console.log(typeof a); // undefined  变量a仅在foo()作用域内部声明，而在作用域外部中不可用。
console.log(typeof b); // number 0  b是意外创建的全局变量

// No.2 数组长度属性
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
// 数组对象的length属性具有特殊行为: 减小length属性的值有删除当前数组元素的副作用
console.log(clothes[0]);    // undefined
