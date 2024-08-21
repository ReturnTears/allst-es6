// 选择排序
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let lowestNumberIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }
        if (lowestNumberIndex != i) {
            let temp = array[i];
            array[i] = array[lowestNumberIndex];
            array[lowestNumberIndex] = temp;
        }
    }
    return array;
}
// 上述选择排序算法效率：O(N²/2) ≈ O(N²)
let array = [11, 2, 13, 4, 15, 6, 17, 8, 9, 10]
const result = selectionSort(array)
console.warn("result: ", result)
