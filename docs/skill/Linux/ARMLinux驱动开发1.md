---
id: arm-driver-dev1
slug: /arm-driver-dev1
title: ARM-Linux驱动开发1
authors: pansyhou
---

今天终于上手板子了。用uboot 的tftp把dtb和zImage下载之后bootz发现因为vfs kernel panic了

问题是，uboot的bootargs里的root变量理论上是有载入的，理论上是root=/dev/mmcblk1p2，存放在emmc的

那uboot传参如果正确的话就不会启动vfs吧？

why?



> Starting kernel ...
>
> Booting Linux on physical CPU 0x0
> Linux version 4.1.15 (pansy@ubuntu) (gcc version 7.5.0 (Linaro GCC 7.5-2019.12) ) #2 SMP PREEMPT Tue Sep 5 06:56:44 PDT 2023
> CPU: ARMv7 Processor [410fc075] revision 5 (ARMv7), cr=10c5387d
> CPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache
> Machine model: Freescale i.MX6 ULL 14x14 EVK Board
> Reserved memory: created CMA memory pool at 0x8c000000, size 320 MiB
> Reserved memory: initialized node linux,cma, compatible id shared-dma-pool
> Memory policy: Data cache writealloc
> PERCPU: Embedded 12 pages/cpu @8bb32000 s16716 r8192 d24244 u49152
> Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 130048
> Kernel command line: noinitrd console=ttymxc0,115200
> PID hash table entries: 2048 (order: 1, 8192 bytes)
> Dentry cache hash table entries: 65536 (order: 6, 262144 bytes)
> Inode-cache hash table entries: 32768 (order: 5, 131072 bytes)
> Memory: 180844K/524288K available (6856K kernel code, 322K rwdata, 2360K rodata, 428K init, 424K bss, 15764K reserved, 327680K cma-reserved, 0K highmem)
> Virtual kernel memory layout:
>     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
>     fixmap  : 0xffc00000 - 0xfff00000   (3072 kB)
>     vmalloc : 0xa0800000 - 0xff000000   (1512 MB)
>     lowmem  : 0x80000000 - 0xa0000000   ( 512 MB)
>     pkmap   : 0x7fe00000 - 0x80000000   (   2 MB)
>     modules : 0x7f000000 - 0x7fe00000   (  14 MB)
>       .text : 0x80008000 - 0x80908510   (9218 kB)
>       .init : 0x80909000 - 0x80974000   ( 428 kB)
>       .data : 0x80974000 - 0x809c4800   ( 322 kB)
>        .bss : 0x809c7000 - 0x80a31194   ( 425 kB)
> SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=1, Nodes=1
> Preemptible hierarchical RCU implementation.
>         Additional per-CPU info printed with stalls.
>         RCU restricting CPUs from NR_CPUS=4 to nr_cpu_ids=1.
> RCU: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=1
> NR_IRQS:16 nr_irqs:16 16
> mxc_clocksource_init 3000000
> Switching to timer-based delay loop, resolution 333ns
> sched_clock: 32 bits at 3000kHz, resolution 333ns, wraps every 715827882841ns
> clocksource mxc_timer1: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 637086815595 ns
> Console: colour dummy device 80x30
> Calibrating delay loop (skipped), value calculated using timer frequency.. 6.00 BogoMIPS (lpj=30000)
> pid_max: default: 32768 minimum: 301
> Mount-cache hash table entries: 1024 (order: 0, 4096 bytes)
> Mountpoint-cache hash table entries: 1024 (order: 0, 4096 bytes)
> CPU: Testing write buffer coherency: ok
> /cpus/cpu@0 missing clock-frequency property
> CPU0: thread -1, cpu 0, socket 0, mpidr 80000000
> Setting up static identity map for 0x80008280 - 0x800082d8
> Brought up 1 CPUs
> SMP: Total of 1 processors activated (6.00 BogoMIPS).
> CPU: All CPU(s) started in SVC mode.
> devtmpfs: initialized
> device-tree: Duplicate name in lcdif@021c8000, renamed to "display#1"
> VFP support v0.3: implementor 41 architecture 2 part 30 variant 7 rev 5
> clocksource jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 19112604462750000 ns
> pinctrl core: initialized pinctrl subsystem
> NET: Registered protocol family 16
> DMA: preallocated 256 KiB pool for atomic coherent allocations
> cpuidle: using governor ladder
> cpuidle: using governor menu
> hw-breakpoint: found 5 (+1 reserved) breakpoint and 4 watchpoint registers.
> hw-breakpoint: maximum watchpoint size is 8 bytes.
> imx6ul-pinctrl 20e0000.iomuxc: initialized IMX pinctrl driver
> imx6ul-pinctrl 2290000.iomuxc-snvs: initialized IMX pinctrl driver
> mxs-dma 1804000.dma-apbh: initialized
> SCSI subsystem initialized
> usbcore: registered new interface driver usbfs
> usbcore: registered new interface driver hub
> usbcore: registered new device driver usb
> i2c i2c-0: IMX I2C adapter registered
> i2c i2c-0: can't use DMA
> i2c i2c-1: IMX I2C adapter registered
> i2c i2c-1: can't use DMA
> Linux video capture interface: v2.00
> pps_core: LinuxPPS API ver. 1 registered
> pps_core: Software ver. 5.3.6 - Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>
> PTP clock support registered
> Advanced Linux Sound Architecture Driver Initialized.
> Switched to clocksource mxc_timer1
> NET: Registered protocol family 2
> TCP established hash table entries: 4096 (order: 2, 16384 bytes)
> TCP bind hash table entries: 4096 (order: 3, 32768 bytes)
> TCP: Hash tables configured (established 4096 bind 4096)
> UDP hash table entries: 256 (order: 1, 8192 bytes)
> UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)
> NET: Registered protocol family 1
> RPC: Registered named UNIX socket transport module.
> RPC: Registered udp transport module.
> RPC: Registered tcp transport module.
> RPC: Registered tcp NFSv4.1 backchannel transport module.
> imx rpmsg driver is registered.
> Bus freq driver module loaded
> futex hash table entries: 256 (order: 2, 16384 bytes)
> VFS: Disk quotas dquot_6.6.0
> VFS: Dquot-cache hash table entries: 1024 (order 0, 4096 bytes)
> NFS: Registering the id_resolver key type
> Key type id_resolver registered
> Key type id_legacy registered
> jffs2: version 2.2. (NAND) © 2001-2006 Red Hat, Inc.
> fuse init (API version 7.23)
> io scheduler noop registered
> io scheduler deadline registered
> io scheduler cfq registered (default)
> imx-weim 21b8000.weim: Driver registered.
> backlight supply power not found, using dummy regulator
> 21c8000.lcdif supply lcd not found, using dummy regulator
> mxsfb 21c8000.lcdif: failed to find mxc display driver 
> Console: switching to colour frame buffer device 60x34
> mxsfb 21c8000.lcdif: initialized
> imx-sdma 20ec000.sdma: no event needs to be remapped
> imx-sdma 20ec000.sdma: loaded firmware 3.3
> imx-sdma 20ec000.sdma: initialized
> 2020000.serial: ttymxc0 at MMIO 0x2020000 (irq = 18, base_baud = 5000000) is a IMX
> console [ttymxc0] enabled
> 21e8000.serial: ttymxc1 at MMIO 0x21e8000 (irq = 235, base_baud = 5000000) is a IMX
> imx sema4 driver is registered.
> [drm] Initialized drm 1.1.0 20060810
> [drm] Initialized vivante 1.0.0 20120216 on minor 0
> brd: module loaded
> loop: module loaded
> fsl-quadspi 21e0000.qspi: unrecognized JEDEC id bytes: ff, ff, ff
> fsl-quadspi 21e0000.qspi: Freescale QuadSPI probe failed
> 20b4000.ethernet supply phy not found, using dummy regulator
> pps pps0: new PPS source ptp0
> libphy: fec_enet_mii_bus: probed
> fec 20b4000.ethernet eth0: registered PHC device 0
> 2188000.ethernet supply phy not found, using dummy regulator
> pps pps1: new PPS source ptp1
> fec 2188000.ethernet eth1: registered PHC device 1
> ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
> ehci-mxc: Freescale On-Chip EHCI Host driver
> usbcore: registered new interface driver usb-storage
> 2184800.usbmisc supply vbus-wakeup not found, using dummy regulator
> 2184000.usb supply vbus not found, using dummy regulator
> 2184200.usb supply vbus not found, using dummy regulator
> ci_hdrc ci_hdrc.1: EHCI Host Controller
> ci_hdrc ci_hdrc.1: new USB bus registered, assigned bus number 1
> ci_hdrc ci_hdrc.1: USB 2.0 started, EHCI 1.00
> hub 1-0:1.0: USB hub found
> hub 1-0:1.0: 1 port detected
> Mass Storage Function, version: 2009/09/11
> LUN: removable file: (no medium)
> no file given for LUN0
> g_mass_storage ci_hdrc.0: failed to start g_mass_storage: -22
> mousedev: PS/2 mouse device common for all mice
> input: 20cc000.snvs:snvs-powerkey as /devices/platform/soc/2000000.aips-bus/20cc000.snvs/20cc000.snvs:snvs-powerkey/input/input0
> input: iMX6UL TouchScreen Controller as /devices/platform/soc/2000000.aips-bus/2040000.tsc/input/input1
> snvs_rtc 20cc000.snvs:snvs-rtc-lp: rtc core: registered 20cc000.snvs:snvs-r as rtc0
> i2c /dev entries driver
> IR NEC protocol handler initialized
> IR RC5(x/sz) protocol handler initialized
> IR RC6 protocol handler initialized
> IR JVC protocol handler initialized
> IR Sony protocol handler initialized
> IR SANYO protocol handler initialized
> IR Sharp protocol handler initialized
> IR MCE Keyboard/mouse protocol handler initialized
> IR XMP protocol handler initialized
> pxp-v4l2 pxp_v4l2: initialized
> imx2-wdt 20bc000.wdog: use WDOG_B to reboot.
> imx2-wdt 20bc000.wdog: timeout 60 sec (nowayout=0)
> sdhci: Secure Digital Host Controller Interface driver
> sdhci: Copyright(c) Pierre Ossman
> sdhci-pltfm: SDHCI platform and OF driver helper
> /soc/aips-bus@02100000/usdhc@02190000: voltage-ranges unspecified
> sdhci-esdhc-imx 2190000.usdhc: Got CD GPIO
> sdhci-esdhc-imx 2190000.usdhc: No vqmmc regulator found
> mmc0: SDHCI controller on 2190000.usdhc [2190000.usdhc] using ADMA
> /soc/aips-bus@02100000/usdhc@02194000: voltage-ranges unspecified
> sdhci-esdhc-imx 2194000.usdhc: No vmmc regulator found
> sdhci-esdhc-imx 2194000.usdhc: No vqmmc regulator found
> mmc1: SDHCI controller on 2194000.usdhc [2194000.usdhc] using ADMA
> usbcore: registered new interface driver usbhid
> usbhid: USB HID core driver
> usb 1-1: new high-speed USB device number 2 using ci_hdrc
> NET: Registered protocol family 10
> sit: IPv6 over IPv4 tunneling driver
> NET: Registered protocol family 17
> Key type dns_resolver registered
> mmc1: MAN_BKOPS_EN bit is not set
> Registering SWP/SWPB emulation handler
> snvs_rtc 20cc000.snvs:snvs-rtc-lp: setting system clock to 2021-07-21 09:13:32 UTC (1626858812)
> mmc1: new DDR MMC card at address 0001
> mmcblk1: mmc1:0001 8GTF4R 7.28 GiB 
> mmcblk1boot0: mmc1:0001 8GTF4R partition 1 4.00 MiB
> VSD_3V3: disabling
> can-3v3: disabling
> ALSA device list:
>   No soundcards found.
> mmcblk1boot1: mmc1:0001 8GTF4R partition 2 4.00 MiB
> mmcblk1rpmb: mmc1:0001 8GTF4R partition 3 512 KiB
>  mmcblk1: p1 p2
> VFS: Cannot open root device "(null)" or unknown-block(0,0): error -6
> Please append a correct "root=" boot option; here are the available partitions:
> 0100           65536 ram0  (driver?)
> 0101           65536 ram1  (driver?)
> 0102           65536 ram2  (driver?)
> 0103           65536 ram3 
> hub 1-1:1.0: USB hub found
>  (driver?)
> hub 1-1:1.0: 4 ports detected
> 0104           65536 ram4  (driver?)
> 0105           65536 ram5  (driver?)
> 0106           65536 ram6  (driver?)
> 0107           65536 ram7  (driver?)
> 0108           65536 ram8  (driver?)
> 0109           65536 ram9  (driver?)
> 010a           65536 ram10  (driver?)
> 010b           65536 ram11  (driver?)
> 010c           65536 ram12  (driver?)
> 010d           65536 ram13  (driver?)
> 010e           65536 ram14  (driver?)
> 010f           65536 ram15  (driver?)
> b300         7634944 mmcblk1  driver: mmcblk
>   b301          131072 mmcblk1p1 685721ca-01
>   b302         7493632 mmcblk1p2 685721ca-02
> b330             512 mmcblk1rpmb  (driver?)
> b320            4096 mmcblk1boot1  (driver?)
> b310            4096 mmcblk1boot0  (driver?)
> Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)
> ---[ end Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)
> random: nonblocking pool is initialized



