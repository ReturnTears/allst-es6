// 该函数用于检查评分数组是否有重复分数
function hasDuplicateValue(array) {
    let count = 0
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            count++
            if(i !== j && array[i] === array[j]) {
                return true;
            }
        }
    }
    // 在数据不重复的情况下，count值应该等于N²，即计算步骤次数为N²
    console.error("count:", count);
    return false;
}
// 上述判重算法效率：O(N²)
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const res = hasDuplicateValue(array);
console.error("calc result :", res);
