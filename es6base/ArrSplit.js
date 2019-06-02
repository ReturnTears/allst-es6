// 数组切分
split_array=(arr,len)=>{
    let arr_length = arr.length;
    let newArr = [];
    for(let i=0;i<arr_length;i+=len){
        newArr.push(arr.slice(i,i+len));
    }
    return newArr;
};
let data = ['ST-001', 22, 22, 22, '水泥-001', 0, 0, 0, '钢筋-001', 22, 22, 22];
let result = split_array(data, 4);
// console.log(result);
