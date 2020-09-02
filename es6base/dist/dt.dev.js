"use strict";

/*
 * Date
 * 创建 Date实例用来处理日期和时间。
 * Date 对象基于1970年1月1日（世界标准时间）起的毫秒数。
 *
 */
// console.log(Date.now());
// console.log(Date.parse('2020-08-30 12:00:12'));
// console.log(new Date(2019, 13, 1));
// console.log(new Date(2020, 1, 1));
// console.log(new Date(2020, 2, 1, 0, 70));
// console.log(new Date(2020, 2, 1, 1, 10));
// let dt = new Date();
// console.log(dt.getDate());
// console.log(dt.getDay());
// console.log(dt.getFullYear());
// console.log(dt.getHours());
// console.log(dt.getMilliseconds());
// console.log(dt.getMinutes());
// console.log(dt.getMonth());
// console.log(dt.getSeconds());
// console.log(dt.getTime());
// console.log(dt.getTimezoneOffset());
// let d = new Date(2020, 5, 20, 13, 14, 52);
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toJSON());
// console.log(new Date(d.toJSON()));
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleString());
// console.log(d.toLocaleTimeString());
// console.log(d.toString());
// console.log(d.toTimeString());
var dt = new Date(Date.UTC(2020, 5, 20, 13, 14, 52));
console.log(dt);
var d = new Date(2020, 6, 17);
console.log(d.valueOf());