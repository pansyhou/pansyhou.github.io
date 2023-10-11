---
id: arm-driver-dev2
slug: /arm-driver-dev2
title: ARM-Linux驱动开发2
authors: pansyhou
---

## pinctrl 和  gpio 子系统在·

因为32位SOC经常与GPIO打交道，所以linux为PIN的配置（比如上下拉那些）提供了pinctrl子系统，为GPIO的配置提供GPIO子系统



### pinctrl

主要工作内容：

1. 获取设备树中  pin 信息
2. 根据获取到的  pin 信息来设置  pin 的复用功能
3. 根据获取到的  pin 信息来设置  pin 的电气特性，比如上/下拉、速度、驱动能力等

我们只用在设备树里面**设置好某个pin的相关属性即可**，其他的初始化工作均由pinctrl子系统来完成，pinctrl 子系统源码目录为  `drivers/pinctrl`。

```c
&iomuxc {
	pinctrl-names = "default";
	pinctrl-0 = <&pinctrl_hog_1>;
	imx6ul-evk {
		pinctrl_hog_1: hoggrp-1 {
			fsl,pins = <
				MX6UL_PAD_UART1_RTS_B__GPIO1_IO19	0x17059 /* SD1 CD */
				MX6UL_PAD_GPIO1_IO05__USDHC1_VSELECT	0x17059 /* SD1 VSELECT */
				MX6UL_PAD_GPIO1_IO09__GPIO1_IO09        0x17059 /* SD1 RESET */
			>;
		};

		pinctrl_csi1: csi1grp {
			fsl,pins = <
				MX6UL_PAD_CSI_MCLK__CSI_MCLK		0x1b088
				MX6UL_PAD_CSI_PIXCLK__CSI_PIXCLK	0x1b088
				MX6UL_PAD_CSI_VSYNC__CSI_VSYNC		0x1b088
				MX6UL_PAD_CSI_HSYNC__CSI_HSYNC		0x1b088
				MX6UL_PAD_CSI_DATA00__CSI_DATA02	0x1b088
				MX6UL_PAD_CSI_DATA01__CSI_DATA03	0x1b088
				MX6UL_PAD_CSI_DATA02__CSI_DATA04	0x1b088
				MX6UL_PAD_CSI_DATA03__CSI_DATA05	0x1b088
				MX6UL_PAD_CSI_DATA04__CSI_DATA06	0x1b088
				MX6UL_PAD_CSI_DATA05__CSI_DATA07	0x1b088
				MX6UL_PAD_CSI_DATA06__CSI_DATA08	0x1b088
				MX6UL_PAD_CSI_DATA07__CSI_DATA09	0x1b088
			>;
		};

```

每个子节点就是这外设所能使用的PIN

一个配置复用功能，一个设置电气属性



先看MX6UL_PAD_UART1_RTS_B__GPIO1_IO19，这个是定义在`arch/arm/boot/dts/imx6ul-pinfunc.h`里的，被imx6ull.dtsi引用

```c
#define MX6UL_PAD_UART1_RTS_B__GPIO1_IO19                         0x0090 0x031C 0x0000 0x5 0x0
```

宏定义那个头文件里有很多MX6UL_PAD_UART1_RTS_B开头的，对应着8个复用的IO

