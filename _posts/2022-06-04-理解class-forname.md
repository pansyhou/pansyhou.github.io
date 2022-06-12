---
layout: post
title: 理解Class.forName()
date: 2022-06-04 20:28 +0800
category: []
tags: []
pin: false
author: pansyhou
toc: true
comments: true
typora-root-url: "../../pansyhou.github.io"
math: false
mermaid: true
---

## Class.forName()方法

该方法就是加载指定的类，进行初始化

```java
@CallerSensitive
public static Class<?> forName(String className) throws ClassNotFoundException {
    Class<?> caller = Reflection.getCallerClass();
    return forName0(className, true, ClassLoader.getClassLoader(caller), caller);
}
```

- 最后调用了forName0（）方法

  

```java
private static native Class<?> forName0(String name, boolean initialize,
            ClassLoader loader,
            Class<?> caller)
throws ClassNotFoundException;
```

> *Returns the Class object associated with the class or interface with the given string name, using the given class loader. Given the fully qualified name for a class or interface (in the same format returned by getName) this method attempts to locate, load, and link the class or interface. The specified class loader is used to load the class or interface. If the parameter loader is null, the class is loaded through the bootstrap class loader. The class is initialized only if the initialize parameter is true and if it has not been initialized earlier.*

  我们知道他return 一个给定类或者接口的一个 Class 对象就能稍微能理解泛型里的使用了。





------

## 参考教程

[Java class.forname 详解 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/java-class-forname.html)
