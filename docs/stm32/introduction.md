---
id: introduction
slug: /stm32
title: 开发工具推荐
---



## Java 算法模板

### 快排

> ```java
> private int[] quicksort_min_max(int[] arr, int left, int right) {
>  if (left >= right) {
>      return arr;
>  }
>  int pivot = arr[left + right >> 1];
>  int i = left - 1;
>  int j = right + 1;
>  while (i < j) {
>      while (arr[++i] < pivot) ;
>      while (arr[--j] > pivot) ;
>      if (i < j) {
>          int temp = arr[i];
>          arr[i] = arr[j];
>          arr[j] = temp;
>      }
>  }
>  quicksort_min_max(arr, left, i - 1);
>  quicksort_min_max(arr, i, right);
>  return arr;
> }
> ```



### 归并

思路：

1. 先判断左右两边是否等于，这是递归的终止条件
2. 设置min=left + right >> 2，临时数组大小为right-left，k为临时数组索引
3. 递归左右处理，左边的边界是mid,右边是mid+1
4. 循环（i,j<=mid和right）中，将小的先放temp
5. 两个循环(i/j<=mid)，将没有放进去的放进去
6. 最后将temp扔到arr[left]开始

```java
private int[] merge_sort(int[] arr, int left, int right) {
        if (left >= right) {
            return arr;
        }
        int mid = left + right >> 2;
        arr = merge_sort(arr, left, mid);
        arr = merge_sort(arr, mid + 1, right);
        int[] temp = new int[right - left + 1];
        int i=left;
        int j = mid + 1;
        int k = 0;//临时数组索引
//      保证ij在范围内不超
        while (i <= mid && j <= right) {
            //选择小的放入临时数组
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            }else {
                temp[k++] = arr[j++];
            }
        }
        while (i <= mid) {
            temp[k++] = arr[i++];
        }while (j <= mid) {
            temp[k++] = arr[j++];
        }
        //从数组左边开始
        for ( i = left, j = 0; i <= right; i++, j++) {
            arr[i] = temp[j];
        }
        return arr;

    }
```





### 二分法

