---
id: 01-liner-list
slug: /01-liner-list
title: 01-线性表
---


# 线性表

## 线性表的线性表示

### concept

1. 头指针：L，或者 head 指针，NULL 时为空，
2. 头结点：为了操作方便，单链表在第一个数据节点之前附加一个节点，叫做头结点
3. 二者关系：头指针始终指向链表的第一个节点，二头结点是带头结点链表的第一个节点
   1. 优点：
      1. 由于第一个数据结点的位置被存放在头结点的指针域中，因此在 ==链表的第一个位置上的操作和在表的其他位置上的操作一致==，无须进行特殊处理。
      2. 无论链表是否为空，其头指针都是 **指向头结点的非空指针**(空表中头结点的指针域为空)，因此空表和非空表的处理也就得到了统一。
   2. （带头结点可太方便了

### 单链表的基本操作

#### 带头结点的单链表初始化

```
bool InitList(LinkList &L){
	L=(LNode*)malloc(sizeof(LNode));//创建头结点
	if(L==NULL)return false;
	L->next=NUll;//头结点暂时没有元素节点
	return true;
}
```

> 访问指针时，用 p-> data/(*p).data
>
> (* (* p).next).data 或者 p-> next-> data



#### 按序号查找

```c
LNode *GetElem(LinkList &L,int i){
	LNode *p=L->next;
    int j=0;
    while(p!=NULL && j<i){//注意，不是p->next，因为提前判断会把要搜的给跳过了极端情况为i=0
        p=p->next;
        j++;	
    }
    return p;
}
```

==接下来的按值查找的判断条件也是 p!= NULL，注意一下==

#### 插入节点

```c
bool InsertNode(LinkList &L,int i,ElemType e){
    if(i<0)return false;
    LNode *p=L;
    int j=0;
    while(p!=NULL&&j<i-1){//注意为i-1，i的前驱结点
        p=p->next;
        j++;
    }
    //找到前驱结点后，判断i是否合法
    if(p==NULL)return false;
    //假设有数据域
    LNode *new =(LNode *)malloc(sizeof(LNode));
    if(new==NULL)return false;
    new->data=e;
   	new->next=p->next;
    p->next=new;
    return ture;
}
```



**后插实现**(很骚的)

```c
	new->next=p->next;
	p->next=new;
	
	temp=new->data;//交换数据域
	new->data=p->data;
	p->data=temp;

```



#### 删除节点

```c
bool ListDelete(LinkList &L, int i, ElemType e){
    LNode *p=L;
    int j=0;
    while(p!=NULL&&j<i-1){
        p=p->next;
        j++;
    }
    if(p==NULL||p->next==NULL){//i值不合法
		return false;
    
    }
    LNode *q=p->next;//暂存中间的
    e=q->data;//返回删除的元素
    p->next=q->next;//拉两边
    //完事儿
    free(q);
    return true; 
}
```



删除节点 *p （但注意，这个是有 bug 的 =)，假设后驱为 NULL，删不掉 * p 了

理论：删掉 1？把 2 的数据覆盖在 1，删除 2

```c
q=p->next; //q=p的前驱，但是如果没有next，那就删不掉p了
p->data=q->data;//用2的data覆盖掉1
p->next=q->next;//2就被删掉了
free(q);
```



#### 头插法建立单链表 p34

```
new =malloc;//新建
new->data=e;//设置数据域
new->next=L->next;//先连接最前面的
L->next=new;//后连上新的
```

#### 尾插法



**r 为表尾指针**

```c
new->data=e;
r->next=new;
new->next=NULL;
r=new;
```



#### 统计表长

带头结点的：

```c
int len=;
while(p->next!=NULL){//假设是p!=NULL?，带头结点的会多+1个
	j++;
	p=p->next;
}
return len;
```



不带头结点



用时 2h 完成单链表操作

### 双链表

#### 双链表的插入

一般先完成新的对后继结点的操作，再让新的对前驱结点进行操作

主要在对后驱节点的判空

最好还是画个图，小心乱指（回环警告！

