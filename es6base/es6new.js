let myArray = ["Hello","JavaScript","ES6","ES6+"];
// 传统遍历
for (var index = 0; index < myArray.length; index++) {
    //console.log(myArray[index]);
}
// ES5+:该方式不能使用break语句中断循环，也不能使用return语句返回到外层函数
myArray.forEach(function(value){
    //console.log(value);
});
for (var index in myArray) {    // 千万不要这样做
    //console.log(myArray[index]);
}
// ES6+ : for-of循环可以正确响应break、continue和return语句 
for (var value of myArray) {
    // console.log(value);
}
for (var value of "ES6新语法") {
    // console.log(value);
}

let words = ["JavaScript","ES6","ES6+","Vue","Node"];
var uniqueWords = new Set(words);
for (var word of uniqueWords) {
    console.log(word);
}