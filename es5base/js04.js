function selectAStrings(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
      if (array[i].startsWith("a")) {
        newArray.push(array[i]);
      }
    }
    return newArray;
}
let arr = ['hello', 'world', 'aaa', 'bbb', 'ccc']

console.log(selectAStrings(arr)); // Output: ['aaa']