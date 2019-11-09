//array
function echoProjectData(nums, param) {
    let strs = param.split('↘');
    // 子分项工程
    if (nums < 5) {
        /*$('#csubentryProject').val(rows[0].name);*/
        console.log('<5');
        // 分项工程
    } else if (nums < 4) {
        /*$('#subentryProject').val(rows[0].name);*/
        console.log('<4');
    } else if (nums < 3) {
        /*$('#cbranchProject').val(rows[0].name);*/
        console.log('<3');
    } else if (nums < 2) {
        /*$('branchProject').val(rows[0].name);*/
        console.log('<2');
    } else {
        /*$('unitProject').val(rows[0].name);*/
        console.log('<1');
    }
}
let param = '中沟中桥K5+615↘上部构造现场浇筑';
echoProjectData(2, param);
