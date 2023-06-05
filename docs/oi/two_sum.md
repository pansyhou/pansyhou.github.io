---
id: two_sum
slug: /two_sum
title: 1.两数之和
authors: pansyhou
date: 2023-5-24
keywords: ['guides', 'C++']
---

## 两数之和

学习一下，C++的hashmap先



### 问题

> 2023/05/24 15:34:48	
>
> 运行成功:
>
> 测试用例:[2,7,11,15]		9
> 测试结果:[1,0]
>
> 期望结果:[0,1]
> stdout:

反了，有可能是我的遍历顺序有问题，我现在输出的是{second,i}，反过来





> 2023/05/24 15:44:22	
> 解答失败:
> 测试用例:[3,2,4]
> 		6
> 测试结果:[0,0]
> 期望结果:[1,2]
> stdout:

一直没找到这个报错的原因

直到我看到了题解

3+3=6直接得出结果来了，找到自己了，但是自己不是解



:::caution

警惕以为是遍历顺序等问题导致的其他问题疏忽

:::

> 2023/05/27 01:18:16	
> 解答失败:
> 测试用例:[3,3]
> 		6
> 测试结果:[0,0]
> 期望结果:[0,1]
> stdout:



```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            map[nums[i]] = i;
        }
        for (int i = 0; i < nums.size(); i++) {
            int temp = target - nums[i];
            auto it = map.find(temp);
            if (it != map.end() && it->first != nums[i]) {
                return {i,it->second};
            }
        }
        return {0, 0};
    }
};
```

> 不可以仅凭数字判断他们是不是重复了
>
> 还是太年轻了。。。



```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> map;
        for (int i = 0; i < nums.size(); i++) {
            map[nums[i]] = i;
        }
        for (int i = 0; i < nums.size(); i++) {
            int temp = target - nums[i];
            auto it = map.find(temp);
            if (it != map.end() && it->second != i) {
                return {i,it->second};
            }
        }
        return {0, 0};
    }
};
```

> 2023/05/27 01:24:51	
> 解答成功:
> 执行耗时:12 ms,击败了69.06% 的C++用户
> 内存消耗:11.7 MB,击败了6.00% 的C++用户



## 优化





