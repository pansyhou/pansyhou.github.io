---
wqid: os-final-review
slug: /os-final-review
date: 2023-6-21
title: os期末复习
authors: pansyhou

---

[toc]



import HoverContent from '@site/src/components/HoverContent';

根据大纲及命题计划表，出题分配大概如下

问答题出题：**进程管理**出一道计算题，**处理机调度**与**死锁**出一道**银行家算法题**和一道**简答题**，**存储器管理**出一道计算题，**文件管理**一道题。

编程题：**pv操作**一题，**lO编程**一题

名词解释：**os概述一题**，**进程管理一题**，处理机调度与死锁一题，存储器管理一题，文件管理一题

选择题和判断题：os概述一题，进程管理2个选择2个判断，处理机调度与死锁2个选择2个判断，存储器管理1个选择1个判断，设备管理1个选择1个判断，os接口1个选择，实验内容3个选择2个判断

1. 操作系统概论
   1. OS选择题
   2. OS概述名词解释题
   3. 有一题选择或者判断
2. 进程管理
   1. 两个选择两个判断
   2. 一道计算题
   3. 一道名词解释
3. 处理机调度和死锁
   1. PV操作编程题
   2. 一道银行家算法和一道简答题
   3. 一道名词解释
   4. 两个选择和两个判断
4. 内存/存储器管理
   1. 存储器管理一道计算题、一道解释
   2. 一个选择一个判断
5. 文件管理
   1. 一道问答（？
   2. 一道名词解释
6. 设备管理
   1. 一个选择一个判断
7. 操作系统接口
   1. IO操作编程题
   2. 一个选择
   3. 实验内容3个选择2个判断



## 操作系统概述

> 简答题
>
> **1-1：什么是操作系统？它有哪些基本功能和基本特征？**
>
> **1-2：操作系统发展的动力是什么？**
>
> **1-5：为什么要引入多道程序并发执行技术？**
>
> **1-11：操作系统的结构有哪些类型？请分别阐述。**

1. 操作系统定义：**一个软件系统，它控制和管理计算机系统内各种硬件和软件资源，提供用户和计算机系统之间的接口**

   

2. 动力

   1. 不断提高计算机资源的利用率的需要
   2. 方便用户
   3. 硬件的不断更新换代
   4. 计算机体系结构的不断发展

3. 操作系统类型

   1. 批处理
      1. 单道批处理（自动性、顺序性、单道性
      2. 多道批处理（多道性、调度性、异步性、宏观上并行，微观上并行
      3. 多道批处理系统优缺点
         1. 资源利用率高
         2. 系统吞吐量大
         3. 无交互功能
         4. 平均周转时间长

4. 体系结构

   1. 模块式结构
   2. 层次结构（按照操作系统各**模块的功能和相互依存关系**，把系统中的**模块分为若干层次**）
   3. 微内核结构



## 进程管理

> 2-2：试着比较进程和程序之间的区别（7分
>
> 2-6：试着说明PCB的作用,为什么说PCB是进程存在的唯一标志（7分）
>
> 2-8：什么叫临界区,为什么进程在进入临界区之前要执行申请操作,在离开临界区要执行释放操作（7分）
>
> 2-9：试说明进程的基本状态及转换的原因（7分）
>
> 2-10：创建一个进程需要做哪些工作（7分）
>
> 2-19：在读写者问题中,如果修改问题中的同步算法,要求对写进程优化,即一旦写进程到达,后续的读者进程就必须等待看,而不管是否有读者进程在读文件,试写出相应的程序段（12分）
>
> 2-20：试利用记录型信号写出一个不会出现死锁的哲学家进餐问题算法（12分）
>
> 2-21：设公共汽车上有一位司机和一位售票员,他们的活动如下图,请分析司机与售票员之间的同步关系,并用P,V操作实现（12分）
>
> 2-17：什么是线程,试说明它与进程的主要区别（7分）
>
> 2-23： 从调度性，并发性，拥有资源，独立性，和系统开销，以及对多处理机的支持等方面对进程和线程进行比较（10分）
>
> 2-24：什么是内核支持线程和用户级线程（7分）
>
> 2-25：什么是管程（5分）

