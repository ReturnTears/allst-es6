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
// 从数组中获取最大值, 使用Math.max（）与spread运算符（…）结合得到数组中的最大值。
const arrayMax = arr => Math.max(...arr);
// 从数组中获取最小值, 使用Math.min（）与spread运算符（…）结合得到数组中的最小值。
const arrayMin = arr => Math.min(...arr);
// 获取滚动位置, 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
const getScrollPos = (el = window) =>
    ({
        x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
        y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    });
// 最大公约数(GCD): 使用递归。基本情况是当y等于0时。在这种情况下，返回x。否则，返回y的GCD和x / y的其余部分。
const gcd = (x, y) => !y ? x : gcd(y, x % y);
// Head of list
const head = arr => arr[0];
// list初始化, 返回arr.slice（0，-1）
const initial = arr => arr.slice(0, -1);
// 用****range****初始化数组, 使用Array（end-start）创建所需长度的数组，使用map（）来填充范围中的所需值，可以省略start使用默认值0
const initializeRange = (end, start = 0) =>
    Array.apply(null, Array(end - start)).map((v, i) => i + start);
// 用值初始化数组, 使用Array（n）创建所需长度的数组，fill(v)以填充所需的值，可以忽略value使用默认值0。
const initializeArray = (n, v = 0) => Array(n).fill(v);
// 列表的最后, 返回arr.slice（-1）[0]
const last = arr => arr.slice(-1)[0];
// 测试功能所花费的时间, 使用performance.now（）获取函数的开始和结束时间，console.log（）所花费的时间。第一个参数是函数名，随后的参数传递给函数。
const timeTaken = (func, ...args) => {
   var t0 = performance.now(), r = func(...args);
   console.log(performance.now() - t0);
   return r;
};
// 来自键值对的对象, 使用Array.reduce（）来创建和组合键值对。
const objectFromPairs = arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {});
// 管道, 使用Array.reduce（）通过函数传递值。
const pipe = (...funcs) => arg => funcs.reduce((acc, fun) => fun(acc), arg);
// Powerset, 使用reduce（）与map（）结合来遍历元素，并将其组合成包含所有组合的数组。
const Powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
// 范围内的随机整数, 使用Math.random（）生成一个随机数并将其映射到所需的范围，使用Math.floor（）使其成为一个整数。
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// 范围内的随机数
const randomInRange = (min, max) => Math.random() * (max - min) + min;
// 随机化数组的顺序, 使用sort（）重新排序元素，利用Math.random（）来随机排序。
const randomizeOrder = arr => arr.sort((a, b) => Math.random() >= 0.5 ? -1 : 1);
// 重定向到URL, 使用window.location.href或window.location.replace（）重定向到url。传递第二个参数来模拟链接点击（true – default）或HTTP重定向（false）。
const redirect = (url, asLink = true) =>
    asLink ? window.location.href = url : window.location.replace(url);
// 反转一个字符串, 使用数组解构和Array.reverse（）来颠倒字符串中的字符顺序。合并字符以使用join(”)获取字符串。
const reverseString = str => [...str].reverse().join('');
// RGB到十六进制, 使用按位左移运算符（<<）和toString（16），然后padStart（6，“0”）将给定的RGB参数转换为十六进制字符串以获得6位十六进制值。
const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
// 滚动到顶部, 使用document.documentElement.scrollTop或document.body.scrollTop获取到顶部的距离。
// 从顶部滚动一小部分距离。使用window.requestAnimationFrame（）来滚动。
const scrollToTop = _ => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};
// 随机数组值, 使用Array.map（）和Math.random（）创建一个随机值的数组。使用Array.sort（）根据随机值对原始数组的元素进行排序。
const shuffle = arr => {
  let r = arr.map(Math.random);
  return arr.sort((a, b) => r[a] - r[b]);
};
// 数组之间的相似性, 使用filter（）移除不是values的一部分值，使用includes（）确定。
const similarity = (arr, v) => arr.filter(a => v.includes(a));
// 按字符串排序（按字母顺序排列）, 使用split（”）分割字符串，sort（）使用localeCompare（），使用join（”）重新组合。
const sortCharactersInString = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');
// 数组总和, 使用reduce（）将每个值添加到累加器，初始化值为0。
const sum = arr => arr.reduce((acc, val) => acc + val, 0);
// 交换两个变量的值, 使用数组解构来交换两个变量之间的值
//[y, x] = [x, y];
// 列表的tail, 返回arr.slice(1)
const tail = arr => arr.slice(1);
// 数组唯一值, 使用ES6 Set和… rest操作符去掉所有重复值。
const uni = arr => [...new Set(arr)];
// URL参数, 使用match() 与适当的正则表达式来获得所有键值对，适当的map() 。使用Object.assign（）和spread运算符（…）将所有键值对组合到一个对象中，将location.search作为参数传递给当前url。
const getUrlParams = url =>
    Object.assign(...url.match(/([^?=&]+)(=([^&]*))?/g).map(m => {[f, v] = m.split('='); return {[f]: v}}));
// UUID生成器
const uuid = _ =>
    ([1e7] +- 1e3 +- 4e3 +- 8e3 +- 1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
// 验证数字, 使用！isNaN和parseFloat（）来检查参数是否是一个数字，使用isFinite（）来检查数字是否是有限的。
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n);






















