---
slug: c-study-notes
title: C用法笔记
date: 2023-08-19
authors: pansyhou
tags: [随笔, 杂谈, C]
keywords: [随笔, 杂谈,C]
---

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

   