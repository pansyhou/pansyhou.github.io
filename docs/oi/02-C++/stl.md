---
id: stl
slug: /stl
title: stl
---

## string容器

在做[2696.删除子串后的字符串最小长度](https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/)的时候，遇到了string的操作。

> 给你一个仅由 大写 英文字符组成的字符串 s 。
>
> 你可以对此字符串执行一些操作，在每一步操作中，你可以从 s 中删除 任一个 "AB" 或 "CD" 子字符串。
>
> 通过执行操作，删除所有 "AB" 和 "CD" 子串，返回可获得的最终字符串的 最小 可能长度。
>
> 注意，删除子串后，重新连接出的字符串可能会产生新的 "AB" 或 "CD" 子串。
>

大意是删除子串。

所以首先想到了用stl的string容器。（本质是一个类）

- dynamic array of `char` (similar to `vector<char>`)
- concatenation with `+` or `+=`
- single character access with `[index]`
- modifiable ("mutable") unlike in e.g., Python or Java
- *regular*: deeply copyable, deeply comparable

类里有很多方法

1. 查找find/rfind
   - “r”
   - 'a',5 从index=5开始找a字符最初出现的index
2. 删除delete
3. 替换replace
4. 插入insert
5. 删除erase
6. 重新定义大小resize
   - 20，?? (如果一开始是5个字符，后面的将会给？填满)
7. 子串substr
8. 包含contains（bool）
9. ends_with（bool）
10. start_with（bool）



**注意，C++14后的特性：**

```cpp
auto s1="seven of";	//这哥们是char[]
auto s1="seven of"s;//这哥们是\std::string
```



# [Standard Library Sequence Reordering Algorithms](https://hackingcpp.com/cpp/std/algorithms/reordering.html#nav-roota)

## sort

估计是默认从小到大的，所以他后面的第三个入参只有`greater<>{}`

![image-20230620132445904](https://pic.imgdb.cn/item/649138251ddac507ccbab860)
