/*
 *类实际上是个“特殊的函数”，就像你能够定义的函数表达式和函数声明一样，
 *类语法有两个组成部分：类表达式和类声明。
 */
 /*
  * 声明一个类
  * 函数声明和类声明之间的一个重要区别是函数声明会声明提升，类声明不会。
  * 即:首先需要声明你的类，然后访问它
  */
class Personal {
 	constructor(name, age) {
 		this.name = name;
 		this.age = age;
 	}

 	makeMoney() {
 		console.log(this.name + " is making money in thier " + this.age + " year`s old");
 	}
}
/*
 * 一个类表达式是定义一个类的另一种方式。类表达式可以是被命名的或匿名的。
 * 赋予一个命名类表达式的名称是类的主体的本地名称.
 * 类表达式也同样受到类声明中提到的提升问题的困扰
 */
// 匿名
var onePerson = class {
	constructor(name, age) {
		this.name = name;
 		this.age = age;
	}
}
// 命名
var onePeople = class onePeople {
	constructor(name, age) {
		this.name = name;
 		this.age = age;
	}
}
/*
 * 类体和方法定义:
 * 一个类的类体是一对花括号/大括号 {}中的部分。这是你定义类成员的位置，如方法或构造函数。
 * 严格模式
 * 类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter和setter都在严格模式下执行。
 *
 *构造函数
 * 构造函数方法是一个特殊的方法，其用于创建和初始化使用一个类创建的一个对象.
 * 一个类只能拥有一个名为 “constructor”的特殊方法
 * 一个构造函数可以使用 super 关键字来调用一个父类的构造函数。
 */
// 原型方法
class Acreage {
  constructor(height, width, r) {
    this.height = height;
    this.width = width;
    this.r= r;
  }
  
  get rectangleArea() {
    return this.calcRectangleArea();
  }

  calcRectangleArea() {
    return this.height * this.width;
  }
  
  get roundnessArea() {
		return this.calcRoundnessArea();
  }

  calcRoundnessArea() {
  	return Math.PI * this.r * this.r;
  }
}
const square = new Acreage(10, 10, 10);
//console.log(square.rectangleArea);
//console.log(square.roundnessArea);
/* 静态方法
 * static关键字用来定义一个类的一个静态方法。调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法。
 * 静态方法通常用于为一个应用程序创建工具函数。
 */
class Point {
	constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}
const p1 = new Point(7, 6);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
/*
 * 用原型和静态方法装箱
 * 当一个对象调用静态或原型方法时，如果该对象没有“this”值（或“this”作为布尔，字符串，数字，未定义或null) ，
 * 那么“this”值在被调用的函数内部将为 undefined。不会发生自动装箱。即使我们以非严格模式编写代码，它的行为也是一样的，因为所有的函数、方法、构造函数、getters或setters都在严格模式下执行。
 * 因此如果我们没有指定this的值，this值将为undefined。
 */
class Animal { 
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}
let obj = new Animal();
//console.log(obj.speak());
let speak = obj.speak;
//console.log(speak());

function Animal2() {}
Animal2.prototype.see = function() {
	return this;
}
Animal2.listen = function() {
	return this;
}
Animal2.tear = function() {
	return this;
}
let obj2 = new Animal2();
let see = obj2.see;
//console.log(see);
//console.log(see());
let tear = Animal2.tear;
//console.log(tear());
/*
 * extends关键字在类声明或类表达式中用于创建一个类作为另一个类的一个子类。
 */
class People extends Personal {
	makeMoney() {
		console.log(this.name + " is making money at this " + this.age);
	}
}
var p = new People("KangKang", 20);
p.makeMoney();
/*
 * 请注意，类不能扩展常规（不可构造/非构造的）对象。
 * 如果要继承常规对象，可以改用Object.setPrototypeOf():
 */
var Animla3 = {
	speak() {
    console.log(this.name + ' makes a noise.');
  }
};
class Cat {
  constructor(name) {
    this.name = name;
  }
}
Object.setPrototypeOf(Cat.prototype, Animla3);
var cat = new Cat("HelloKitty");
cat.speak();
/*
 * 种类
 * 如果希望在派生数组类 MyArray 中返回Array对象。这种类/种类模式允许你覆盖默认的构造函数。
 * 例如，当使用像map()返回默认构造函数的方法时，您希望这些方法返回一个父Array对象，而不是MyArray对象。
 * Symbol.species符号可以让你这样做
 */
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
var my = new MyArray(1,2,3);
var mapped = my.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true
/*
 * 使用 super 调用超类
 * super关键字用于调用对象的父对象上的函数。
 */
class horse {
 	constructor(name) {
 		this.name = name;
 	}
 	graze() {
 		console.log(this.name + ' is grazing...');
 	}
}
class ferghana extends horse {
	graze() {
		super.graze();
		console.log(this.name + ' can running 1000KM per day');
	}
}
var f = new ferghana('kgal');
f.graze();
/*
 * Mix-ins
 * 抽象子类或者 mix-ins 是类的模板。 一个 ECMAScript 类只能有一个单超类，所以想要从工具类来多重继承的行为是不可能的。
 * 子类继承的只能是父类提供的功能性
 */
var calculatorMixin = Base => class extends Base {
  calc() { console.log('--calc--'); }
};

var randomizerMixin = Base => class extends Base {
  randomize() { console.log('--randomize--'); }
};
//使用 mix-ins 的类可以像下面这样写
class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }
var b = new Bar();
b.calc();
b.randomize();


/*
 * 构造函数constructor是用于创建和初始化类中创建的一个对象的一种特殊方法。
 * 在一个类中只能有一个名为 “constructor” 的特殊方法。 
 * 一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。
 * 在一个构造方法中可以使用super关键字来调用一个父类的构造方法。
 * 如果没有显式指定构造方法，则会添加默认的 constructor 方法。
 */
class Polygon {
    constructor() {
        this.name = "Polygon";
    }
}
class Square extends Polygon {
    constructor() {
        super();
    }
}
class Rectangle {}
Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true
let newInstance = new Square();
console.log(newInstance.name);

/*
 * 默认构造函数
 * 如果不指定构造方法，则使用默认构造函数。对于基类，默认构造函数是：
 * constructor() {}
 * 对于派生类，默认构造函数是:
 */
/*constructor(...args) {
  super(...args);
}*/


/*
 * extends关键字用于类声明或者类表达式中，以创建一个类，该类是另一个类的子类。
 * extends关键字用来创建一个普通类或者内建对象的子类。
 * 继承的.prototype必须是一个Object 或者 null
 */

/*
 * static 关键字为一个类定义了一个静态方法
 * static methodName() { ... }
 * 静态方法调用直接在类上进行，不能在类的实例上调用。静态方法通常用于创建实用程序函数。
 *
 * 调用静态方法:
 * 在同一个类中的一个静态方法调用另一个静态方法，你可以使用this关键字。
 */
class StaticMethodCall {
  static staticMethod() {
    return 'Static method has been called';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' from another static method';
  }
}
console.log(StaticMethodCall.staticMethod());
console.log(StaticMethodCall.anotherStaticMethod());

/*
 * 1.一个静态方法在一个类上是如何被实现的。
 * 2.具有一个静态成员的一个类是可以被子类化 。
 * 3.一个静态方法如何能被调用和不能被调用。
 */
class Triple {
  static triple(n) {
    if (n === undefined) {
      n = 1;
    }
    return n * 3;
  }
}
class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}
console.log(Triple.triple());
console.log(Triple.triple(6));

var tp = new Triple();
console.log(BiggerTriple.triple(3));
// console.log(tp.triple()); // tp.triple is not a function



