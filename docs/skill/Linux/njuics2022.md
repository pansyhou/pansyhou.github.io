---
id: njuics2022
slug: /njuics2022
title: njuics2022
authors: pansyhou
---

# Summary

来做做计组的补充部分（作为os的前置基础），做日记

## 2023.7.17

### 学会放弃

为了实现代码跳转，实不相瞒我折腾了3-4天

真的无语啦，Clion对makefile的支持（理论上是我对Makeflie的支持）不够，没能搞懂他到底要怎么样配置，错综复杂

然后跑去配neovim了，用的是astronvim

这哥们也很抽象的，一直没找到lsp对c的前端，你要说找吧，我应该是找到了，clangd，但是感觉跟没用一样

整个人要崩溃了

放弃了。好好搞技术吧，晚点再来学makefile。

### define

#### 井号#

用于转成字符串，from https://iambingonju.github.io/blog/001-cmacro.html

在宏定义中有两个很有意思的操作符#和##，利用它们，我们可以实现一些很强大的功能。 先来看看#的简单应用：

```
#define EVAL(expr) printf(#expr " = %d\n", expr)
```

当我们这样调用时：

```
EVAL(3 + 5);
```

则会输出：

```
3 + 5 = 8
```

实际上，#的功能就是把宏参数字符串化，也就是说，把宏参数替换为双引号引用的宏参数。在这里，3 + 5被替换为了"3 + 5”。

再看一个##的应用：

```
#define concat_temp(x, y) x ## y
#define concat(x, y) concat_temp(x, y)
#define concat3(x, y, z) concat(concat(x, y), z)
#define concat4(x, y, z, w) concat3(concat(x, y), z, w)
#define concat5(x, y, z, v, w) concat4(concat(x, y), z, v, w)
```

这里concat函数的作用就是将多个标识符拼接起来，一般用于定义函数的时候拼接多个标识符形成函数名。比如：

```
#define INSTR add
int concat3(INSTR, _, r2rm)(int arg) {...}
```

经过宏替换之后，变成了：

```
#define INSTR add
int add_r2rm(int arg) {...}
```

因此，##的作用时将两个标识符拼接在一起。

> 你们应该会注意到上面的concat定义中出现了一个concat_temp,这个宏有什么作用呢？为什么不直接这样定义呢？
>
> ```
> #define concat(x, y) x ## y
> ```
>
> 因为上述这种简单的定义在有些情况下会出问题。比如：
>
> ```
> #define INSTR ADD
> int concat(func, INSTR)(int arg);
> ```
>
> 经过宏替换之后会变成这样：
>
> ```
> #define INSTR ADD
> int funcINSTR(int arg);
> ```
>
> 声明的函数名并不是我们期待的funcADD，这是因为我们的concat的实参中还含有一个宏，这个宏在遇到##的时候并不会再次展开，而多数情况下，我们却期待通过调用这个函数会自动展开参数中的宏。 因此，这种两层定义的宏就可以实现我们期望的功能。还是上面的concat(func, INSTR)这个例子，第一次宏展开后，变成了concat_temp(func, INSTR),此时并没有##或#的出现，因此会继续将INSTR展开，变为了concat_temp(func, ADD), 最后一次扩展后变为了funcADD，也就是我们期待的结果。

> 不仅##会有这个问题,#也会有这个问题,因此在我们定义一个STR宏的时候，这样定义：
>
> ```
> #define STR_TEMP(x) #x
> #define STR(x) STR_TEMP(x)
> ```
>
> 道理和##的完全一样。





## 7.18

### IFDEFの源头

