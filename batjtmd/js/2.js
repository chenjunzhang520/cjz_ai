// 数组对象
const arr = [ '1', '2', '3' ];
console.log(typeof arr);
const date = new Date();
console.log(typeof date);
// 如何区分Object的这些类型？
console.log(typeof Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(date));

// 会在MDN 文档看一些资料 
function getType(value){
     // String api 的选择
     // split + substring
     return Obeject.prototype.toString.call(arr).silce(8, -1);

}