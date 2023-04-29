---
id: wsl2_ros
slug: /wsl2_ros
title: WSL2下的ROS学习记录
date: 2023-03-11
---

## 安装

http://wiki.ros.org/cn/ROS/Tutorials



> 之前出现过安装rosdep还是哪个？
>
> 把我依赖给删掉了
>
> ```
> sudo apt install ros-noetic-desktop-full
> ```
>
> 然后全部重装





### 莫名其妙遇到的roscd不到软件包问题

> ```
> . ~/catkin_ws/devel/setup.bash
> ```
>
> 需要重新将这个工作空间添加到ROS环境中，source一下生成的配置文件



## 创建ROS消息和服务

### msg和srv

- [msg](http://wiki.ros.org/msg)（消息）：msg文件就是文本文件，用于描述ROS消息的字段。它们用于**为不同编程语言编写的消息生成源代码**。
- [srv](http://wiki.ros.org/srv)（服务）：一个srv文件描述一个服务。它由两部分组成：**请求（request）和响应（response）**。



#### 创建msg

```shell
mkdir msg
echo "int64 num" > msg/Num.msg
```

![](https://pic.imgdb.cn/item/640c97b5f144a01007b17ab9.jpg)

此时的文件目录有这些 

不过还有关键的一步：我们要确保msg文件能被转换为C++、Python和其他语言的源代码。

打开`package.xml`, 确保它包含以下两行且没有被[注释](http://www.htmlhelp.com/reference/wilbur/misc/comment.html)。如果没有，添加进去：

```
  <build_depend>message_generation</build_depend>
  <exec_depend>message_runtime</exec_depend>
```

![](https://pic.imgdb.cn/item/640c984ff144a01007b2f693.jpg)

确实是被注释掉了

在构建时，其实只需要`message_generation`，而在运行时，我们只需要`message_runtime`。

在`CMakeLists.txt`文件中，为已经存在里面的`find_package`调用添加`message_generation`依赖项，这样就能生成消息了。直接将`message_generation`添加到`COMPONENTS`列表中即可，如下所示：

```
# 不要直接复制这一大段，只需将message_generation加在括号闭合前即可
find_package(catkin REQUIRED COMPONENTS
   roscpp
   rospy
   std_msgs
   message_generation
)
```

还要确保导出消息的运行时依赖关系：

```
catkin_package(
  ...
  CATKIN_DEPENDS message_runtime ...
  ...)
```



找到如下代码块：

```
# add_message_files(
#   FILES
#   Message1.msg
#   Message2.msg
# )
```



删除`#`符号来取消注释，然后将`Message*.msg`替换为你的.msg文件名，就像下边这样：



```
add_message_files(
  FILES
  Num.msg
)
```



手动添加.msg文件后，我们要确保CMake知道何时需要重新配置项目。





现在必须确保`generate_messages()`函数被调用：

取消下面几行的注释：

```
generate_messages(
  DEPENDENCIES
  std_msgs
)
```

### 使用rosmsg

以上就是创建消息的所有步骤。让我们通过`rosmsg show`命令看看ROS能否识别它。

用法：



```
$ rosmsg show [message type]
```



示例：

$ rosmsg show beginner_tutorials/Num



你会看到：

```
int64 num
string first_name
string last_name
uint8 age
uint32 score
```

## 使用srv

### 创建srv

```
$ roscd beginner_tutorials
$ mkdir srv
```

我们将从另一个包复制现有的srv定义，而不是手动创建新的srv。`roscp`是一个实用的命令行工具，用于将文件从一个包复制到另一个包。

用法：

```
$ roscp [package_name] [file_to_copy_path] [copy_path]
```

现在我们可以从[rospy_tutorials](http://wiki.ros.org/rospy_tutorials)包中复制一个服务：

```
$ roscp rospy_tutorials AddTwoInts.srv srv/AddTwoInts.srv
```

### 使用rossrv

以上就是创建服务的所有步骤。让我们通过`rossrv show`命令看看ROS能否识别它。

用法

```
$ rossrv show <service type>
```



示例：

```
$ rossrv show beginner_tutorials/AddTwoInts
```



你会看到：

```
int64 a
int64 b
---
int64 sum
```



总结一下到目前为止我们接触过的一些命令：

- rospack = ros+pack(age) : provides information related to ROS packages
- roscd = ros+cd : **c**hanges **d**irectory to a ROS package or stack
- rosls = ros+ls : **l**ist**s** files in a ROS package
- roscp = ros+cp : **c**o**p**ies files from/to a ROS package
- rosmsg = ros+msg : provides information related to ROS message definitions
- rossrv = ros+srv : provides information related to ROS service definitions
- catkin_make : makes (compiles) a ROS package
- rosmake = ros+make : makes (compiles) a ROS package (if you're not using a catkin workspace)



### 创建个发布者节点

```
#include "ros/ros.h"
```

`ros/ros.h`是一个很便利的`include`，它包括了使用ROS系统中最常见的**公共部分所需的全部头文件。**





## 省略建立listener talker等等

大概就是复制粘贴之后，把

```cmake
add_executable(talker src/talker.cpp)
target_link_libraries(talker ${catkin_LIBRARIES})
add_dependencies(talker beginner_tutorials_generate_messages_cpp)

add_executable(listener src/listener.cpp)
target_link_libraries(listener ${catkin_LIBRARIES})
add_dependencies(listener beginner_tutorials_generate_messages_cpp)

add_executable(add_two_ints_server src/add_two_ints_server.cpp)
target_link_libraries(add_two_ints_server ${catkin_LIBRARIES})
add_dependencies(add_two_ints_server beginner_tutorials_gencpp)

add_executable(add_two_ints_client src/add_two_ints_client.cpp)
target_link_libraries(add_two_ints_client ${catkin_LIBRARIES})
add_dependencies(add_two_ints_client beginner_tutorials_gencpp)
```

加进去



然后catkin_make之后source 一下就行



```
rosrun beginner_tutorials add_two_ints_server #运行服务
rosrun beginner_tutorials add_two_ints_client 1 3 #运行客户端并带上参数
```



## URDF

![](https://pic.imgdb.cn/item/640d713bf144a01007e7fd44.jpg)

只在visual标签下 mesh 我们的文件名

而collision里也可以加上模型，但是要计算碰撞模型时计算量有点大，所以只用了个圆柱体来模拟碰撞



![](https://pic.imgdb.cn/item/640d7342f144a01007ee00eb.jpg)





![](https://pic.imgdb.cn/item/640d754df144a01007f1af85.jpg)





## xacro模型文件

![](https://pic.imgdb.cn/item/640d75d0f144a01007f2a556.jpg)

![](https://pic.imgdb.cn/item/640d761bf144a01007f32792.jpg)

![](https://pic.imgdb.cn/item/640d7728f144a01007f50bf4.jpg)

![](https://pic.imgdb.cn/item/640d775ef144a01007f56d70.jpg)

![](https://pic.imgdb.cn/item/640d77e1f144a01007f6532a.jpg)







### Rviz

> ```
> rosrun tf static_transform_publisher 0.0 0.0 0.0 0.0 0.0 0.0 map xxx 100 
> ```
>
> 坐标系问题





由于wsl2 Ubuntu20版本的Rviz加载不出来模型，有网友说18可以，实际测试22的ROS1 需要编译源码才能用，所以直接使用18版本，rqt和rviz基本上没有问题，除了上述的坐标系炸了、joint_state需要apt下载。





## MoveIt！

![](https://pic.imgdb.cn/item/641031aaebf10e5d530010ae.jpg)

![](https://pic.imgdb.cn/item/641031aaebf10e5d530010ae.jpg)

## ROS Control

![](https://pic.imgdb.cn/item/64109b3debf10e5d53c2a5b9.jpg)

![](https://pic.imgdb.cn/item/64109bc1ebf10e5d53c38024.jpg)

### 完善模型

![](https://pic.imgdb.cn/item/64115ff1ebf10e5d53ce02b3.jpg)

mass小的原因是怕gazebo飞了，跑不动

![](https://pic.imgdb.cn/item/64116024ebf10e5d53ce6ca4.jpg)

transmission传动

mechanicalReduction 减速比

![](https://pic.imgdb.cn/item/64116175ebf10e5d53d154c9.jpg)

 



这个框图要注意 

![](https://pic.imgdb.cn/item/6411db88ebf10e5d53ecd466.jpg)

![](https://pic.imgdb.cn/item/6411dc3bebf10e5d53ee7b12.jpg)

![](https://pic.imgdb.cn/item/6411dc86ebf10e5d53ef229f.jpg)

![](https://pic.imgdb.cn/item/6411dd27ebf10e5d53f0943c.jpg)

### 出现的问题

> [ERROR] [1679406158.191718416, 860.079000000]: Unable to identify any set of controllers that can actuate the specified joints: [ joint_1 joint_2 joint_3 joint_4 joint_5 joint_6 ]
> [ERROR] [1679406158.191764407, 860.079000000]: Known controllers and their joints:
>
> [ERROR] [1679406158.191793010, 860.079000000]: Apparently trajectory initialization failed



how to solve?

> 





![image](https://cdn.staticaly.com/gh/pansyhou/ImgBed@main/BlogImg/image.1t5x678pyvb4.webp)