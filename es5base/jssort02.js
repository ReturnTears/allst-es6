// 该函数用于检查评分数组是否有重复分数
function hasDuplicateValue(array) {
    let existingNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (existingNumbers[array[i]] === 1) {
            return true;
        } else {
            existingNumbers[array[i]] = 1;
        }
    }
    return false;
}

// 上述判重算法效率：O(N),相较于jssort01效率有了巨幅提升
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7];
let res = hasDuplicateValue(array);
console.warn(res);