没查出问题，可能先从移植uboot入手



1. 烧写

   ```
   chmod 777 imxdownload
   ./imxdownload uboot.bin /dev/sdd
   ```

2. SD 卡和  EMMC 驱动检查

   mmc list列出mmc设备
   mmc dev 0，mmc info

## 字符设备驱动开发

通过实现open、read、write等等的函数，完成include/linux/fs.h 中 file_operations 的结构体( 内小核驱动操作函数集合)、驱动模块加载

### 字符设备驱动模板

```c
 /* 驱动入口函数    */
 static int __init xxx_init(void)
{
     /* 入口函数具体内容    */
     return 0;
}

 /* 驱动出口函数    */
 static void __exit xxx_exit(void)
{
    /* 出口函数具体内容    */
}

 /* 将上面两个函数指定为驱动的入口和出口函数   */
 module_init(xxx_init);
 module_exit(xxx_exit);
//添加license
 MODULE_LICENSE("GPL");
 MODULE_AUTHOR("zuozhongkai");
```

驱动编译完成后拓展名为`.ko`，需要用`insmod` 和`modprobe`加载

建议用modprobe，能够智能分析模块的依赖关系载入到内核

> 默认去/lib/modules/kernel-version(比如4.2.1)寻找模块

驱动卸载用`rmmod `或者`modprobe -r `

