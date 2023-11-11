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

1. wait_event(wq, condition)

   > 等待以 wq 为等待队列头的等待队列被唤醒，前提是 condition 条件必须满足(为真)，否则一直阻塞，此函数会将进程设置为TASK_UNINTERRUPTIBLE 状态

2. wait_event_timeout(wq, condition, timeout)

   > 功能和 wait_event 类似，但是此函数可以添加**超时时间**，以 jiffies 为单位。
   >
   > **此函数有返回值**，如果返回 0 的话表示超时时间到，而且 condition 为假。为 1 的话表示 condition 为真，也就是条件满足了

3. wait_event_interruptible(wq, condition)

   > 与 wait_event 函数类似，但是此函数将进程设置为 TASK_INTERRUPTIBLE，就是**可以被信号打断**。

4. wait_event_interruptible_timeout(wq, condition, timeout)



### 轮询

设备驱动程序提供非阻塞的处理方式， 也就是轮询

poll、epoll 和 select 可以用于处理轮询，应用程序通过 select、epoll 或 poll 函数来查询设备是否可以操作，如果可以操作的话就从设备读取或者向设备写入数据。

当应用程序调用 select、epoll 或 poll 函数的时候设备驱动程序中的 poll 函数就会执行，因此需要在设备驱动程序中编写 poll 函数



#### **select**

```c
int select(  int nfds, 
			fd_set *readfds, 
			fd_set *writefds, 
			fd_set *exceptfds, 
			struct timeval  *timeout)
```

1. nfds：所要监视的 这三类文件描述集合中，最大文件描述符加1

   > 意义何在？

2. readfds、writefds 和 exceptfds：这三个指针指向描述符集合，这三个参数指明了**关心哪些描述符、需要满足哪些条件**等等，这三个参数都是 fd_set 类型的，fd_set 类型变量的每一个都代表了一个文件描述符

   1. `readfds `用于监视指定描述符集的**读变化**

      > 也就是监视这些文件是否可以读取，只要这些集合里面有一个文件可以读取那么seclect就会返回一个大于 0 的值表示文件可以读取
      >
      > 如果没有文件可以读取，那么就会根据 timeout 参数来判断是否超时。可以将 readfs设置为 NULL，表示不关心任何文件的读变化

   2. `writefds 和 readfs `类似，只是 writefs 用于监视这些文件是否可以进行写操作。exceptfds 用于监视这些文件的异常

3. `timeout`：调用  select 函数等待某些文件描述符可以设置超时时间，用结构体`timeval`表示

   ```c
   struct timeval {
   	__kernel_time_t		tv_sec;		/* seconds */
   	__kernel_suseconds_t	tv_usec;	/* microseconds */
   };
   ```

   当  timeout 为 NULL 的时候就表示无限期的等待。



定义一个fd_set变量，传给readfds

有几个宏进行操作：

> 这他妈是宏是吧？
>
> ![image-20231014152907543](https://pic.imgdb.cn/item/652a434bc458853aefea910c)

:::tips

```c
void FD_ZERO(fd_set *set)
void FD_SET(int fd, fd_set *set)//将fd_set变量的某个位置1,fd是文件描述符
void FD_CLR(int fd, fd_set *set) 
int  FD_ISSET(int fd, fd_set *set)//测试一个文件是否属于某个集合，参数  fd 就是要判断的文件描述符
```

:::

select函数示例，但是没有实现select函数

![image-20231014155008528](https://pic.imgdb.cn/item/652a4831c458853aeffb4cb5)

#### **poll函数**

在单个线程中，select 函数能够监视的文件描述符数量**有最大的限制**，一般为 1024，可以修改内核将监视的文件描述符数量改大，但是这样会降低效率！

这个时候就可以使用 poll 函数，poll 函数本质上和 select 没有太大的差别，但是 poll 函数没有最大文件描述符限制，Linux 应用程序中 poll 函数原型如下所示：

```c
int poll(struct pollfd *fds, 
		nfds_t nfds, 
		int timeout)
```

1. `fds`要监视的文件描述符机会以及要监视的事件

   ```c
   struct pollfd {
   	int fd;
   	short events;//请求的事件
   	short revents;//返回的事件
   };
   ```

   原型如下，event是要监视的事件，可监事的类型如下

   ```
   POLLIN 有数据可以读取
   POLLPRI 有紧急的数据需要读取
   POLLOUT 可以写数据。
   POLLERR 指定的文件描述符发生错误。
   POLLHUP 指定的文件描述符挂起。
   POLLNVAL 无效的请求。
   POLLRDNORM 等同于POLLIN
   ```

   估计也是要自己实现了

2. `nfds`：要监视的fd数量

3. `timeout`单位为Ms



#### **epoll**

传统的 selcet 和 poll 函数都会随着所监听的 fd 数量的增加，出现效率低下的问题，而且poll 函数每次必须遍历所有的描述符来检查就绪的描述符，这个过程很浪费时间。为此，epoll 应运而生，epoll 就是为处理大并发而准备的，一般常常在网络编程中使用 epoll 函数。

应用程序需要先使用 epoll_create 函数创建一个 epoll 句柄，epoll_create 函数原型如下

```c
int epoll_create(int size)
```

1. `size`：从Linux2.6.8开始参数无意义了，大于0就好
2. 返回epoll句柄，-1为失败

创建之后用`epoll_ctl`像其中加入要监视的文件的fd和事件



```c
int epoll_ctl(int epfd,
			int op,
			int fd,
			struct epoll_event *event)
```

1. `epfd`：句柄

2. 要对句柄进行的操作。可以为：

   1. EPOLL_CTL_ADD       向 epfd 添加文件参数 fd 表示的描述符。
   2. EPOLL_CTL_MOD      修改参数 fd 的 event 事件。
   3. EPOLL_CTL_DEL        从  epfd 中删除 fd 描述符。

3. `fd`：要监视的文件描述符

4. `event`事件类型

   ```
   EPOLLIN 有数据可以读取
   EPOLLOUT 可以写数据
   EPOLLPRI 有紧急的数据需要读取
   EPOLLERR 指定的文件描述符发生错误。
   EPOLLHUP 指定的文件描述符挂起。
   EPOLLET 设置epoll为边沿触发，默认触发模式为水平触发。
   EPOLLONESHOT 一次性的监视，当监视完成以后还需要再次监视某个 fd，那么就需要将fd重新添加到 epoll 里面。
   ```

   一切都设置好以后应用程序就可以通过   epoll_wait 函数来等待事件的发生，类似   select 函数

```c
int epoll_wait(int epfd,
                struct epoll_event *events,
				int maxevents,
				int timeout)
```

1. `events`：事件数组。当有事件发生的时候  Linux 内核会填写 events，调用者可以根据  events 判断发生了哪些事件
2. `maxevents`：events 数组大小，必须大于  0。
3. 返回-1为超时，其他的为准备就绪的文件描述符数量

epoll 更多的是用在大规模的并发服务器上，因为在这种场合下 select 和 poll 并不适合。当设计到的文件描述符(fd)比较少的时候就适合用 selcet 和 poll，本章我们就使用 sellect 和 poll 这两个函数。
