// ArrayBuffer
/*
ArrayBuffer 对象用来表示通用的、固定长度的原始二进制数据缓冲区。
ArrayBuffer 不能直接操作，而是要通过类型数组对象或DataView对象来操作，
它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。
语法：
new ArrayBuffer(length)
length：表示创建的ArrayBuffer的大小，单位为字节。
如果 length 大于 Number.MAX_SAFE_INTEGER（>= 253）或为负数，则抛出一个 RangeError异常。
*/
const buffer = new ArrayBuffer(8);
console.log(buffer.byteLength);
console.log(ArrayBuffer.length);
class MyArrayBuffer extends ArrayBuffer {
  static get [Symbol.species]() { return ArrayBuffer; }
}
/* console.log(ArrayBuffer.isView(new ArrayBuffer(10)));
console.log(ArrayBuffer.isView(new Uint8Array()));
console.log(ArrayBuffer.isView(new Float32Array()));
console.log(ArrayBuffer.isView(new Int8Array(10).subarray(0, 3))); */
/* var buffer2 = new ArrayBuffer(2);
var dv = new DataView(buffer2);
console.log(ArrayBuffer.isView(dv)); */
var buffer3 = buffer.slice(0);
console.log(buffer3);

