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

#### Linux设备号

分为主次设备号，`dev_t`前12位为主设备号（0-4095）后20位为次设备号

`dev_t` 定义在文件 `include/linux/types.h`



