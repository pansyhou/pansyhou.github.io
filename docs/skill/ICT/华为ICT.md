![image-20231127220104900](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231127220104900.png)

![image-20231127220701248](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231127220701248.png)

![image-20231127220718676](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231127220718676.png)



![image-20231127221157525](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231127221157525.png)

![image-20231127221259278](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231127221259278.png)

### 零比特插入技术：

标志字段为01111110，发送方检测到信息字段有5个1的时候在后面加0，然后接收方要是发现5个1 ，后面的0自动删除，就能恢复原来的数据流

![image-20231127221725263](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231127221725263.png)

### TCP

![image-20231128101800506](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231128101800506.png)

### VPR CII

```
dir
quit
display interface brief
display startup
save xxx.cfg
reset saved-configuration//清空所有配置

```

![image-20231128170449243](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231128170449243.png)

单播前24bit肯定是IEEE分配的地址，且第八位为0，组播第八位为1

 ![image-20231128221604428](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231128221604428.png)

![image-20231128222803152](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231128222803152.png)

![image-20231129092722807](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129092722807.png)

![image-20231129093627118](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129093627118.png)

![image-20231129100418007](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129100418007.png)

![image-20231129101503525](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129101503525.png)

![image-20231129120631992](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129120631992.png)

![image-20231129195555193](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129195555193.png)



![image-20231129202158394](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129202158394.png)



![image-20231129201911319](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129201911319.png)



![image-20231129205514584](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129205514584.png)

![image-20231129213431576](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129213431576.png)

![image-20231129214956486](C:\Users\16771\AppData\Roaming\Typora\typora-user-images\image-20231129214956486.png)

![image-20231129215324867](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129215324867.png)

NAT映射表

## 网络地址转换

### 静态NAT

每一个私有地址对应一个公有地址

![image-20231129220210525](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129220210525.png)



### NAPT（网络地址端口转换

带NAT映射表和NAT地址池

![image-20231129220327720](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129220327720.png)

### EASY IP

![image-20231129220345469](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129220345469.png)

## 网络服务

### FTP

工作模式主动/被动、

主动的客户端in port 21，TCP三次握手

叫服务端开放随机端口号p》1024，传输链接服务端为20

![image-20231129221915404](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129221915404.png)

### TFTp 

![image-20231129222001501](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129222001501.png)

![image-20231129222020706](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129222020706.png)

### Telnet

TCP23，无需Console口

![image-20231129222108336](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129222108336.png)



![image-20231129222142801](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129222142801.png)





### DHCP

![image-20231129222255832](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129222255832.png)



![image-20231129222326333](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129222326333.png)



### NTP

端口号为123，给予UDP



## WLAN

CAPWAP协议，无线接入点控制和配置协议

![image-20231129224816281](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129224816281.png)

分为直连式租网和旁挂式组网，旁挂只是数据不过AC

### BSS/SSID/BSSI

基本服务集basic Sevice set

![image-20231129225241269](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129225241269.png)

BBSID：基本服务集标识符，是无线网络的一个身份标识，用AP的MAC地址表示



### VAP

虚拟AP，开多个AP而已

### ESS

![image-20231129225440981](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129225440981.png)

![image-20231129225522999](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129225522999.png)![image-20231129225621571](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129225621571.png)

![image-20231129225931314](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129225931314.png)

![image-20231129225955508](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129225955508.png)

![image-20231129230018407](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129230018407.png)



![image-20231129230134748](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129230134748.png)



## 广域网

![image-20231129230624977](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129230624977.png)

### PPP

点到点写一，提供PAP和CHAP

Password Authentication Protocol，密码验证协议）和CHAP（Challenge Handshake  Authentication Protocol，挑战握手认证协议）。

![image-20231129230753926](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129230753926.png)

1. 链路层协商，通过LCP链路控制协议进行参数协商，建立链路层连接
2. 认证协商（可选）：通过链路建立阶段协商的认证方式进行链路认证。
3. 网络层协商 ：通过NCP协商来选择和配置一个网络层协议并进行网络层参数协商。



![image-20231129230906349](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129230906349.png)

![image-20231129231105809](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129231105809.png)



1. 0x0021:IP报文 
2. 0x8021:IPCP报文 
3. 0xC021:LCP报文 
4. 0xC023:PAP报文 
5. 0xC223:CHAP报文



### PPP基础命令

![image-20231129232910530](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129232910530.png)

![image-20231129232918649](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129232918649.png)



service-type pap

![image-20231129232949860](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129232949860.png)

![image-20231129233209403](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129233209403.png)

### PPPoE

![image-20231129233405379](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129233405379.png)

![image-20231129233911892](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129233911892.png)



### MPLS标签转发

![image-20231129234003114](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129234003114.png)



### SR

![image-20231129234048391](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231129234048391.png)





## 网管

### 基本功能

![image-20231130094447766](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130094447766.png)

### SNMP

Simple Network Management Protocol，简单网络管理协议

广泛用于TCP/IP网络的网络管，**全都是UDP**

提供了一种通过运行网络管理软件的中心计算机，即**NMS（**Network Management  Station，网络管理工作站）来管理网元的方法。

![image-20231130094643666](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130094643666.png)

NSM是网管中心，被管理设备需要运行代理Agent进程，利用SNMP报文通讯



![image-20231130094919884](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130094919884.png)



发送Trap警告信息发现故障

####  MIB

数据库，指明被管理设备所维护的变量



被管理设备所维护的变量（即能够被代理进程查询和设置的信息）。

MIB 在数据库中定义了被管理设备的一系列属性： 

▫ 对象标识符（Object IDentifier，OID） 

▫ 对象的状态 

▫ 对象的访问权限

▫ 对象的数据类型

![image-20231130095201275](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130095201275.png)

树状，用1.3.6.1.2.1.1来表示节点

![image-20231130095345497](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130095345497.png)



![image-20231130095618680](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130095618680.png)

#### V2

![image-20231130095748378](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130095748378.png)get response

#### V3

加入了包头数据和安全参数，具有身份验证和加密处理

### 基本配置

![image-20231130095957948](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130095957948.png)

### Telemetry

Network Telemetry，即网络遥测技术，是一项远程地从物理设备或虚拟设备上高速采集数据的技术。

![image-20231130100935336](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130100935336.png)





![image-20231130101135948](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130101135948.png)

## IPV6



![image-20231130102428649](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130102428649.png)![image-20231130102708949](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130102708949.png)



一个接口在发送IPv6报文之前要经历地址配置、DAD、地址解析这三个阶段，NDP（Neighbor Discovery  Protocol，邻居发现协议）扮演了重要角色

DAD（Duplicate Address Detection，重复 地址检测）类似于IPv4中的免费ARP检测， 用于检测当前地址是否与其他接口冲突。

![image-20231130114702112](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130114702112.png)



$ P_{dBm}=10\log_{10}(40W/	W)=46dBm $

### DAD

![image-20231130114840976](C:\buffer\pansyhou.github.io\docs\skill\ICT\assets\image-20231130114840976.png)



