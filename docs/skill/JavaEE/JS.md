### JS引用方式

#### 内部脚本

在`<script> </script>`之间插

> 在`<body>`元素的底部放能够改善显示速度

#### 外部脚本

`<script src="js/demo.js"> </script>`

### JS输出

1. window.alert写入警告框
2. document.write写入html输出
3. console.log写入控制台

### JS变量

`var `定义变量，有点像全局

`let`只会在代码块里有效

`const`只读

![image-20230930123037605](https://pic.imgdb.cn/item/6517a475c458853aef3e0344)

`typeof 变量`获取数据类型

```
alert(typeof a)
```

如果是typeof null，返回的为object

> ==和===
>
> ==会进行类型转换，===全等不会
>
> 比如
>
> ```javascript
> var a=10
> alert(a=="10")//ture
> alert(a==="10")//false
> alert(a===10)//ture
> ```

![image-20230930123650745](https://pic.imgdb.cn/item/6517a5e3c458853aef3e4dcf)![image-20230930123722940](https://pic.imgdb.cn/item/6517a603c458853aef3e5177)



### JS 函数

function(){

}

### JS对象

1. Array

   定义数组，var a= new Array(元素列表)

   var 变量 = [列表]

   数组里的每一个元素类型可变，长度可变

   1. `length`：arr.length

   2. `forEach`：变量有值的元素

      ```javascript
      arr.forEach(function(e){
      log();//每一次遍历要干什么的函数
      })
      又或者arr.forEach((形参)=>{函数体})箭头函数
      ```

   3. `push`：arr.push(1,2,3)

   4. `splice`：（开始位置，删除的元素个数

2. String

   new String或者=""

   ![image-20230930132655147](https://pic.imgdb.cn/item/6517b19fc458853aef41bb4f)

3. JSON

4. BOM

5. DOM

