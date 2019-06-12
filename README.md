**ES 的学习之路**
# ES6
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
    
