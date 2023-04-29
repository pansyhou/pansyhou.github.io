"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[63872],{3905:function(n,t,e){e.d(t,{Zo:function(){return u},kt:function(){return d}});var i=e(67294);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function l(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,i,r=function(n,t){if(null==n)return{};var e,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var p=i.createContext({}),s=function(n){var t=i.useContext(p),e=t;return n&&(e="function"==typeof n?n(t):l(l({},t),n)),e},u=function(n){var t=s(n.components);return i.createElement(p.Provider,{value:t},n.children)},c={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,p=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),m=s(e),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return e?i.createElement(f,l(l({ref:t},u),{},{components:e})):i.createElement(f,l({ref:t},u))}));function d(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=n,o.mdxType="string"==typeof n?n:r,l[1]=o;for(var s=2;s<a;s++)l[s]=e[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}m.displayName="MDXCreateElement"},59169:function(n,t,e){e.r(t),e.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var i=e(83117),r=e(80102),a=(e(67294),e(3905)),l=["components"],o={id:"introduction",slug:"/stm32",title:"\u5f00\u53d1\u5de5\u5177\u63a8\u8350"},p=void 0,s={unversionedId:"stm32/introduction",id:"stm32/introduction",title:"\u5f00\u53d1\u5de5\u5177\u63a8\u8350",description:"Java \u7b97\u6cd5\u6a21\u677f",source:"@site/docs/stm32/introduction.md",sourceDirName:"stm32",slug:"/stm32",permalink:"/en/docs/stm32",draft:!1,tags:[],version:"current",frontMatter:{id:"introduction",slug:"/stm32",title:"\u5f00\u53d1\u5de5\u5177\u63a8\u8350"},sidebar:"stm32",next:{title:"\u4e32\u53e3\u6536\u53d1\u7684\u51e0\u79cd\u65b9\u5f0f",permalink:"/en/docs/uart-send-recv"}},u={},c=[{value:"Java \u7b97\u6cd5\u6a21\u677f",id:"java-\u7b97\u6cd5\u6a21\u677f",level:2},{value:"\u5feb\u6392",id:"\u5feb\u6392",level:3},{value:"\u5f52\u5e76",id:"\u5f52\u5e76",level:3},{value:"\u4e8c\u5206\u6cd5",id:"\u4e8c\u5206\u6cd5",level:3},{value:"\u9ad8\u7cbe\u5ea6\u52a0\u6cd5",id:"\u9ad8\u7cbe\u5ea6\u52a0\u6cd5",level:3},{value:"\u4e8c\u7ef4\u524d\u7f00\u548c",id:"\u4e8c\u7ef4\u524d\u7f00\u548c",level:3},{value:"\u4e00\u7ef4\u5dee\u5206",id:"\u4e00\u7ef4\u5dee\u5206",level:3},{value:"\u4e8c\u7ef4\u5dee\u5206",id:"\u4e8c\u7ef4\u5dee\u5206",level:3},{value:"\u4e8c\u8fdb\u52361\u8ba1\u7b97",id:"\u4e8c\u8fdb\u52361\u8ba1\u7b97",level:3},{value:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22DFS",id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22dfs",level:2},{value:"n\u7687\u540e",id:"n\u7687\u540e",level:4},{value:"\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22",id:"\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22",level:2},{value:"\u5b57\u7b26\u7edf\u8ba1",id:"\u5b57\u7b26\u7edf\u8ba1",level:2},{value:"\u6837\u4f8b\u8f93\u5165",id:"\u6837\u4f8b\u8f93\u5165",level:3},{value:"\u6837\u4f8b\u8f93\u51fa",id:"\u6837\u4f8b\u8f93\u51fa",level:3},{value:"<strong>\u548c\u6700\u5927\u5b50\u5e8f\u5217</strong>",id:"\u548c\u6700\u5927\u5b50\u5e8f\u5217",level:2},{value:"\u8d70\u8ff7\u5bab",id:"\u8d70\u8ff7\u5bab",level:2}],m={toc:c};function d(n){var t=n.components,e=(0,r.Z)(n,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"java-\u7b97\u6cd5\u6a21\u677f"},"Java \u7b97\u6cd5\u6a21\u677f"),(0,a.kt)("h3",{id:"\u5feb\u6392"},"\u5feb\u6392"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private int[] quicksort_min_max(int[] arr, int left, int right) {\n if (left >= right) {\n     return arr;\n }\n int pivot = arr[left + right >> 1];\n int i = left - 1;\n int j = right + 1;\n while (i < j) {\n     while (arr[++i] < pivot) ;\n     while (arr[--j] > pivot) ;\n     if (i < j) {\n         int temp = arr[i];\n         arr[i] = arr[j];\n         arr[j] = temp;\n     }\n }\n quicksort_min_max(arr, left, i - 1);\n quicksort_min_max(arr, i, right);\n return arr;\n}\n"))),(0,a.kt)("h3",{id:"\u5f52\u5e76"},"\u5f52\u5e76"),(0,a.kt)("p",null,"\u601d\u8def\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u5224\u65ad\u5de6\u53f3\u4e24\u8fb9\u662f\u5426\u7b49\u4e8e\uff0c\u8fd9\u662f\u9012\u5f52\u7684\u7ec8\u6b62\u6761\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6emin=left + right >> 2\uff0c\u4e34\u65f6\u6570\u7ec4\u5927\u5c0f\u4e3aright-left\uff0ck\u4e3a\u4e34\u65f6\u6570\u7ec4\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ol"},"\u9012\u5f52\u5de6\u53f3\u5904\u7406\uff0c\u5de6\u8fb9\u7684\u8fb9\u754c\u662fmid,\u53f3\u8fb9\u662fmid+1"),(0,a.kt)("li",{parentName:"ol"},"\u5faa\u73af\uff08i,j<=mid\u548cright\uff09\u4e2d\uff0c\u5c06\u5c0f\u7684\u5148\u653etemp"),(0,a.kt)("li",{parentName:"ol"},"\u4e24\u4e2a\u5faa\u73af(i/j<=mid)\uff0c\u5c06\u6ca1\u6709\u653e\u8fdb\u53bb\u7684\u653e\u8fdb\u53bb"),(0,a.kt)("li",{parentName:"ol"},"\u6700\u540e\u5c06temp\u6254\u5230arr","[left]","\u5f00\u59cb")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private int[] merge_sort(int[] arr, int left, int right) {\n        if (left >= right) {\n            return arr;\n        }\n        int mid = left + right >> 2;\n        arr = merge_sort(arr, left, mid);\n        arr = merge_sort(arr, mid + 1, right);\n        int[] temp = new int[right - left + 1];\n        int i=left;\n        int j = mid + 1;\n        int k = 0;//\u4e34\u65f6\u6570\u7ec4\u7d22\u5f15\n//      \u4fdd\u8bc1ij\u5728\u8303\u56f4\u5185\u4e0d\u8d85\n        while (i <= mid && j <= right) {\n            //\u9009\u62e9\u5c0f\u7684\u653e\u5165\u4e34\u65f6\u6570\u7ec4\n            if (arr[i] <= arr[j]) {\n                temp[k++] = arr[i++];\n            }else {\n                temp[k++] = arr[j++];\n            }\n        }\n        while (i <= mid) {\n            temp[k++] = arr[i++];\n        }while (j <= mid) {\n            temp[k++] = arr[j++];\n        }\n        //\u4ece\u6570\u7ec4\u5de6\u8fb9\u5f00\u59cb\n        for ( i = left, j = 0; i <= right; i++, j++) {\n            arr[i] = temp[j];\n        }\n        return arr;\n\n    }\n")),(0,a.kt)("h3",{id:"\u4e8c\u5206\u6cd5"},"\u4e8c\u5206\u6cd5"),(0,a.kt)("p",null,"\u6570\u7ec4\u5927\u5c0f\u4e3a\u76f8\u52a0\u9664\u4e8e\u4e8c\uff0c\u5de6\u8fb9\u5f80\u53f3\u7f29\u8981\u52a0\u4e00\u4f4d\u3010     |->[       \u3011(left=mid+1)"),(0,a.kt)("p",null,"\u4e0d\u5bfb\u5e38\u7684\u6cd5\u5219\u662f\uff0c\u5927\u5c0f\u662f\u76f8\u52a0+1\u96642\uff0c\u53f3\u8fb9\u5f80\u5de6\u8fb9\u7f29\u51cf\u4e00\u4f4d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private static int leftBinarySearch(int[] arr, int left, int right) {\n    while (left <= right) {\n        int mid = arr[right + left >> 1];\n        //\u8fd9\u4e2acheck\u53ef\u4ee5\u662f\u641c\u7d22\u662f\u4e0d\u662ftarget\u3001\u68c0\u67e5\u662f\u4e0d\u662f\u5927\u4e8e\u4ec0\u4e48\u4ec0\u4e48\n        if (check(mid)) {\n            right = mid;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return left;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private static int rightBinarySearch(int[] arr, int left, int right) {\n    while (left < right) {\n        int mid = arr[left + right + 1 >> 1];\n        if (check(mid)) {\n            left = mid;    // check()\u5224\u65admid\u662f\u5426\u6ee1\u8db3\u6027\u8d28\n        } else {\n            right = mid - 1;\n        }\n    }\n    return left;\n}\n")),(0,a.kt)("h3",{id:"\u9ad8\u7cbe\u5ea6\u52a0\u6cd5"},"\u9ad8\u7cbe\u5ea6\u52a0\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u4ea4\u6362\u987a\u5e8f"),(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u8fdb\u4f4dt\u548cList C"),(0,a.kt)("li",{parentName:"ol"},"for\u5faa\u73af\uff0c\u5230A.size\u7ed3\u675f"),(0,a.kt)("li",{parentName:"ol"},"if (i < B.size()) {\nt += B.get(i);\n}\nC.add(t % 10);\nt /= 10;"),(0,a.kt)("li",{parentName:"ol"},"if (t != 0) {\nC.add(t);\n}"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165\u6700\u540e\u7684\u8fdb\u4f4d"),(0,a.kt)("li",{parentName:"ol"},"\u53bb\u524d\u5bfc0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private static List<Integer> add(List<Integer> A, List<Integer> B) {\n    if (A.size() < B.size()) {\n        return add(B, A);\n    }\n    int t = 0;\n    List<Integer> C = new ArrayList<>();\n    for (int i = 0; i < A.size(); i++) {\n        t += A.get(i);\n        //\u5728B\u7684\u8303\u56f4\u5185\u52a0\u5165\n        if (i < B.size()) {\n            t += B.get(i);\n        }\n        C.add(t % 10);\n        t /= 10;\n    }\n    if (t != 0) {\n        C.add(t);\n    }\n    //\u53bb\u524d\u5bfc0\n    while (C.size() > 1 && C.get(C.size() - 1) == 0) {\n        C.remove(C.size() - 1);\n    }\n    return C;\n}\n")),(0,a.kt)("h3",{id:"\u4e8c\u7ef4\u524d\u7f00\u548c"},"\u4e8c\u7ef4\u524d\u7f00\u548c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"s","[i][j]"," = s","[i - 1][j]"," + s","[i][j - 1]"," - s","[i - 1][j - 1]"," + a","[i][j]",";")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private static void init(int n, int m) {\n    //\u53f3\u4e0b\u89d2=\u5de6\u4e0b\u89d2+\u53f3\u4e0a\u89d2-\u5de6\u4e0a\u89d2+a\u53f3\u4e0b\u89d2\n    for (int i = 1; i < n; i++) {\n        for (int j = 1; j < n; j++) {\n            s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + a[i][j];\n        }\n    }\n}\n\n\nprivate static int sumPrefix(int x1, int x2, int y1, int y2) {\n    //\u53f3\u4e0a-\uff08\u4e24\u8fb9-1\u90e8\u5206\uff09+\u5de6\u4e0a\u89d2-1\u90e8\u5206\n    return s[x2][y2] - s[x2][y1 - 1] - s[x1 - 1][y2] + s[x1 - 1][y1 - 1];\n}\n")),(0,a.kt)("h3",{id:"\u4e00\u7ef4\u5dee\u5206"},"\u4e00\u7ef4\u5dee\u5206"),(0,a.kt)("p",null,"\u5f88\u6076\u5fc3\uff0c\u6ce8\u610f\u8fb9\u754c\u95ee\u9898\uff0c\u5168\u90e8\u7684\u5faa\u73af\u90fd\u662fi=1;i<=n\uff0c\u5305\u62ec\u6570\u636e\u5f55\u5165..."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5dee\u5206b","[i]"," = a","[i]"," - a","[i - 1]",";"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165c b","[left]"," += c;\nb","[right + 1]"," -= c;"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u51fa b","[i]"," += b","[i - 1]","; ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'private static final int N = 100010;\nprivate static final int[] a = new int[N + 5];\nprivate static final int[] b = new int[N + 5];\n\nprivate static void diff_init(int n) {\n    //\u5982\u679c\u8bf4\u524d\u9762\u7684\u5dee\u90fd+\u591a\u5c11 \u7684\u8bdd\uff0c\u540e\u9762\u4e5f\u662f\u52a0\u4e0a\u524d\u9762\u7684\u5dee\n    for (int i = 1; i <= n; i++) {\n        //\u521d\u59cb\u5316\n        b[i] = a[i] - a[i - 1];\n    }\n}\n\nprivate static void difference(int left, int right, int c) {\n    b[left] += c;\n    b[right + 1] -= c;\n}\n\nprivate static void final_output(int n) {\n    //\u6ce8\u610f\u8fb9\u754c\u95ee\u9898\n    for (int i = 1; i <= n; i++) {\n        b[i] += b[i - 1];\n        System.out.print(b[i] + " ");\n    }\n}\n\npublic static void main(String[] args) {\n    Scanner scanner=new Scanner(System.in);\n    int n = scanner.nextInt();\n    for (int i = 1; i <= n; i++) {\n        a [i] = scanner.nextInt();\n    }\n    diff_init(n);\n    difference(1, 3, 1);\n    final_output(n);\n\n}\n')),(0,a.kt)("h3",{id:"\u4e8c\u7ef4\u5dee\u5206"},"\u4e8c\u7ef4\u5dee\u5206"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.staticaly.com/gh/pansyhou/ImgBed@main/BlogImg/image.39vpssiptvu0.webp",alt:"image"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    private static final int N = 1010;\n    private static final int[][] a = new int[N + 5][N + 5];//\u539f\u6570\u7ec4\n    private static final int[][] s = new int[N + 5][N + 5];//\u8f93\u51fa\u6570\u7ec4\n    private static final int[][] b = new int[N + 5][N + 5];//\u524d\u7f00\u548c\u6570\u7ec4\n\n    private static void differ_2d(int x1, int x2, int y1, int y2,int c) {\n        b[x1][y1] += c;\n        b[x1][y2 + 1] -= c;\n        b[x2 + 1][y1] -= c;\n        b[x2 + 1][y2 + 1] += c;\n    }\n\n    private static void sumPrefix_2D(int n, int m) {\n        //\u6838\u5fc3\u7b97\u6cd5\u662f\u4e00\u7ef4\u7684b[i]+=b[i-1]\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= m; j++) {\n                //\u53f3\u4e0a\u89d2+\u5de6\u4e0b\u89d2-\u5de6\u4e0a\u89d2 + \u524d\u7f00\u548c\u5dee\u5206\u6570\u7ec4\n//                s[i][j] = s[i - 1][j] + s[i][j - 1] - s[i - 1][j - 1] + b[i][j];\n\n                //or\n                b[i][j] += b[i - 1][j] + b[i][j - 1] - b[i - 1][j - 1];\n            }\n        }\n    }\n\n    public static void main(String[] args) throws IOException {\n        //\u5199\u4e00\u4e2ajava\u7248\u7684\u5dee\u5206\uff0c\u7528bufferread\n        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));\n        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(System.out));\n        String[] str1 = reader.readLine().split(" ");\n\n        int n = Integer.parseInt(str1[0]);\n        int m = Integer.parseInt(str1[1]);\n        int q = Integer.parseInt(str1[2]);\n\n        for (int i = 1; i <= n; i++) {\n            String[] str2 = reader.readLine().split(" ");\n            for (int j = 1; j <= m; j++) {\n                a[i][j] = Integer.parseInt(str1[j - 1]);\n                //\u4e00\u5f00\u59cbb\u6570\u7ec4\u662f0\uff0c\u53ef\u4ee5\u5f53\u505a\u4e00\u4e2a\u5c0f\u77e9\u9635\u63d2\u5165\n                differ_2d(i, j, i, j,a[i][j]);\n            }\n        }\n\n        while (q-- > 0) {\n            String[] str3 = reader.readLine().split(" ");\n            int x1 = Integer.parseInt(str3[0]);\n            int y1 = Integer.parseInt(str3[1]);\n            int x2 = Integer.parseInt(str3[2]);\n            int y2 = Integer.parseInt(str3[3]);\n            int c  =  Integer.parseInt(str3[4]);\n            differ_2d(x1, x2, y1, y2, c);\n        }\n\n        //\u5f00\u59cb\u6c42\u89e3b\u7684\u524d\u7f00\u548c\uff0c\u5373a\u6570\u7ec4\n\n        sumPrefix_2D(n, m);\n        for (int i = 1; i <= n; i++) {\n            for (int j = 1; j <= m; j++) {\n                b[i][j] += b[i][j - 1] + b[i - 1][j] - b[i - 1][j - 1];\n                //\u8f93\u51fa\n                writer.write(b[i][j] + " ");\n            }\n            writer.write("\\n");\n        }\n        System.out.println();\n        writer.flush();\n        reader.close();\n        writer.close();\n    }\n')),(0,a.kt)("p",null,"\u524d\u7f00\u548c\u548c\u5dee\u5206\uff0c\u9006\u5929\u4e24\u5bb6\u5b50\u3002"),(0,a.kt)("h3",{id:"\u4e8c\u8fdb\u52361\u8ba1\u7b97"},"\u4e8c\u8fdb\u52361\u8ba1\u7b97"),(0,a.kt)("p",null,"lowbit\u64cd\u4f5c\uff1ai & -i \u5373 -i = ~i+1(\u8865\u7801\u64cd\u4f5c)\uff0c\ne.g.\ni= 0110\n-i=1001+1=1010\n0110 & 1010 =0010\n\u7136\u540e\u51cf\u53bb\u539f\u6765\u7684\u6570\uff0c\u5c31\u662f\u51cf\u53bb\u4e00\u4e2a1\uff0ccount++\n\u76f4\u5230i!=0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"private static int countDigitOne(int x) {\n    int count = 0;\n    for (int i = x; i != 0; i -= (i & -i)) {\n        count++;\n    }\n    return count;\n}\n")),(0,a.kt)("h2",{id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22dfs"},"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22DFS"),(0,a.kt)("p",null,"\u6570\u636e\u7ed3\u6784\u4e3a",(0,a.kt)("strong",{parentName:"p"},"stack\uff0c\u7a7a\u95f4\u4e3aO(n)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5177\u6709\u6700\u77ed\u6027"),"\uff0c\u56de\u6eaf\uff0c\u526a\u679d"),(0,a.kt)("h4",{id:"n\u7687\u540e"},"n\u7687\u540e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7b2c\u4e00\u79cd\u5199\u6cd5")),(0,a.kt)("h2",{id:"\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22"},"\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22"),(0,a.kt)("p",null,"\u6570\u636e\u7ed3\u6784\u4e3a",(0,a.kt)("strong",{parentName:"p"},"queue\uff0c\u7a7a\u95f4\u4e3aO(n\u65b9)")),(0,a.kt)("p",null,"\u6709\u6700\u77ed\u8def\u7684\u6982\u5ff5"),(0,a.kt)("p",null,"\u8fb9\u6743=1\u65f6\uff0cBFS"),(0,a.kt)("h2",{id:"\u5b57\u7b26\u7edf\u8ba1"},"\u5b57\u7b26\u7edf\u8ba1"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u53ea\u5305\u542b\u5927\u5199\u5b57\u6bcd\u7684\u5b57\u7b26\u4e32 S\uff0c\u8bf7\u4f60\u8f93\u51fa\u5176\u4e2d\u51fa\u73b0\u6b21\u6570\u6700\u591a\u7684\u5b57\u6bcd\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u5b57\u6bcd\u5747\u51fa\u73b0\u4e86\u6700\u591a\u6b21\uff0c\u6309\u5b57\u6bcd\u8868\u987a\u5e8f\u4f9d\u6b21\u8f93\u51fa\u6240\u6709\u8fd9\u4e9b\u5b57\u6bcd\u3002"),(0,a.kt)("h3",{id:"\u6837\u4f8b\u8f93\u5165"},"\u6837\u4f8b\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"BABBACAC\n")),(0,a.kt)("h3",{id:"\u6837\u4f8b\u8f93\u51fa"},"\u6837\u4f8b\u8f93\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"AB\n")),(0,a.kt)("p",null,"\u4e00\u5f00\u59cb\u6ca1\u770b\u5230\u662f\u8f93\u51fa\u6700\u591a\u6b21\u7684\uff0c\u8fd8\u4ee5\u4e3a\u8981\u6392\u5e8f"),(0,a.kt)("blockquote",null,(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"Scanner scanner=new Scanner(System.in);\nString string = scanner.next();\nint[] num = new int[26];\nint a = Integer.MIN_VALUE;\nfor (int i = 0; i < string.length(); i++) {\n num[string.charAt(i) - 'A']++;\n if (num[string.charAt(i) - 'A'] > a) {\n     a = num[string.charAt(i) - 'A'];\n }\n}\nfor (int i = 0; i < 26; i++) {\n if (num[i] == a) {\n     System.out.print((char) ('A' + i));\n }\n}\n"))),(0,a.kt)("h2",{id:"\u548c\u6700\u5927\u5b50\u5e8f\u5217"},(0,a.kt)("strong",{parentName:"h2"},"\u548c\u6700\u5927\u5b50\u5e8f\u5217")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e2a\u7ed9\u5b9a\u7684\u957f\u5ea6\u4e3aN\u7684\u6574\u6570\u5e8f\u5217A\uff0c\u5b83\u7684\u201c\u5b50\u5e8f\u5217\u201d\u7684\u5b9a\u4e49\u662f\uff1aA\u4e2d\u975e\u7a7a\u7684\u4e00\u6bb5\u8fde\u7eed\u7684\u5143\u7d20\uff08\u6574\u6570\uff09\u3002\u4f60\u8981\u5b8c\u6210\u7684\u4efb\u52a1\u662f\uff0c\u5728\u6240\u6709\u53ef\u80fd\u7684\u5b50\u5e8f\u5217\u4e2d\uff0c\u627e\u5230\u4e00\u4e2a\u5b50\u5e8f\u5217\uff0c\u8be5\u5b50\u5e8f\u5217\u4e2d\u6240\u6709\u5143\u7d20\u7684\u548c\u662f\u6700\u5927\u7684\uff08\u8ddf\u5176\u4ed6\u6240\u6709\u5b50\u5e8f\u5217\u76f8\u6bd4\uff09\u3002\u7a0b\u5e8f\u8981\u6c42\u4f60\u8f93\u51fa\u8fd9\u4e2a\u6700\u5927\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"5\n3 -2 3 -5 4\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"4\n")),(0,a.kt)("h2",{id:"\u8d70\u8ff7\u5bab"},"\u8d70\u8ff7\u5bab"),(0,a.kt)("p",null,"\u8c03\u4e86\u5f88\u4e45\uff0c\u7ec8\u4e8e\u4ed6\u5988\u7684ac\u4e86"),(0,a.kt)("p",null,"java\u7684pair\u5f88\u6076\u5fc3\uff0c\u8c03\u8bd5\u4e86\u5f88\u591a\u6b21\u57fa\u672c\u4e0a\u90fd\u7206nullptr"),(0,a.kt)("p",null,"\u660e\u660e\u6211\u5148\u8bbf\u95ee\u7684\u662fx=0,\u4ed6\u62a5\u9519\u7684\u662fy\u662f\u7a7a\u7684\uff0c\u9006\u5929"),(0,a.kt)("p",null,"\u6700\u7ec8\u627e\u5230\u7684\u9519\u8bef\u5728\u8fb9\u754c\u4e0a\uff0cx<=n\uff0c\u53ef\u80fd\u8ba4\u4e3a\u6211\u8d70\u5230\u4e86\uff0c\u7ed3\u679c\u662f\u8fb9\u754c"),(0,a.kt)("p",null,"\u601d\u8def\uff08\u8bb2\u9053\u7406\u6211\u81ea\u5df1\u4e5f\u4e0d\u662f\u5f88\u6e05\u695a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5730\u56fe\u4e8c\u7ef4\u6570\u7ec4\uff0c\u4e00\u4e2a\u8def\u5f84\u6b65\u6570\u4e8c\u7ef4\u6570\u7ec4\uff08\u8fd9\u4e2a\u6211\u4eec\u4e00\u822c\u521d\u59cb\u5316\u5b8c\u540e\uff0c\u7b2c\u4e00\u6b21\u52a8\u4e86\u4ed6\u5c31\u4e0d\u52a8\u4e86\uff0c\u56e0\u4e3a\u7b2c\u4e00\u6b21\u7684\u80af\u5b9a\u662f\u6700\u77ed\u8def\u5f84\uff08\u7b2c\u4e00\u6b21\u5c31\u662f\u6700\u5feb\u7684"),(0,a.kt)("li",{parentName:"ol"},"\u5148\u5c06\u8d77\u59cb\u70b9\u5165\u961f"),(0,a.kt)("li",{parentName:"ol"},"while\u961f\u5217\u4e0d\u4e3a\u7a7a"),(0,a.kt)("li",{parentName:"ol"},"\u5148\u51fa\u961f\uff0c\u9632\u6b62\u5835\u6b7b\u6ca1\u70b9\u8d70\u4e86\uff0c\u5c31\u80fd\u7ed3\u675f\u5faa\u73af"),(0,a.kt)("li",{parentName:"ol"},"\u5224\u65ad\u662f\u5426\u8d8a\u754c\uff0c\u6709\u6ca1\u6709\u8d70\u8fc7\uff08\u526a\u679d\uff09\uff0c\u6709\u6ca1\u6709\u8def\u8d70"),(0,a.kt)("li",{parentName:"ol"},"\u80fd\u7684\u90fd\u7ed9\u6211\u5165\u961f"),(0,a.kt)("li",{parentName:"ol"},"\u6700\u540e\u8fd4\u56de\u7ec8\u70b9\u7684\u8def\u5f84\u6b65\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\nimport java.util.ArrayDeque;\nimport java.util.Arrays;\nimport java.util.Queue;\nimport java.util.Scanner;\nclass point {\n    int x;\n    int y;\n\n    public point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n}\n\nclass walkmigong {\n    static int N =110;\n    static int n ;\n    static int m;\n    static int[][] g =null ;//\u5b58\u50a8\u8ff7\u5bab\n    static int[][] d =null;//\u5b58\u50a8\u5230\u539f\u70b9\u8ddd\u79bb\n    static Queue<point> queue ;\n\n    public static int bfs() {\n        //\u521d\u59cb\u5316d\u6570\u7ec4\u4e3a-1\n        for (int[] arr1 : d)\n            Arrays.fill(arr1, -1);\n        //\u521d\u59cb\u5316\u539f\u70b9\u8ddd\u79bb\n        d[0][0] = 0;\n        int[] dx = new int[]{-1, 0, 1, 0};\n        int[] dy = new int[]{0, 1, 0, -1};\n        queue.add(new point(0, 0));//\u961f\u5c3e\u52a0\u5165\u539f\u70b9\n        //             queue.poll();//\u83b7\u53d6\u5e76\u5220\u9664\u961f\u9996\n        while (!queue.isEmpty()) {\n            point Point = queue.poll();\n            if (Point != null) {\n                for (int i = 0; i < 4; i++) {\n                    int x = Point.x + dx[i];\n                    int y = Point.y + dy[i];\n                    if (x >= 0 && x < n && y < m && y >= 0 && g[x][y] == 0 && d[x][y] == -1) {\n                        d[x][y] = d[Point.x][Point.y] + 1;//\u4e0a\u4e00\u4e2a\u8282\u70b9\u7684\u8def\u5f84\u957f\u5ea6+1\n                        queue.add(new point(x, y));//\u5165\u961f\n\n                    }\n                }\n            }\n        }\n\n        return d[n - 1][m - 1];\n    }\n\n    walkmigong() throws IOException {\n        Scanner sc = new Scanner(System.in);\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String[] str = br.readLine().split(" ");\n\n        n = Integer.parseInt(str[0]);\n        m = Integer.parseInt(str[1]);\n        g = new int[N][N];\n        d = new int[N][N];\n        queue = new ArrayDeque<point>();//\u5408\u6cd5\u7684\u5165\u961f\n\n        for (int i = 0; i < n; i++) {\n            String[] str2 = br.readLine().split(" ");\n            for (int j = 0; j < m; j++) {\n                g[i][j] = Integer.parseInt(str2[j]);\n            }\n        }\n        System.out.print(bfs());\n    }\n}\n\npublic class Test\n{\n\n    public static void main(String[] args) throws IOException {\n        walkmigong w =new walkmigong();\n    }\n\n}\n')),(0,a.kt)("p",null,"\u82cf\u8054\u6838\u7535\u7ba1\u7406\u90e8\u95e8\u5728\u6838\u7535\u707e\u96be\u540e\u7684\u5e94\u5bf9\u548c\u5904\u7f6e\u4e2d\u5b58\u5728\u54ea\u4e9b\u5931\u8bef\uff1f"),(0,a.kt)("p",null,"\u7ba1\u7406\u5c42\u9762\u7684\u5931\u8bef\u6d89\u53ca\u5230\u5de5\u7a0b\u4f26\u7406\u7684\u8d23\u4efb\uff0c\u5305\u62ec\u5bf9\u4eba\u5458\u5b89\u5168\u8d1f\u8d23\u7684\u4e49\u52a1\u3002\u5728\u4e8b\u6545\u53d1\u751f\u540e\uff0c\u82cf\u8054\u6838\u7535\u7ba1\u7406\u90e8\u95e8\u672a\u80fd\u53ca\u65f6\u53d1\u5e03\u771f\u5b9e\u4fe1\u606f\u3001\u672a\u80fd\u7ec4\u7ec7\u6709\u6548\u7684\u6838\u8f90\u5c04\u9632\u62a4\u63aa\u65bd\u7b49\uff0c\u8fd9\u4e9b\u4e0d\u5f53\u4e3e\u63aa\u90fd\u8ba9\u4eba\u4eec\u9762\u4e34\u7740\u66f4\u5927\u7684\u5b89\u5168\u98ce\u9669\u548c\u5371\u9669\u3002"),(0,a.kt)("p",null,"\u56fd\u9645\u5408\u4f5c\u7684\u6b20\u7f3a\u8bf4\u660e\u4e86\u5176\u5728\u5de5\u7a0b\u4f26\u7406\u4e2d\u627f\u62c5\u7684\u56fd\u9645\u793e\u4f1a\u8d23\u4efb\u3002\u6838\u80fd\u662f\u4e00\u9879\u5168\u7403\u6027\u7684\u95ee\u9898\uff0c\u56e0\u6b64\u56fd\u9645\u5408\u4f5c\u548c\u5949\u732e\u5e94\u5f53\u653e\u5728\u81f3\u9ad8\u65e0\u4e0a\u7684\u5730\u4f4d\u3002\u4e8b\u6545\u53d1\u751f\u540e\uff0c\u82cf\u8054\u653f\u5e9c\u7f3a\u4e4f\u4e0e\u56fd\u9645\u793e\u4f1a\u7684\u5408\u4f5c\u548c\u610f\u8bc6\uff0c\u672a\u80fd\u5f97\u5230\u53ca\u65f6\u5e2e\u52a9\u548c\u652f\u6301\u3002\u8fd9\u8868\u660e\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5168\u7403\u6027\u884c\u4e1a\uff0c\u6838\u80fd\u5e94\u5f53\u9075\u5faa\u5168\u7403\u5171\u540c\u8d1f\u8d23\u7684\u539f\u5219\uff0c\u5728\u6280\u672f\u548c\u5b89\u5168\u65b9\u9762\u8fdb\u884c\u534f\u4f5c\u548c\u5171\u4eab\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0c\u82cf\u8054\u6838\u7535\u7ba1\u7406\u90e8\u95e8\u5728\u5207\u5c14\u8bfa\u8d1d\u5229\u6838\u7535\u7ad9\u4e8b\u6545\u540e\u5e94\u5bf9\u548c\u5904\u7f6e\u4e2d\u5b58\u5728\u91cd\u5927\u5931\u8bef\u548c\u4e0d\u8db3\uff0c\u4ece\u5de5\u7a0b\u4f26\u7406\u7684\u89d2\u5ea6\u5206\u6790\uff0c\u6838\u7535\u7ad9\u8bbe\u8ba1\u3001\u7ba1\u7406\u3001\u64cd\u4f5c\u548c\u56fd\u9645\u5408\u4f5c\u7b49\u65b9\u9762\u90fd\u5e94\u8be5\u627f\u62c5\u76f8\u5e94\u7684\u8d23\u4efb\u3002\u5728\u672a\u6765\u7684\u5b89\u5168\u7ba1\u7406\u4e2d\uff0c\u5438\u53d6\u6559\u8bad\u3001\u89c4\u907f\u98ce\u9669\u3001\u52a0\u5f3a\u76d1\u7ba1\u3001\u843d\u5b9e\u8d23\u4efb\uff0c\u624d\u80fd\u4f7f\u6838\u7535\u7ad9\u66f4\u52a0\u5b89\u5168\u3001\u5065\u5eb7\u3001\u53ef\u6301\u7eed\uff0c\u5e76\u5e94\u5bf9\u79f0\u4e4b\u4e3a\u751f\u547d\u7ebf\u7684\u804c\u4e1a\u98ce\u9669\u3002"))}d.isMDXComponent=!0}}]);