modprobe可能会卸载依赖关系的模块，推荐rmmod

#### 字符设备注册

**函数原型：**

```c
static inline int register_chrdev(unsigned int major, const char *name,const struct file_operations *fops)
static inline void unregister_chrdev(unsigned int major, const char *name)
```

fops就是设备的操作函数集合，比如open、release

### Linux设备号

分为主次设备号，`dev_t`前12位为主设备号（0-4095）后20位为次设备号

`dev_t` 定义在文件 `include/linux/types.h`

#### 动态分配设备号

```c
int alloc_chrdev_region(dev_t *dev, unsigned baseminor, unsigned count, const char *name)
```

1. `dev`保存申请的设备号
2. `baseminor`次设备号起始地址，
3. alloc_chrdev_region 可以申请一段连续的多个设备号，这些设备号的主设备号一样，但是次设备号不同，次设备号以 baseminor 为起始地址地址开始递增。一般 baseminor 为 0，也就是说次设备号从 0 开始。
4. 数量
5. 设备名



:::tip

不知道为什么，内核不能访问用户空间，可能是虚拟内存的问题

要采用copy_to_user 函数来完成内核空间的数据到用户空间的复制

还有个是copy_from_user

```c
static inline long copy_to_user(void __user *to, const void *from, unsigned long n)
```

:::

### LED驱动

#### ioremap宏

获取物理地址的虚拟地址，定义在arch/arm/include/asm/io.h 文件中

```c
#define ioremap(cookie,size) __arm_ioremap((cookie), (size),
MT_DEVICE)
```

具体细节就不想关了， 只需要知道cookie->`物理addr`，size是寄存器的位数，以字节为单位

```c
SW_MUX_GPIO1_IO03 = ioremap(SW_MUX_GPIO1_IO03_BASE, 4);
```

#### iounmap 宏

:::warning

用于释放ioremap所做的映射

:::

#### IO内存访问函数

这里的IO不是GPIO，是输入输出的那个。

I/O有两个概念：`IO端口`和`IO内存`

