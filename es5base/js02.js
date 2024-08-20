function arraySum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
}
let arr = [1,2,3,4,5,6,7,8,9,10,11]
let res = arraySum(arr)
console.log(res)
