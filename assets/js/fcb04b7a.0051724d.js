"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4844],{4137:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,s=c["".concat(l,".").concat(u)]||c[u]||k[u]||o;return a?n.createElement(s,i(i({ref:t},d),{},{components:a})):n.createElement(s,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5007:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return k}});var n=a(3117),r=a(102),o=(a(7294),a(4137)),i=["components"],p={id:"upgrade-your-fuxking-compiler",slug:"/upgrade-your-fuxking-compiler",title:"\u5347\u7ea7AC6\u7f16\u8bd1\u5668\uff08\u652f\u6301Cmake\uff09",date:"2023-5-12",authors:"pansyhou",tags:["Cmake","stm32","AC6","compiler"],keywords:["Cmake","stm32","AC6","compiler"]},l="\u6b65\u9aa4",m={unversionedId:"stm32/upgrade-your-fuxking-compiler",id:"stm32/upgrade-your-fuxking-compiler",title:"\u5347\u7ea7AC6\u7f16\u8bd1\u5668\uff08\u652f\u6301Cmake\uff09",description:"1. \u5148\u53bbcubemx\u5c06Project Manager\u91cc\u7684Toolchain/IDE\u4eceMDK\u66ff\u6362\u6210STM32CubeMX\uff08\u9ed8\u8ba4\u4f60\u4e4b\u524d\u7528MDK\u751f\u6210\u7684",source:"@site/docs/stm32/\u5347\u7ea7AC6\u7f16\u8bd1\u5668.md",sourceDirName:"stm32",slug:"/upgrade-your-fuxking-compiler",permalink:"/docs/upgrade-your-fuxking-compiler",draft:!1,tags:[{label:"Cmake",permalink:"/docs/tags/cmake"},{label:"stm32",permalink:"/docs/tags/stm-32"},{label:"AC6",permalink:"/docs/tags/ac-6"},{label:"compiler",permalink:"/docs/tags/compiler"}],version:"current",frontMatter:{id:"upgrade-your-fuxking-compiler",slug:"/upgrade-your-fuxking-compiler",title:"\u5347\u7ea7AC6\u7f16\u8bd1\u5668\uff08\u652f\u6301Cmake\uff09",date:"2023-5-12",authors:"pansyhou",tags:["Cmake","stm32","AC6","compiler"],keywords:["Cmake","stm32","AC6","compiler"]},sidebar:"stm32",previous:{title:"22\u7535\u63a7\u4efb\u52a1",permalink:"/docs/22_embedded_task"}},d={},k=[{value:"Some Details",id:"some-details",level:2},{value:"\u7ec6\u8282\u539f\u7406\u53ca\u5b9e\u73b0",id:"\u7ec6\u8282\u539f\u7406\u53ca\u5b9e\u73b0",level:2},{value:"\u53ef\u5b66\u4e60\u7684\u53c2\u8003\u94fe\u63a5",id:"\u53ef\u5b66\u4e60\u7684\u53c2\u8003\u94fe\u63a5",level:2},{value:"\u4e00\u4e9b\u60f3\u8bf4\u7684\u8bdd",id:"\u4e00\u4e9b\u60f3\u8bf4\u7684\u8bdd",level:2}],c={toc:k};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5148\u53bbcubemx\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"Project Manager"),"\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Toolchain/IDE"),"\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"MDK"),"\u66ff\u6362\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"STM32CubeMX"),"\uff08\u9ed8\u8ba4\u4f60\u4e4b\u524d\u7528MDK\u751f\u6210\u7684")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate\u4e00\u4efd\u4ee3\u7801\uff0c\u6b64\u523b\u4f60\u7684Middlewares\\Third_Party\\FreeRTOS\\Source\\portable\u91cc\u9762\u5e94\u8be5\u6709\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"GCC"),"\u7684\u6587\u4ef6\u5939\uff0c\u6b64\u523b\u4f60\u7684\u6587\u4ef6\u5939\u91cc\u5e94\u8be5\u957f\u8fd9\u6837"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://pic2.imgdb.cn/item/645e10c80d2dde577769ca64.jpg",alt:"1"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6b64\u523b\u53bbkeil\u770b\u4e00\u773c\uff0c\u7f16\u8bd1\u4e00\u4e0b\uff0c\u4f60\u4f1a\u53d1\u73b0\u4f60\u5f88\u5d29\u6e83\uff0c\u5927\u90e8\u5206\u62a5\u9519\u90fd\u662f\u56f4\u7ed5RTOS\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"port.c"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"portmacro.h"),"\uff0c\u6211\u4eec\u53ea\u540e\u9b54\u6539\u7684\u4e5f\u662f\u8fd9\u90e8\u5206"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\\portmacro.h(167): error: unknown type name '__forceinline'\nstatic portFORCE_INLINE void vPortSetBASEPRI( uint32_t ulBASEPRI )\n       ^\n../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\\portmacro.h(162): note: expanded from macro 'portFORCE_INLINE'\n        #define portFORCE_INLINE __forceinline\n                                 ^\n../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\\portmacro.h(170): error: expected 'volatile', 'inline', 'goto', or '('\n        {\n        ^\n../Middlewares/Third_Party/FreeRTOS/Source/portable/RVDS/ARM_CM4F\\portmacro.h(178): error: unknown type name '__forceinline'\nstatic portFORCE_INLINE void vPortRaiseBASEPRI( void )\n       ^\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5220\u9664Freertos\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"port.c")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://pic2.imgdb.cn/item/645e12b40d2dde57776d2a12.jpg",alt:null})),(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00\u9b54\u672f\u68d2\uff0c\u6253\u5f00",(0,o.kt)("inlineCode",{parentName:"p"},"include path")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/645e38710d2dde5777c0f980",alt:"image-20230512210029185"})),(0,o.kt)("p",{parentName:"li"},"\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"..\\Middlewares\\Third_Party\\FreeRTOS\\Source\\portable\\RVDS\\ARM_CM4F"),"\u6539\u6210GCC\u7684\uff0c\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"..\\Middlewares\\Third_Party\\FreeRTOS\\Source\\portable\\GCC\\ARM_CM4F"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6b64\u65f6keil\u7f16\u8bd1\u5df2\u7ecf\u6b63\u5e38\u4e86\u3002\u5982\u679cport.c\u6587\u672c\u7f16\u8f91\u5668\u53d1\u75af\u7684\u8bdd\u7f16\u8bd1\u4e00\u4e0b\uff0c\u6216\u8005\u91cd\u542f\u5c31\u597d")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u79fb\u690d\u8fc7\u7a0b\u4e2d\u5df2\u7ecf\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u8fd8\u7206\u4e00\u5806error\uff0c\u68c0\u67e5",(0,o.kt)("inlineCode",{parentName:"p"},"cmsis_compiler.h"),"\u4e2d\u7684\u5b8f\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"defined (__ARMCC_VERSION) && (__ARMCC_VERSION >= 6010050)"),"\u6709\u6ca1\u6709\u5f00\uff0c\u4e00\u822c\u7070\u4e86\u5c31\u662f\u8bc6\u522b\u4e0d\u51fa\u6765\u4f60\u7684AC6\u5df2\u7ecf\u5f00\u542f\uff0c\u9700\u8981\u5220\u9664keil\u7684\u5168\u5c40\u5b8f\u5b9a\u4e49\u7684__CC_ARM"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/645e3e410d2dde5777d3798f",alt:"image-20230512212520549"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u60f3\u8981\u9002\u914d\u5230Clion\u6216\u8005vscode\uff0c\u9700\u8981\u4e00\u70b9\u70b9\u914d\u7f6e\u3002"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8bf7\u786e\u8ba4\u5df2\u7ecf\u6309\u7a1a\u6656\u541b\u7684\u6559\u6750\u5df2\u7ecf\u53ef\u4ee5\u6b63\u5e38\u8bc6\u522bCmakeList\u548c\u5de5\u5177\u94fe\u3002",(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/145801160"},"\u914d\u7f6eCLion\u7528\u4e8eSTM32\u5f00\u53d1\u3010\u4f18\u96c5\u306e\u5d4c\u5165\u5f0f\u5f00\u53d1\u3011 - \u77e5\u4e4e (zhihu.com)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CMake\u6b63\u5e38\u5373\u53ef\uff0c\u4e0d\u9700\u8981openocd\uff08\u8fd9\u73a9\u91ce\u53ef\u592a\u8ba8\u538c\u4e86\uff0c\u5f88\u5361\u7684\uff0c\u5982\u679c\u771f\u60f3\u73a9\u4e00\u4e0bgdb\uff0c\u53ef\u4ee5\u81ea\u5df1\u5f04\u547d\u4ee4\u884c"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/645e39b40d2dde5777c57e1a",alt:"image-20230512210556021"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"CmakeList\u786e\u4fdd",(0,o.kt)("strong",{parentName:"p"},"\u53cd\u6ce8\u91ca"),"\u6389\u5f00\u542fFPU"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-cmake"},"#Uncomment for hardware floating point\nadd_compile_definitions(ARM_MATH_CM4;ARM_MATH_MATRIX_CHECK;ARM_MATH_ROUNDING)\nadd_compile_options(-mfloat-abi=hard -mfpu=fpv4-sp-d16)\nadd_link_options(-mfloat-abi=hard -mfpu=fpv4-sp-d16)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u5de5\u7a0b\u8981\u52a0\u5165\u5176\u4ed6\u7684\u5934\u6216\u8005\u6e90\u6587\u4ef6\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"include_directories"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"file"),"\u6309\u7167\u4ed6\u539f\u672c\u7684\u683c\u5f0f\u81ea\u5df1\u52a0\u5c31\u597d")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u53f3\u4e0a\u89d2\u5c0f\u9524\u5b50build\u5373\u53ef\uff0c\u4e00\u822c\u4f1a\u7206\u4e00\u5806\u9519\u8bef\uff08\u4e4b\u524d\u6211\u548ckeil\u6df7\u7f16\u7684\u65f6\u5019FreeRTOS.h\u662f\u5927\u5199\uff0ckeil\u8981\u5168\u5c0f\u5199\uff0c\u5f88\u6076\u5fc3\u7684\uff0c\u4f46\u662f\u66f4\u6362AC6\u53ea\u540e\u6807\u51c6\u4f30\u8ba1\u6539\u4e86\u3002"))))),(0,o.kt)("h2",{id:"some-details"},"Some Details"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"__PACKED\u5173\u952e\u5b57\u9700\u8981\u5305\u542b",(0,o.kt)("inlineCode",{parentName:"p"},'#include "stm32f4xx_hal_def.h"'),"\u8fd9\u91cc\u9762\u6709\u5bf9\u7f16\u8bd1\u5668\u7248\u672c\u7684\u5224\u65ad\u6765\u63a7\u5236\u7f16\u8bd1\u54ea\u4e2a\u7248\u672c\u7684\u5b57\u8282\u5bf9\u9f50"),(0,o.kt)("p",{parentName:"li"},"\uff08\u597d\u50cf\u8fd8\u6539\u6210\u5c0f\u5199\u7684\u4e86__packed)"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/645e5e4a0d2dde5777196beb",alt:"\u56fe2"})),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-c"},"#if defined (__ARMCC_VERSION) && (__ARMCC_VERSION >= 6010050) /* ARM Compiler V6 */\n  #ifndef __weak\n    #define __weak  __attribute__((weak))\n  #endif\n  #ifndef __packed\n    #define __packed  __attribute__((packed))\n  #endif\n#elif defined ( __GNUC__ ) && !defined (__CC_ARM) /* GNU Compiler */\n  #ifndef __weak\n    #define __weak   __attribute__((weak))\n  #endif /* __weak */\n  #ifndef __packed\n    #define __packed __attribute__((__packed__))\n  #endif /* __packed */\n#endif /* __GNUC__ */\n")),(0,o.kt)("admonition",{parentName:"li",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eecAC6\u7528\u7684\u662fARM_CLANG\uff0cCmake\u7684\u4ea4\u53c9\u7f16\u8bd1\u5de5\u5177\u94fe\u662fGNUC\uff08\u5c31\u662f\u6700\u4e0b\u9762\u90a3\u4e2a\uff09"),(0,o.kt)("p",{parentName:"admonition"},"\u517b\u6210\u826f\u597d\u4e60\u60ef\uff0c\u5efa\u8bae\u8981\u7528\u5230\u4e0d\u540c\u7f16\u8bd1\u5668\u7248\u672c\u65f6\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u52a0\u5165\u5b8f\u5b9a\u4e49"),"\u5224\u65ad\u5f53\u524d\u7f16\u8bd1\u5de5\u5177\u94fe"),(0,o.kt)("p",{parentName:"admonition"},"#if defined (",(0,o.kt)("strong",{parentName:"p"},"ARMCC_VERSION) && ("),"ARMCC_VERSION >= 6010050) /",(0,o.kt)("em",{parentName:"p"}," ARM Compiler V6 "),"/"),(0,o.kt)("p",{parentName:"admonition"},"\u7b49\u7b49"))),(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("h2",{id:"\u7ec6\u8282\u539f\u7406\u53ca\u5b9e\u73b0"},"\u7ec6\u8282\u539f\u7406\u53ca\u5b9e\u73b0"),(0,o.kt)("p",null,"TODO"),(0,o.kt)("h2",{id:"\u53ef\u5b66\u4e60\u7684\u53c2\u8003\u94fe\u63a5"},"\u53ef\u5b66\u4e60\u7684\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.armbbs.cn/forum.php?mod=viewthread&tid=95736&fromuid=58"},"AC5 to AC6 - STM32H7 - \u786c\u6c49\u5d4c\u5165\u5f0f\u8bba\u575b - Powered by Discuz! (armbbs.cn)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.amobbs.com/forum.php?mod=viewthread&action=printable&tid=5709400"},"\u6bd4\u8f83IAR\uff0cMDK\u7684AC5\u548cAC6\u4ee5\u53caEmbedded Studio\u7684CLANG\u548cGCC\u7f16\u8bd1HAL\u5e93\u6027\u80fd - amobbs.com \u963f\u83ab\u7535\u5b50\u8bba\u575b -- \u4e1c\u839e\u963f\u83ab\u7535\u5b50\u7f51\u7ad9 - Powered by Discuz!")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/caihaitao2000/article/details/124306439"},"(10\u6761\u6d88\u606f) ARM\u7f16\u8bd1\u5668\u5e38\u7528\u7684\u9884\u5b9a\u4e49\u5b8f",(0,o.kt)("em",{parentName:"a"},"__armcc_version"),"\u6674\u5929_QQ\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")),(0,o.kt)("h2",{id:"\u4e00\u4e9b\u60f3\u8bf4\u7684\u8bdd"},"\u4e00\u4e9b\u60f3\u8bf4\u7684\u8bdd"),(0,o.kt)("p",null,"\u6298\u817e\u8fd9\u4e2a\u4e3b\u8981\u662f\u60f3\u62d3\u5c55\u76ee\u524d\u7535\u63a7\u7684\u5b66\u4e60\u8303\u7574\uff0c\u6bd5\u7adf\u6211\u611f\u89c9\u6211\u4eec\u73b0\u5728\u9664\u4e86\u7ee7\u627f\u8001\u524d\u8f88\u7684\u6846\u67b6\u597d\u50cf\u4e00\u65e0\u662f\u5904\uff08\u5bf9\u6bd4\u8d77\u5176\u4ed6\u5927\u5b66\uff09\uff0c\u6709\u4e00\u79cd\u539f\u5730\u8e0f\u6b65\u7684\u611f\u89c9\u3002"),(0,o.kt)("p",null,"\u73b0\u5728\u4e5f\u53ea\u6709\u5f20\u5e08\u5144\u548c\u6770\u54e5\u5bf9\u7b97\u6cd5\u90e8\u5206\u662f\u6709\u4e00\u5b9a\u4e86\u89e3\u5e76\u4e3a\u4e4b\u5b66\u4e60\u7684\uff0c\u6211\u611f\u89c9\u6211\u81ea\u5df1\u4e5f\u6709\u6240\u6127\u5bf9\u4e8e\u5b9e\u9a8c\u5ba4\uff0c\u81ea\u5df1\u8bf4\u597d\u7684\u5bd2\u5047\u5b66\u81ea\u63a7\u3001ROS\u53bb\u4f18\u5316\u673a\u68b0\u81c2\uff0c\u5374\u627e\u501f\u53e3\u8bf4\u673a\u68b0\u6ca1\u88c5\u597d\u5b66\u4e0d\u4e86\uff0c\u6ca1\u5b9e\u7269\u8c03\u4e0d\u4e86\uff0c\u8dd1\u53bb\u5b66ARM\u67b6\u6784\u548cCPP\u53bb\u4e86\uff0c\u4f46\u662f\u4e00\u65e0\u6240\u83b7\uff0c\u6ca1\u6709\u5b9e\u9645\u5e94\u7528\uff08\u6ca1\u5e94\u7528\u5c31\u662f\u5fd8\u7684\u5f88\u5feb\uff09"),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u613f\u5c06\u76ee\u524d\u7684\u7535\u63a7\u5206\u6210\u4e24\u4e2a\u65b9\u5411"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u67b6\u6784"),(0,o.kt)("li",{parentName:"ol"},"\u7b97\u6cd5")),(0,o.kt)("p",null,"\u6211\u4ece\u5c0f\u559c\u6b22\u6298\u817e\uff0c\u60f3\u8c61\u529b\u597d\uff0c\u4f46\u662f\u5c06\u6570\u5b66\u8f6c\u6362\u6210\u5b9e\u9645\u8fd0\u7528\u7269\u7406\u5efa\u6a21\u5c5e\u5b9e\u4e0d\u662f\u6211\u7684\u5f3a\u9879\uff0c\u4f46\u662f\u6211\u80fd\u901a\u8fc7\u5916\u754c\u7684\u5b66\u4e60\u4f18\u5316\u73b0\u6709\u7684\u4ee3\u7801\u6846\u67b6\uff0c\u8fd9\u5c31\u662f\u6211\u6240\u559c\u6b22\u7684\u67b6\u6784\u65b9\u5411\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u89c9\u5f97\u505a\u4e00\u4ef6\u4e8b\u60c5\u9700\u8981\u5f88",(0,o.kt)("strong",{parentName:"p"},"\u5403\u529b"),"\u53bb\u52aa\u529b\u624d\u80fd\u505a\u597d\u7684\uff0c\u90a3\u53ef\u80fd\u662f\u4f60\u6240\u9009\u7684\u65b9\u5411\u9519\u4e86\u3002")),(0,o.kt)("p",null,"\u641e\u8fd9\u4e2a\u7684\u76ee\u7684\u662f\u8ba9\u4f60\u4eec\u5bf9\u8c03\u8bd5\u5de5\u5177\uff08clion or vscode\u642d\u914dopenocd\uff08\u5927\u4fbf\u6765\u7684\uff09ozone\uff0cstm\u5bb6\u597d\u50cf\u4e5f\u6709\u4e00\u4e2a\uff09\uff0c\u7f16\u8bd1\u5de5\u5177\u94fe\uff08arm-gcc\u7b49\u7b49\u7684\u4f7f\u7528\uff0c\u6307\u4ee4\uff09\uff0cmake\u5de5\u5177\uff08cmake\uff0cmakefile\u7b49\u7b49\uff09\u6709\u4e00\u4e2a\u5927\u6982\u7684\u611f\u77e5\u8ba4\u8bc6\uff0c\u4ee5\u540e\u7684\u9762\u8bd5\u8fd9\u4e2a\u4e5f\u662f\u4e00\u4e2a\u6240\u9700\u7684\u6280\u80fd\u70b9\uff0c\u4f60\u4e0d\u53ef\u80fd\u4e00\u76f4\u7528\u7740keil\u8fd9\u4e2a\u8fd9\u4e48\u5b8c\u7f8e\u7684\u5976\u5988\u7ea7\u5e73\u53f0\u7684\uff0c\u4e0d\u4f1a\u6709\u4efb\u4f55\u6210\u957f\uff0c\u5982\u679c\u8bf4\u95ee\u4f60\u4e00\u4e9b\u5b8f\u5b9a\u4e49\u6709\u4ec0\u4e48\u610f\u601d\uff0c\u4ec0\u4e48\u542b\u4e49\uff0c\u6211\u771f\u7684\u56de\u7b54\u4e0d\u51fa\u6765\uff0c\u6216\u8005\u8bf4\u95ee\u4f60gdb\u600e\u4e48\u7528\uff0c\u4e00\u4e9b\u547d\u4ee4\u884c\u7684\u53c2\u6570\u4e00\u822c\u7528\u4ec0\u4e48\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u8bf4\u80fd\u6269\u5c55\u5230Cmake\u4e0a\u7684\u8bdd\uff0c\u5c31\u80fd\u63a5\u89e6\u5230\u6bd4\u8f83\u73b0\u4ee3\u7684\u4e1c\u897f\uff0c\u6bd4\u5982\u8bf4\u4e00\u4e9b\u81ea\u52a8\u5316\u6d4b\u8bd5\u3001\u914d\u7f6e\u53c2\u6570\u8c03\u6574\uff0c\u4e0a\u81f3ros\uff0c\u4e0b\u81f3c++\u9002\u914d"),(0,o.kt)("p",null,"\u6bd4\u8f83\u591a\u5927\u5b66\u80fd\u591f\u901a\u8fc7\u8fd9\u4e2aCmake\u53bb\u62d3\u5c55\u5b9e\u73b0\u81ea\u5df1\u60f3\u5b9e\u73b0\u7684\u6846\u67b6\uff0c\u53bb\u505a\u81ea\u52a8\u5316\u7f16\u8bd1\uff08github action\uff09"),(0,o.kt)("p",null,"\u5177\u4f53\u7684\u5185\u5bb9\uff0c\u5982\u679c\u4f60\u5b66\u8fc7\u5357\u4eac\u5927\u5b66\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4f1a\u5370\u8c61\u66f4\u6df1\u523b"),(0,o.kt)("p",null,"\u4e0d\u662f\u6bcf\u4e2a\u4eba\u90fd\u80fd\u77e5\u9053ARM\u67b6\u6784\u7684\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6709\u80fd\u529b\u7684\u53ef\u4ee5\u770b\u6e56\u5357\u5927\u5b66\u7684\u5f00\u6e90"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/hnuyuelurm/basic_framework/blob/referee/VSCode+Ozone%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.md"},"https://gitee.com/hnuyuelurm/basic_framework/blob/referee/VSCode+Ozone%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.md")),(0,o.kt)("p",{parentName:"blockquote"},"\u66fe\u5e86\u94d6dalao\u4e4b\u524d\u6211\u8bb0\u5f97\u597d\u50cf\u8fd8\u662f\u7535\u63a7\u7ec4\u7ec4\u957f\u5427\uff0c\u4e5f\u5f88\u5389\u5bb3\u7684"),(0,o.kt)("p",{parentName:"blockquote"},"\u878d\u5408\u4e86\u7535\u63a7\u7b97\u6cd5+\u6846\u67b6\uff0c\u89c6\u89c9+\u5bfc\u822a\u7684dalao")),(0,o.kt)("p",null,"\u4f46\u662f\u5982\u679c\u4f60\u559c\u6b22\u7684\u662f\u7b97\u6cd5\u65b9\u5411\u7684\u8bdd\u67b6\u6784\u53ef\u4ee5\u4e0d\u7528\u600e\u4e48\u53bb\u7406\uff0c\u56e0\u4e3a\u4f60\u4ee5\u540e\u9762\u8bd5\u7684\u4e5f\u4e0d\u4e00\u5b9a\u5bf9\u8fd9\u4e9b\u8981\u6709\u6df1\u523b\u7684\u7406\u89e3"),(0,o.kt)("p",null,"you should focus on your field "),(0,o.kt)("p",null,"\u6211\u4e0d\u4f1a\u5f3a\u8feb\u4f60\u4eec\u53bb\u4e86\u89e3\u8fd9\u4e9b\u4e1c\u897f\u7684\uff0c\u6bd5\u7adf\u6211\u89c9\u5f97\u6ca1\u4ec0\u4e48\u7528\uff0c\u6709\u7528\u7684\u8bddAC6\u65e9\u88ab\u642c\u51fa\u6765\u4e86"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MDK5\u4f7f\u7528AC5\u5e26Browse Info\n\u8017\u65f68\u520651\u79d2"),(0,o.kt)("p",{parentName:"blockquote"},"MDK5\u4f7f\u7528AC6\u5e26Browse Info\n\u8017\u65f61\u520607\u79d2"),(0,o.kt)("p",{parentName:"blockquote"},"IAR\u5e26Browse Info\uff08IAR\u7684\u7f16\u8bd1\u901f\u5ea6\u5f88\u5feb\uff0c\u7b49Browse Info\u65f6\u95f4\u8f83\u957f\uff09\n\u8017\u65f62\u520603\u79d2"),(0,o.kt)("p",{parentName:"blockquote"},"Embedded Studio4.15\u4f7f\u7528GCC\u5e26Browse Info\n\u8017\u65f638\u79d2"),(0,o.kt)("p",{parentName:"blockquote"},"Embedded Studio4.15\u4f7f\u7528CLANG\u5e26Browse Info\n\u8017\u65f621\u79d2"),(0,o.kt)("p",{parentName:"blockquote"},"\u603b\u7ed3\uff0cEmbedded Studio\u4f7f\u7528CLANG\u5b8c\u80dc\u5176\u5b83\u65b9\u5f0f\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u751f\u6210\u4ee3\u7801\u5927\u5c0f"),"\nMDK5\u4f7f\u7528AC5\uff1a\nTotal RO Size (Code + RO Data)             17060 (16.66kB)\nTotal RW Size (RW Data + ZI Data)           6536 ( 6.38kB)\nTotal ROM Size (Code + RO Data + RW Data) 17120 (16.72kB)"),(0,o.kt)("p",{parentName:"blockquote"},"MDK5\u4f7f\u7528AC6\uff1a\nTotal RO Size (Code + RO Data)             15960 (15.59kB)\nTotal RW Size (RW Data + ZI Data)           6544 ( 6.39kB)\nTotal ROM Size (Code + RO Data + RW Data) 15980 (",(0,o.kt)("strong",{parentName:"p"},"15.61kB"),")"),(0,o.kt)("p",{parentName:"blockquote"},"MDK5\u4f7f\u7528AC6\uff0c\u5f00\u542fLink-Time\u4f18\u5316\uff082019-03-29\uff0c\u665a11\u70b9\uff09\u3002\nTotal RO Size (Code + RO Data)          11476 ( 11.21kB)\nTotal RW Size (RW Data + ZI Data)         6512 (  6.36kB)\nTotal ROM Size (Code + RO Data + RW Data)  11484 ( ",(0,o.kt)("strong",{parentName:"p"},"11.21kB"),")"),(0,o.kt)("p",{parentName:"blockquote"},"IAR\uff08printf\u9009\u62e9full\uff09\uff1a\n20 290 bytes of readonly code memory\n142 bytes of readonly data memory\n6 677 bytes of readwrite data memory"),(0,o.kt)("p",{parentName:"blockquote"},"IAR\uff08\u5f00Link\u4f18\u5316\uff0cprintf\u9009\u62e9small\uff0c\u65b0\u589esmall\u6d4b\u8bd5\uff0c2019-03-29\uff0c\u665a10\u70b9\uff09\uff1a\n16 734 bytes of readonly code memory\n90 bytes of readonly data memory\n6 621 bytes of readwrite data memory"),(0,o.kt)("p",{parentName:"blockquote"},"Embedded Studio4.15\u4f7f\u7528GCC\n","[attach]","456094","[/attach]"),(0,o.kt)("p",{parentName:"blockquote"},"Embedded Studio4.15\u4f7f\u7528CLANG\n","[attach]","456093","[/attach]"),(0,o.kt)("p",{parentName:"blockquote"},"Embedded Studio4.15\u4f7f\u7528CLANG\u5f00Link-Time\u4f18\u5316\uff0c\u6548\u679c\u660e\u663e\uff082019-03-30\u65b0\u589e\u6d4b\u8bd5\uff09\n","[attach]","456345","[/attach]"),(0,o.kt)("p",{parentName:"blockquote"},"\u603b\u7ed3\uff0cMDK\u7684AC6\u751f\u6210\u7684\u4ee3\u7801\u6700\u5c0f\u3002")),(0,o.kt)("p",null,"\u8fd9\u4e9b\u90fd\u662f\u7eb8\u9762\u7684\u4e1c\u897f\uff0c\u4f46\u662f\u8fd8\u662f\u5e0c\u671b\u4f60\u4eec\u5728\u6298\u817e\u7684\u65f6\u5019\u80fd\u591f\u4e86\u89e3\u4e00\u4e9b\u4e1c\u897f"),(0,o.kt)("p",null,"\u4f46\u662f\u5982\u679c\u662f\u559c\u6b22\u7b97\u6cd5\u7684\u8bdd\uff0c\u771f\u6ca1\u5fc5\u8981\u4e0aAC6\uff0c\u4f60\u53ea\u9700\u8981\u4e13\u6ce8\u4e8e\u4f60\u7684\u7b97\u6cd5\u5373\u53ef\u3002"))}u.isMDXComponent=!0}}]);