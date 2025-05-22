// 申明了对象常量 
// 内存中开辟了一个空间，里面放的是一个对象
// cjz 取址  变量名是地址的标记 
// js是弱类型语言
// = 赋值 Object
// 对象自变量（字面意义上） JSON
// js 太灵活，不需要new，通过{}拿到对象 【】 拿到数组
const cjz = {
  name: '陈俊璋',
  age: 18,
  tall: 1.88,
  hoemtowen: '江西九江',
  isSingle: true,
 //  送花
 //  形参
  sendFlower: function(girl){
   console.log(cjz.name + '给' + girl.name + '送了99朵玫瑰')
   girl.receiveFlower(cjz)
  }
 }
 // js 灵活 
 const zjc = {
   name: '璋俊陈', //Key value String
   age: 18, // Number 数值类型
   tall: 1.88,
   hoemtowen: '江西九江',
   isSingle: true, // Boolean 布尔类型
 }
 
 const xm = { 
   xq: 30, // 心情
   name:'小美',
   room:'408',
   receiveFlower:function(sender){
     console.log('收到了' + sender.name + '的99朵玫瑰')
     if(xm.xq > 90){
       console.log('硕果走一波')
     }else{
      console.log('gun~~~~')
     }
   }
 }
 //帮陈老板的  小美的闺蜜
 const xh = {
   xq: 30, // 心情
   name:'小红',
   room:'408',
   hometown:'江西九江', //老乡
   // 送小美，送小红也可以 ，都具有receiveFlower方法
   // 对象互换
   // 接口 interface 
   receiveFlower:function(sender){
     // if(sender.name ==='璋俊陈'){
     //   console.log('璋哥哥，让我们在一起吧');
     //   return;
     // }
     setTimeout(() =>{  //  计时器
       xm.xq = 100;
       xm.receiveFlower(sender)
     },3000)
    xm.receiveFlower(sender)
   }
 }
 
 // cjz.sendFlower(xm)
 cjz.sendFlower(xh)