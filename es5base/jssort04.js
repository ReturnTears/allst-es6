function intersection(firstArray, secondArray) {
    let result = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                result.push(firstArray[i]);
                break; // 跳出内循环
            }
        }
    }
    return result;
}

let arr1 = [3,1,4,2];
let arr2 = [4,5,3,6];

let intersectedArray = intersection(arr1, arr2);

console.log(intersectedArray); // Output: [3, 4]