```c
if(p==NULL||new=NULL)return false;
new->next=p->next;//新的next=后驱节点
if(p->next!=NULL)//判断p有无后驱结点
	p->next->prior=new;//后驱节点prior=新的next
//再对前面操作
p->next=new;
new->prior=p;
```

#### 双链表的删除

只需要修改 p 的 next 和 最后一个的 prior

![](https://pic.imgdb.cn/item/660956439f345e8d032b873f.png)

```c
p->next=q->next;
q->next->prior=p;
free(q);
```

健壮性



## 我超你妈的 typora，还我队列！: rage:

## 队列

![](https://pic.imgdb.cn/item/660e652668eb9357131ce3b0.png)

> 永远记住，**队头出，队尾入**
>
> ==队头出，队尾入==



### 顺序存储

```c
#define MaxSize 450
typedef struct{
    ElemType data[MaxSize];
    int front ,rear;//对头队尾
}
```

#### 循环队列的初值

初始时：Q.front = Q.rear = 0

队首指针进一：Q.front =(Q.front+1)%MaxSize; 注意此时的操作为出队，删除元素

队尾指针进一：Q.rear =(Q.rear+1)%MaxSize; 注意此时的操作为进队，+1

队列长度：==（rear-front+MaxSIze）%MaxSize==

判断空队列：rear == front

> ::: tip
>
> **==队尾 rear 先放再加==**
>
> ```c
> Q.data[rear]=x;
> rear++;
> ```
>
> :::

> ::: caution
>
> 上面这些队列长度什么的，都要根据题目现场推测队列的 **算法**，（模型），鼠鼠已经错了很多了
>
> ![](https://pic.imgdb.cn/item/660e697d68eb93571325414c.png)
>
> :::



其余的注意判断队是不是满了或者空来完成操作就行



#### 判断队空队满的方法三种

1. 牺牲一个空间
2. 增加 size 成员，与 MaxSize 比较
3. 增加 tag 成员，删除成功-1，插入成功+1
   1. front == rear 时，-1 为空，1 为满

### 链式存储

```c
typedef struct{
    Element data;
    struct LinkNode *next;
}LinkNode;
typedef struct{
    LinkNode *front,*rear;
}LinkQueue;
```

==不带头结点时，front 和 rear = NULL 为空==

### 双端队列

1. 输出受限双端队列
2. 输入受限双端队列

![](https://pic.imgdb.cn/item/660e6b5d68eb935713285cb0.png)

#### 输出受限双端队列

因为只能从一边输出，我们将输出的序列倒着写（模拟输出的形式），然后看看怎么样从两边插入能够搞出来这个序列即可

#### 输入受限双端队列

因为只能从一边输入，按照输入队列看看能不能搞出来输出队列



### 错题

#### MaxSIze 与数组下标的区别，对计算队列长度的影响

![](https://pic.imgdb.cn/item/660e6c6368eb9357132b9598.png)

#### 循环队列模型与题目有区别时，注意理解题目的模型

![](https://pic.imgdb.cn/item/660e6d9468eb9357132eedac.png)





## 栈和队列的运用

### 括号匹配

1. 左括号入栈
2. 右括号匹配栈顶，匹配不成功就是烂
3. 算法结束后，栈不为空就是烂



### 表达式求值（中缀转后缀、后缀求数值）

#### 中缀转后缀

> **后缀左优先，前缀右优先**

A+B*(C-D)-E/F

1. 遇到**操作数**，加入后缀表达式
2. 遇到**括号**，（就加入，）就将栈里被括起来的，按出栈掏出来
3. 遇到==运算符==
   1. 同等级的，出一个进一个
   2. 如果栈顶**优先级高**，如栈顶为* /，扫到的是+-，依次将==栈顶的 * /和后面的+-==出栈，然后将扫到的入栈（第10步）
   3. 如果栈顶**优先级低**，如栈顶为+-，扫到的是/*，入栈，等遇到优先级相同或者到最后再出
4. 最后可以自己验证一下算的对不对

![](https://pic.imgdb.cn/item/660e6f4468eb935713324bd3.png)





:::tip

**试试`a+b-a*((c+d)/e-f)+g`转为 `ab+acd+e/f-*-g+`**

:::



#### 后缀表达式求值

**扫描后缀表达式，数字就入栈，碰到操作数就`出栈两个元素`进行`操作`然后`入栈`**

==记得把操作后的结果重新进栈就行。。。==

**错题如下**

![](https://pic.imgdb.cn/item/660e71b468eb9357133623f5.png)

### 栈在递归中的应用

每次调用function会产生一frame，每一frame included

1. 局部变量
2. 入参
3. 返回地址

==记得画一个调用过程的树帮助理解==

### 队列在层次遍历中的应用

广度优先搜索![](https://pic.imgdb.cn/item/660e9e9368eb93571395474b.png)



## 数组和特殊矩阵的压缩存储



![](https://pic.imgdb.cn/item/660f655868eb935713dcb995.png)

**==最sb的一集，我感觉王道这讲的一坨烂屎，给学生思考空间是吧==**

### 三角上矩阵（最SB的一集...直接放弃考研）

![](https://pic.imgdb.cn/item/660f99e768eb93571344dc53.png)

#### 元素$a_{i,j}$​下标转换为一维数组下标

思路

:::warning

最SB的一集。。。，希望王道做个人，卷子把它撕咯直接放弃考研

:::

1. 上三角区：$a_{i,j}$包括自己的前面元素的Sum$Sum=\frac{(i-1)(n+n-i+2)}{2}+(j-i-1)$
   1. **1到i-1行**（不包括当前行）的总和
      1. 1到i-1的总和n=i-1
      2. $a_1$=n，$a_n$​=n-i+1+1(i+1是弥补那个sb的从1开始的下标，再加1的原因是，1到i是n-i+1个元素，如果是到i-1行的话就再还回去一个元素)
      3. 求和公式是$Sum=\frac{n(a_1+a_n) }{2}$
   2. **i当前行**的总和
      1. 第i行元素和`j-i+1`，j是当前列，因为是三角矩阵，所以删掉下三角的i，因为还要加上自己所以+1
2. **sum-1**就是从0开始的一维数组下标
   1. $Sum=\frac{(i-1)(n+ n-i+2) }{2}+(j-i-1) -1$
   2. 化简后得到$一维数组下标=\frac{(i-1)(2n-i+2) }{2}+j-i$​
3. 下三角区：
   1. 映射到常量c区：$\frac{n(n+1)}{2}$



> 什么，你跟我说按列优先不用这么麻烦？跟普通的对角矩阵一样？
>
> 吵！

### 三对角矩阵

![](https://pic.imgdb.cn/item/660fa3b168eb9357135b9066.png)

1. 前`i-1`行元素=3*(i-1)-1个（-1是左上角少的一个元素，然后每一行都有3个，-1是去掉第一行）
2. $a_{i,j}$是i行第`j-i+2`个元素（不知道为什么，可能是对称的原因，你就记吧=(                
3. `sum`=3*(i-1)-1+j-i+2=`2i+j-2`

**==一维数组下标k=2i+j-3==**

#### 一维数组k转$a_{i,j}$

![](https://pic.imgdb.cn/item/660fa90e68eb9357136728d0.png)

i=[(k+2)/3]向上取整

由k=2i+j-3得，j=k-2i+3

### 稀疏矩阵的压缩存储

非零元素少

#### 法一：用一个三元组<i,j,v>存储

define a struct，包含i,j和值

缺点：失去随机存储的特性

#### 法二：十字链表法（没懂）

![](https://pic.imgdb.cn/item/660fab7a68eb9357136be18b.png)

不能说没懂，但是这玩意也做不到随机存取吧？

### 如何学好这章？

这个好像年年基本上出一题，掌握好核心科技（推导方法）即可

注意他是怎么样优先，是 `行优先` 还是 `列优先`

两者转换为一维数组的k是不同的

