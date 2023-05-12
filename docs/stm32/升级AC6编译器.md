---
id: upgrade-your-fuxking-compiler
slug: /upgrade-your-fuxking-compiler
title: 升级AC6编译器（支持Cmake）
date: 2023-5-12
authors: pansyhou
tags: [Cmake, stm32, AC6,compiler]
keywords: [Cmake, stm32, AC6,compiler]
---

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