---
id: upgrade-your-fuxking-compiler
slug: /upgrade-your-fuxking-compiler
title: 升级AC6编译器（支持Cmake）
date: 2023-5-12
authors: pansyhou
tags: [Cmake, stm32, AC6,compiler]
keywords: [Cmake, stm32, AC6,compiler]
---

## 2023.7.18 updates

![image-20230718232909382](https://pic.imgdb.cn/item/64b6afd01ddac507cc130b1e)

今天在做nju的pa实验时发现了这档事，还是比较严重的，如果说像以前婷婷那台破电脑编译sentry的破工程需要12mins，但是sentry上场的时候发现忘记改宏定义了！刚好需要rebuild，那这个耗时是灾难级的，幸好还有部分的cache，只需要rebuild那个.c/h然后再链接一下

但是还是要小心为好，虽然是他现在ac6发布了商业版，但是我还是忘记不了，函数指针给我指错函数的这档事。。。（比赛前，debug才发现指错函数了，ac6不知道哪个优化级别，重新rebuild+改优化级别才活了）

# 步骤

1. 先去cubemx将`Project Manager`里的`Toolchain/IDE`从`MDK`替换成`STM32CubeMX`（默认你之前用MDK生成的

2. Generate一份代码，此刻你的Middlewares\Third_Party\FreeRTOS\Source\portable里面应该有了`GCC`的文件夹，此刻你的文件夹里应该长这样

   ![1](https://pic2.imgdb.cn/item/645e10c80d2dde577769ca64.jpg)

3. 此刻去keil看一眼，编译一下，你会发现你很崩溃，大部分报错都是围绕RTOS的`port.c`和`portmacro.h`，我们只后魔改的也是这部分

   ```
   ../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\portmacro.h(167): error: unknown type name '__forceinline'
   static portFORCE_INLINE void vPortSetBASEPRI( uint32_t ulBASEPRI )
          ^
   ../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\portmacro.h(162): note: expanded from macro 'portFORCE_INLINE'
           #define portFORCE_INLINE __forceinline
                                    ^
   ../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\portmacro.h(170): error: expected 'volatile', 'inline', 'goto', or '('
           {
           ^
   ../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\portmacro.h(178): error: unknown type name '__forceinline'
   static portFORCE_INLINE void vPortRaiseBASEPRI( void )
          ^
   ```

4. 删除Freertos的`port.c`

   ![](https://pic2.imgdb.cn/item/645e12b40d2dde57776d2a12.jpg)

   打开魔术棒，打开`include path`

   ![image-20230512210029185](https://pic.imgdb.cn/item/645e38710d2dde5777c0f980)

   将`..\Middlewares\Third_Party\FreeRTOS\Source\portable\RVDS\ARM_CM4F`改成GCC的，就是`..\Middlewares\Third_Party\FreeRTOS\Source\portable\GCC\ARM_CM4F`

5. 此时keil编译已经正常了。如果port.c文本编辑器发疯的话编译一下，或者重启就好

6. 如果移植过程中已经完成上述步骤还爆一堆error，检查`cmsis_compiler.h`中的宏定义`defined (__ARMCC_VERSION) && (__ARMCC_VERSION >= 6010050)`有没有开，一般灰了就是识别不出来你的AC6已经开启，需要删除keil的全局宏定义的__CC_ARM

   ![image-20230512212520549](https://pic.imgdb.cn/item/645e3e410d2dde5777d3798f)

7. 如果想要适配到Clion或者vscode，需要一点点配置。

   1. 请确认已经按稚晖君的教材已经可以正常识别CmakeList和工具链。[配置CLion用于STM32开发【优雅の嵌入式开发】 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/145801160)

   2. CMake正常即可，不需要openocd（这玩野可太讨厌了，很卡的，如果真想玩一下gdb，可以自己弄命令行

      ![image-20230512210556021](https://pic.imgdb.cn/item/645e39b40d2dde5777c57e1a)

   3. CmakeList确保**反注释**掉开启FPU

      ```cmake
      #Uncomment for hardware floating point
      add_compile_definitions(ARM_MATH_CM4;ARM_MATH_MATRIX_CHECK;ARM_MATH_ROUNDING)
      add_compile_options(-mfloat-abi=hard -mfpu=fpv4-sp-d16)
      add_link_options(-mfloat-abi=hard -mfpu=fpv4-sp-d16)
      ```

   4. 如果工程要加入其他的头或者源文件，在`include_directories`和`file`按照他原本的格式自己加就好

   5. 右上角小锤子build即可，一般会爆一堆错误（之前我和keil混编的时候FreeRTOS.h是大写，keil要全小写，很恶心的，但是更换AC6只后标准估计改了。





## Some Details

1. __PACKED关键字需要包含`#include "stm32f4xx_hal_def.h"`这里面有对编译器版本的判断来控制编译哪个版本的字节对齐

   （好像还改成小写的了__packed)

   ![图2](https://pic.imgdb.cn/item/645e5e4a0d2dde5777196beb)

   ```c
   #if defined (__ARMCC_VERSION) && (__ARMCC_VERSION >= 6010050) /* ARM Compiler V6 */
     #ifndef __weak
       #define __weak  __attribute__((weak))
     #endif
     #ifndef __packed
       #define __packed  __attribute__((packed))
     #endif
   #elif defined ( __GNUC__ ) && !defined (__CC_ARM) /* GNU Compiler */
     #ifndef __weak
       #define __weak   __attribute__((weak))
     #endif /* __weak */
     #ifndef __packed
       #define __packed __attribute__((__packed__))
     #endif /* __packed */
   #endif /* __GNUC__ */
   ```

   :::warning

   我们AC6用的是ARM_CLANG，Cmake的交叉编译工具链是GNUC（就是最下面那个）

   养成良好习惯，建议要用到不同编译器版本时，**加入宏定义**判断当前编译工具链

   #if defined (__ARMCC_VERSION) && (__ARMCC_VERSION >= 6010050) /* ARM Compiler V6 */

   等等

   :::

2. 

## 细节原理及实现

TODO



## 可学习的参考链接

[AC5 to AC6 - STM32H7 - 硬汉嵌入式论坛 - Powered by Discuz! (armbbs.cn)](https://www.armbbs.cn/forum.php?mod=viewthread&tid=95736&fromuid=58)

[比较IAR，MDK的AC5和AC6以及Embedded Studio的CLANG和GCC编译HAL库性能 - amobbs.com 阿莫电子论坛 -- 东莞阿莫电子网站 - Powered by Discuz!](https://www.amobbs.com/forum.php?mod=viewthread&action=printable&tid=5709400)

[(10条消息) ARM编译器常用的预定义宏___armcc_version_晴天_QQ的博客-CSDN博客](https://blog.csdn.net/caihaitao2000/article/details/124306439)

## 一些想说的话

折腾这个主要是想拓展目前电控的学习范畴，毕竟我感觉我们现在除了继承老前辈的框架好像一无是处（对比起其他大学），有一种原地踏步的感觉。

现在也只有张师兄和杰哥对算法部分是有一定了解并为之学习的，我感觉我自己也有所愧对于实验室，自己说好的寒假学自控、ROS去优化机械臂，却找借口说机械没装好学不了，没实物调不了，跑去学ARM架构和CPP去了，但是一无所获，没有实际应用（没应用就是忘的很快）

所以我愿将目前的电控分成两个方向

1. 架构
2. 算法

我从小喜欢折腾，想象力好，但是将数学转换成实际运用物理建模属实不是我的强项，但是我能通过外界的学习优化现有的代码框架，这就是我所喜欢的架构方向。

:::info

如果你觉得做一件事情需要很**吃力**去努力才能做好的，那可能是你所选的方向错了。

:::

搞这个的目的是让你们对调试工具（clion or vscode搭配openocd（大便来的）ozone，stm家好像也有一个），编译工具链（arm-gcc等等的使用，指令），make工具（cmake，makefile等等）有一个大概的感知认识，以后的面试这个也是一个所需的技能点，你不可能一直用着keil这个这么完美的奶妈级平台的，不会有任何成长，如果说问你一些宏定义有什么意思，什么含义，我真的回答不出来，或者说问你gdb怎么用，一些命令行的参数一般用什么。

如果说能扩展到Cmake上的话，就能接触到比较现代的东西，比如说一些自动化测试、配置参数调整，上至ros，下至c++适配

比较多大学能够通过这个Cmake去拓展实现自己想实现的框架，去做自动化编译（github action）

具体的内容，如果你学过南京大学的操作系统，会印象更深刻

不是每个人都能知道ARM架构的。

> 有能力的可以看湖南大学的开源
>
> https://gitee.com/hnuyuelurm/basic_framework/blob/referee/VSCode+Ozone%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.md
>
> 曾庆铖dalao之前我记得好像还是电控组组长吧，也很厉害的
>
> 融合了电控算法+框架，视觉+导航的dalao

但是如果你喜欢的是算法方向的话架构可以不用怎么去理，因为你以后面试的也不一定对这些要有深刻的理解

you should focus on your field 

我不会强迫你们去了解这些东西的，毕竟我觉得没什么用，有用的话AC6早被搬出来了



> MDK5使用AC5带Browse Info
> 耗时8分51秒
>
> MDK5使用AC6带Browse Info
> 耗时1分07秒
>
> IAR带Browse Info（IAR的编译速度很快，等Browse Info时间较长）
> 耗时2分03秒
>
> Embedded Studio4.15使用GCC带Browse Info
> 耗时38秒
>
> Embedded Studio4.15使用CLANG带Browse Info
> 耗时21秒
>
> 总结，Embedded Studio使用CLANG完胜其它方式。



> **生成代码大小**
> MDK5使用AC5：
> Total RO Size (Code + RO Data)             17060 (16.66kB)
> Total RW Size (RW Data + ZI Data)           6536 ( 6.38kB)
> Total ROM Size (Code + RO Data + RW Data) 17120 (16.72kB)
>
> MDK5使用AC6：
> Total RO Size (Code + RO Data)             15960 (15.59kB)
> Total RW Size (RW Data + ZI Data)           6544 ( 6.39kB)
> Total ROM Size (Code + RO Data + RW Data) 15980 (**15.61kB**)
>
> MDK5使用AC6，开启Link-Time优化（2019-03-29，晚11点）。
> Total RO Size (Code + RO Data)          11476 ( 11.21kB)
> Total RW Size (RW Data + ZI Data)         6512 (  6.36kB)
> Total ROM Size (Code + RO Data + RW Data)  11484 ( **11.21kB**)
>
> IAR（printf选择full）：
> 20 290 bytes of readonly code memory
> 142 bytes of readonly data memory
> 6 677 bytes of readwrite data memory
>
> IAR（开Link优化，printf选择small，新增small测试，2019-03-29，晚10点）：
> 16 734 bytes of readonly code memory
>  90 bytes of readonly data memory
> 6 621 bytes of readwrite data memory
>
> Embedded Studio4.15使用GCC
> [attach]456094[/attach]
>
> Embedded Studio4.15使用CLANG
> [attach]456093[/attach]
>
> Embedded Studio4.15使用CLANG开Link-Time优化，效果明显（2019-03-30新增测试）
> [attach]456345[/attach]
>
> 总结，MDK的AC6生成的代码最小。

这些都是纸面的东西，但是还是希望你们在折腾的时候能够了解一些东西

但是如果是喜欢算法的话，真没必要上AC6，你只需要专注于你的算法即可。