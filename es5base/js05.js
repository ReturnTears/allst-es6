function median(array) {
    const middle = Math.floor(array.length / 2);
    // 如果数组有偶数个数：
    if (array.length % 2 === 0) {
      return (array[middle - 1] + array[middle]) / 2;
    } else { // 如果数组有奇数个数：
      return array[middle];
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let res = median(arr)
console.log(res)