数组大小为相加除于二，左边往右缩要加一位【     |->[       】(left=mid+1)

不寻常的法则是，大小是相加+1除2，右边往左边缩减一位

```java
private static int leftBinarySearch(int[] arr, int left, int right) {
    while (left <= right) {
        int mid = arr[right + left >> 1];
        //这个check可以是搜索是不是target、检查是不是大于什么什么
        if (check(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
```



```java
private static int rightBinarySearch(int[] arr, int left, int right) {
    while (left < right) {
        int mid = arr[left + right + 1 >> 1];
        if (check(mid)) {
            left = mid;    // check()判断mid是否满足性质
        } else {
            right = mid - 1;
        }
    }
    return left;
}
```



### 高精度加法

1. 先交换顺序
2. 定义进位t和List C
3. for循环，到A.size结束
4. if (i < B.size()) {
       t += B.get(i);
   }
   C.add(t % 10);
   t /= 10;
5. if (t != 0) {
       C.add(t);
   }
6. 加入最后的进位
7. 去前导0

```java
private static List<Integer> add(List<Integer> A, List<Integer> B) {
    if (A.size() < B.size()) {
        return add(B, A);
    }
    int t = 0;
    List<Integer> C = new ArrayList<>();
    for (int i = 0; i < A.size(); i++) {
        t += A.get(i);
        //在B的范围内加入
        if (i < B.size()) {
            t += B.get(i);
        }
        C.add(t % 10);
        t /= 10;
    }
    if (t != 0) {
        C.add(t);
    }
    //去前导0
    while (C.size() > 1 && C.get(C.size() - 1) == 0) {
        C.remove(C.size() - 1);
    }
    return C;
}
```

### 二维前缀和



**s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + a[i][j];**

```java
private static void init(int n, int m) {
    //右下角=左下角+右上角-左上角+a右下角
    for (int i = 1; i < n; i++) {
        for (int j = 1; j < n; j++) {
            s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + a[i][j];
        }
    }
}


private static int sumPrefix(int x1, int x2, int y1, int y2) {
    //右上-（两边-1部分）+左上角-1部分
    return s[x2][y2] - s[x2][y1 - 1] - s[x1 - 1][y2] + s[x1 - 1][y1 - 1];
}
```





### 一维差分

很恶心，注意边界问题，全部的循环都是i=1;i<=n，包括数据录入...

1. 差分b[i] = a[i] - a[i - 1];
2. 加入c b[left] += c;
       b[right + 1] -= c;
3. 输出 b[i] += b[i - 1]; 

```java
private static final int N = 100010;
private static final int[] a = new int[N + 5];
private static final int[] b = new int[N + 5];

private static void diff_init(int n) {
    //如果说前面的差都+多少 的话，后面也是加上前面的差
    for (int i = 1; i <= n; i++) {
        //初始化
        b[i] = a[i] - a[i - 1];
    }
}

private static void difference(int left, int right, int c) {
    b[left] += c;
    b[right + 1] -= c;
}

private static void final_output(int n) {
    //注意边界问题
    for (int i = 1; i <= n; i++) {
        b[i] += b[i - 1];
        System.out.print(b[i] + " ");
    }
}

public static void main(String[] args) {
    Scanner scanner=new Scanner(System.in);
    int n = scanner.nextInt();
    for (int i = 1; i <= n; i++) {
        a [i] = scanner.nextInt();
    }
    diff_init(n);
    difference(1, 3, 1);
    final_output(n);

}
```



### 二维差分

![image](https://cdn.staticaly.com/gh/pansyhou/ImgBed@main/BlogImg/image.39vpssiptvu0.webp)



```java
    private static final int N = 1010;
    private static final int[][] a = new int[N + 5][N + 5];//原数组
    private static final int[][] s = new int[N + 5][N + 5];//输出数组
    private static final int[][] b = new int[N + 5][N + 5];//前缀和数组

    private static void differ_2d(int x1, int x2, int y1, int y2,int c) {
        b[x1][y1] += c;
        b[x1][y2 + 1] -= c;
        b[x2 + 1][y1] -= c;
        b[x2 + 1][y2 + 1] += c;
    }

    private static void sumPrefix_2D(int n, int m) {
        //核心算法是一维的b[i]+=b[i-1]
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                //右上角+左下角-左上角 + 前缀和差分数组
//                s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + b[i][j];

                //or
                b[i][j] += b[i - 1][j] + b[i][j - 1] - b[i - 1][j - 1];
            }
        }
    }

    public static void main(String[] args) throws IOException {
        //写一个java版的差分，用bufferread
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));
        String[] str1 = reader.readLine().split(" ");

        int n = Integer.parseInt(str1[0]);
        int m = Integer.parseInt(str1[1]);
        int q = Integer.parseInt(str1[2]);

        for (int i = 1; i <= n; i++) {
            String[] str2 = reader.readLine().split(" ");
            for (int j = 1; j <= m; j++) {
                a[i][j] = Integer.parseInt(str1[j - 1]);
                //一开始b数组是0，可以当做一个小矩阵插入
                differ_2d(i, j, i, j,a[i][j]);
            }
        }

        while (q-- > 0) {
            String[] str3 = reader.readLine().split(" ");
            int x1 = Integer.parseInt(str3[0]);
            int y1 = Integer.parseInt(str3[1]);
            int x2 = Integer.parseInt(str3[2]);
            int y2 = Integer.parseInt(str3[3]);
            int c  =  Integer.parseInt(str3[4]);
            differ_2d(x1, x2, y1, y2, c);
        }

        //开始求解b的前缀和，即a数组

        sumPrefix_2D(n, m);
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                b[i][j] += b[i][j - 1] + b[i - 1][j] - b[i - 1][j - 1];
                //输出
                writer.write(b[i][j] + " ");
            }
            writer.write("\n");
        }
        System.out.println();
        writer.flush();
        reader.close();
        writer.close();
    }
```



前缀和和差分，逆天两家子。



### 二进制1计算

lowbit操作：i & -i 即 -i = ~i+1(补码操作)，
    e.g.
    i= 0110
    -i=1001+1=1010
    0110 & 1010 =0010
    然后减去原来的数，就是减去一个1，count++
    直到i!=0



```java
private static int countDigitOne(int x) {
    int count = 0;
    for (int i = x; i != 0; i -= (i & -i)) {
        count++;
    }
    return count;
}
```

## 深度优先搜索DFS

数据结构为**stack，空间为O(n)**

**不具有最短性**，回溯，剪枝



#### n皇后

> 第一种写法



## 宽度优先搜索

数据结构为**queue，空间为O(n方)**

有最短路的概念



边权=1时，BFS



## 字符统计

给定一个只包含大写字母的字符串 S，请你输出其中出现次数最多的字母。

如果有多个字母均出现了最多次，按字母表顺序依次输出所有这些字母。

### 样例输入

```
BABBACAC
```

### 样例输出

```
AB
```

一开始没看到是输出最多次的，还以为要排序

> ```java
> Scanner scanner=new Scanner(System.in);
> String string = scanner.next();
> int[] num = new int[26];
> int a = Integer.MIN_VALUE;
> for (int i = 0; i < string.length(); i++) {
>  num[string.charAt(i) - 'A']++;
>  if (num[string.charAt(i) - 'A'] > a) {
>      a = num[string.charAt(i) - 'A'];
>  }
> }
> for (int i = 0; i < 26; i++) {
>  if (num[i] == a) {
>      System.out.print((char) ('A' + i));
>  }
> }
> ```



## **和最大子序列**

对于一个给定的长度为N的整数序列A，它的“子序列”的定义是：A中非空的一段连续的元素（整数）。你要完成的任务是，在所有可能的子序列中，找到一个子序列，该子序列中所有元素的和是最大的（跟其他所有子序列相比）。程序要求你输出这个最大值。



```
5
3 -2 3 -5 4
```

```
4
```



## 走迷宫

调了很久，终于他妈的ac了

java的pair很恶心，调试了很多次基本上都爆nullptr

明明我先访问的是x=0,他报错的是y是空的，逆天

最终找到的错误在边界上，x<=n，可能认为我走到了，结果是边界

思路（讲道理我自己也不是很清楚

1. 定义了一个地图二维数组，一个路径步数二维数组（这个我们一般初始化完后，第一次动了他就不动了，因为第一次的肯定是最短路径（第一次就是最快的
2. 先将起始点入队
3. while队列不为空
4. 先出队，防止堵死没点走了，就能结束循环
5. 判断是否越界，有没有走过（剪枝），有没有路走
6. 能的都给我入队
7. 最后返回终点的路径步数

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Queue;
import java.util.Scanner;
class point {
    int x;
    int y;

    public point(int x, int y) {
        this.x = x;
        this.y = y;
    }

}

class walkmigong {
    static int N =110;
    static int n ;
    static int m;
    static int[][] g =null ;//存储迷宫
    static int[][] d =null;//存储到原点距离
    static Queue<point> queue ;

    public static int bfs() {
        //初始化d数组为-1
        for (int[] arr1 : d)
            Arrays.fill(arr1, -1);
        //初始化原点距离
        d[0][0] = 0;
        int[] dx = new int[]{-1, 0, 1, 0};
        int[] dy = new int[]{0, 1, 0, -1};
        queue.add(new point(0, 0));//队尾加入原点
        //             queue.poll();//获取并删除队首
        while (!queue.isEmpty()) {
            point Point = queue.poll();
            if (Point != null) {
                for (int i = 0; i < 4; i++) {
                    int x = Point.x + dx[i];
                    int y = Point.y + dy[i];
                    if (x >= 0 && x < n && y < m && y >= 0 && g[x][y] == 0 && d[x][y] == -1) {
                        d[x][y] = d[Point.x][Point.y] + 1;//上一个节点的路径长度+1
                        queue.add(new point(x, y));//入队

                    }
                }
            }
        }

        return d[n - 1][m - 1];
    }

    walkmigong() throws IOException {
        Scanner sc = new Scanner(System.in);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().split(" ");

        n = Integer.parseInt(str[0]);
        m = Integer.parseInt(str[1]);
        g = new int[N][N];
        d = new int[N][N];
        queue = new ArrayDeque<point>();//合法的入队

        for (int i = 0; i < n; i++) {
            String[] str2 = br.readLine().split(" ");
            for (int j = 0; j < m; j++) {
                g[i][j] = Integer.parseInt(str2[j]);
            }
        }
        System.out.print(bfs());
    }
}

public class Test
{

    public static void main(String[] args) throws IOException {
        walkmigong w =new walkmigong();
    }

}
```

苏联核电管理部门在核电灾难后的应对和处置中存在哪些失误？

管理层面的失误涉及到工程伦理的责任，包括对人员安全负责的义务。在事故发生后，苏联核电管理部门未能及时发布真实信息、未能组织有效的核辐射防护措施等，这些不当举措都让人们面临着更大的安全风险和危险。

国际合作的欠缺说明了其在工程伦理中承担的国际社会责任。核能是一项全球性的问题，因此国际合作和奉献应当放在至高无上的地位。事故发生后，苏联政府缺乏与国际社会的合作和意识，未能得到及时帮助和支持。这表明，作为一个全球性行业，核能应当遵循全球共同负责的原则，在技术和安全方面进行协作和共享。

总之，苏联核电管理部门在切尔诺贝利核电站事故后应对和处置中存在重大失误和不足，从工程伦理的角度分析，核电站设计、管理、操作和国际合作等方面都应该承担相应的责任。在未来的安全管理中，吸取教训、规避风险、加强监管、落实责任，才能使核电站更加安全、健康、可持续，并应对称之为生命线的职业风险。	



