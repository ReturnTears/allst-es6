# ECMA ES6 Lenrn
## Promise
```text
一、学习promise准备部分：
1、区别实例对象与函数对象:
实例对象：new 函数产生的对象，称为实例对象，简称对象。
函数对象：将函数作为对象使用时，简称为函数对象
2、两种类型的回调函数
同步回调：立即执行，完全执行完了才结束，不会放入回调队列中。
        eg：数组遍历相关问题的回调函数 / Promise 的excutor函数

异步回调：不会立即执行，会放入回调队列中将来执行
        eg：定时器回调 / ajax回调 / Promise的成功|失败的回调
3、错误error
错误的类型
Error：所有错误的父类型
ReferenceError：引用的变量不存在
TypeError：数据类型不正确的错误
RangError：数据值不在运行的范围内
SyntaxError：语法错误
错误处理
捕获错误：try ... catch 
抛出错误：throw error
错误对象
message属性：错误相关信息
stack属性：函数调用栈记录信息

二、promise的理解和使用
promise：译文，承诺、许诺、允诺
1、promise是什么?
抽象的表达：promise是JS中进行异步编程的新的解决方案
具体的表达：语法上：promise是一个构造函数。功能上：promise对象用来封装一个异步操作并可以获取其结果。
2、promise的状态
pending：译文：未决定的；行将发生的
resolved: 译文：下定决心的，坚决的
rejected：译文：拒绝，驳回；不同意
初始值是pending
pending 变为 resolved
pending 变为 rejected   
说明：只有这2种，且一个promise对象只能改变一次，无论变为成功还是失败都会有一个结果数据，成功的结果数据一般为value，失败的结果数据一般为reason。
一个promise对应一个异步任务

3、为什么要使用promise？
1）指定回调函数的方式更加灵活：
   旧的方式：必须在启动异步任务前指定
   promise：启动异步任务 => 返回promise对象 => 给promise对象绑定回调函数（甚至可以在异步任务结束后指定）
2）支持链式调用，可以解决回调地狱问题
   什么是回调地狱？回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件。
   回调地狱的缺点？不便于阅读 / 不便于异常处理
   解决方案？promise链式调用
   终极解决方案？async / await


```

## VS Code快捷方式
```text
html:5 + tab 在html文件中生成HTML5的模板文件

```