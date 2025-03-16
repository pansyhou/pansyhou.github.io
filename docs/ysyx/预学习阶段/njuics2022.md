---
id: njuics2022
slug: /njuics2022
title: njuics2022
authors: pansyhou
---

# Summary

来做做计组的补充部分（作为os的前置基础）

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

#### GDB

[Tutorial link](https://www.cprogramming.com/gdb.html)

大概用法就是围绕`break+行号/函数名`，然后`next/step`进入，然后`run`，这几个就是对标我们以前keil工具栏上面的那几个小工具了。

其次就是variable了

1. `print+变量名`
2. `set 变量名=value`
3. `watch 变量名`

最后是list，用于列出breakpoints

还有个`continue`，不知道干嘛的

但是目前对寄存器的打印、pc的trace等等还没有探索完成

:::tip快去看进阶

[Advanced GDB Debugging](https://www.cprogramming.com/gdbtutorial.html)

[Learn about Valgrind, a memory leak detector and memory error hunter](https://www.cprogramming.com/debugging/valgrind.html)

[More information about finding and debugging segmentation faults (segfaults)](https://www.cprogramming.com/debugging/segfaults.html)

[Debugging with Visual Studio](https://www.cprogramming.com/tutorial/debugging_concepts.html)

:::

right now , i have so many questions.

such ass 

####  究竟要执行多久?

在`cmd_c()`函数中, 调用`cpu_exec()`的时候传入了参数`-1`, 你知道这是什么意思吗?

#### 执行速度与多线程执行

hard，关于这个nemu感觉就是单线程的（感觉而已）

```shell
[src/cpu/cpu-exec.c:120 cpu_exec] nemu: HIT GOOD TRAP at pc = 0x8000000c
[src/cpu/cpu-exec.c:88 statistic] host time spent = 5,917 us
[src/cpu/cpu-exec.c:89 statistic] total guest instructions = 4
[src/cpu/cpu-exec.c:90 statistic] simulation frequency = 676 inst/s
```

676inst/s，有点拉了吧？可能是没让他干什么

原来有说明

> 说明客户程序已经成功地结束运行. NEMU会在`cpu_exec()`函数的最后打印执行的指令数目和花费的时间, 并计算出指令执行的频率. 但由于内置客户程序太小, 执行很快就结束了, 目前无法计算出有意义的频率, 将来运行一些复杂的程序时, 此处输出的频率可以用于粗略地衡量NEMU的性能.

:::tip最后记一下笔记，怕忘了

- 三个对调试有用的宏(在`nemu/include/debug.h`中定义)

  - `Log()`是`printf()`的升级版, 专门用来输出调试信息, 同时还会输出使用`Log()`所在的源文件, 行号和函数. 当输出的调试信息过多的时候, 可以很方便地定位到代码中的相关位置
  - `Assert()`是`assert()`的升级版, 当测试条件为假时, 在assertion fail之前可以输出一些信息
  - `panic()`用于输出信息并结束程序, 相当于无条件的assertion fail

  代码中已经给出了使用这三个宏的例子, 如果你不知道如何使用它们, RTFSC.

- 内存通过在`nemu/src/memory/paddr.c`中定义的大数组`pmem`来模拟. 在客户程序运行的过程中, 总是使用`vaddr_read()`和`vaddr_write()` (在`nemu/src/memory/vaddr.c`中定义)来访问模拟的内存. vaddr, paddr分别代表虚拟地址和物理地址. 这些概念在将来才会用到, 目前不必深究, 但从现在开始保持接口的一致性可以在将来避免一些不必要的麻烦.

:::

在我们今天的运行中，已经出现过有颜色的log和很多的Assert断言，但是断言还不知道怎么用，还有welcome的assert(0)



:::warning TODO:

内存通过在`nemu/src/memory/paddr.c`中定义的大数组`pmem`来模拟. 在客户程序运行的过程中, 总是使用`vaddr_read()`和`vaddr_write()` (在`nemu/src/memory/vaddr.c`中定义)来访问模拟的内存. vaddr, paddr分别代表虚拟地址和物理地址. 这些概念在将来才会用到, 目前不必深究, 但从现在开始保持接口的一致性可以在将来避免一些不必要的麻烦.

:::





终于完成了该死的RTFSC part 了呜呜，记得gdb进入tui是`layout split`



## 7.19

发现写这个sdb还是比较简单的，因为整个框架就搭在sdb上

最主要还是RTFSC，不难，接口nemu已经给我们了

命令处理这里，建议`man strtok` and `man aito`

```c
for (char *str; (str = rl_gets()) != NULL; ) {
    //str地址加上长度偏移量得到end
  char *str_end = str + strlen(str);

  /* extract the first token as the command */
  char *cmd = strtok(str, " ");
  if (cmd == NULL) { continue; }

  /* treat the remaining string as the arguments,
   * which may need further parsing
   */
  //一行应该有cmd+args组成，而strtok后，返回的指针为第一个分割后的句子（就是CMD）
  //而跳到下一个（就是args）需要跳到下一行，用cmd地址+第一句话的长度+分隔符（\0）得到下一个args地址
  //如果发现args刚好到句子结尾，那就=没有args
  char *args = cmd + strlen(cmd) + 1;
  if (args >= str_end) {
    args = NULL;
  }
```

![image-20230719142444300](https://pic.imgdb.cn/item/64b781ad1ddac507cc128acd)

ok，我还以为他帮我把这个写好了，我一debug看，哎哥们怎么没东西啊？

search found that，did nothing right here

## 7.20

今日无事，继续做之前的坑

![image-20230720163017029](https://pic.imgdb.cn/item/64b8f09f1ddac507cc88bde2)

经常给我爆这样的金币啊

很难受，我一直在想，他这个menory是怎么读取的？为什么他这个API好像不是很好使

paddr和vaddr有什么区别？

然后我继续重新看源码，找到了最终接口是怎么算的

我掐指一算，这个读内存的方式没毛病啊，一下子给我整傻了

okgdb一下吧那就

gdb发现入参好像也没啥毛病，但是跳到了

第一个switchcase，突然想起来他这个len不是我要读多少个字节，而是打印的长度

人麻了

![image-20230720163812407](https://pic.imgdb.cn/item/64b8f27b1ddac507cc8f4fb7)

![image-20230720164121590](https://pic.imgdb.cn/item/64b8f3311ddac507cc91e69b)

效果甚佳，用到了IFDEF判断架构，理论上能够适配64位

## 7.22

没更新两天，~~绝对不是想摸鱼，也不是打游戏打的不想学习（嗯嗯）~~

去做麦克纳姆轮里程计解算去了，果然KISS原则还是要遵守会比较舒服一点的

这边刚看完正则表达式 https://regex101.com/

准备看一下regex正则表达式的库 https://www.cnblogs.com/hjslovewcl/articles/2314311.html



## 7.23

昨天弄好了vscode的gdb调试，不知道为什么我gdb的tui会撕裂

今天儿，定位到好像是regex解析表达式的时候有问题，按照程序来讲，那个position的增量应该是对的

今个决定换个规则+表达式，真奇怪啊，我之前的测试用例是`hi==`，理论上能够读到==的

![image-20230723153652338](https://pic.imgdb.cn/item/64bcd89a1ddac507ccf6baa0)

#### regex

**限定符**

?：代表问号前面的字符出现0/1次

*：可以匹配0/多次

+：可以匹配多次(0不行)

{6}：代表前面的出现6次（{2,6}2-6次，{2,}2次以上）

**或运算**

`a (cat|dog)`代表a cat/a dog匹配

芜湖完成



## 8.3

目前的问题是：如何识别括号括起来的，递归地去求值，虽然说在力扣用栈写过类似的括号求值（好像在算法课也写过），但是遇到真实问题就想摆烂了

