# 实验零：调查ros的社区应用现状

## 实验内容

简述ros是什么，如今的应用现状怎么样？生态系统又如何？

## 实验要求

撰写约100字+即可（字数少==不需要GPT，查到什么就理解，感性简述即可）



# 实验一：安装运行环境

## Linux

本实验基于ros-noetic，推荐ubuntu20.04（webots为R2023b）

校园网ipv6（较快）：https://mirrors6.tuna.tsinghua.edu.cn/ubuntu-releases/focal/ubuntu-20.04.6-desktop-amd64.iso

非ipv6：https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/focal/ubuntu-20.04.6-desktop-amd64.iso



vm安装即可



## 安装ros

[小鱼的一键安装系列 | 鱼香ROS (fishros.org.cn)](https://fishros.org.cn/forum/topic/20/小鱼的一键安装系列?lang=zh-CN)

也可以用命令

```shell
wget http://fishros.com/install -O fishros && . fishros
```

![](https://pic.imgdb.cn/item/659bf037871b83018a4945bf.jpg)

![](https://pic.imgdb.cn/item/659bf080871b83018a4ac896.jpg)

记得换源，不然下载大半天

==记得选noetic桌面版==



新建终端，输入roscore试试看

![](https://pic.imgdb.cn/item/659bf1ec871b83018a519487.jpg)

安装好力

## 实验要求

在自己电脑/机房安装好并在终端运行==roscore==



# 实验二：运行小海龟并使用键盘控制

## 实验内容

运行roscore，启动turtlesim仿真器，并运行turtle_teleop_key启动键盘控制节点

## 实验要求

通过运行core+两个节点，实现对小海龟的控制，绘制出你喜欢的图形并截图



# 实验三：pubulisher控制小海龟画圆

## 实验内容

编写若干ros节点，使得小乌龟画一个正方形

## 实验要求

编写Pubulisher发布者控制小海龟



# 实验四：使用pubulish和subscribe控制小海龟做图

## 实验内容

编写若干ros节点，使得小乌龟画一个五边形（边长可自定义）

## 实验要求

在终端实时打印，得知龟龟画五边形的pose

![](https://pic.imgdb.cn/item/65a0ffd2871b83018a008316.jpg)



# 实验五：使用Client重新生成小海龟，并控制小海龟做图



![](https://pic.imgdb.cn/item/65a01d52871b83018ae8e3cc.jpg)

### 实验内容

编写节点控制小乌龟运动走出M,要求从原点经过以下坐标点: (坐标误差允许范围:0.02)

{2.0,2.0},{4.0,0.0},{6.0,2.0},{8.0,0.0}

### 实验要求

编写**节点**完成话题的**发布接收**，小乌龟画图图形，使用==spawn、kill的srv来生成、删除==小乌龟

**进阶要求**: 体现**闭环控制**思想，又快又准地画出图形

> ### 提示
>
> - 通过订阅小乌龟的位姿话题(/turtle1/pose)来判断其是否到达指定位置。
> - 当小乌龟的速度(/turtle1/cmd_vel)很大时会发生什么? 故此为何要闭环控制.





# 实验六：自定义话题消息

## 实验内容

自定义消息实现定时发布与订阅，下面为msg包格式

```
string name
uint32 class_time
```

发布者定时发布name和class_time信息，循环自增

订阅者通过回调函数打印发布出来的信息	

## 实验要求

实现如下效果：

![](https://pic.imgdb.cn/item/65a0af26871b83018a0120a5.jpg)



# 期末大作业

仿真/实体二选一



## 仿真Version

==通过ros控制仿真世界里的机器人，能动即可==（不可以使用默认的controller直接通过webots控制台控制）

仅供参考的方案：

### 法一：通过controller 为ros的控制

[cyberbotics/webots_ros: Webots ROS package (github.com)](https://github.com/cyberbotics/webots_ros)

将此文件夹git clone到你之前的workspace/src中，编译后即能使用。

git慢咋么办？自行搜索，比如：[全面加速 GitHub，git clone 太慢的 9 种解决办法-腾讯云开发者社区-腾讯云 (tencent.com)](https://cloud.tencent.com/developer/article/1835785)

![](https://pic.imgdb.cn/item/65a13a93871b83018ae8e48f.jpg)

可选择一个launch后仿真使用，会启动webots



> 提示：该方法中，机器人controller记得选择为ros
>
> ![](https://pic.imgdb.cn/item/65a13b0b871b83018aeb6105.jpg)





### 法二：重写controller接收ros topic控制

该方法可以选择webots guided tour中的模型，选择较多

![](https://pic.imgdb.cn/item/65a13b3c871b83018aec66a8.jpg)

如果找不到这个页面，2023版的在Help->Webots Guided Tour

之后新建一个controller

![](https://pic.imgdb.cn/item/65a13c13871b83018af0a804.jpg)

可能会弹出让你copy一份旧的，直接copy即可



通过编写controller接收ros topic，给Robot实例设定速度参数即可实现移动

## 实体Version

### 思路

1. 阅读实验指导书，理解小车底盘控制原理
2. 阅读fox_base源代码，创建功能包，编写自定义消息的pubulisher完成底盘控制，要求==向左==或==向右==平移，同时subscribe小车speed&电压，以ROS INFO 5HZ打印出来



### 所需知识点

1. 功能包创建
2. pubulisher和subscriber编程实现
3. 自定义话题的定义和使用
4. 麦克纳姆轮运动学
