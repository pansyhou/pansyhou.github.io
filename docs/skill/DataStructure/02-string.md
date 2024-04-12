---
id: 02-string
slug: /02-string
title: 02-串
---


# 串

## definition

$$
S = 'a_1a_2...a_n'(n>=0)
$$

S是串名

> n=0时为`空串`

### 存储

#### 顺序存储

 默认用最后一种，优点

1. 字符位序与数组下标相同
2. 

![](https://pic.imgdb.cn/item/6612747068eb9357131b9ee6.png)

### 链式存储

```c
typedef struct StringNode{
	char ch[4];//一次存4个，比一次存1个的密度高
    struct StringNode *next;
}StringNode, * String;
```



## 基本操作

### Compare

```c
int StrCpm(SString &s,SString T){
    for(int i=1;i<=S.length && i<=t.length;i++){
        if(s.ch[i]!=t.ch[i])
            return s.ch[i]-t.ch[i];//两者差即可
    }
    return S.length-t.length;//前面都相同时
}
```

### index定位子串

畜生操作：int i=1;i<=n-m+1

i++，SubString(i到m)，循环SubString



## 字符串模式匹配

在`主串`中找到与`模式串`相同的子串，并返回其`所在位置`。

### 朴素模式

就是上面的畜生操作，最多匹配n-m+1个 

![](https://pic.imgdb.cn/item/66127d6968eb93571335bbc6.png)





#### 朴素指针模式

![](https://pic.imgdb.cn/item/66127e5e68eb93571336ef83.png)

子串匹配失败后

> i=i-j+2 从最开始匹配的地方+1
>
> j=1 恢复初始位置

最坏时间复杂度：O(nm)（O((**n-m+1**)*m)=O(nm)) n-m+1个子串

主串：aaaaaaaaaaab

模式串：aaab

![](https://pic.imgdb.cn/item/6612803268eb93571338e9c2.png)



![](https://pic.imgdb.cn/item/6612811c68eb9357133a01fb.png)

## KMP算法

### 如何求next数组

变相来讲就是求部分匹配值PM

注意，可以根据index从0或1开始来整体将next数组+1或-1；

在程序上也只是i、j和判断是否需要重新判断的条件`j==0`变成`j==-1`仅此而已

随机应变

![](https://pic.imgdb.cn/item/6613e64768eb93571355693e.jpg)

### 求nextval

![](https://pic.imgdb.cn/item/6613e65b68eb935713559d72.jpg)