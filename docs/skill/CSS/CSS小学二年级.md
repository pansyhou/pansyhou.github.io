---
id: css-second
slug: /css-second
date : 2023-6-11
title: css小学二年级
authors: pansyhou
---

## Emmet语法

![image-20230611153344648](https://pic.imgdb.cn/item/648578d81ddac507cc85c8b1)

## CSS复合选择器

包含

1. 后代选择器
2. 子选择器
3. 并集选择器
4. 伪类选择器

### 后代选择器（空格

```css
ol li{

}
```

空格

### 子选择器（大于号

选孩子，而且是亲儿子（离他最近的元素

```
.nav>a{

}
```

![image-20230611154117284](https://pic.imgdb.cn/item/64857a9d1ddac507cc89b186)

### 并集选择器（逗号

```
a,b{

}
```



### 伪类选择器（冒号：

![image-20230611155542028](https://pic.imgdb.cn/item/64857dfe1ddac507cc8f92f0)

:::tip

注意按照顺序

:::

![image-20230611160848818](https://pic.imgdb.cn/item/648581101ddac507cc94c032)

### :focus伪类选择器

![image-20230611161708688](https://pic.imgdb.cn/item/648583041ddac507cc97d9cf)



### 选择器总结

![image-20230611162008240](https://pic.imgdb.cn/item/648583b81ddac507cc9905a3)



## 元素显示模式

### 块元素（独占一行

1. div
2. p
3. ul
4. ol
5. li
6. h1-h6

特点：

1. 独占一行（有人想上去都不行，除非搞大点然后加个盒子？
2. 高度、宽度、外边距内边距都可以控制
3. 宽度默认是容器（父级宽度的100%



:::danger

注意：

- 文字类的元素内不能使用块级元素
- p主要放文字，里面不能放div
- 同理，h1-6也是如此

:::

### 行内元素

![image-20230611163503412](https://pic.imgdb.cn/item/648587371ddac507cc9e586c)

### 行内块元素

比如

`<img /> ` `<input />` `<td>`这些，有块元素和行内元素的特点

![image-20230611164059139](https://pic.imgdb.cn/item/6485889b1ddac507cca08a63)

### 元素显示总结

![image-20230612164230729](https://pic.imgdb.cn/item/6486da7e1ddac507ccad88e7)

### 元素显示模式转换

如何增加`<a>` 的范围？

转换为块元素：display:block;

转换为行内元素：display:inline;

转换为行内块元素：display:inline-block;



### 单行文字垂直居中

> 让文字的行高=盒子的高度

![image-20230612213741618](https://pic.imgdb.cn/item/64871fab1ddac507cc5617c1)





## 背景

background-color默认transparent透明

超大或者是小图片喜欢这么搞，比较方便控制位置

![image-20230612215002996](https://pic.imgdb.cn/item/6487228b1ddac507cc60510a)

### 背景平铺

会出现这种情况，怎么解决？

默认是平铺的，所以需要改成no-repeat

![image-20230612215454043](https://pic.imgdb.cn/item/648723ae1ddac507cc634510)

![image-20230612215323648](https://pic.imgdb.cn/item/648723541ddac507cc6233c4)



### 背景位置 

`background-position`

因为在盒子里装入，图片的底部会和文字平行，导致位置很尴尬，不如直接放背景





#### 全屏超大图片怎么操作？

用盒子装起来，background-image

norepeat

position：center

![image-20230612234235194](https://pic.imgdb.cn/item/64873cec1ddac507cca3daa6)

### 背景图片位置

![image-20230612234517258](https://pic.imgdb.cn/item/64873d8e1ddac507cca567b2)

###  背景图像固定（附着

`background-attachment` scroll / fixed（固定

### 背景色半透明盒子

`background:rgba(0,0,0,0.3)` 最后一个参数为透明参数0-1

### 背景总结

![image-20230614082312027](https://pic.imgdb.cn/item/64890eee1ddac507cc125a56)



## CSS三大特性

### 层叠性

![](https://pic.imgdb.cn/item/64890eee1ddac507cc125a56)



![image-20230614083316867](https://pic.imgdb.cn/item/648911651ddac507cc17b912)

margin:0 auto直接让盒子水平居中

 

行内元素或者行内快元素居中，给**父元素**添加**text-align:center**即可



> 记得，如果换行的话，可以改成行内块（display:block;）

![image-20230614084727734](https://pic.imgdb.cn/item/648914971ddac507cc1f4304)

##  浮动

浮动会脱离标准流（浮起来，拖表

浮动的盒子不再**保留**原来的位置（就是说其他元素会贴上去



