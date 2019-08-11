// better JS Code
// 使用递归, 对给定字符串每个字母创建字谜
//debugger;
const anagrams = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) => {
        anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => acc.push(letter + val));
        return acc;
    }, []);
};
// 数组平均数, 使用reduce()将每个值添加到累加器，初始值为0，总和除以数组长度。
const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;
// 大写每个单词的首字母, 使用replace（）匹配每个单词的第一个字符，并使用toUpperCase（）来将其大写。
const capitalizeEveryWord = str =>
    str.replace(/\b[a-z]/g, char => char.toUpperCase());
// 首字母大写, 使用slice（0,1）和toUpperCase（）大写第一个字母，slice（1）获取字符串的其余部分
const capitalize = (str, lowerRest = false) =>
    str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
// 检查回文, 将字符串转换为toLowerCase（），并使用replace（）从中删除非字母的字符。然后，将其转换为tolowerCase（），将（”）拆分为单独字符，reverse（），join（”），与原始的非反转字符串进行比较，然后将其转换为tolowerCase（）。
const palindrome = str =>
    str.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('') === str.toLowerCase().replace(/[\W_]/g, '');
// 计数数组中值的出现次数, 每次遇到数组中的特定值时，使用reduce（）来递增计数器。
const countOccurrences = (arr, val) => arr.reduce((a, v) => v === val ? a + 1 : a + 0, 0);
// 当前URL, 使用window.location.href来获取当前URL
const currentUrl = _ => window.location.href;
// Curry, 使用递归。如果提供的参数（args）数量足够，则调用传递函数f，否则返回一个curried函数f。
const curry = f =>
    (...args) => args.length >= f.length ? f(...args) : (...otherArgs) => curry(f)(...args, ...otherArgs);
// 数组之间的区别, 使用filter（）移除value的部分值，使用includes（）确定。
const difference = (arr, val) => arr.filter(v => !val.includes(v));
// 两点之间的距离, 使用Math.hypot（）计算两点之间的欧几里德距离。
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
// 可以按数字整除, 使用模运算符（％）来检查余数是否等于0
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
// 转义正则表达式, 使用replace（）来转义特殊字符
const escapeRegxp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// 奇数或偶数, 使用Math.abs（）将逻辑扩展为负数，使用模（％）运算符进行检查。如果数字是偶数，则返回true；如果数字是奇数，则返回false。
const isEven = num => Math.abs(num) % 2 === 0;
// 阶乘, 使用递归。如果n小于或等于1，则返回1。否则返回n和n – 1的阶乘的乘积。
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
// 斐波那契数组生成器, 创建一个特定长度的空数组，初始化前两个值（0和1）。使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
const fibonacci = n =>
    Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i -1] + acc[i -2] : 1), []);
// 过滤数组中的非唯一值, 将Array.filter（）用于仅包含唯一值的数组
const unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// Flatten数组, 使用reduce（）来获取数组中的所有元素，并使用concat（）来使它们flatten。
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);



