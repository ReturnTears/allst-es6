'use strict';

function breakfast() {
    return ['苹果', '香蕉', '橘子'];
}
// 解构数组
let [apple, banana, orange] = breakfast();
console.log(apple, banana, orange);

function breakfast1() {
    return {apple:'苹果',banana:'香蕉',orange:'橘子'};
}
// 解构对象
let {apple:apple1,banana:banana1,orange:orange1} = breakfast1(); // :后边表示自定义的变量，:前边表示对象中的属性
console.log(apple1,banana1,orange1);
// 对象表达式
let dessert = '蛋糕', drink = '饮料';
let foods = {
  dessert,
  drink
};
console.log(foods);

// Iterators 迭代器
// {value: xx, done: true/false}
// value表示返回来的值, done表示还有还有可以迭代的数据，false表示还有数据可以迭代，true表示完成了迭代
// next() 返回一个对象, 对象包含{value,done}, 迭代完成value的值就变成了undefined,done编程true
// ES6 可以使用Generators生成迭代器
function chef(foodss) {
    let i = 0;
    return {
        next() {
            let done = (i >= foodss.length);
            let value = !done ? foodss[i++] : undefined;
            return {
                value: value,
                done: done
            }
        }
    }
}
let wanghao = chef(['apple', 'orange', 'banana']);
/**
 * {value: "apple", done: false}
 * {value: "orange", done: false}
 * {value: "banana", done: false}
 * value: undefined, done: true}
 */
// console.log(wanghao.next());
// console.log(wanghao.next());
// console.log(wanghao.next());
// console.log(wanghao.next());

// Generator生成器
// 定义生成器
function* cheff() {
    yield '西红柿';
    yield '番茄';
}
let wanhao = cheff();
// console.log(wanhao.next());
// console.log(wanhao.next());
// console.log(wanhao.next());
// 改造
function* cheffs(foods) {
    for (var i = 0; i < foods.length; i++) {
        yield  foods[i];
    }
}
let meiwei = cheffs(['番茄', '鸡蛋']);
// console.log(meiwei.next());
// console.log(meiwei.next());
// console.log(meiwei.next());

//class
class Chef {
    constructor(food) {
     this.food = food;
     this.dish = [];
    }
    cook() {
        console.log(this.food);
    }
    get menu() {
        return this.dish;
    }
    set menu(dish) {
        this.dish.push(dish);
    }
}
let cook = new Chef("西红柿");
cook.cook();

let mes = new Chef();
console.log(mes.menu = '烤鸭');
console.log(mes.menu = '北京烤鸭');
console.log(mes.menu);

// 静态方法
class cooker {
    static cooks(food) {
        console.log(food);
    }
}
cooker.cooks("西红柿炒蛋");

// 继承
class Person {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    intro() {
        return `${this.name}, ${this.birthday}`;
    }
}
class Man extends Person {
    constructor(name, birthday) {
        super(name, birthday)
    }
}
let man = new Man("Yang","1993-08-07");
console.log(man.intro());

// Set集合
let set = new Set('香蕉苹果');
set.add('芒果');
console.log(set);
console.log(set.size);
console.log(set.has('果'));
set.delete('果');
console.log(set);
set.forEach(set => {
    console.log(set);
});
set.clear();
console.log(set);

// Map
let map = new Map();
let mapA = {}, mapB = function () {}, mapC = '甜点';
map.set(mapA, '苹果');
map.set(mapB, '刀叉');
map.set(mapC, 'dessert');
console.log(map);
console.log(map.size);
console.log(map.get(mapA));
map.delete(mapC);
console.log(map.has(mapC));

map.forEach((value, key) => {
    console.log(`${key}=${value}`);
});
map.clear();

// Module  todo 为什么?
// import { June, Seven } from '../src/module/Yangyang';
// console.log(June, Seven);