> - **IO内存：IO内存又称为Memory-Mapped I/O(MMIO)，该IO空间处在CPU空间范围内，IO内存和普通的内存没什么区别，两者都是通过CPU的地址总线和控制总线发送电平信号进行访问，再通过数据总线读写数据。要想操纵该IO就得首先将该IO映射到CPU的地址中，然后就可以访问该IO，如同访问内存。大多数嵌入式设备都属于此。**
>
> - **IO端口：又称为Port(PIO),该IO的空间与CPU空间相互独立，两者互相独立，相互不干扰，这种类型IO在X86中比较常见，该IO端口有独立的空间，所以CPU要想访问该端口就得通过一些专有函数或者指令。**
>
>   [IO 端口和IO 内存（原理篇） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/579146985)
>
>   [IO 端口和IO 内存（原理篇）_io内存和io端口的区别_Huo的藏经阁的博客-CSDN博客](https://zhikunhuo.blog.csdn.net/article/details/114600308)
>
>   很明显我没看懂，但是估计是一系列很难搞掂的东西

但是没关系，ARM只有IO内存这一说

:::warning

虽说IO内存只要映射之后就操作内存直接用指针访问这些地址，但Linux内核不推荐这么做（idk啊

推荐使用一组操作对映射后的内存访问

1. 读操作

   ```c
   u8  readb(const volatile void __iomem *addr)
   u16 readw(const volatile void __iomem *addr)
   u32 readl(const volatile void __iomem *addr)
   ```

2. 写

   ```c
   void writeb(u8 value, volatile void __iomem *addr)
   void writew(u16 value, volatile void __iomem *addr)
   void writel(u32 value, volatile void __iomem *addr)
   ```

:::

#### 分配和释放设备号

下列dev都是设备号

- **如果没有指定设备号：**
  
    ```c
    int alloc_chrdev_region(dev_t *dev, unsigned baseminor, unsigned count, const char *name)
  ```
  
- **如果指定主次设备号**

    ```c
    int register_chrdev_region(dev_t from, unsigned count, const char *name)
    ```

    

- 注销设备号

  ```c
  void unregister_chrdev_region(dev_t from, unsigned count)
  ```



示例如下：

```c
int major;//主设备号
int minor;//次设备号
dev_t devid;//设备号

if(major){	//如果定义了设备号
	devid=MKDEV(major,0);//大部分驱动次设备号都选择 0
	register_chrdev_region(devid,1,"设备名");
	
}else{
	alloc_chrdev_region(&devid, 0, 1, "test"); /* 申请设备号     */
	major = MAJOR(devid);	//获取分配号的主设备号
	minor = MINOR(devid);	//获取分配号的次设备号
}
//注销设备号
unregister_chrdev_region(devid,1);
```

#### 新字符设备注册方法

1. 字符设备结构

   Linux用一个结构`cdev`来表示一个字符设备

   ```c
   struct cdev {
   	struct kobject kobj;
   	struct module *owner;
   	const struct file_operations *ops;
   	struct list_head list;
   	dev_t dev;
   	unsigned int count;
   };
   ```

   有比较熟悉的是ops和owner了

2. `cdv_init`函数

   ```c
   void cdev_init(struct cdev *, const struct file_operations *);
   ```

   在用这个之前需要新建一个fop和cdev结构体
   两个的owner都用THIS_MODULE，原因在[这里](/c-study-notes#this_module)

3. `cdev_add`函数

   ```c
   int cdev_add(struct cdev *, dev_t, unsigned);
   ```

   将**初始化好**的cdev，向系统添加字符设备

4. `cdev_del `函数

   ```c
   void cdev_del(struct cdev *);
   ```

#### 创建设备节点

相对于前面的需要自己手动`mknod`创建设备节点，我们可以自动创建

利用busybox的`mdev`，是udev的简化版本，linux下通过udv来实现设备文件的创建和删除，**检测系统中硬件设备状态**，以此来创建或者删除设备文件.



Linux 系统中的热插拔事件也由  mdev 管理，在/etc/init.d/rcS 文件中如下语句：

```shell
echo /sbin/mdev > /proc/sys/kernel/hotplug
```

1. **创建和删除类**：

   自动创建设备节点的工作是在驱动程序的入口函数中完成的，一般在 cdev_add 函数后面添加自动创建设备节点相关代码。

   首先要创建一个 class 类，class是个结构体，定义在文件include/linux/device.h 里面。class_create 是类创建函数，class_create 是个宏定义，内容如下：

   ```c
   #define class_create(owner, name)		\
   ({						\
   	static struct lock_class_key __key;	\
   	__class_create(owner, name, &__key);	\
   })
   struct class *__class_create(struct module *owner, const char *name,
   			     struct lock_class_key *key);
   ```

   用一个class指针接收，扔进去owner和类名

   需要卸载驱动的时候就删除类就好

   ```c
   void class_destroy(struct class *cls);
   ```

2. **创建设备**:

   ```c
   struct device *device_create(struct class *class, struct device *parent, dev_t devt, void *drvdata, const char *fmt, ...)
   ```

   参数：

   1. 类
   2. parent父设备：一般为NULL
   3. devt是设备号
   4. drvdata一般也为NULL
   5. fmt是设备名

   卸载驱动就删除设备

   ```c
   void device_destroy(struct class *class, dev_t devt)
   ```

示例：

```c
struct class *class;   /* 类*/
struct device *device; /* 设备 */
dev_t devid;           // 设备号

/* 驱动入口函数 */

static int __init led_init(void)
{
    /* 创建类 */
    class = class_create(THIS_MODULE, "xxx");
    /* 创建设备 */
    device = device_create(class, NULL, devid, NULL, "xxx");
    return 0;
}

/* 驱动出口函数    */
static void __exit led_exit(void)
{
    /* 删除设备    */
    device_destroy(newchrled.class, newchrled.devid);
    /* 删除类           */
    class_destroy(newchrled.class);
}

module_init(led_init);
module_exit(led_exit);
```



之后设置私有数据

```c
/* 设备结构体 */
struct test_dev
{
    dev_t devid;           /* 设备号*/
    struct cdev cdev;      /* cdev*/
    struct class *class;   /* 类 */
    struct device *device; /* 设备*/
    int major;             /* 主设备号 */
    int minor;             /* 次设备号 */
};

struct test_dev testdev;

/* open 函数 */
static int test_open(struct inode *inode, struct file *filp)
{
    filp->private_data = &testdev; /* 设置私有数据 */
    return 0;
}
```

在  open 函数里面设置好私有数据以后，在  write、read、close 等函数中直接读取  private_data 即可得到设备结构体。

**示例：**

```c
#include <linux/types.h>
#include <linux/kernel.h>
#include <linux/delay.h>
#include <linux/ide.h>
#include <linux/init.h>
#include <linux/module.h>
#include <linux/errno.h>
#include <linux/gpio.h>
#include <linux/cdev.h>
#include <linux/device.h>
#include <asm/mach/map.h>
#include <asm/uaccess.h>
#include <asm/io.h>

#define NEWCHRLED_CNT 1             // 设备个数
#define NEWCHRLED_NAME "newcharled" // 设备名
#define LEDOFF 0
#define LEDON 1

// 寄存器物理地址
#define CCM_CCGR1_BASE (0X020C406C)
#define SW_MUX_GPIO1_IO03_BASE (0X020E0068)
#define SW_PAD_GPIO1_IO03_BASE (0X020E02F4)
#define GPIO1_DR_BASE (0X0209C000)
#define GPIO1_GDIR_BASE (0X0209C004)

// 映射后的寄存器虚拟地址指针
static void __iomem *IMX6U_CCM_CCGR1;
static void __iomem *SW_MUX_GPIO1_IO03;
static void __iomem *SW_PAD_GPIO1_IO03;
static void __iomem *GPIO1_DR;
static void __iomem *GPIO1_GDIR;

/* newchrled 设备结构体 */
struct newchrled_dev
{
    dev_t devid; // 设备号
    struct cdev cdev;
    struct class *class;   // 类
    struct device *device; // 设备
    int major;             // 主设备号
    int minor;             // 次设备号
} newchrled;               // 新建led设备

void led_switch(u8 sta)
{
    u32 val = 0;
    if (sta == LEDON)
    {
        val = readl(GPIO1_DR);
        val &= ~(1 << 3);
        writel(val, GPIO1_DR);
    }
    else if (sta == LEDOFF)
    {
        val = readl(GPIO1_DR);
        val |= (1 << 3);
        writel(val, GPIO1_DR);
    }
}

static int led_open(struct inode *inode, struct file *filp)
{
    filp->private_data = &newchrled;
    return 0;
}

static ssize_t led_read(struct file *filp, char __user *buf, size_t cnt, loff_t *offt)
{
    return 0;
}

static ssize_t led_write(struct file *filp, const char __user *buf, size_t cnt, loff_t *offt)
{
    int retvalue;
    unsigned char databuf[1];
    unsigned char ledstat;

    retvalue = copy_from_user(databuf, buf, cnt);
    if (retvalue < 0)
    {
        printk("kernel write failed!\r\n");
        return -EFAULT;
    }

    ledstat = databuf[0]; // 获取状态值
    if (ledstat == LEDON)
    {
        led_switch(LEDON); /* 打开 LED 灯 */
    }
    else if (ledstat == LEDOFF)
    {
        led_switch(LEDOFF); /* 关闭 LED 灯 */
    }
    return 0;
}
static int led_release(struct inode *inode, struct file *filp)
{
    return 0;
}

// 设备操作函数
static struct file_operations newchrled_fops = {
    .owner = THIS_MODULE,
    .open = led_open,
    .read = led_read,
    .write = led_write,
    .release = led_release,
};

static int __init led_init(void)
{
    u32 val = 0;

    /* 初始化 LED */
    /* 1、寄存器地址映射    */
    IMX6U_CCM_CCGR1 = ioremap(CCM_CCGR1_BASE, 4);
    SW_MUX_GPIO1_IO03 = ioremap(SW_MUX_GPIO1_IO03_BASE, 4);
    SW_PAD_GPIO1_IO03 = ioremap(SW_PAD_GPIO1_IO03_BASE, 4);
    GPIO1_DR = ioremap(GPIO1_DR_BASE, 4);
    GPIO1_GDIR = ioremap(GPIO1_GDIR_BASE, 4);

    /* 2、使能 GPIO1 时钟   */
    val = readl(IMX6U_CCM_CCGR1);
    val &= ~(3 << 26); /* 清楚以前的设置    */
    val |= (3 << 26);  /* 设置新值    */
    writel(val, IMX6U_CCM_CCGR1);

    /* 3、设置 GPIO1_IO03 的复用功能，将其复用为
     *    GPIO1_IO03，最后设置 IO 属性。
     */
    writel(5, SW_MUX_GPIO1_IO03);

    /* 寄存器 SW_PAD_GPIO1_IO03 设置 IO 属性    */
    writel(0x10B0, SW_PAD_GPIO1_IO03);

    /* 4、设置 GPIO1_IO03 为输出功能    */
    val = readl(GPIO1_GDIR);
    val &= ~(1 << 3); /* 清除以前的设置    */
    val |= (1 << 3);  /* 设置为输出   */
    writel(val, GPIO1_GDIR);

    /* 5、默认关闭 LED */
    val = readl(GPIO1_DR);
    val |= (1 << 3);
    writel(val, GPIO1_DR);

    /* 注册字符设备驱动    */
    /* 1、创建设备号    */
    if (newchrled.major)
    { /*  定义了设备号    */
        newchrled.devid = MKDEV(newchrled.major, 0);
        register_chrdev_region(newchrled.devid, NEWCHRLED_CNT, NEWCHRLED_NAME);
    }
    else
    {
        /* 没有定义设备号    */
        alloc_chrdev_region(&newchrled.devid, 0, NEWCHRLED_CNT,
                            NEWCHRLED_NAME);      /* 申请设备号    */
        newchrled.major = MAJOR(newchrled.devid); /* 获取主设备号 */
        newchrled.minor = MINOR(newchrled.devid); /* 获取次设备号 */
    }
    printk("newchrled major=%d,minor=%d\r\n", newchrled.major, newchrled.minor);	

    /* 2、初始化  cdev */
    newchrled.cdev.owner = THIS_MODULE;
    cdev_init(&newchrled.cdev, &newchrled_fops);

    /* 3、添加一个  cdev */
    cdev_add(&newchrled.cdev, newchrled.devid, NEWCHRLED_CNT);

    /* 4、创建类    */
    newchrled.class = class_create(THIS_MODULE, NEWCHRLED_NAME);
    if (IS_ERR(newchrled.class))
    {
        return PTR_ERR(newchrled.class);
    }
    /* 5、创建设备    */
    newchrled.device = device_create(newchrled.class, NULL, newchrled.devid, NULL, NEWCHRLED_NAME);
    if (IS_ERR(newchrled.device))
    {
        return PTR_ERR(newchrled.device);
    }

    return 0;
}

static void __exit led_exit(void)
{
    /* 取消映射   */
    iounmap(IMX6U_CCM_CCGR1);
    iounmap(SW_MUX_GPIO1_IO03);
    iounmap(SW_PAD_GPIO1_IO03);
    iounmap(GPIO1_DR);
    iounmap(GPIO1_GDIR);

    /* 注销字符设备    */
    cdev_del(&newchrled.cdev); /*  删除 cdev */
    unregister_chrdev_region(newchrled.devid, NEWCHRLED_CNT);

    device_destroy(newchrled.class, newchrled.devid);
    class_destroy(newchrled.class);
}

module_init(led_init);
module_exit(led_exit);
```

## 设备树

### Basic concept

1. DTS、DTB、DTC

   1. `DTS`：设备树源码文件
   2. `DTB`：设备树编译后二进制文件
   3. `DTC`：编译工具，在scripts/dtc下

2. `make dtbs`编译dts文件

3. 要想编译出dtb，需要在`arch/arm/boot/dts/Makefile`的`dtb-$(CONFIG_SOC_IMX6ULL) += \`加入自己的dtb

4. 设备树头文件`.dtsi`

   ```c
   #include <dt-bindings/input/input.h>
   #include "imx6ull.dtsi"
   ```

   可以引用.h和.dtsi文件，也可以引用.dts

   一般.dtsi 文件用于描述 SOC 的内部外设信息，比如 CPU 架构、主频、外设寄存器地址范围，比如 UART、IIC 等等。
   比如 imx6ull.dtsi 就是描述 I.MX6ULL 这颗 SOC 内部外设情况信息

5. 设备节点

   1. `/`**根节点**，如果imx6ull.dtsi和imx6ull-alientek-emmc.dts 这两个文件都有一个“/”根节点，两个根节点会合并成为一个根节点
   
   2. **子节点**命名方式`node-name@unit-address`比如`interrupt-controller@00a01000`

   3. **label标签**命名方式：`label: node-name@unit-address`比如`cpu0:cpu@0`可以通过`&cpu0`访问该节点
   
   4. 设备树几种数据形式：
   
      1. **字符串**：compatible = "arm,cortex-a7";也可以成为字符串列表，用逗号隔开
   
      2. **32 位无符号整数**：reg=<0>;
   
         reg也可以设置为一组值，比如：reg = <0 0x123456 100>;
   
   5. 标准属性：
   
      1. **compatible**：兼容性属性，为一个字符串列表，用于将**设备和驱动**绑定起来
         格式如下：`"manufacturer,model"`
         manufacturer是厂商，model一般是模块对应的驱动名，比如
         compatible = "fsl,imx6ul-evk-wm8960","fsl,imx-audio-wm8960";
         fsl是飞思卡尔，右边表示驱动模块
   
         这个设备首先使用第一个兼容值在 Linux 内核里面查找，看看能不能找到与之匹配的驱动文件，如果没有找到的话就使用第二个兼容值查。
   
         一般驱动程序文件都会有一个 **OF 匹配表**，此 OF 匹配表保存着一些 **compatible 值**，如果设备节点的 compatible 属性值和 OF 匹配表中的任何一个值相等，那么就表示设备可以使用这个驱动。比如在文件 imx-wm8960.c 中有如下内容：
   
         ![	](https://pic.imgdb.cn/item/65005a0b661c6c8e5401c261)
   
         前面三行就是匹配表，下面的结构体为platform_driver的驱动模式
   
      2. **model**：也是一个字符串，一般  model 属性描述设备模块信息，比如名字什么的
   
         比如：model = "wm8960-audio";
   
      3. **status**：设备状态有关，字符串
         ![image-20230912204844763](https://pic.imgdb.cn/item/65005e2d661c6c8e5404343f)
   
      4. **#address-cells** 和**#size-cells**：
         u32整形。 用在用于子节点的设备中，描述子节点的地址
         address-cells决定子节点reg**地址的字长**，size-cells决定子节点reg属性中**长度信息所占的字长**
   
         一般 reg 属性都是和地址有关的内容，和地址相关的信息有两种：起始地址和地址长度，reg 属性的格式一为：
   
         ```
         reg = <address1 length1 address2 length2 address3 length3……>
         ```
   
         每个“address length”组合表示一个地址范围，其中 address 是起始地址，length 是地址长度，#address-cells 表明 address 这个数据所占用的字长，#size-cells 表明 length 这个数据所占用的字长，比如
   
         ```
         spi4 {
             compatible = "spi-gpio";
             #address-cells = <1>;
             #size-cells = <0>;
         
             gpio_spi: gpio_spi@0 {
                 compatible = "fairchild,74hc595";
                 reg = <0>;
             };
         };
         
         aips3: aips-bus@02200000 {
            compatible = "fsl,aips-bus", "simple-bus";
            #address-cells = <1>;
            #size-cells = <1>;
            dcp: dcp@02280000 {
                compatible = "fsl,imx6sl-dcp";
                reg = <0x02280000 0x4000>;
            };
         };
         ```
   
         第一个spi4的，说明她子节点reg起始地址字长1，占用0
   
      5. **reg**属性
   
      6. **ranges**：
   
         可以为空或者按照(**child-bus-address,parent-bus-address,length**)格式编写的数字矩阵，ranges 是一个**地址映射/转换表**，ranges 属性每个项目由子地址、父地址和地址空间长度这三部分组成：
   
         1. **child-bus-address**：子总线地址空间的物理地址，由父节点的#address-cells 确定此物理地址所占用的字长。
         2. **parent-bus-address**：父总线地址空间的物理地址，同样由父节点的#address-cells 确定此物理地址所占用的字长。
         3. **length**：子地址空间的长度，由**父节点**的#size-cells 确定此地址长度所占用的字长。
   
         如果 ranges 属性值为空值，说明子地址空间和父地址空间完全相同，**不需要**进行地址转换，对于我们所使用的 I.MX6ULL 来说，子地址空间和父地址空间完全相同，因此会在 imx6ull.dtsi中找到大量的值为空的 ranges 属性
   
         ![image-20230913095034298](https://pic.imgdb.cn/item/65011572661c6c8e5445c332)
   
         不为空：ranges = <0x0 0xe0000000 0x00100000>;
   
         1024KB(0x00100000)的地址范围，子地址空间的物理起始地址为 0x0，父地址空间的物理起始地址为 0xe0000000。
   
         reg = <0x4600 0x100>;
   
         reg 属性定义了 serial 设备寄存器的起始地址为 0x4600，寄存器长度为 0x100。 经 过 地 址 转 换， serial 设 备可 以 从 0xe0004600 开始进行读写操作，0xe0004600=0x4600+0xe0000000。
   
      7. **name**：老登才会用来记录节点名字
   
      8. **device_type** ：字符串，
   
      9. 用于描述设备的 FCode，但是设备树没有FCode，所以此属性也被抛弃 了。此属性只能用于 cpu节点或者memory节点 。
   
         > cpu0: cpu@0 {
         >     compatible = "arm,cortex-a7";
         >     **device_type = "cpu";**
         >     reg = <0>;
   
   6. **根节点compatible 属性**
   
      ```
       / {
          model = "Freescale i.MX6 ULL 14x14 EVK Board";
          compatible = "fsl,imx6ull-14x14-evk", "fsl,imx6ull";
          ...
          }
      ```
   
      compatibles属性 第一个值表示所使用的硬件设备名字，第二个表示SOC
      **如何知道Linux内核支不支持这个设备**
   
      1. **使用设备树之前的设备匹配方法**：
   
         uboot 会向 Linux 内核传递一个叫做 machine id 。告诉 Linux 内核自己是个什么设备，看看 Linux 内核是否支持
   
         针对每一个设备(板子)，Linux 内核都用 **MACHINE_START** 和 **MACHINE_END**
   
         来定义一个 machine_desc 结构体来描述这个设备，比如在文件 arch/arm/mach-imx/mach- 
         mx35_3ds.c
   
         具体跳转到正点的1123页看吧
   
         machine id在 mach-types.h 文件中
   
      2. **使用设备树设备匹配方法**：
   
         换为了`DT_MACHINE_START`。DT_MACHINE_START也定义在文件 arch/arm/include/asm/mach/arch.h 里面
         
         这哥们的宏定义上和MACHINE_START基本相同，只是.nr的设置不同，直接为~0了
         
         ```c
         static const char *imx6ul_dt_compat[] __initconst = {
         	"fsl,imx6ul",
         	"fsl,imx6ull",
         	NULL,
         };
         
         DT_MACHINE_START(IMX6UL, "Freescale i.MX6 Ultralite (Device Tree)")
         	.map_io		= imx6ul_map_io,
         	.init_irq	= imx6ul_init_irq,
         	.init_machine	= imx6ul_init_machine,
         	.init_late	= imx6ul_init_late,
         	.dt_compat	= imx6ul_dt_compat,
         MACHINE_END
         ```
         
         重点在.dt_compat，里面的兼容值和设备树compatible里的属性相等就能正常启动。"fsl,imx6ull",
         
         Linux 内核调用 `start_kernel` 函数来启动内核，start_kernel 函数会调用`setup_arch` 函数来匹配machine_desc，setup_arch函数定义在文件 arch/arm/kernel/setup.c 中
         
         ```c
         void __init setup_arch(char **cmdline_p)
         {
            const struct machine_desc *mdesc;
         
            setup_processor();
            mdesc = setup_machine_fdt(__atags_pointer);
            if (!mdesc)
             	mdesc = setup_machine_tags(__atags_pointer,__machine_arch_type);
            machine_desc = mdesc;
            machine_name = mdesc->name;
            ......
          }
         ```
         
         用setup_machine_fdt获取匹配的machine_desc，atags就是atags的首地址
         
         函数`setup_machine_fdt`在arch/arm/kernel/devtree.c 中
         （这哥们入参__atags_pointer看上去不是要pointer吗？？？，怎么是uint？
         
         ```c
          const struct machine_desc * __init setup_machine_fdt(unsigned int dt_phys)
          {
             const struct machine_desc *mdesc, *mdesc_best = NULL;
         	......
          
         	if (!dt_phys || !early_init_dt_verify(phys_to_virt(dt_phys)))
                return NULL;
             mdesc = of_flat_dt_match_machine(mdesc_best,arch_get_next_mach);
         	......
             __machine_arch_type = mdesc->nr;
         
             return mdesc;
          }
         ```
         
         1. `of_flat_dt_match_machine` 来获取匹配的 `machine_desc`，参数mdesc_best是默认的machine_desc（默认就是NULL是吧，可能在上面初始化了
         
         2. 参数`arch_get_next_mach`，这老登是个函数
         
            匹配的过程就是将根节点的compatible和内核machine_desc的.dt_compat比较，而这个函数就是获取内核的machine_desc结构体
         
            ```c
             const void * __init of_flat_dt_match_machine(const void *default_match,
                   const void * (*get_next_compat)(const char * const**))
             {
                const void *data = NULL;
                const void *best_data = default_match;
                const char *const *compat;
                unsigned long dt_root;
                unsigned int best_score = ~1, score = 0;
                
                dt_root = of_get_flat_dt_root();
                while ((data = get_next_compat(&compat))) {
                   score = of_flat_dt_match(dt_root, compat);
                   if (score > 0 && score < best_score) {
                      best_data = data;
                      best_score = score;
                   }
                }
            	......
            
            	pr_info("Machine model: %s\n", of_flat_dt_get_machine_name());
            
                return best_data;
             }
            ```
         
            先是获取根节点后循环匹配machine_desc，of_flat_dt_match 函数会将根节点 compatible 属性的值和每个 machine_desc 结构体中. dt_compat 的值进行比较
         
         ![image-20230914170923494](https://pic.imgdb.cn/item/6502cdca661c6c8e54f35c8e)
   
   7. **向节点追加或者修改内容**
   
      imx6ull.dtsi 有原始内容，一般来说如果要对6ull所有板都加内容才要在这个头文件里加入。
   
      如果要追加，建议在自己的dts中加入，比如imx6ull-alientek-emmc.dts
   
      如果要修改i2c，加入节点，可以这样
   
      ```
      &i2c1{
      	追加的内容
      	
      }
      ```
   
      具体的：
   
      ```c
      &i2c1
      {
      	clock - frequency = <100000>;
      	pinctrl - names = "default";
      	pinctrl - 0 = <&pinctrl_i2c1>;
      	status = "okay";
      
      	mag3110@0e
      	{
      		compatible = "fsl,mag3110";
      		reg = <0x0e>;
      		position = <2>;
      	};
      
      	fxls8471@1e
      	{
      		compatible = "fsl,fxls8471";
      		reg = <0x1e>;
      		position = <0>;
      		interrupt - parent = <&gpio5>;
      		interrupts = <0 8>;
      	};
      }
      ```
   
   8. 构建小型设备树
   
      1. /根节点
      2. 板子compatible属性
      3. CPU
      4. SOC
         1. OCRAM
         2. 3个AIPS外设控制器节点
            1. 各类外设子节点
   
   9. 进入/sys/firmware/devicetree看设备树信息
   
   10. **特殊节点**：
   
      1. **aliases**：
   
         ```c
         / {
         	aliases {
         		can0 = &flexcan1;
         		can1 = &flexcan2;
         		ethernet0 = &fec1;
         		ethernet1 = &fec2;
         		gpio0 = &gpio1;
         		gpio1 = &gpio2;
         		gpio2 = &gpio3;
         		gpio3 = &gpio4;
         		gpio4 = &gpio5;
         		i2c0 = &i2c1;
         		i2c1 = &i2c2;
         		i2c2 = &i2c3;
         		i2c3 = &i2c4;
         		mmc0 = &usdhc1;
         		mmc1 = &usdhc2;
         		serial0 = &uart1;
         		serial1 = &uart2;
         		serial2 = &uart3;
         		serial3 = &uart4;
         		serial4 = &uart5;
         		serial5 = &uart6;
         		serial6 = &uart7;
         		serial7 = &uart8;
         		spi0 = &ecspi1;
         		spi1 = &ecspi2;
         		spi2 = &ecspi3;
         		spi3 = &ecspi4;
         		usbphy0 = &usbphy1;
         		usbphy1 = &usbphy2;
         	};
         ```
   
         定义别名，通过label效果也差不多
   
      2. **chosen**：为了 uboot 向 Linux 内核传递数据，重点在bootargs参数
   
         ```
         chosen {
            stdout-path = &uart1;
         };
         ```
   
         <img src="https://pic.imgdb.cn/item/6502fc1a661c6c8e540d4d52" alt="image-20230914202705993" />
   
         看到没，多了bootargs
   
         在uboot源码中找到了关于这个bootargs的加载
   
         ```c
         int fdt_chosen(void *fdt)
         {
         	int   nodeoffset;
         	int   err;
         	char  *str;		/* used to set string properties */
         
         	err = fdt_check_header(fdt);
         	if (err < 0) {
         		printf("fdt_chosen: %s\n", fdt_strerror(err));
         		return err;
         	}
         
         	/* find or create "/chosen" node. */
         	nodeoffset = fdt_find_or_add_subnode(fdt, 0, "chosen");
         	if (nodeoffset < 0)
         		return nodeoffset;
         
         	str = getenv("bootargs");
         	if (str) {
         		err = fdt_setprop(fdt, nodeoffset, "bootargs", str,
         				  strlen(str) + 1);
         		if (err < 0) {
         			printf("WARNING: could not set bootargs %s.\n",
         			       fdt_strerror(err));
         			return err;
         		}
         	}
         
         	return fdt_fixup_stdout(fdt, nodeoffset);
         }
         ```
   
         先检查fdt头，然后找到chosen节点，将bootargs的环境变量加到fdt里
   
         ![image-20230914204933070](https://pic.imgdb.cn/item/6503015d661c6c8e540efe9b)
   

#### **Linux内核解析DTB文件**

![image-20230914210427155](https://pic.imgdb.cn/item/650304e0661c6c8e5410ee66)

#### 绑定信息文档

在Documentation/devicetree/bindings，有很多txt用来说明节点的信息

#### 设备树常用  OF 操作函数

Linux提供一系列`of_`前缀的函数用于获取设备树节点/属性信息

用`device_node`结构体描述节点信息

1. **of_find_node_by_name**函数

   ```c
   struct device_node *of_find_node_by_name(struct device_node  *from,const char *name)
   ```

2. **of_find_compatible_node**函数

   根据device_type和compatible，from为开始查找的节点，如果NULL就找整个设备树

   ```c
   struct device_node *of_find_compatible_node(struct device_node *from,
   										const char *type,
   										const char *compatible)
   ```

3. **of_find_node_by_type** 函数

   根据device_type 属性查找指定的节点

   ```c
   struct device_node *of_find_node_by_type(struct device_node *from, const char *type)
   ```

4. **of_find_matching_node_and_match** 函数

   ```c
   struct device_node *of_find_matching_node_and_match(struct device_node             *from,
   const struct of_device_id  *matches, 
   const struct of_device_id **match)
   ```

   根据of_device_id匹配表查找指定节点（matches

5. **of_find_node_by_path** 函数

   根据path来找（such as /backlight







**查找父/子节点的OF函数**

1. of_get_parent(device_node *node)
2. of_get_next_child(device_node *node , device_node *prev)（父节点，前一个子节点，也就是从哪一个子节点开始迭代的查找下一个子节点）



**提取属性值的OF函数**、定义在文件  include/linux/of.h 中

```c
struct property {
	char	*name;
	int	length;
	void	*value;
	struct property *next;
	unsigned long _flags;
	unsigned int unique_id;
	struct bin_attribute attr;
};
```

1. **of_find_property** 函数，查找特定的属性

   ```c
   struct property *of_find_property(const struct device_node *np,
   					 const char *name,
   					 int *lenp);
   ```

   np：设备节点，name：属性名字，lenp：属性的字节数

2. **of_property_count_elems_of_size** 函数，获取属性中元素的数量

   （设备节点node，属性名，元素长度（这个居然不是指针？？？）

3. 还有好多建议自己查



1. of_address_to_resource 函数

   内核使用 **resource** 结构体来描述一段内存空间

   ```c
   struct resource {
   	resource_size_t start;
   	resource_size_t end;
   	const char *name;
   	unsigned long flags;//资源标志位，具体宏定义也在include/linux/ioport.h 
   	struct resource *parent, *sibling, *child;
   };
   ```

2. of_iomap



结束力

:::tip

这些函数都是要被驱动文件所用的，要读取设备树中的属性信息，比如内存信息、GPIO 信息、中断信息等等

:::





