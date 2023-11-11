---
id: repo
slug: /repo
title: repo仓库管理
---

## repo初始化

对照野火的拉取repo命令来看

```
# 拉取LubanCat-RK3588系列Linux_SDK
repo init --depth=1 -u https://github.com/LubanCat/manifests.git -b linux -m rk3588_linux_release.xml
```



```
repo init -u manifest_git_path -m manifest_file_name -b branch_name --repo-url=repo_url --no-repo-verify
```

1. `-u ` ：指定了manifest仓库路径

   野火的：`-u https://github.com/LubanCat/manifests.git`

2. `-m `：指定要使用的Manifest文件。不指定的话，默认为default.xml文件

   野火的：`-m rk3588_linux_release.xml`

3. `-b`：指定了分支

   野火：`-b linux`指向linux分支

4. --depth=1 指定了拉取深度，如果拉着拉着爆金币的话加入这个选项可能会好点











## reference

1. [【精选】git repo工具详细使用教程——彻底学会Android repo的使用-CSDN博客](https://blog.csdn.net/ljz0929/article/details/122928242)