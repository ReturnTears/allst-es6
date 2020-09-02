/** 
 * Atomics 对象提供了一组静态方法用来对 SharedArrayBuffer对象进行原子操作。
 * 这些原子操作属于 Atomics模块。与一般的全局对象不同，Atomics不是构造函数，
 * 因此不能使用new操作符调用，也不能将其当作函数直接调用。Atomics的所有属性和方法都是静态的（与 Math 对象一样）。
 */
let arr = new SharedArrayBuffer(2);
let returnAdd = Atomics.add(arr, 2, 7);
console.log(returnAdd);