function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

let res = isLeapYear(2024)
console.log(res)
