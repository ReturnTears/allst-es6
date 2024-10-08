**ES 的学习之路**
# ES6
## 块级绑定
```
var声明与变量提升
变量提升是指: 使用var关键字声明的变量, 无论其实际声明位置在何处, 都会被视为声明于所在函数的顶部,
如果声明不在任意函数内, 则视为在全局作用域的顶部, 这就是所谓的变量提升(hoisting)
块级声明
块级声明也就是让所声明的变量在指定块的作用域外无法被访问, 块级作用域(又称为词法作用域)
块级作用域在如下情况被创建:
1.在一个函数内部
2.在一个代码块(有一对花括号包裹)内部

```

## this指向
``` text
事件调用环境：谁触发事件，函数里面的this指向的就是谁.
全局环境：this指向 window 
node环境：this指向module.exports
函数内部：
        this最终指向调用它的对象, 和它的申明没有任何关系
        函数被多层对象包含，如果函数被最外层对象调用，this指向的也只是它上一级的对象
        构造函数中的this指向的是实例对象
        如果构造函数中有return， 如果return的值是对象，则this指向返回的对象，如果不是对象，则this指向保持原来的规则，在这里null比较特殊
箭头函数：箭头函数本身是没有this和arguments的， 在箭头函数中引用this实际上调用的是定义在上一层的this
箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
修改this指向：
```
## 节流与防抖
```text
防抖：指触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
节流：指连续触发事件但是在一段时间中只执行一次函数。
```


## JavaScript 作用域和闭包
 ***
### 作用域是什么
**编译原理**
 --
 JavaScript和传统的编程语言一样，一段源代码在执行之前会经历三个步骤，统称为“编译”
 
 + 分词/词法分析
 
        词法单元
 + 解析/语法分析
 
        抽象语法树(Abstract Syntax Tree, AST)
 + 代码生成
        
        将AST转换为可执行代码的过程被称为代码生成

**理解作用域**
--
+ 引擎
    
        从头到尾负责整个 JavaScript 程序的编译及执行过程
+ 编译器
 
        LHS: LHS 查询则是试图找到变量的容器本身， 从而可以对其赋值
        RHS: RHS 查询与简单地查找某个变量的值别无二致
        当变量出现在赋值操作的左侧时进行 LHS 查询， 出现在右侧时进行 RHS 查询
+ 作用域
        作用域是一套规则， 用于确定在何处以及如何查找变量（标识符）。 如果查找的目的是对
        变量进行赋值， 那么就会使用 LHS 查询； 如果目的是获取变量的值， 就会使用 RHS 查询

**作用域嵌套**
--
    当一个块或函数嵌套在另一个块或函数中时， 就发生了作用域的嵌套
        
**异常**
--
    为什么区分 LHS 和 RHS 是一件重要的事情？
    因为在变量还没有声明（在任何作用域中都无法找到该变量） 的情况下， 这两种查询的行
    为是不一样的。

### 词法作用域
    作用域有两种主要的工作模型：词法作用域， 动态作用域
    遮蔽效应
    全局变量会自动成为全局对象（比如浏览器中的 window 对象） 的属性， 因此
    可以不直接通过全局对象的词法名称， 而是间接地通过对全局对象属性的引
    用来对其进行访问
    JavaScript 中的 eval(..) 函数可以接受一个字符串为参数
    在执行 eval(..) 之后的代码时， 引擎并不“知道” 或“在意” 前面的代码是以动态形式插
    入进来， 并对词法作用域的环境进行修改的。 引擎只会如往常地进行词法作用域查找
 ***

### 函数的作用域和块作用域
     作用域包含了一系列的"泡"， 每一个都可以作为容器， 其中包含了标识符（变量、 函数） 的定义。
     这些气泡互相嵌套并且整齐地排列成蜂窝型，排列的结构是在写代码时定义的

**函数中的作用域**
--
     JavaScript 具有基于函数的作用域， 意味着每声明一个函数都会为其自身创建一个气泡， 而其他结构都不会创建作用域气泡
     但事实上这并不完全正确
     函数作用域的含义是指， 属于这个函数的全部变量都可以在整个函数的范围内使用及复 用（事实上在嵌套的作用域中也可以使用）。
     这种设计方案是非常有用的， 能充分利用JavaScript 变量可以根据需要改变值类型的“动态” 特性
     
**隐藏内部实现**
--
    对函数的传统认知就是先声明一个函数， 然后再向里面添加代码。 但反过来想也可以带来一些启示：
    从所写的代码中挑选出一个任意的片段， 然后用函数声明对它进行包装， 实际上就是把这些代码“隐藏” 起来了
    
