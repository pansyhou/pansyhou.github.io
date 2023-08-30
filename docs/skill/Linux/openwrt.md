---
id: openwrtnote1
slug: /openwrtnote1
title: openwrt学习笔记
authors: pansyhou
---

为什么会想到学习op?

看到正点原子的板子资源还是很ok的，估摸着两者（op和uboot+linux）必打交道，果不其然

[目录 《路由器就是开发板》](https://blog.csdn.net/aggresss/article/details/52753098)

强推

## Uboot

aggresss博主的这个模型觉得挺好的，晚点我再自己做一个总结，好像几年过去了初始化过程都是一样的（能用就行）

![image-20230822183537812](https://pic.imgdb.cn/item/64e48f80661c6c8e54c64e30)

基本上到了后面都是命令的实现了，和nemu感觉有着异曲同工之处



> 在U-Boot的标准版本里在第一次编译时需要向Makefile文件提交六个参数，这些参数一级一级的锁定了U-Boot的配置，这六个参数按上下级顺序为  ARCH-->CPU-->SOC-->Board-->Vender-->Boardname。在分析U-Boot的编译原理和工作原理时，用这种层次来组织分析的思路很有用。
> ————————————————
> 版权声明：本文为CSDN博主「aggresss」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
> 原文链接：https://blog.csdn.net/aggresss/article/details/52614234
