// 判断字符串是否回文
function isPalindrome(str) {
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}

/**
 * 该算法的核心在于while循环。这个循环有些不同，因为它只运行到字符串中点。换言之，循环会运行N / 2次。
 * 因为大O记法忽略常数，所以该算法的时间复杂度可以去掉除以2的部分，表示为O(N)。
 * @param {*} str 
 * @returns 
 */
function isPalindrome2(str) {
  let leftIndex = 0
  var rightIndex = str.length - 1;
  while (leftIndex < str.length / 2) {
      if (str[leftIndex] !== str[rightIndex]) {
          return false;
      }
      leftIndex++;
      rightIndex--;
  }
  return true;
}

console.log(isPalindrome('abcdcba'));
console.log(isPalindrome2('abcdcba'));