### Concepts

**管程**：一个管程定义了一个数据结构和能为并发进程执行的一组操作，这个操作能同步进程和改变进程的数据







### 2-2：试着比较进程和程序之间的区别（7分

:::tip

动态性、并发性、独立性、异步性

:::

1. 程序是**静态**的概念，而进程是一次执行过程，它是动态的概念
2. 进程是一个能独立运行的单位，能与其他进程并发执行；而程序是不能作为一个独立运行的单位而并发执行的。
3. 程序和进程无一一对应的关系
4. 各进程在并发执行的过程中会产生相互制约关系，而程序本身是静态的，不存在这种异步特征

### 2-6：试着说明PCB的作用,为什么说PCB是进程存在的唯一标志（7分）

> 使一个在多道程序环境下**不能独立运行的程序**（含数据）成为一个能够**独立运行的基本单位**，一个能够与其他进程**并发执行**的进程。

PCB是操作系统中用于描述和管理进程的数据结构，其中存储了进程的各种信息，包括进程的标识、优先级、状态、调度信息、控制信息等等。每个进程都有唯一一个PCB，是操作系统用来系统跟踪和控制的主要数据结构。



### 2-8：什么叫临界区,为什么进程在进入临界区之前要执行申请操作,在离开临界区要执行释放操作（7分）

临界资源：一次仅允许一个进程使用的资源

临界区：每个进程中访问临界资源的那段代码叫临界区，两个或以上进程不能同时使用的资源叫临界资源

为了保证多个进程或者线程能够安全地访问临界资源，在进入临界区之前要进行申请操作，以保证只有一个进程或者线程能够获取锁或者信号量，而释放是为了让其他进程或者线程获取该锁进入临界区访问

### 2-9：试说明进程的基本状态及转换的原因（7分）

1. 就绪状态
2. 执行状态
3. 阻塞状态

### 2-10：创建一个进程需要做哪些工作（7分）

1. 申请空白PCB
2. 为新进程分配资源
3. 初始化进程控制块
4. 将新建进程插入就绪队列

### 2-19：在读写者问题中,如果修改问题中的同步算法,要求对写进程优化,即一旦写进程到达,后续的读者进程就必须等待看,而不管是否有读者进程在读文件,试写出相应的程序段（12分）



```
semaphore mutex = 1
semaphore wsem = 1
int readcount = 0

# 读者进程
Process reader()
{
    while (1) {
        # 进入读入区域
        wait(mutex)
        readcount++
        if (readcount == 1) {
            wait(wsem) # 阻塞写进程
        }
        signal(mutex)

        # 读取文件
        read_file()

        # 离开读入区域
        wait(mutex)
        readcount--
        if (readcount == 0) {
            signal(wsem) # 唤醒写进程
        }
        signal(mutex)

        # 休息一段时间
        sleep()
    }
}

# 写者进程
Process writer()
{
    while (1) {
        # 进入写入区域
        wait(wsem)

        # 写入文件
        write_file()

        # 离开写入区域
        signal(wsem)

        # 休息一段时间
        sleep()
    }
}
```

### 2-20：试利用记录型信号写出一个不会出现死锁的哲学家进餐问题算法（12分）

