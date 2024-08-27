// 计算数组中所有元素的乘积
function twoNumberProducts(array) {
    let products = [];
    // 外层循环：
    for(let i = 0; i < array.length - 1; i++) {
      // 内层循环，j永远从i右边一个索引开始：
      for(let j = i + 1; j < array.length; j++) {
        products.push(array[i] * array[j]);
      }
    }
    return products;
}

/**
 * 外层循环执行了N次（实际上是N – 1次，但我们忽略常数）​，内层循环则有些不同。因为j总是从i右边一个索引开始，所以内层循环中执行的步数会随着外层循环的执行而减少。
 * 用N来表示的话，内层循环大约需要执行N + (N – 1) + (N – 2) + (N – 3) + … + 1次。
 * 内层循环会执行N2 / 2次。因为大O记法忽略常数，所以该算法的时间复杂度可以表示为O(N2)。
 */

let arr = [1,2,3,4,5];
console.log(twoNumberProducts(arr));
