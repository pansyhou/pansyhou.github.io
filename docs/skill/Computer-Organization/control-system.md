---
id: control-system
slug: /control-system
date: 2023-6-4
title: 控制系统
authors: pansyhou
---

## 控制器组成

### 时序概念

**指令周期**：一个或多个机器周期

**机器周期（CPU周期）**：访问一次主存取指 或 取数据的时间；数据总线上一种数据

**节拍脉冲（机器主频、时钟脉冲）**

![image-20230604204628488](https://pic.imgdb.cn/item/647c87aa1ddac507cc32ca92)

### 关于ADD和JMP跳转指令的状态图

![image-20230604210143883](https://pic.imgdb.cn/item/647c8b3a1ddac507cc378a5e)

确实，电脑都是由一个个状态切换到另一个状态的

先看ADD

1. 译码阶段
   1. PC将他的数据流向AR地址寄存器，自己+1
   2. 此时，ADD指令码流向IR指令寄存器，译码
2. 输入操作数
   1. DA1先流
   2. DA2由