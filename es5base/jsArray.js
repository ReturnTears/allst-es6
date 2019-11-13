//array
function echoProjectData(nums, param) {
    let strs = param.split('↘');
    // 子分项工程
    if (nums > 4) {
        /*$('#csubentryProject').val(rows[0].name);*/
        console.log('<5');
        // 分项工程
    } else if (nums > 3) {
        /*$('#subentryProject').val(rows[0].name);*/
        console.log('<4');
    } else if (nums > 2) {
        /*$('#cbranchProject').val(rows[0].name);*/
        console.log('<3');
    } else if (nums > 1) {
        /*$('branchProject').val(rows[0].name);*/
        console.log('<2');
    } else {
        /*$('unitProject').val(rows[0].name);*/
        console.log('<1');
    }
}
let param = '中沟中桥K5+615↘上部构造现场浇筑';
echoProjectData(5, param);
// 比较两个日期
let time1 = new Date('2019-11-13 09:39:22').getTime() + 100*60;
console.log(time1);
let time2 = new Date().getTime();
console.log(time2);
console.log(time1 - time2);
console.log(time1 > time2);