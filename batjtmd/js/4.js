// (如果用 var 声明，变量会提升但值为undefined)
// 全局的  js 代码执行前会有一个编译
// 变量提升 
console.log(value,'-----')
var a;
a = 1;
if(false){
  var value = 1; // 声明变量
}
// undefined 有
console.log(value);
// 结果不为1而是undefined


// var变量的提升
// console.log(x); // 输出undefined而不是报错
// var x = 5;
//  实际执行顺序
// var x;   // 声明提升
// console.log(x);   // undefined
// x = 5;   // 赋值留在原地