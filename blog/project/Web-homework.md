---
slug: DUGT-Web-bighomework
title: web大作业
date: 2023-06-21
authors: pansyhou
tags: [前端]
keywords: [前端]

---

前端大作业，听说没备案加上不能放学校logo，连夜撤掉

虽然说github pages在国外，可以不备案的，但是还是撤了



<!-- truncate -->

# DUGT-Web-bighomework

## 实验环境

- 系统：windows10
- 屏幕分辨率：2k
- 浏览器：Microsoft Edge版本 113.0.1774.35 (正式版本) (64 位)



## 实验项目需求

1. 有大主页index，可以对整个战队有个清晰的链接
2. 有对赛事的大介绍，同时对赛事细节做介绍
3. 有战队的大介绍，对战队的分组做介绍
4. 有对战队的报名表单
5. 适当的缩放对元素的定位大小等等是可动的（不会乱串导致奇怪的现象

## 实验报告内容

### index主页，即导航栏上RoboMaster图标跳转

#### html结构组成

![image-20230619163425733](https://pic.imgdb.cn/item/649013111ddac507cc3ada2e)

由一个`__nuxt`和`__layout`的盒子封装主体

- `nav-header`为导航栏盒子
- `seasonImg`为导航栏下面的视频、标题和按钮的盒子
- `homelist`为介绍精彩对局、加入ACE的海报和按钮的盒子
- `related-nav`为关联链接的导航栏
- `related-content`是导航栏点到之后显示的内容盒子
- `_footer`为最下面的版权、微信、哔哩哔哩的宣传盒子

注意，下面的页面结构均为这样的，不做赘述。

#### 最上方的展示

![](https://pic.imgdb.cn/item/649012a11ddac507cc3a5154)

为了实现在视频上方加入标题，在视频后面加了一层屏蔽罩

![image-20230619164109267](https://pic.imgdb.cn/item/649014a61ddac507cc3d1a54)

#### 中间海报的展示

中间的3个海报采用了flex容器，不换行，同时设定最小宽度和拉伸，可以最大限度的防止适当的缩放对海报的定位大小等等是可动的。

![image-20230619164519264](https://pic.imgdb.cn/item/649015a21ddac507cc3e7f00)

 中间的相关内容导航栏为了图方便，采用了js来实现切换。

通过添加和删除`active` 类，编写了`querySelectorAll` 和 `forEach` 方法来遍历元素列表，并使用模板字符串来构造选择器。可以实现简单的标签页切换功能

```js
function showTab(tabId) {
  // 删除所有tab-link的active类
  const tabLinks = document.querySelectorAll('.tab-link');
  tabLinks.forEach(link => link.classList.remove('active'));

  // 隐藏所有的tab-content
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  // 显示指定的tab-content
  const tabLink = document.querySelector(`a[href="#${tabId}"]`);
  tabLink.classList.add('active');
  const tabContent = document.querySelector(`#${tabId}`);
  tabContent.classList.add('active');
}
```

#### 页脚的展示

最下面的footer比较有意思的是左边两个宣传的元素，利用了一个翻转卡片hover+transform: rotateY();实现鼠标移动上去后翻转显示另一边二维码，因为二维码一般是有冗余的，不必担心扫不到。

![image-20230619165009378](https://pic.imgdb.cn/item/649016c11ddac507cc3ffa79)

### introduce赛事介绍页面

#### 最上面的展示

![image-20230619165620259](https://pic.imgdb.cn/item/649018361ddac507cc41dde1)

最上面的海报由一个图加上width100%实现的缩放图片不动，同时，标题由一个h1加上绝对定位实现的内嵌

下面的关于赛事是一个大盒子，h2有一个毛玻璃效果的background。

同时主体由一个中盒子包着图片和内容，加上相对定位微调后实现居中



#### 中间的展示

![image-20230619170018196](https://pic.imgdb.cn/item/649019271ddac507cc431edc)

赛事设置里有两个小卡片，里面也是用hover+transform实现的过渡，加上background

下面的兵种介绍也类似，毛玻璃背景+盒子



### 战队介绍

![image-20230619170213098](https://pic.imgdb.cn/item/649019971ddac507cc444720)

后来发现了不同的居中方法，在 **flex 格式化上下文**中，设置了 `margin: auto` 的元素，在通过 `justify-content` 和 `align-self` 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去

这里，很重要的一点是，margin auto 的生效不仅是水平方向，垂直方向也会自动去分配这个剩余空间。

#### 中间展示

![image-20230619170433530](https://pic.imgdb.cn/item/64901a221ddac507cc456ba9)

下面这里用了flex布局，采用了几个盒子将组别装起来，比较好的是可以根据缩放来分配多少个盒子

![image-20230619170520141](https://pic.imgdb.cn/item/64901a511ddac507cc45b1c3)

### 报名中心

写了个form套进去

![image-20230619170548548](https://pic.imgdb.cn/item/64901a6d1ddac507cc45dcec)

### 记得来我的博客康康哦=>