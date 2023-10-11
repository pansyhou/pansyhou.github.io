---
id: arm-driver-dev3
slug: /arm-driver-dev3
title: ARM-Linux驱动开发3
authors: pansyhou
---

## 非阻塞IO

当用

```c
fd = open("/dev/xxx_dev", O_RDWR | O_NONBLOCK);
```

才是非阻塞地去打开文件

### 等待队列

Linux 内核提供了等待队列(wait queue)来实现阻塞进程的唤醒工作

使用需要创建初始化**等待队列头**`wait_queue_head_t`

在文件 include/linux/wait.h

#### 初始化

```c
void init_waitqueue_head(wait_queue_head_t *q)
```

也可以使用宏DECLARE_WAIT_QUEUE_HEAD来一次性完成等待队列头的定义的初始

#### 等待队列项

当设备不可用的时候就要将进程对应的等待队列项添加到等待队列里面

`wait_queue_t`来表示等待队列项

```c
struct __wait_queue {
	unsigned int		flags;
	void			*private;
	wait_queue_func_t	func;
	struct list_head	task_list;
};
typedef struct __wait_queue wait_queue_t;
```

使用宏 DECLARE_WAITQUEUE 定义并初始化一个等待队列项，宏的内容如下：

```c
DECLARE_WAITQUEUE(name, tsk)
```

name 就是等待队列项的名字，tsk 表示这个等待队列项属于哪个任务(进程)，一般设置为current ，在 Linux 内 核 中 current 相 当 于 一 个 全 局 变 量 ， 表 示 当 前 进 程 。 因此宏DECLARE_WAITQUEUE 就是给当前正在运行的进程创建并初始化了一个等待队列项。

#### 将队列项添加/移除等待队列头

需要将进程对应的 `等待队列项` 添加到前面创建的 `等待队列头 `中

```c
void add_wait_queue(wait_queue_head_t *q, wait_queue_t *wait)
```

1. 等待队列项要加入的头
2. 队列项



```c
void remove_wait_queue(wait_queue_head_t *q,wait_queue_t *wait)
```

#### 等待唤醒

当设备可以使用的时候就要`唤醒`进入休眠态的进程，唤醒可以使用如下两个函数

```c
void wake_up(wait_queue_head_t *q)
void wake_up_interruptible(wait_queue_head_t *q)
```

这两个函数会将这个等待队列头中的所有进程都唤醒

> wake_up函数可以唤醒处于`TASK_INTERRUPTIBLE` 和 `TASK_UNINTERRUPTIBLE`状态的进程
>
> 而 wake_up_interruptible 函数只能唤醒处于 `TASK_INTERRUPTIBLE`状态的进程。

#### 等待事件

除了主动唤醒以外，也可以`设置`等待队列等待某个事件，当这个事件满足以后就自动唤醒等待队列中的进程