![image-20230917203827174](https://pic.imgdb.cn/item/6506f34b661c6c8e545f3c25)

后面五个数字对应

> <mux_reg  conf_reg  input_reg  mux_mode  input_val>
>
> 0x0090	 0x031C 	0x0000 	0x5 	0x0

**mux_reg** ：mux_reg的偏移地址，即设备树 iomuxc 节点的reg地址+偏移

![image-20230917204137982](https://pic.imgdb.cn/item/6506f402661c6c8e545f5a8c)

**conf_reg** ：conf_reg寄存器偏移地址，寄存器  IOMUXC_SW_PAD_CTL_PAD_UART1_RTS_B 

**input_reg** ：有些外设有Input_reg寄存器

**mux_mode**：mux_reg寄存器值，配置为PIN复用为GPIO1_IO19

input_val：input_reg的值

​	

再看那一坨文字的右边的数字：`0x17059`，用于设置conf_reg寄存器值，设置IO的上下拉驱动能力速度等等

在 这 里 就 相 当 于 设 置 寄 存 器 IOMUXC_SW_PAD_CTL_PAD_UART1_RTS_B 的值为 0x17059

#### 省流

在imx6ull-alientek-emmc.dts，  iomuxc 节点 中的“imx6ul-evk”子节点下添加“pinctrl_test”节点

```c
 pinctrl_test: testgrp {
     fsl,pins = <
     /* 设备所使用的 PIN 配置信息    */
         MX6UL_PAD_GPIO1_IO00__GPIO1_IO00  config /*config 是具体设置值，比如0x17059*/
     >;
 };
```

添加完了...

> gpio1 节点信息描述了 GPIO1 控制器的所有信息，重点就是 GPIO1 外设寄存器基地址以及兼容属性 。关于 I.MX 系列 SOC 的 GPIO 控 制 器 绑 定 信 息 请 查 看 文 档 Documentation/devicetree/bindings/gpio/ fsl-imx-gpio.txt



### GPIO子系统驱动

通过上述配置好pinctrl后，可以开始配置gpio子系统了

```c
&usdhc1 {
	pinctrl-names = "default", "state_100mhz", "state_200mhz";
	pinctrl-0 = <&pinctrl_usdhc1>;
	pinctrl-1 = <&pinctrl_usdhc1_100mhz>;
	pinctrl-2 = <&pinctrl_usdhc1_200mhz>;
    
    /* pinctrl-3 = <&pinctrl_hog_1>; */
	cd-gpios = <&gpio1 19 GPIO_ACTIVE_LOW>;
    
	keep-power-in-suspend;
	enable-sdio-wakeup;
	vmmc-supply = <&reg_sd1_vmmc>;
	status = "okay";
};
```

注释那行可以理解为Linux自己会初始化pinctrl_hog_1这个pin

> 因为在“iomuxc”节点下引用了 pinctrl_hog_1这个节点，所以 Linux 内核中的 iomuxc 驱动就会自动初始化 pinctrl_hog_1节点下的所有 PIN——正点原子
>
> ```c
> &iomuxc {
> 	pinctrl-names = "default";
> 	pinctrl-0 = <&pinctrl_hog_1>;
> 	imx6ul-evk {
> 		pinctrl_hog_1: hoggrp-1 {
> 			fsl,pins = <
> 				MX6UL_PAD_UART1_RTS_B__GPIO1_IO19	0x17059 /* SD1 CD */
> 				MX6UL_PAD_GPIO1_IO05__USDHC1_VSELECT	0x17059 /* SD1 VSELECT */
> 				MX6UL_PAD_GPIO1_IO09__GPIO1_IO09        0x17059 /* SD1 RESET */
> 			>;
> 		};
> ```
>
> 可以看到确实是有初始化，但用途不明，可能是为了检测热插拔的SD卡

注释下面的就是cd引脚

属性“cd-gpios”描述了 SD 卡的 CD 引脚使用的哪个 IO。属性值一共有三个

1. `&gpio1`：代表是IO属于哪一个组
2. `19`：代表那组的19号
3. `GPIO_ACTIVE_LOW`：低电平有效

```c
gpio1: gpio@0209c000 {
	compatible = "fsl,imx6ul-gpio", "fsl,imx35-gpio";
	reg = <0x0209c000 0x4000>;
	interrupts = <GIC_SPI 66 IRQ_TYPE_LEVEL_HIGH>,
				<GIC_SPI 67 IRQ_TYPE_LEVEL_HIGH>;
	gpio-controller;
	#gpio-cells = <2>;
	interrupt-controller;
	#interrupt-cells = <2>;
};
```

gpio1 节点信息描述了 **GPIO1 控制器的所有信息**，重点就是 GPIO1 `外设寄存器基地址`以及`兼容属性 `

> 关 于 I.MX 系列 SOC 的 GPIO 控 制 器 绑 定 信 息 请 查 看 文 档Documentation/devicetree/bindings/gpio/fsl-imx-gpio.txt
>
> ![image-20230919143314067](https://pic.imgdb.cn/item/6509473d204c2e34d3e5575d)
>
> 其实他那个cell我是没懂的...

#### GPIO 驱动程序

在`/drivers/gpio/gpio-mxc.c`中找到了相对应的驱动，这玩意就是6ull的GPIO驱动文件

```c
static const struct of_device_id mxc_gpio_dt_ids[] = {
	{ .compatible = "fsl,imx1-gpio", .data = &mxc_gpio_devtype[IMX1_GPIO], },
	{ .compatible = "fsl,imx21-gpio", .data = &mxc_gpio_devtype[IMX21_GPIO], },
	{ .compatible = "fsl,imx31-gpio", .data = &mxc_gpio_devtype[IMX31_GPIO], },
	{ .compatible = "fsl,imx35-gpio", .data = &mxc_gpio_devtype[IMX35_GPIO], },
	{ /* sentinel */ }
};
```

还是经典的of_device_id装有compatible属性用于匹配设备树

![image-20230919151504557](https://pic.imgdb.cn/item/65094a79204c2e34d3e7068b)

gpiolib开头的都为GPIO驱动的核心文件

```c
static struct platform_driver mxc_gpio_driver = {
	.driver		= {
		.name	= "gpio-mxc",
		.of_match_table = mxc_gpio_dt_ids,
	},
	.probe		= mxc_gpio_probe,
	.id_table	= mxc_gpio_devtype,
};
```

GPIO驱动也是个平 台设备驱动，因此当设备树中的设备节点与驱动的of_device_id 匹配以后 probe 函数就会执行

这函数有点长啊...

```c
struct mxc_gpio_port {//这玩意就是对6uGPIO的抽象
	struct list_head node;
	void __iomem *base;
	int irq;
	int irq_high;
	struct irq_domain *domain;
	struct bgpio_chip bgc;//这哥们
	u32 both_edges;
};
//描述 GPIO 寄存器组
static struct mxc_gpio_hwdata imx35_gpio_hwdata = {
	.dr_reg		= 0x00,
	.gdir_reg	= 0x04,
	.psr_reg	= 0x08,
	.icr1_reg	= 0x0c,
	.icr2_reg	= 0x10,
	.imr_reg	= 0x14,
	.isr_reg	= 0x18,
	.edge_sel_reg	= 0x1c,
	.low_level	= 0x00,
	.high_level	= 0x01,
	.rise_edge	= 0x02,
	.fall_edge	= 0x03,
};
//获取GPIIO硬件数据（就是GPIO寄存器组
static void mxc_gpio_get_hw(struct platform_device *pdev)
{
	const struct of_device_id *of_id =
			of_match_device(mxc_gpio_dt_ids, &pdev->dev);
	enum mxc_gpio_hwtype hwtype;

	if (of_id)
		pdev->id_entry = of_id->data;
	hwtype = pdev->id_entry->driver_data;

	if (mxc_gpio_hwtype) {
		/*
		 * The driver works with a reasonable presupposition,
		 * that is all gpio ports must be the same type when
		 * running on one soc.
		 */
		BUG_ON(mxc_gpio_hwtype != hwtype);
		return;
	}
/*mxc_gpio_hwdata 是个全局变量，如果硬件类型是 IMX35_GPIO 的话设置 
mxc_gpio_hwdat 为 imx35_gpio_hwdata。对于 I.MX6ULL 而言，硬件类型就是 IMX35_GPIO，imx35_gpio_hwdata 是个结构体变量，描述了 GPIO 寄存器组*/
    //有点逆天的，开了3个静态的struct，为了匹配
	if (hwtype == IMX35_GPIO)
		mxc_gpio_hwdata = &imx35_gpio_hwdata;
	else if (hwtype == IMX31_GPIO)
		mxc_gpio_hwdata = &imx31_gpio_hwdata;
	else
		mxc_gpio_hwdata = &imx1_imx21_gpio_hwdata;

	mxc_gpio_hwtype = hwtype;
}


static int mxc_gpio_probe(struct platform_device *pdev)
{
	struct device_node *np = pdev->dev.of_node;//设备树节点指针
	struct mxc_gpio_port *port;//gpio-mxc.c的重点工作就是维护该结构体
	struct resource *iores;
	int irq_base;
	int err;

	mxc_gpio_get_hw(pdev);//获取GPIIO硬件数据（就是GPIO寄存器组

	port = devm_kzalloc(&pdev->dev, sizeof(*port), GFP_KERNEL);
	if (!port)
		return -ENOMEM;
	//获取设备树中内存资源信息，reg属性
	iores = platform_get_resource(pdev, IORESOURCE_MEM, 0);
    //内存映射，得到0x0209C000在Linux内的虚拟地址
	port->base = devm_ioremap_resource(&pdev->dev, iores);
	if (IS_ERR(port->base))
		return PTR_ERR(port->base);

	port->irq_high = platform_get_irq(pdev, 1);//获取中断号
	port->irq = platform_get_irq(pdev, 0);
	if (port->irq < 0)
		return port->irq;

	/* disable the interrupt and clear the status */
	writel(0, port->base + GPIO_IMR);
	writel(~0, port->base + GPIO_ISR);
	//设置中断服务函数
	if (mxc_gpio_hwtype == IMX21_GPIO) {
		/*
		 * Setup one handler for all GPIO interrupts. Actually setting
		 * the handler is needed only once, but doing it for every port
		 * is more robust and easier.
		 */
		irq_set_chained_handler(port->irq, mx2_gpio_irq_handler);
	} else {
		/* setup one handler for each entry */
		irq_set_chained_handler(port->irq, mx3_gpio_irq_handler);
		irq_set_handler_data(port->irq, port);
		if (port->irq_high > 0) {
			/* setup handler for GPIO 16 to 31 */
			irq_set_chained_handler(port->irq_high,
						mx3_gpio_irq_handler);
			irq_set_handler_data(port->irq_high, port);
		}
	}
	//bgc->gc是gpio_chip接固体变量，抽象出来的GPIO控制器，大部分是函数
	err = bgpio_init(&port->bgc, &pdev->dev, 4,
			 port->base + GPIO_PSR,
			 port->base + GPIO_DR, NULL,
			 port->base + GPIO_GDIR, NULL, 0);
/*bgpio_init里面有三个setup函数：bgpio_setup_io、 bgpio_setup_accessors 和 bgpio_setup_direction。这三个函数就是初始化 bgc->gc 中的各种有关GPIO 的操作，比如输出，输入等等
GPIO_PSR、GPIO_DR和GPIO_GDIR都是I.MX6ULL的GPIO寄存器。这些寄存器地址会赋值给bgc参数的reg_dat、reg_set、reg_clr 和 reg_dir 这些成员变量*/
	if (err)
		goto out_bgio;

	port->bgc.gc.to_irq = mxc_gpio_to_irq;
	port->bgc.gc.base = (pdev->id < 0) ? of_alias_get_id(np, "gpio") * 32 :
					     pdev->id * 32;
//向 Linux 内核注册 gpio_chip,也就是port->bgc.gc
//注册完成以后我们就可以在驱动中使用gpiolib提供的各个API函数。
	err = gpiochip_add(&port->bgc.gc);
	if (err)
		goto out_bgpio_remove;

	irq_base = irq_alloc_descs(-1, 0, 32, numa_node_id());
	if (irq_base < 0) {
		err = irq_base;
		goto out_gpiochip_remove;
	}

	port->domain = irq_domain_add_legacy(np, 32, irq_base, 0,
					     &irq_domain_simple_ops, NULL);
	if (!port->domain) {
		err = -ENODEV;
		goto out_irqdesc_free;
	}

	/* gpio-mxc can be a generic irq chip */
	mxc_gpio_init_gc(port, irq_base);

	list_add_tail(&port->node, &mxc_gpio_ports);

	return 0;

out_irqdesc_free:
	irq_free_descs(irq_base, 32);
out_gpiochip_remove:
	gpiochip_remove(&port->bgc.gc);
out_bgpio_remove:
	bgpio_remove(&port->bgc);
out_bgio:
	dev_info(&pdev->dev, "%s failed with errno %d\n", __func__, err);
	return err;
}
```

#### GPIO子系统API函数

设置好设备树之后就可以用他的API来操作了，因为刚刚的子系统屏蔽了具体读写寄存器的过程，驱动分层和分离了

1. `int gpio_request(unsigned gpio,  const char *label)`：申请一个GPIO，用之前一定要申请
2. `void gpio_free(unsigned gpio)`：释放
3. `int gpio_direction_input(unsigned gpio)`：设置为输入
4. `int gpio_direction_output(unsigned gpio)`：设置为输出
5. `#define gpio_get_value  __gpio_get_value 
   int __gpio_get_value(unsigned gpio)`：获取GPIO的值
6. `#define gpio_set_value  __gpio_set_value 
   void __gpio_set_value(unsigned gpio, int value)`：设置某个GPIO的值

#### 设备树中添加  gpio 节点模板

在根节点下添加

```c
	gpioled{
		#address_cells = <1>;
		#size_cells = <1>;
		compatible = "atkalpha-gpioled";
		pinctrl-names = "default";
		pinctrl-0 = <&pinctrl_led>;
		led-gpio = <&gpio1 3 GPIO_ACTIVE_LOW>;
		status = "okay";
	};
```

在iomuxc下也加入

```c
		pinctrl_led:ledgrp{
			fsl,pins = <
				MX6UL_PAD_GPIO1_IO03__GPIO1_IO03 0x10B0 /* LED0 */
			>;
		};
```

:::warning

记得检查PIN是否被其他外设使用，直接搜应该就好

![image-20230920150839289](https://pic.imgdb.cn/item/650a9a7fc458853aef5bc920)

![image-20230920150945979](https://pic.imgdb.cn/item/650a9abac458853aef5bdca7)

这两娃注释掉就好

:::



## 并发与竞争

#### 原子操作

linux内核定义了`atomic_t`结构体完成整形数据的原子操作

```c
typedef struct {
 int counter;
 } atomic_t;

```

atomic_t b = ATOMIC_INIT(0);   //定义原子变量  b 并赋初值为  0



其余API操作如下：

![image-20230922123201420](https://pic.imgdb.cn/item/650d18cac458853aef2652af)

#### 原子位操作API

![image-20230922123453812](https://pic.imgdb.cn/item/650d196fc458853aef2677d2)

#### 自旋锁

:::tip

自旋锁适用于短时期的轻量级加锁，如果长时间等待可能会浪费处理器时间

:::

linux内核用`spinlock_t`表示自旋锁

```c
64 typedef struct spinlock {
65    union {
66        struct raw_spinlock rlock;
67
68 #ifdef CONFIG_DEBUG_LOCK_ALLOC
69 # define LOCK_PADSIZE (offsetof(struct raw_spinlock, dep_map))
70        struct {
71           u8 __padding[LOCK_PADSIZE];
72 struct lockdep_map dep_map;
73        };
74 #endif
75    };
76 } spinlock_t;
```

其API：

![image-20230922125543020](https://pic.imgdb.cn/item/650d1e51c458853aef27515e)

被自旋锁保护的临界区**一定不能**调用任何能够引起睡眠和**阻塞的API 函数**，否则的话会可能会导致死锁现象的发生

最好的解决方法是获取锁之前关闭本地中断（经典临界区）

其API是：

![image-20230922150800211](https://pic.imgdb.cn/item/650d3d51c458853aef30e019)

:::tip

建议用下面两个来保存中断状态

一般在线程中使用 spin_lock_irqsave/spin_unlock_irqrestore，在中断中使用 spin_lock/spin_unlock

:::

`下半部(BH)`也会竞争共享资源，有些资料也会将下半部叫做底半部。

1. void spin_lock_bh(spinlock_t *lock)：关闭下半部，获取自旋锁
2. void spin_unlock_bh(spinlock_t *lock)：打开下半部，并释放自旋锁。

#### 

#### 其他类型的锁

**读写自旋锁**为读和写操作提供了不同的锁，**一次只能允许一个写操作**，不能进行读操作。但是当没有写操作的时候可以进行**并发的读操作**。

Linux 内核使用 `rwlock_t `结构体表示读写锁

```c
typedef struct {
arch_rwlock_t raw_lock; 
} rwlock_t;
```

1. `DEFINE_RWLOCK(rwlock_t lock)`：定义并初始化读写锁
2. `void rwlock_init(rwlock_t *lock)`：初始化读写锁。

![image-20230922152025048](https://pic.imgdb.cn/item/650d403ac458853aef328d32)





![image-20230922152032033](https://pic.imgdb.cn/item/650d4041c458853aef328f09)



**顺序锁**是读写锁的基础上衍生出来的

这玩意可以允许写的时候读，但不能并发地写

顺序锁保护的资源**不能是指针**，在写操作的时候可能会导致指针无效，而这个时候恰巧有读操作访问指针的话就可能导致意外发生，比如读取野指针导致系统崩溃。

Linux 内核使用 seqlock_t 结构体表示顺序锁

```c
typedef struct {
	struct seqcount seqcount; 
	spinlock_t lock;
} seqlock_t;
```

![image-20230922153455428](https://pic.imgdb.cn/item/650d43a1c458853aef33ca1e)

记得注意几点：

1. 因为在等待自旋锁的时候处于“自旋”状态，因此**锁的持有时间不能太长**，一定要短，否则的话会降低系统性能。如果临界区比较大，运行时间比较长的话要选择其他的并发处理方式，比如稍后要讲的信号量和互斥体。

2. 自旋锁保护的临界区内**不能调用任何可能导致线程休眠的 API 函数**，否则的话可能导致死锁。

   > 很像在临界区里加入block的串口接收一样逆天

3. 不能递归申请自旋锁，因为一旦通过递归的方式申请一个你正在持有的锁，那么你就必须“自旋”，等待锁被释放，然而你正处于“自旋”状态，根本没法释放锁。结果就是自己把自己锁死了！

4. 在编写驱动程序的时候我们必须考虑到驱动的可移植性，因此不管你用的是单核的还是多核的  SOC，都将其当做多核  SOC 来编写驱动程序。

### 信号量

1. 因为信号量可以**使等待资源线程进入休眠状态**，因此适用于那些占用资源比较久的场合
2. 因此信号量不能用于中断中，因为信号量会引起休眠，中断不能休眠
3. 如果共享资源的持有时间比较短，那就不适合使用信号量了，因为频繁的休眠、切换线程引起的开销要远大于信号量带来的那点优势。

```c
struct semaphore {
	raw_spinlock_t      lock; 
	unsigned int      count; 
	struct list_head    wait_list;
};
```

![image-20230922154109674](https://pic.imgdb.cn/item/650d4517c458853aef3428b6)

使用示例

```c
struct semaphore sem; /* 定义信号量 */
sema_init(&sem, 1);//初始化
down(&sem);//申请信号量,会导致休眠那种
/* 临界区 */ 
up(&sem);	//释放
```

### 互斥体

mutex

```c
struct mutex {
	/* 1: unlocked, 0: locked, negative: locked, possible waiters */ 
	atomic_t        count;
	spinlock_t      wait_lock; 
};
```

使用mutex需要注意：

1. 这玩意也可以**导致休眠**！所以不要在中断中使用mutex，中断中只能用自旋锁
2. 和信号量一样，mutex 保护的临界区不可以**调用引起阻塞的 API 函数。**
3. 因为一次只有一个线程可以持有  mutex，因此，必须由  mutex 的持有者释放  mutex。并且  mutex 不能递归上锁和解锁

![image-20230922155642229](https://pic.imgdb.cn/item/650d48bcc458853aef35474d)





### 实例

#### 原子锁

```c
static int led_open(struct inode *inode, struct file *filp) {
  //判断原子变量的值来检查 LED 有没有被别的应用使用
  if(!atomic_dec_and_test(&gpio_led.lock)){
    //小于 0 的话就加 1,使其原子变量等于 0
    atomic_inc(&gpio_led.lock);
    return -EBUSY;
  }

  filp->private_data = &gpio_led;
  return 0;
}

static int __init led_init(void)
{
   int ret = 0;
   /* 初始化原子变量   */
   atomic_set(&gpioled.lock, 1);  /* 原子变量初始值为 1 */
```

每次用`atomic_dec_and_test`函数将lock-1，如果返回值为true就说明lock==0

说明是只有一个人用

如果返回false，就说明是负的，上面函数-1之后在用atomic_inc+1，使其变回0



#### 自旋锁

```c

static int led_open(struct inode *inode, struct file *filp) {
    unsigned long flags;

    filp->private_data = &gpio_led;

    // 上锁
    spin_lock_irqsave(&gpio_led.lock, flags);
    if (gpio_led.dev_stats) {//如果设备被使用了
        spin_unlock_irqrestore(&gpio_led.lock, flags); /* 解锁 */
        return -EBUSY;
    }
    gpio_led.dev_stats++; /* 如果设备没有打开，那么就标记已经打开了 */
    spin_unlock_irqrestore(&gpio_led.lock, flags); /* 解锁   */
    return 0;
}

static int led_release(struct inode *inode, struct file *filp) {
    struct gpioled_dev *dev = filp->private_data;
    unsigned long flags;
    /* 关闭驱动文件的时候将 dev_stats 减 1 */
    spin_lock_irqsave(&dev->lock, flags);  /* 上锁    */

    if (dev->dev_stats){
        dev->dev_stats--;
    }

    spin_unlock_irqrestore(&gpio_led.lock, flags);
    return 0;
}

static int __init led_init(void) {
//初始化自旋锁
  spin_lock_init(&gpio_led.lock);

```

`dev_status`>0代表设备占用

感觉写的还不是很优雅，可能OS课上的解法更加elegant

#### 信号量

```c
#include <linux/semaphore.h>
static int led_open(struct inode *inode, struct file *filp) {

    filp->private_data = &gpio_led;
    /* 获取信号量,sem-1<0 */
    if (down_interruptible(&gpio_led.sem)) {
        return -ERESTARTSYS;
    }
	//或者用down();
    return 0;
}
static int led_release(struct inode *inode, struct file *filp) {
    struct gpioled_dev *dev = filp->private_data;

    up(&gpio_led.sem);//释放信号量，信号量值+1

    return 0;
}

static int __init led_init(void) {
  //初始化自旋锁
  sema_init(&gpio_led.sem, 1);

```

怎么解释呢？

led_open尝试后，第一个来down的会将sem=1的-1，成功获取信号量后返回0，跳过if

如果sem=0将会把线程/任务`睡眠`，等待信号量的到来

有信号量（release后）才会返回0

如果睡眠过程中被信号中断，会返回-EINTR

#### 互斥量

```c
static int led_open(struct inode *inode, struct file *filp) {

    filp->private_data = &gpio_led;
    /* 获取互斥体,可以被信号打断    */
    if(rt_mutex_lock_interruptible(&gpio_led.lock)){
      return -ERESTARTSYS;
    }

// mutex_lock(&gpio_led.lock);//不能被信号打断  

    return 0;
}


static int led_release(struct inode *inode, struct file *filp) {
    struct gpioled_dev *dev = filp->private_data;
    //解锁
    mutex_unlock(&gpio_led.lock);

    return 0;
}
static int __init led_init(void) {

  mutex_init(&gpio_led.lock);

```

## 定时器

linux内核用全局变量jiffies来记录系统从启动以来的系统节拍数

节拍频率有100-1000不等

时钟源可能是cortexa7里的通用定时器

> 关于`jiffies`节拍变量溢出问题，linux可能有种机制叫`绕回`，32位的大概花49.7天（1000Hz）
>
> ![image-20230926200808971](https://pic.imgdb.cn/item/6512c9b0c458853aeff12fde)
>
> 如果unkown超过了known，time_after会返回真，相反time_before会返回假
>
> eq是加了=这个条件
>
> 所以只要用这个API就可以判断程序是否超时

#### jiffies与ms/us/ns转换函数

![image-20230926201302481](https://pic.imgdb.cn/item/6512cacec458853aeff1b732)

### 内核定时器

只需要提供`超时时间`(相当于定时值)和`定时处理函数`即可

不过这玩意超时后会自动关闭，需要重新开启才能周期性计时

linux用`timer_list`来表示内核定时器

```c
struct timer_list {
	/*
	 * All fields that change during normal runtime grouped to the
	 * same cacheline
	 */
	struct list_head entry;
	unsigned long expires;	//超时时间，单位是节拍数
	struct tvec_base *base;

	void (*function)(unsigned long);//定时处理函数
	unsigned long data;	//传递给function的的参数

	int slack;

#ifdef CONFIG_TIMER_STATS
	int start_pid;
	void *start_site;
	char start_comm[16];
#endif
#ifdef CONFIG_LOCKDEP
	struct lockdep_map lockdep_map;
#endif
};
```

how to use?

先定义一个这个struct，然后`init_timer（）`

设置好超时时间expires = jffies + msecs_to_jiffies(2000);/* 超时时间 2 秒 */

和超时处理函数

然后想内核注册定时器`add_timer()`，此刻就会马上运行

之后删除用`del_timer()`，或者`del_timer_sync()`



#### 内核短延时函数

![image-20230926204419406](https://pic.imgdb.cn/item/6512d223c458853aeff303d3)

## 中断

先回顾一下裸机里面中断的处理方法： 

1. 使能中断，初始化相应的寄存器
2. 注册中断服务函数，也就是向 ` irqTable `数组的指定标号处写入`中断服务函数`
3. 中断发生以后进入`  IRQ 中断服务函数`，在 IRQ 中断服务函数在数组  irqTable 里面查找 

具体的中断处理函数，找到以后执行相应的中断处理函数。

在 Linux 内核中也提供了大量的中断相关的   API  函数，我们来看一下这些跟中断有关的 API 函数



#### request_irq 函数

中断申请，会导致睡眠，所以**不能**在**中断上下文**或者**其他禁止睡眠**的代码段中使用 request_irq 函数。

request_irq 函数会激活(使能)中断，所以不需要我们手动去使能中断

```c
int request_irq(
    unsigned int irq, 
    irq_handler_t  handler, 
    unsigned long flags, 
    const char *name, 
    void *dev);
```

1. 中断号

2. 中断处理函数

3. 中断标志？在文件  include/linux/interrupt.h 里面查看所有的中断标志

   ![image-20231006205530952](https://pic.imgdb.cn/item/652003cbc458853aefcc30a4)

4. `name`：中断名，在/proc/interrupts看到中断名

5. `dev`：如果将  flags 设置为  IRQF_SHARED 的话，dev 用来区分不同的中断，一般情况下将 dev 设置为设备结构体，dev 会传递给中断处理函数  irq_handler_t 的第二个参数



#### free_irq

顾名思义

#### 中断处理函数

```c
irqreturn_t (*irq_handler_t) (int, void *)
```

中断号，不知道

返回类型

```c
enum irqreturn {
	IRQ_NONE		= (0 << 0),//interrupt was not from this device
	IRQ_HANDLED		= (1 << 0),//interrupt was handled by this device
	IRQ_WAKE_THREAD		= (1 << 1),//handler requests to wake the handler thread
};

typedef enum irqreturn irqreturn_t;
```

一般中断返回类型是：

```c
return IRQ_RETVAL(IRQ_HANDLED)
```

#### 中断使能与禁止

```c
void enable_irq(unsigned int irq) 
void disable_irq(unsigned int irq)
```

指定中断号

`disable_irq`要等到当前的执行的中断处理函数执行完才返回

所以需要保证不会产生下一个中断，并且处理函数已经全部完成

所以可以用另一个

```c
void disable_irq_nosync(unsigned int irq)
```



关闭整个中断

```c
local_irq_enable() 
local_irq_disable()
```



:::warning

有点没懂一个

```c
local_irq_save(flags) 
local_irq_restore(flags)
```

这两个函数是一对，local_irq_save 函数用于禁止中断，并且将中断状态保存在flags 中。

local_irq_restore 用于恢复中断，将中断到  flags 状态。

> 实际用途是？怎么用？

:::

#### 上半部与下半部

上半部：上半部就是中断处理函数，那些处理过程比较快，不会占用很长时间的处理就可以放在上半部完成。

> 上半部：快进快出，只对flag处理，数据不做处理，可以拷贝内存

下半部：如果中断处理过程比较耗时，那么就将这些比较耗时的代码提出来，交给下半部去执行，这样中断处理函数就会快进快出。

> 下半部：处理耗时部分

1. 如果要处理的内容不希望被其他中断打断，那么可以放到上半部
2. 如果要处理的任务对时间敏感，可以放到上半部
3. 如果要处理的任务与硬件有关，可以放到上半部
4. 除了上述三点以外的其他任务，优先考虑放到下半部

Linux内核提供多种下半部机制

1. `软中断`：开始 Linux 内核提供了“bottom half”机制来实现下半部，简称“BH”。后面引入了软中断和 tasklet 来替代“BH”机制，完全可以使用软中断和 tasklet 来替代 BH，从 2.5 版本的 Linux 内核开始 BH 已经被抛弃了。

   用`softirq_action`来表示软中断

   ```c
   433 struct softirq_action
   434 {
   435 void (*action)(struct softirq_action *);
   436 };
   ```

   在  kernel/softirq.c 文件中一共定义了 10 个软中断

   ```c
   static struct softirq_action softirq_vec[NR_SOFTIRQS];
   enum
   {
       HI_SOFTIRQ=0,	//高级软中断
       TIMER_SOFTIRQ,	//定时器软中断
       NET_TX_SOFTIRQ,//网络数据发送软中断
       NET_RX_SOFTIRQ, 
       BLOCK_SOFTIRQ, 	
       BLOCK_IOPOLL_SOFTIRQ, 
       TASKLET_SOFTIRQ,	//tasklet软中断 
       SCHED_SOFTIRQ, 	//调度软中断
       HRTIMER_SOFTIRQ, //高精度定时器软中断
       RCU_SOFTIRQ,	//RCU软中断
       NR_SOFTIRQS	
   };
   ```

   数组 softirq_vec 是个全局数组，因此所有的 CPU(对于 SMP 系统而言)都可以访问到，每个 CPU 都有自己的触发和控制机制，并且只执行自己所触发的软中断

   但是各个CPU执行的软中断服务函数都是一样的，都是action函数

   要使用软中断，必须先使用 open_softirq 函数注册对应的软中断处理函数

   ```c
   void open_softirq(int nr,  void (*action)(struct softirq_action *))
   ```

   1. nr是上面的枚举类型
   2. 处理函数

   注册好软中断以后需要通过 raise_softirq 函数触发

   ```c
   void raise_softirq(unsigned int nr)
   ```

   软 中 断 必 须 在 编 译 的 时 候 静 态 注 册！Linux内核使用    softirq_init函数初始化软中断 ，softirq_init 函数定义在  kernel/softirq.c 文件里面

   softirq_init会默认开启TASKLET_SOFTIRQ和HI_SOFTIRQ中断

2. `tasklet`：利用软中断来实现的另外一种下半部机制，在软中断和  tasklet 之间，建议使用  tasklet。Linux 内核使用  tasklet_struct 结构体来表示  tasklet

   ![image-20231007093433464](https://pic.imgdb.cn/item/6520b5b1c458853aef056e29)

   初始化tasklet_struct：

   ```c
   void tasklet_init(struct tasklet_struct *t,void (*func)(unsigned long), unsigned long  data);
   ```

   也可以使用宏DECLARE_TASKLET来一次性完成 tasklet的定义和初始化， DECLARE_TASKLET 定义在  include/linux/interrupt.h 文件中

   ```c
   DECLARE_TASKLET(name, func, data)
   ```

   在上半部，也就是中断处理函数中`调用  tasklet_schedule 函数`就能使  **tasklet 在合适的时间运行**

   ```c
   void tasklet_schedule(struct tasklet_struct *t)
   ```

   t是要调度的tasklet，也就是上面的name

   示例程序

   ```c
   /* 定义 tasklet*/
   struct tasklet_struct testtasklet;
   
   /* tasklet 处理函数 */
   void testtasklet_func(unsigned long data) 
   {
   	/* tasklet 具体处理内容    */
   }
   /* 中断处理函数    */
   irqreturn_t test_handler(int irq, void *dev_id) 
   {
   	......
   	/* 调度 tasklet       */ 
   	tasklet_schedule(&testtasklet);
   	...... 
   }
   /* 驱动入口函数*/
   static int __init xxxx_init(void) 
   {
       /* 初始化 tasklet  */
       tasklet_init(&testtasklet, testtasklet_func, data);
       /* 注册中断处理函数 */
       request_irq(xxx_irq, test_handler, 0, "xxx", &xxx_dev);
       
   }
   ```

3. `工作队列`：是另外一种下半部执行方式，工作队列在**进程上下文执行**，工作队列将要推后的 
   工作**交给一个内核线程去执行**，因为工作队列工作在进程上下文，因此工作队列允许睡眠或重 
   新调度。因此如果你要推后的工作可以睡眠那么就可以选择工作队列，否则的话就只能选择软 
   中断或 tasklet

   ```c
   struct work_struct {
   	atomic_long_t data; 
   	struct list_head entry;
   	work_func_t func;	/* 工作队列处理函数 */
   };
   ```

   这些工作组织成工作队列，工作队列使用  workqueue_struct 结构体表示

   ```c
   struct workqueue_struct {
   	struct list_head    pwqs;
   	struct list_head    list;
   	struct mutex        mutex;
   	int       work_color;
       int       flush_color;
   	atomic_t        nr_pwqs_to_flush;
       struct wq_flusher  *first_flusher;
   	struct list_head    flusher_queue;
   	struct list_head    flusher_overflow;
   	struct list_head    maydays;
   	struct worker      *rescuer; 
   	int       nr_drainers;
   	int       saved_max_active;
   	struct workqueue_attrs *unbound_attrs; 
   	struct pool_workqueue  *dfl_pwq;
   	char         name[WQ_NAME_LEN]; 
   	struct rcu_head     rcu;
   	unsigned int      flags ____cacheline_aligned; 
   	struct pool_workqueue __percpu *cpu_pwqs; 
   	struct pool_workqueue __rcu *numa_pwq_tbl[];
   };
   ```

   Linux 内核使用工作者线程(worker thread)来处理工作队列中的各个工作，Linux 内核使用worker 结构体表示工作者线程，worker ：

   ```c
   struct worker { 
   	union {
   		struct list_head    entry; 
   		struct hlist_node   hentry;
   	};
   	struct work_struct *current_work; 
   	work_func_t     current_func;
   	struct pool_workqueue  *current_pwq; 
   	bool         desc_valid;
   	struct list_head    scheduled;
   	struct task_struct *task;
   	struct worker_pool *pool;
   	struct list_head    node; 
   	unsigned long     last_active; 
   	unsigned int      flags;
   	int       id;
   	char desc[WORKER_DESC_LEN]; 
   	struct workqueue_struct *rescue_wq;
   };
   ```

   在实际的驱动开发中，我们**只需要定义工作(work_struct)即可**，关于工作队列和工作者线程我们基本不用去管。简单创建工作很简单，直接定义一个 work_struct 结构体变量即可，然后使用 INIT_WORK 宏来初始化工作，INIT_WORK 宏定义如下：

   ```c
   #define INIT_WORK(_work, _func)
   ```

   也可以使用 DECLARE_WORK 宏一次性完成工作的创建和初始化，宏定义如下：

   ```c
   #define DECLARE_WORK(n, f)
   ```

   和  tasklet 一样，工作也是需要调度才能运行的，工作的调度函数为  schedule_work，函数原 
   型如下所示：

   ```c
   bool schedule_work(struct work_struct *work)
   ```

   测试：

   ```c
   /* 定义工作(work) */ 
   struct work_struct testwork;
   /* work 处理函数 */
   void testwork_func_t(struct work_struct *work); 
   {
   	/* work 具体处理内容 */
       
   }
   /* 中断处理函数 */
   irqreturn_t test_handler(int irq, void *dev_id) 
   {
   	......
   	/* 调度 work          */ 
   	schedule_work(&testwork);
   	...... 
   }
   /* 驱动入口函数
   static int __init xxxx_init(void) 
   {
       ......
   	/* 初始化 work         */
   	INIT_WORK(&testwork, testwork_func_t); 
   	/* 注册中断处理函数                       */
   	request_irq(xxx_irq, test_handler, 0, "xxx", &xxx_dev);
   	...... 
   }
   ```

   #### `设备树中断节点信息`

   设备树绑定信息参考文档：Documentation/devicetree/bindings/arm/gic.txt

   突然发现他们的文档其实是非常全的

   主要关注几个

   1. imx6ull.dts里的

      ```c
      	intc: interrupt-controller@00a01000 {
      		compatible = "arm,cortex-a7-gic";
      		#interrupt-cells = <3>;
      		interrupt-controller;
      		reg = <0x00a01000 0x1000>,
      		      <0x00a02000 0x100>;
      	};
      	gpio5: gpio@020ac000 {
      				compatible = "fsl,imx6ul-gpio", "fsl,imx35-gpio";
      				reg = <0x020ac000 0x4000>;
      				interrupts = <GIC_SPI 74 IRQ_TYPE_LEVEL_HIGH>,
      					     <GIC_SPI 75 IRQ_TYPE_LEVEL_HIGH>;
      				gpio-controller;
      				#gpio-cells = <2>;
      				interrupt-controller;
      				#interrupt-cells = <2>;
      			};
      ```

   2. imx6ull-al...

      ```c
      	fxls8471@1e {
      		compatible = "fsl,fxls8471";
      		reg = <0x1e>;
      		position = <0>;
      		interrupt-parent = <&gpio5>;
      		interrupts = <0 8>;
      	};
      ```

#interrupt-cells 表示中断控制器下的cells大小，每一个cells都是32位的

第一个 cells：中断类型，0 表示  SPI 中断，1 表示  PPI 中断

第二个  cells：中断号，对于  SPI 中断来说中断号的范围为  0~987，对于  PPI 中断来说中断 
号的范围为  0~15

第三个 cells：标志，bit[3:0]表示中断触发类型，为 1 的时候表示上升沿触发，为 2 的时候表示下降沿触发，为 4 的时候表示高电平触发，为 8 的时候表示低电平触发。bit[15:8]为 PPI 中断的 CPU 掩码

第一个的cells必须为3

但是到了第二个是2



看gpio5

> 	interrupts = <GIC_SPI 74 IRQ_TYPE_LEVEL_HIGH>,
> 			<GIC_SPI 75 IRQ_TYPE_LEVEL_HIGH>;

74 75 表示中断源，一个是 74，一个是 75

![image-20231007220604131](https://pic.imgdb.cn/item/652165ccc458853aef786a2e)

74是gpio5前16个，75是后16个

interrupts = <0 8>;表示指定中断号，中断方式（0是0中断号，8是fsl指定的触发方式，比如说上升沿触发

#### 获取中断号

```c
unsigned int irq_of_parse_and_map(struct device_node *dev,int index);
```

设备节点，索引号，返回中断号



但是gpio的更简单

```c
int gpio_to_irq(unsigned int gpio)
```

返回irq号