```c
// macro testing
// See https://stackoverflow.com/questions/26099745/test-if-preprocessor-symbol-is-defined-inside-macro
#define CHOOSE2nd(a, b, ...) b
//MUX_WITH_COMMA宏的作用是将第一个参数和第三个参数拼接起来，并在它们之间加上逗号，如果第一个参数为空，则直接返回第三个参数
#define MUX_WITH_COMMA(contain_comma, a, b) CHOOSE2nd(contain_comma a, b)
//最后一个宏定义MUX_MACRO_PROPERTY结合了前两个宏的功能，它的作用是根据传入的参数来选择需要执行的宏。如果第一个参数和第二个参数拼接后包含逗号，则执行a，否则执行b。
#define MUX_MACRO_PROPERTY(p, macro, a, b) MUX_WITH_COMMA(concat(p, macro), a, b)
// define placeholders for some property
#define __P_DEF_0  X,
#define __P_DEF_1  X,
#define __P_ONE_1  X,
#define __P_ZERO_0 X,
// define some selection functions based on the properties of BOOLEAN macro
#define MUXDEF(macro, X, Y)  MUX_MACRO_PROPERTY(__P_DEF_, macro, X, Y)
#define MUXNDEF(macro, X, Y) MUX_MACRO_PROPERTY(__P_DEF_, macro, Y, X)
#define MUXONE(macro, X, Y)  MUX_MACRO_PROPERTY(__P_ONE_, macro, X, Y)
#define MUXZERO(macro, X, Y) MUX_MACRO_PROPERTY(__P_ZERO_,macro, X, Y)
// test if a boolean macro is defined
#define ISDEF(macro) MUXDEF(macro, 1, 0)
// test if a boolean macro is undefined
#define ISNDEF(macro) MUXNDEF(macro, 1, 0)
// test if a boolean macro is defined to 1
#define ISONE(macro) MUXONE(macro, 1, 0)
// test if a boolean macro is defined to 0
#define ISZERO(macro) MUXZERO(macro, 1, 0)
```

从头看下来可能才明白，原来宏定义预处理能干的事情还挺多，坑也多

1. `CHOOSE2nd()`会从多个入参里选第二个参数

2. `MUX_WITH_COMMA(contain_comma, a, b)`这个就有意思了，可以看到他的原理的CHOOSE2nd(contain_comma a, b)，我们发现，他第一个参数是`contain_comma a`怎么有个空格？

   往下研究发现有几个宏叫

   ```
   #define __P_DEF_0  X,
   #define __P_DEF_1  X,
   #define __P_ONE_1  X,
   #define __P_ZERO_0 X,
   ```

   理论上`__P_DEF_1 X,`应该是没有逗号的，但是nju的做法是多做了一个宏。

   既然我说到这个逗号，上面`contain_comma a`肯定和逗号有关。

   `contain_comma a`如果contain_comma a展开后有逗号，choose2nd会选择第二个执行，就是执行a（此时choose2nd(contain_comma,a,b)），如果展开没逗号，就直接执行b（此时choose2nd(contain_comma a,b)）

3. 到这了我们就置顶向下看，`#define ISDEF(macro) MUXDEF(macro, 1, 0)`

   聚焦在`MUXDEF(macro, 1, 0)`上

   `#define MUXDEF(macro, X, Y)  MUX_MACRO_PROPERTY(__P_DEF_, macro, X, Y)`

   `#define MUX_MACRO_PROPERTY(p, macro, a, b) MUX_WITH_COMMA(concat(p, macro), a, b)`

   可以看到，`MUX_MACRO_PROPERTY`会把前两个参数字符串化合并，就是把`__P_DEF_, macro`这两货合并成一个字符串，如果这个macro定义为1，就会合成为`__P_DEF_1`=X, 可以看到这个宏字符串有逗号的，所以默认执行a，就是MUXDEF的X 

:::tip

果然不出我所料，他并不能正确识别1、0之外的宏

:::

### BITS 相关

1. `#define BITMASK(bits) ((1ull << (bits)) - 1)`用于生成bits个的1(低位开始

  ![image-20230718131726538](https://pic.imgdb.cn/item/64b621b81ddac507ccd7bbbe)

2. `#define BITS(x, hi, lo) (((x) >> (lo)) & BITMASK((hi) - (lo) + 1))`

   用于截取x的从hi到lo的位情况

3. `#define SEXT(x, len) ({ struct { int64_t n : len; } __x = { .n = x }; (uint64_t)__x.n; })`

   对比起GPT说这个是拓展，我更觉得像压缩，通过位域再赋值压缩的，先不管他应用场景吧，应该还是能理解的。

```c
#define ROUNDUP(a, sz)   ((((uintptr_t)a) + (sz) - 1) & ~((sz) - 1))
#define ROUNDDOWN(a, sz) ((((uintptr_t)a)) & ~((sz) - 1))
```

这两我也没懂...非常震撼，而且不知道uintptr_t要去哪找，是不是在链接的时候偷偷链接了？



`#define PG_ALIGN __attribute((aligned(4096)))`

将其对齐到 4096 字节的边界。对齐到页面大小的边界在一些情况下很有用，例如操作系统中的内存分页机制或设备驱动程序中的内存映射等。通过将 `PG_ALIGN` 属性应用于相关的定义，可以确保它们按照指定的页面大小对齐



