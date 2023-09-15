---
slug: c-study-notes
title: C用法笔记
date: 2023-08-19
authors: pansyhou
tags: [随笔, 杂谈, C]
keywords: [随笔, 杂谈,C]
---



<!-- truncate -->

## U-boot

### 8.19

在uboot/common/board_f.c中，有这初始化波特率到gd的代码

1. 弱函数声明接口

2. 字符串获得config实现不同arch的初始化

   ```c
   /**
    * Decode the integer value of an environment variable and return it.
    *
    * @param name		Name of environemnt variable
    * @param base		Number base to use (normally 10, or 16 for hex)
    * @param default_val	Default value to return if the variable is not
    *			found
    * @return the decoded value, or default_val if not found
    */
   ulong getenv_ulong(const char *name, int base, ulong default_val)
   {
   	/*
   	 * We can use getenv() here, even before relocation, since the
   	 * environment variable value is an integer and thus short.
   	 */
   	const char *str = getenv(name);
   
   	return str ? simple_strtoul(str, NULL, base) : default_val;
   }
   ```


## Linux

### THIS_MODULE

```c
#define THIS_MODULE ((struct module *)0)

static struct file_operations led_fops = {
    .owner = THIS_MODULE,
    .open = led_open,
    .read = led_read,
    .write = led_write,
    .release = led_release,
};
```

这是文件的fop结构体，重点在`THIS_MODULE`宏

这个字段说明谁是`struct file_operations`的所有者。这可以防止模块在运行时被卸载。当初始化为`THIS_MODULE`时，当前模块拥有其所有权。

可能和我想象中的不一样吧

