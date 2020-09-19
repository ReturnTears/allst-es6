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
console.log(multiply2(5, 2));
console.log(multiply2(5, 1));
console.log(multiply2(5));