const { type } = require("ramda");

// 数字转字符串/字符串转数字
let num = 15;
let s = num + ""; // 数字转字符串
let n = +s; // 字符串转数字
//console.log(typeof s)
//console.log(typeof n)

// 填充数组
let filledArray = new Array(3).fill(null).map(()=> ({'hello' : 'goodbye'}));
//console.log(filledArray)

// 删除重复项
let array = [100, 23, 23, 23, 23, 67, 45]; 
let outputArray = Array.from(new Set(array))
//console.log(outputArray)

// 数组到对象
let arr = ["value1", "value2", "value3"]; 
let arrObject = {...arr}; 
//console.log(arrObject)

// 对象到数组
let numbers = {
    one: 1, 
    two: 2,
};
let key = Object.keys(numbers); // key = [ 'one', 'two' ]
let value = Object.values(numbers);  // value = [ 1, 2 ]
let entry = Object.entries(numbers); // entry = [['one' : 1], ['two' : 2]]
//console.log(key)
//console.log(value)
//console.log(entry)

// 短路条件
/**
 * 
    if (docs) {
        goToDocs();
    }
    >>
    docs && goToDocs()
 */

// 使用^检查数字是否相等
let a = 123
if(a^123){ // 相等时为false 否则为true
    console.log('!==')
} else {
    console.log('===')
}

// 对象遍历
const age = {
    Rahul: 20,  
    max: 16
};
for(let key in age){
    age[key]++;
}
//console.log(age);

// 检查值是否为数组
const isArr = [1, 2, 3]; 
//console.log(typeof isArr); // object
//console.log(Array.isArray(isArr)); // true

// 真值和虚值

/**
 * 虚值：false,0, "",null,undefined和NaN。
 * 真值："Values",0",{},[]。
 */

// 三等号和双等号的区别
console.log(0 == '0'); // 双等号 - 将两个操作数转换为相同类型,再比较
console.log(0 === '0'); // 三等号 - 不转换为相同类型

// 接收参数更好的方式
// old
function downloadData(url, resourceId, searchTest, pageNo, limit) {}
downloadData(); // need to remember the order

// new
function downloadData(
    { url, resourceId, searchTest, pageNo, limit } = {}
) {}
downloadData(
    { resourceId: 2, url: "/posts", searchText: "WebDev" }
);


// 