---
id: 01-liner-list
slug: /01-liner-list
title: 01-线性表
---


# 线性表

## 线性表的线性表示

### concept

1. 头指针：L，或者head指针，NULL时为空，
2. 头结点：为了操作方便，单链表在第一个数据节点之前附加一个节点，叫做头结点
3. 二者关系：头指针始终指向链表的第一个节点，二头结点是带头结点链表的第一个节点
   1. 优点：
      1. 由于第一个数据结点的位置被存放在头结点的指针域中，因此在==链表的第一个位置上的操作和在表的其他位置上的操作一致==，无须进行特殊处理。
      2. 无论链表是否为空，其头指针都是**指向头结点的非空指针**(空表中头结点的指针域为空)，因此空表和非空表的处理也就得到了统一。
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

> 访问指针时，用p->data/(*p).data
>
> (* (*p).next).data或者p->next->data



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

==接下来的按值查找的判断条件也是p!=NULL，注意一下==

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



删除节点*p （但注意，这个是有bug 的=)，假设后驱为NULL，删不掉 * p了

理论：删掉1？把2的数据覆盖在1，删除2

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



**r为表尾指针**

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



用时2h完成单链表操作

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

