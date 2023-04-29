---
id: ros_control
slug: /ros_control
title: ros_control
---

![ros control](http://wiki.ros.org/ros_control?action=AttachFile&do=get&target=gazebo_ros_control.png)

老生常谈的一张框架图了，

## Controller和HW交流

> - [joint_state_controller](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/joint_state_controller/include/joint_state_controller) - 将注册到 hardware_interface：[：JointStateInterface](http://wiki.ros.org/JointStateInterface) 的所有资源的状态发布到类型[为 sensor_msgs/JointState](http://docs.ros.org/melodic/api/sensor_msgs/html/msg/JointState.html) 的主题。
>   - joint_state_controller
> - [position_controllers](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/position_controllers/include/position_controllers) - 命令[硬件接口](http://wiki.ros.org/HardwareInterface)的所需位置。
>   - joint_position_controller - 接收位置输入并发送位置输出，只需将输入与[forward_command_controller](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/forward_command_controller)一起传输即可。
>   - joint_group_position_controller - 一次设置多个关节位置。
> - [velocity_controllers](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/velocity_controllers/include/velocity_controllers) - 向[硬件接口](http://wiki.ros.org/HardwareInterface)命令所需的速度。
>   - joint_position_controller - 使用 PID 控制器接收位置输入并发送速度输出。
>   - joint_velocity_controller - 接收速度输入并发送速度输出，只需将输入与[forward_command_controller](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/forward_command_controller)一起传输即可。
>   - joint_group_velocity_controller - 一次设置多个关节速度。
> - [effort_controllers](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/effort_controllers/include/effort_controllers) - 命令所需的力（力/扭矩）到硬件接口。
>   - joint_position_controller - 使用 PID 控制器接收位置输入并发送努力输出。
>   - joint_group_position_controller - 一次设置多个关节位置。
>   - joint_velocity_controller - 使用 PID 控制器接收速度输入并发送努力输出。
>   - joint_effort_controller - 接收工作量输入并发送工作量输出，只需使用[forward_command_controller](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/forward_command_controller)传输输入。
>   - joint_group_effort_controller - 同时设置多个共同努力。
> - [joint_trajectory_controllers](https://github.com/ros-controls/ros_controllers/tree/melodic-devel/joint_trajectory_controller) - 用于样板整个轨迹的额外功能。查看[源文件](https://github.com/ros-controls/ros_controllers/blob/melodic-devel/joint_trajectory_controller/src/joint_trajectory_controller.cpp)，了解joint_trajectory_controller如何与position_controller、velocity_controller等一起命名。
>   - position_controller
>   - velocity_controller
>   - effort_controller
>   - position_velocity_controller
>   - position_velocity_acceleration_controller

上述为controller list，需要利用他们与HW交流，下面是硬件的接口

> ROS控制将硬件接口与上述ROS控制器之一结合使用，以向硬件发送和接收命令。
>
> - [联合命令接口](http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1JointCommandInterface.html) - 支持指挥关节阵列的硬件接口。请注意，这些命令可以具有任何语义含义，只要它们每个命令都可以由单个双精度表示，它们不一定是 effort 命令。若要指定此命令的含义，请参阅派生类：
>
>   - [努力联合接口](http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1EffortJointInterface.html) - 用于指挥基于努力的关节。
>   - [速度关节接口](http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1VelocityJointInterface.html) - 用于指挥基于速度的关节。
>   - [位置关节接口](http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1PositionJointInterface.html) - 用于指挥基于位置的关节。
>
> - [关节状态接口](http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1JointStateInterface.html) - 支持读取命名关节数组状态的硬件接口，每个命名关节都有一定的位置、速度和力（力或扭矩）。
>
> - [执行器状态接口](http://docs.ros.org/melodic/api/hardware_interface/html/c++/classhardware__interface_1_1ActuatorStateInterface.html) - 支持读取命名执行器数组状态的硬件接口，每个执行器都有一定的位置、速度和力（力或扭矩）。
>
> - 执行器命令接口
>
>   
>
>   - 努力执行器接口
>   - 速度执行器接口
>   - 位置执行器接口
>
> - [PosVelJointInterface](http://wiki.ros.org/PosVelJointInterface)
>
> - [PosVelAccJointInterface](http://wiki.ros.org/PosVelAccJointInterface)
>
> - 力-扭矩传感器接口
>
> - IMU 传感器接口

---

## WSL2连接串口完成Robot类，实现read，write

一上来我就蒙了，怎么 `<termios.h> `这哥们include不上的？

这么说是*POSIX*终端控制wsl是没了？

搞了很久，如同傻子般，其实自己之前就搞过usbip这个鬼东西了，就卡在没给串口权限了QAQ。

在wsl2要实现串口，可以用USBIPD-WIN



[连接 USB 设备 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/connect-usb)

[(234条消息) WSL2下的usb串口设备使用_MagicKingC的博客-CSDN博客_wsl2 串口](https://blog.csdn.net/qq_28695769/article/details/125202748)

WSL2不能直接用串口，需要USBIPD-WIN 项目为 WSL 2 提供 USB 设备支持。

**在windows里**，下载usbipd [Releases · dorssel/usbipd-win (github.com)](https://github.com/dorssel/usbipd-win/releases)

WSL2里，下载工具包 

```shell
sudo apt install linux-tools-5.4.0-77-generic hwdata
sudo update-alternatives --install /usr/local/bin/usbip usbip /usr/lib/linux-tools/5.4.0-77-generic/usbip 20
```

### 设备连接

#### windows

在powershell里操作，列出所有设备

```shell
usbipd wsl list
```

```shell
usbipd wsl attach --busid 设备的busid号
```

#### WSL2

```shell
lsusb
```

查看串口设备有没有被列出



#### 给串口权限

```shell
sudo chmod a+rw /dev/ttyUSB0
```

完成

在usbipd wsl attach --busid 这个后面加上这个，能自动attach

```
--auto-attach
```



