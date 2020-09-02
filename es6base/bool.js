/**
 * Boolean对象是一个布尔值的对象包装器
 * 如果第一个参数不是布尔值，则会将其转换为布尔值。
 * 注意不要将基本类型中的布尔值 true和false与值为true和false的Boolean对象弄混了
 * 不要用创建 Boolean 对象的方式将一个非布尔值转化成布尔值，直接将 Boolean 当做转换函数来使用即可
 * Boolean.length属性，值为 1。Boolean.prototype.Boolean 构造函数的原型对象。 
 */
var x = new Boolean(false);
console.log(x); // [Boolean: false]
let x2 = "false";
var y = Boolean(x2);
console.log(y); // true
/**
 * Boolean 对象自身没有任何方法，不过它从自己的原型链上继承了一些方法
 * 所有Boolean实例都继承于Boolean.prototype。与所有的构造函数一样，Boolean的原型对象为其实例提供继承属性和方法。 
 * toString()方法返回指定的布尔对象的字符串形式。
 * valueOf()方法返回一个Boolean对象的原始值。
 */
var flag = new Boolean(true)
console.log(flag.toString());

var z = new Boolean();
console.log(z.valueOf());

var a = true;
console.log(z.valueOf(a));