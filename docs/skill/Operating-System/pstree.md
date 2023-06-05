---
id: diy-pstree
slug: /diy-pstree
date : 2023-5-12
title: 做一个打印进程树 (pstree)
authors: pansyhou

---

https://jyywiki.cn/OS/2023/labs/M1

https://wiki.archlinux.org/title/Procfs

http://www.liaojl.com/blog/procfs/

## 自己动手做一个pstree（类似于任务管理器）

小目标，先能正常打印pid等信息

1. 正确理解与运用/prof的信息，并打印出来

   - but，尽管procfs 里的信息足够让你写一个非常不错的任务管理器。那么，“真正”  的任务管理器，例如 ps 命令，是否也是基于 procfs 实现的呢？这就是一个典型的  “好问题”：他帮助你建立你的实验作业和真实系统之间的联系。操作系统课程也给了大家足够的工具，使得同学们可以把任务管理器打开，查看它调用的操作系统 API。我们在课堂上已经演示过 gcc 和 xedit 的例子，就用 strace 工具就能查看进程运行时的系统调用序列：

     ```
     $ strace ps
     ...
     openat(AT_FDCWD, "/proc/1/stat", O_RDONLY)           = 6
     read(6, "1 (systemd) S 0 1 1 0 -1 4194560"..., 1024) = 190
     close(6)                                             = 0
     ...
     ```

2. 建树和打印

3. 读取命令行参数args

4. 尝试去写更厉害的任务管理器（读取其他info）



## 路程

> 想获取全部的pid之后，用/prof/[pid] 列表来遍历所有的数字文件夹

但是好像并没有这种系统调用，问过chatgpt似乎没有。

所以还是走回传统的方法，遍历所有的数字文件夹吧。

> 之后应该就好办了，读取里面的status有pid和父pid，之后应该是建树的问题
>
> 建树的话，我想的是维护一个链表，

