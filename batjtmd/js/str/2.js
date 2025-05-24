// 在 JavaScript 中，简单数据类型（原始类型）本身不能直接调用方法，
// 但 JavaScript 引擎会自动进行临时包装转换，使它们能够调用方法
// 当你在原始值上调用方法时，JavaScript 会自动创建一个对应的临时包装对象
"hello".length  //写法
// len("hello")函数式写法，没有 
背后魔法 
// JS 面向对象的统一写法
// 数组对象
['h','e','l','l','o'].reverse()

// "hello" -> new String("hello")