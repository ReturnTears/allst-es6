console.log(this);// node环境下的全局环境{} | module的导出环境
console.log(this === module.exports); //true