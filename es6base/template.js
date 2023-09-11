// 标签模板
var a = 5;
var b = 10;
function tag(stringArr, ...values) {
    console.log(stringArr[0])
    console.log(stringArr[1])
    console.log(stringArr[2])
    console.log(values[0])
    console.log(values[1])
    return "OK"
}
tag`Hello ${a + b} Workd ${a * b}` 

var total = 30
function passthru(literals) {
    var result = "";
    var i = 0;
    while(i < literals.length) {
        result += literals[i++];
        if (i < arguments.length) {
            result += arguments[i];
        }
    }
    return result;
}
var msg = passthru`The total is ${total} (${total * 1.05} with tax)`;
console.log(msg);


function saferHTML(templateData) {
    var s = templateData[0]
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        s += templateData[i];
    }
    return s;
}
let sender = 'KangKang'
var message = saferHTML`<p>${sender} has sent you a message.</p>`
console.log(message);

