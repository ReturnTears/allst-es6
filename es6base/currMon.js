// 获取当月的第一天和最后一天
function getCurrentMonthFirstDay() {
    let date = new Date();
    date.setDate(1);
    let month = parseInt(date.getMonth() + 1);
    let day = date.getDate();
    if (month < 10) {
        month = '0' + month
    }
    if (day < 10) {
        day = '0' + day
    }
    console.log(date.getFullYear() + '-' + month + '-' + day);
    return date.getFullYear() + '-' + month + '-' + day;
}
function getCurrentMonthLastDay() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = new Date(year, month, 0);
    console.log(year + '-' + month + '-' + day.getDate());
    return  year + '-' + month + '-' + day.getDate()
}