### Important
    ES5README.md文档中记录了ES5的详细知识点


## ES6新特性
```text
VS Code中直接运行js文件命令：node xxx.js文件

for-of可以遍历数组，类数组对象、字符串，集合(Map和Set对象)...
解构(destructuring):
Map:    
Set:    Set 对象可以自动排除重复项
        基于数组创建对象： let s = new Set(words);//words数组对象

```
## ES6 数组
```text
语法:
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
elementN Array构造器会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外
arrayLength一个范围在 0 到 232的-1次方 之间的整数，此时将返回一个length 的值等于arrayLength的数组对象
如果传入的参数不是有效值，则会抛出RangeError异常
描述：
数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作。JavaScript 数组的长度和元素类型都是非固定的。因为数组的长度可随时改变，并且其数据在内存中也可以不连续，所以 JavaScript 数组不一定是密集型的，这取决于它的使用方式。一般来说，数组的这些特性会给使用带来方便，但如果这些特性不适用于你的特定使用场景的话，可以考虑使用类型数组TypedArray。
只能用整数作为数组元素的索引，而不能用字符串。后者称为关联数组。使用非整数并通过方括号或点号来访问或设置数组元素时，所操作的并不是数组列表中的元素，而是数组对象的属性集合上的变量。数组对象的属性和数组元素列表是分开存储的，并且数组的遍历和修改操作也不能作用于这些命名属性。
访问数组元素：
JavaScript 数组的索引是从0开始的，第一个元素的索引为0，最后一个元素的索引等于该数组的长度减1
如果对象的属性名称是保留字（！），那么就只能通过字符串的形式用方括号来访问
length 和数字下标之间的关系:
JavaScript 数组的 length属性和其数字下标之间有着紧密的联系。数组内置的几个方法（例如 join、slice、indexOf 等）都会考虑length的值。另外还有一些方法（例如 push、splice 等）还会改变length的值。
正则匹配结果所返回的数组：
使用正则表达式匹配字符串可以得到一个数组。这个数组中包含本次匹配的相关信息和匹配结果。RegExp.exec、String.match、String.replace 都会返回这样的数组。
属性：
Array 构造函数的 length 属性，其值为1（注意该属性为静态属性，不是数组实例的 length 属性）
concat:
concat方法不会改变this或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本
对象引用（而不是实际对象）：concat将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
copyWithin:
copyWithin()方法将数组的一部分简单地复制到同一数组中的另一个位置，并将其返回，而不修改其大小。

```

vs code支持 es6, node.js 语法提示: cnpm install --save-dev @types/node

## apply | bind | call
```text
Function.prototype.apply()
Function.prototype.apply()将会调用一个以this和数组形式的arguments为参数的方法，
而call()方法则只是在第二个参数形式与之不同而已。
apply()方法接受的是一个参数数组
Function.prototype.bind()
bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
Function.prototype.call()
call()方法接受的是参数列表
```

## JavaScript常用工具库
```text
1、ramda

2、lodash

3、cypress
官方网址：https://www.cypress.io/
Install Cypress via npm:
        npm install cypress 或者 npm install cypress --save-dev
Installing Cypress via yarn:
        yarn add cypress --dev
via direct download：
        查看官网：https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements
You can now open Cypress by running：node_modules/.bin/cypress open

4、rollup.js
官方网址：https://rollupjs.org/guide/en/
Install: npm install --global rollup
Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码

5、day.js
官方网址：https://day.js.org/
国内网址：https://dayjs.gitee.io/zh-CN/
Install：npm install dayjs


6、immer

7、jsdoc

8、p-limit

9、akita

10、js-cookie

11、radash
官方地址：https://radash-docs.vercel.app/docs/getting-started
npm : npm install radash
yarn: yarn add radash
```

## VS Code常用快捷键
```text
shift + alt + a 块级注释
shift + alt + f 格式化代码
js文件添加高亮/智能提示:
1、删掉vetur，将vscode的历史记录缓存删掉
   目录：C:\Users\{用户名}\.vscode\extensions
   删掉vetur。
   目录：C:\Users\{用户名}\AppData\Roaming
   删掉Code文件夹
2、安装typings完善js智能提示
   npm install typings --global
   typings init
   项目下会自动新增jsconfig.json
   "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true
   },
   "exclude": [
        "node_modules",
        "bower_components",
        "jspm_packages",
        "tmp",
        "temp"
   ]
3、安装想要的提示
   typings install dt~node --global --save
   typings install express --ambient --save
```

## Sublime Text 3 常用快捷键
```text
ctrl + shift + / 块级注释

```