![image-20230625155922723](https://pic.imgdb.cn/item/6497f3f11ddac507cc28db21)

### 2-21：设公共汽车上有一位司机和一位售票员,他们的活动如下图,请分析司机与售票员之间的同步关系,并用P,V操作实现（12分）

```C
void conductor()
{
	while(true)
	{
		//关门
		signal(door);//售票员给司机关门的信号
		//此阶段为售票时间
		wait(stop);//等待停车信号，一旦停车，则开门
		//开门
	}
}
void driver()
{
	while(true)
	{
		wait(door);//司机等待关门信号，一旦获取信号，则启动车辆
		//此阶段为正常行车时间
		signal(stop);//司机给售票员停车的信号
	}
}
```

### 编程题汇总

![06752205ed55c25c95fbd92249a41df](https://pic.imgdb.cn/item/649823f21ddac507cc749df1)

![af5a1e304c5127ca52a58165dab4526](https://pic.imgdb.cn/item/649823ff1ddac507cc74ae38)

![600fff9355b86da361b20883f529f09](https://pic.imgdb.cn/item/649824071ddac507cc74bb3d)

## 处理机调度与死锁

1. 处理机调度层次

   1. 低级调度：进程调度/短程调度，按照算法决定就绪队列哪个进程获得处理机
   2. 中级调度：内存调度，把外存的就绪队列重新调入内存，将状态改为就绪
   3. 高级调度：作业调度/长程调度，

2. 进程调度的时机

   1. 完成任务
   2. 等待资源
   3. 运行时间到
   4. 进入睡眠状态
   5. 发现标志
   6. 优先级变化

3. 处理机调度性能评价指标
   1. 资源利用率
   2. 公平性
   3. 平衡性
   4. 策略强制执行

4. 处理机调度算法

   <img src="https://pic.imgdb.cn/item/64982aa51ddac507cc7eb191" alt="eeeaa640be77149dd8222250d14c58c" />

   

   1. 适合批处理系统的
      1. FCFS先来先服务

      2. 短作业优先

      3. HRF响应比最高者优先：响应比 R=$1+\frac{已等待时间}{要求服务时间}$在后背队列选一个R值高的执行

         :::tips

         平均周转时间=从提交到完成的时间

         带权就除以需要运行的时间

         :::

   2. 适合分时系统的

      1. 非抢占调度方式

         一旦把处理机分配给进程后，就一直运行下去，不会因为任何原因抢占当前正在运行进程的处理机，直到进程完成或发生某事件被阻塞

      2. 抢占调度方式

      3. 时间轮流片RR：系统根据先来先服务策略将所有的就绪进程排成就绪队列，就绪队列上的每个进程每次仅允许一个时间片

      4. 优先权调度算法HPF

         1. 非抢占式优先级调度算法
         2. 抢占式优先级调度算法：把处理机分配给优先级最高的进程执行，但执行期间若出现 另一个优先级更高的进程，调度程序就将处理机分配给新的优先级最高的进程。

      5. 多级反馈队列调度算法  MFQ

         1. 设置多个就绪队列：第一队列优先级最高，第二队列次之...

            优先级越高的队列分配的时间片越小，第二队列时间片是第一队列的长一倍，以此类推。

         2. 每个队列采用先来先服务算法，当新进程进入内存后，先放到第一队列末尾，轮到该进程执行时，如果能够在该时间片内完成则撤离系统，不能完成就转入第二队列末尾等待调度，以此类推。

         3. 按队列优先级调度，调度程序首先调度最高优先级的队列中的所有进程运行，才会调度下一队列中的进程运行。

   3. 实时调度

      1. 优先级倒置（反转吧？

         高优先级的被低优先级的堵塞了

      2. 解决方案：优先级继承，优先级低的进程继承优先级高的，直到退出临界区

5. 死锁

   1. 概念：多个进程循环等待其他进程抢占的资源，因而无限期僵持下去的情况。

   2. 死锁的必要条件

      1. **互斥**条件
      2. **请求和保持**条件
      3. **不可抢占**条件
      4. **循环等待**条件

   3. 处理方法

      1. 预防死锁

         采取某种策略，限制并发进程对其资源的请求，让条件不满足

      2. 避免死锁

         通过某种方法防止系统进入不安全状态、

      3. 检测死锁

         运行过程中通过检测机构检测出死锁发生，然后及时地去解放进程

      4. 解除死锁



### 银行家算法

[跳转一下](processor-scheduling)



## 存储器管理
