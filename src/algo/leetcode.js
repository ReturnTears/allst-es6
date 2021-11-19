/**
 * @param {string} astr
 * @return {boolean}
 */
 var isUnique = function(astr) {
    let bitmap = 0;
    for (let i = 0; i < astr.length; ++i) {
        const pos = astr[i].charCodeAt() - 'a'.charCodeAt();
        if ((bitmap & (1 << pos)) != 0) {
            return false;
        }
        bitmap |= (1 << pos);
    }
    return true;
};
console.log(isUnique('leetcode'));

/**
 * 将数组进行逆序并放回原数组中
 */
function func(array) {
    var newArray = [];
    for (var i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    for (var i = newArray.length - 1; i >= 0; i--) {
        array[i] = newArray[i]
    }
}
var array = new Array(1,2,3,4,5,6)
func(array)
console.log(array)

