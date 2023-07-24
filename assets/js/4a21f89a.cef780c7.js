"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7123],{4137:function(n,t,e){e.d(t,{Zo:function(){return o},kt:function(){return f}});var r=e(7294);function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function m(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,r,u=function(n,t){if(null==n)return{};var e,r,u={},m=Object.keys(n);for(r=0;r<m.length;r++)e=m[r],t.indexOf(e)>=0||(u[e]=n[e]);return u}(n,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(r=0;r<m.length;r++)e=m[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(u[e]=n[e])}return u}var s=r.createContext({}),i=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):a(a({},t),n)),e},o=function(n){var t=i(n.components);return r.createElement(s.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(n,t){var e=n.components,u=n.mdxType,m=n.originalType,s=n.parentName,o=l(n,["components","mdxType","originalType","parentName"]),c=i(e),f=u,k=c["".concat(s,".").concat(f)]||c[f]||p[f]||m;return e?r.createElement(k,a(a({ref:t},o),{},{components:e})):r.createElement(k,a({ref:t},o))}));function f(n,t){var e=arguments,u=t&&t.mdxType;if("string"==typeof n||u){var m=e.length,a=new Array(m);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=n,l.mdxType="string"==typeof n?n:u,a[1]=l;for(var i=2;i<m;i++)a[i]=e[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,e)}c.displayName="MDXCreateElement"},4066:function(n,t,e){e.r(t),e.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=e(3117),u=e(102),m=(e(7294),e(4137)),a=["components"],l={id:"maximum-subarra",slug:"/maximum-subarray",title:"53.\u6700\u5927\u5b50\u5e8f\u548c",authors:"pansyhou",date:"2023-7-9",keywords:["C++","\u8d2a\u5fc3"]},s=void 0,i={unversionedId:"oi/maximum-subarra",id:"oi/maximum-subarra",title:"53.\u6700\u5927\u5b50\u5e8f\u548c",description:"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u8bf7\u4f60\u627e\u51fa\u4e00\u4e2a\u5177\u6709\u6700\u5927\u548c\u7684\u8fde\u7eed\u5b50\u6570\u7ec4\uff08\u5b50\u6570\u7ec4\u6700\u5c11\u5305\u542b\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u8fd4\u56de\u5176\u6700\u5927\u548c\u3002",source:"@site/docs/oi/53.\u6700\u5927\u5b50\u5e8f\u548c.md",sourceDirName:"oi",slug:"/maximum-subarray",permalink:"/docs/maximum-subarray",draft:!1,tags:[],version:"current",sidebarPosition:53,frontMatter:{id:"maximum-subarra",slug:"/maximum-subarray",title:"53.\u6700\u5927\u5b50\u5e8f\u548c",authors:"pansyhou",date:"2023-7-9",keywords:["C++","\u8d2a\u5fc3"]},sidebar:"oi",previous:{title:"\u7b80\u4ecb",permalink:"/docs/tree-review"},next:{title:"376. \u6446\u52a8\u5e8f\u5217",permalink:"/docs/wiggle-subsequence"}},o={},p=[{value:"\u7b2c\u4e00\u6b21\u89e3",id:"\u7b2c\u4e00\u6b21\u89e3",level:2},{value:"\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u8d2a\u5fc3\u7684\u8d2a\u5fc3",id:"\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u8d2a\u5fc3\u7684\u8d2a\u5fc3",level:4},{value:"\u5206\u6cbb",id:"\u5206\u6cbb",level:4},{value:"dp",id:"dp",level:4}],c={toc:p};function f(n){var t=n.components,e=(0,u.Z)(n,a);return(0,m.kt)("wrapper",(0,r.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u6574\u6570\u6570\u7ec4 nums \uff0c\u8bf7\u4f60\u627e\u51fa\u4e00\u4e2a\u5177\u6709\u6700\u5927\u548c\u7684\u8fde\u7eed\u5b50\u6570\u7ec4\uff08\u5b50\u6570\u7ec4\u6700\u5c11\u5305\u542b\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u8fd4\u56de\u5176\u6700\u5927\u548c\u3002"),(0,m.kt)("p",null,"\u5b50\u6570\u7ec4 \u662f\u6570\u7ec4\u4e2d\u7684\u4e00\u4e2a\u8fde\u7eed\u90e8\u5206\u3002"),(0,m.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,m.kt)("p",null,"\u8f93\u5165\uff1anums = ","[-2,1,-3,4,-1,2,1,-5,4]","\n\u8f93\u51fa\uff1a6\n\u89e3\u91ca\uff1a\u8fde\u7eed\u5b50\u6570\u7ec4 ","[4,-1,2,1]"," \u7684\u548c\u6700\u5927\uff0c\u4e3a 6 \u3002\n\u793a\u4f8b 2\uff1a"),(0,m.kt)("p",null,"\u8f93\u5165\uff1anums = ","[1]","\n\u8f93\u51fa\uff1a1\n\u793a\u4f8b 3\uff1a"),(0,m.kt)("p",null,"\u8f93\u5165\uff1anums = ","[5,4,-1,7,8]","\n\u8f93\u51fa\uff1a23"),(0,m.kt)("p",null,"\u63d0\u793a\uff1a"),(0,m.kt)("p",null,"1 <= nums.length <= 105\n-104 <= nums","[i]"," <= 104"),(0,m.kt)("h2",{id:"\u7b2c\u4e00\u6b21\u89e3"},"\u7b2c\u4e00\u6b21\u89e3"),(0,m.kt)("h4",{id:"\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u8d2a\u5fc3\u7684\u8d2a\u5fc3"},"\u4e0d\u77e5\u9053\u662f\u4e0d\u662f\u8d2a\u5fc3\u7684\u8d2a\u5fc3"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-c++"},"    int maxSubArray(vector<int>& nums) {\n        int maxsum = 0;\n        int sum = 0;\n        for (int i: nums) {\n            if (sum + i < 0) {\n                sum = 0;\n            } else sum += i;\n            if(sum>maxsum)maxsum = sum;\n        }\n        if (maxsum == 0) {\n            sort(nums.begin(), nums.end());\n            return nums[nums.size()-1];\n        }else\n            return maxsum;\n    }\n")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"2023/07/09 14:27:16"),(0,m.kt)("p",{parentName:"blockquote"},"\u89e3\u7b54\u6210\u529f:"),(0,m.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u8017\u65f6:88 ms,\u51fb\u8d25\u4e8671.44% \u7684C++\u7528\u6237"),(0,m.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017:66.1 MB,\u51fb\u8d25\u4e8666.38% \u7684C++\u7528\u6237")),(0,m.kt)("p",null,"\u8fd8\u80fd\u4f18\u5316\uff0c\u4e0b\u9762\u7684sort\u662f\u56e0\u4e3a\u6211\u60f3\u4e0d\u5230\u66f4\u597d\u7684\u65b9\u6cd5\u8f93\u51fa\u8d1f\u6570\u4e86\uff0c\u6682\u65f6"),(0,m.kt)("p",null,"\u4f18\u5316\u540e\u903b\u8f91\u6709\u53d8\uff0c\u6211\u5148\u8ba9sum+\u4e86\u524d\u9762\u4e00\u4e2a\u5148\uff0c\u7136\u540e\u6b64\u65f6\u4e0d\u7ba1\u662f\u8d1f\u6570\u8fd8\u662f\u6b63\u6570\u90fd\u80fd\u548c\u8f93\u51fa\u7684\u7b54\u6848\u5bf9\u6bd4\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u8ba9\u7b54\u6848\u6709\u8d1f\u6570\uff0c\u6700\u540e\u518d\u5224\u65ad\u662f\u4e0d\u662f\u8d1f\u7684\uff0c\u6254\u6389\u524d\u9762\u7684"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-c++"},"    int maxSubArray(vector<int>& nums) {\n        int maxsum = INT32_MIN;\n        int sum = 0;\n        for (int i: nums) {\n            sum += i;\n            if(sum>maxsum)maxsum = sum;\n            if(sum < 0) {\n                sum = 0;\n            }\n        }\n        return maxsum;\n    }\n")),(0,m.kt)("blockquote",null,(0,m.kt)("p",{parentName:"blockquote"},"2023/07/09 14:50:40\t"),(0,m.kt)("p",{parentName:"blockquote"},"\u89e3\u7b54\u6210\u529f:"),(0,m.kt)("p",{parentName:"blockquote"},"\u6267\u884c\u8017\u65f6:92 ms,\u51fb\u8d25\u4e8658.04% \u7684C++\u7528\u6237"),(0,m.kt)("p",{parentName:"blockquote"},"\u5185\u5b58\u6d88\u8017:66.1 MB,\u51fb\u8d25\u4e8688.64% \u7684C++\u7528\u6237")),(0,m.kt)("p",null,"\u7ecf\u5178leetcode\u7384\u5b66\uff0c\u6211\u628a\u91cc\u9762\u7684\u6392\u5e8f\u4e00\u904d\u90fd\u6bd4\u904d\u5386\u91cc\u52a0if\u7528\u7684\u65f6\u95f4\u591a"),(0,m.kt)("p",null,"\u7406\u8bba\u4e0a\u6211\u5df2\u7ecf\u7528dp\u5199\u8fc7\u4e00\u904d\u4e86\uff0c\u4f46\u662f\u540e\u6765\u53d1\u73b0\uff0c\u4e4b\u524d\u7b97\u6cd5\u8bfe\u4e0a\u7528\u8fc7\u5206\u6cbb"),(0,m.kt)("h4",{id:"\u5206\u6cbb"},"\u5206\u6cbb"),(0,m.kt)("p",null,"\u8fd9\u9053\u9898\u7c7b\u4f3c\u4e8emergesort\u7684\u5206\u6cbb\uff0c\u4f46\u662f\u8fd9\u8981\u7ef4\u62a4\u7684\u4e1c\u897f\u6bd4\u8f83\u591a\uff0c\u601d\u8def\u5f88\u96be\u5b66\u3002"),(0,m.kt)("p",null,"\u65b9\u6cd5\u7ed9\u4f60\u4e86\uff0c\u4f46\u662f\u4f60\u77e5\u9053\u4ed6\u662f\u600e\u4e48\u60f3\u51fa\u6765\u8fd9\u79cd\u7ed3\u6784\u7684\uff1f\u601d\u8def\u5386\u7a0b\u662f\u600e\u4e48\u6837\u7684\uff1f\u5b8c\u5168\u4e0d\u77e5\u9053\u3002"),(0,m.kt)("p",null,"\u5f88\u5934\u75bc"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6321278616f2c2beb148b5b2.png",alt:"image-20220914085839291"})),(0,m.kt)("p",null,"\u6211\u4eec\u6709\u4e00\u79cd\u7ed3\u6784\u53ef\u4ee5\u7528\u6765\u7ef4\u62a4\u6bcf\u6b21\u9012\u5f52\u7684\u533a\u5757\uff0c\u901a\u8fc7\u7ef4\u62a4\u533a\u5757\u7684\u8fd9\u51e0\u4e2asum\uff0c\u5408\u5e76\u4e4b\u540e\u5c31\u80fd\u5f97\u5230\u6700\u7ec8\u89e3\uff08\u5efa\u8bae\u642d\u914d\u4ee3\u7801\u7406\u89e3\u3002"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"public class Info {\n        public int total_Sum,lsum,rsum,msum;\n        public Info(int total_Sum,int lsum,int rsum,int msum) {\n            this.total_Sum=total_Sum;\n            this.lsum=lsum;\n            this.rsum=rsum;\n            this.msum=msum;\n        }\n    }\n\n    public int maxSubArray(int[] nums) {\n            return Dc(nums,0, nums.length-1).msum;\n    }\n\n    public Info Dc(int[] nums, int l, int r) {\n        if (l == r) {\n            return new Info(nums[l], nums[l], nums[l], nums[l]);\n        }\n\n        Info l_Dc=Dc(nums,l,l+r>>1);\n        Info r_Dc=Dc(nums,(l+r>>1)+1,r);\n        return new Info(\n                l_Dc.total_Sum + r_Dc.total_Sum,\n                Math.max(l_Dc.lsum, l_Dc.total_Sum + r_Dc.lsum), //\u5c31\u662f   5 2  3 4\n                Math.max(r_Dc.rsum, r_Dc.total_Sum + l_Dc.rsum),\n                Math.max(Math.max(l_Dc.msum, r_Dc.msum), r_Dc.lsum + l_Dc.rsum)\n\n        );\n")),(0,m.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5e0c\u671b\u80fd\u89e3\u51fa\u5728","[l,r]","\u533a\u95f4\u7684\u6700\u5927\u8fde\u7eed\u5b50\u5e8f\u5217\u548cmsum\uff0c\u8fd9\u4e2amsum\u5206\u4e09\u79cd\u60c5\u51b5"),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},"\u5728","[l,m]","\uff08\u5c31\u5168\u5728\u5de6\u8fb9\uff09"),(0,m.kt)("li",{parentName:"ol"},"\u5728","[m,l]","\uff08\u5168\u5728\u53f3\u8fb9\uff09"),(0,m.kt)("li",{parentName:"ol"},"\u6a2a\u8de8m\uff0c\u5728\u5de6\u8fb9\u754c\u5728\u5de6\u533a\u95f4\uff0c\u53f3\u8fb9\u754c\u5728\u53f3\u533a\u95f4")),(0,m.kt)("p",null,"\u53ea\u8981\u5c06\u5927\u95ee\u9898\u5206\u89e3\u5b8c\u6210\u5c0f\u95ee\u9898\uff0c\u5c06\u6bcf\u4e2a\u533a\u5757\u7684\u5de6\u53f3\u533a\u95f4\u90fd\u5f04\u6210\u6700\u5927\uff0c\u7136\u540e\u5c06\u6700\u5927\u7684\u5408\u5e76\u3002"),(0,m.kt)("p",null,"\u5269\u4e0b\u7684\u95ee\u9898\u5c31\u662f\u9012\u5f52\u7684\u5b9e\u73b0\u8fd8\u6709\u6bcf\u4e2a\u5c0f\u533a\u95f4\u7684\u5de6\u53f3sum\u548c\u533a\u95f4\u6700\u5927\u548cmsum\u7684\u7ef4\u62a4"),(0,m.kt)("p",null,"\u5173\u4e8e",(0,m.kt)("em",{parentName:"p"},"totalsum"),"\uff0c\u5c31\u662f\u8fd9\u4e2a\u533a\u95f4\u7684\u7684\u548c"),(0,m.kt)("p",null,"\u5173\u4e8e",(0,m.kt)("em",{parentName:"p"},"lsum"),"\uff0c\u7b2c\u4e00\u79cd\u5c31\u662f\u4e0d\u50cf\u53f3\u8fb9\u6269\u5f20\uff0c\u4e0d\u7a7f\u8fc7m\uff0c"),(0,m.kt)("p",null,"\u7b2c\u4e8c\u79cd\u5c31\u662f\u50cf\u53f3\u8fb9\u6269\u5f20\uff0c\u7a7f\u8fc7m\uff0c\u5373\uff08l_Dc.totalsum+r_Dc.rsum)"),(0,m.kt)("p",null,(0,m.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/6321328416f2c2beb151db7c.png",alt:"image-20220914094533592"})),(0,m.kt)("p",null,"\u5de6\u53f3\u8fb9\u90fd\u662f\u5bf9\u79f0\u7684\uff0c\u76ee\u7684\u662f\u627e\u51fa\u6211\u4eec\u7ef4\u62a4\u533a\u95f4\u5185\u7684\u6700\u5927\u548c\uff0c\u4e0d\u7ba1\u5de6\u8fd8\u662f\u53f3"),(0,m.kt)("p",null,"\u5173\u4e8e",(0,m.kt)("em",{parentName:"p"},"msum")," \u8868\u793a\u533a\u95f4\u5185\u7684\u6700\u5927\u5b50\u6bb5\u548c\uff0c\u4e00\u822c\u6211\u4eec\u7ef4\u62a4\u597dl_sum\u6216\u8005r_sum\u5c31\u53ef\u4ee5\u4e86\uff0c\u5b58\u5728\u7a7f\u8fc7m\u7684\u60c5\u51b5\uff0c\u5c31\u5c06\u5de6\u53f3\u533a\u95f4\u52a0\u8d77\u6765\u3002"),(0,m.kt)("h4",{id:"dp"},"dp"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-java"},"class Solution {\n//    public int maxSubArray(int[] nums) {\n//      info\n//      \u89e3\u7b54\u6210\u529f:\n//      \u6267\u884c\u8017\u65f6:6 ms,\u51fb\u8d25\u4e865.28% \u7684Java\u7528\u6237\n//      \u5185\u5b58\u6d88\u8017:50.4 MB,\u51fb\u8d25\u4e8660.26% \u7684Java\u7528\u6237\n//      \u771f\u5783\u573e\u554a,dp\n//      int[] dp = new int[nums.length];\n//      dp[0] = nums[0];\n//      int max = dp[0];\n//      for (int i = 1; i < nums.length; i++) {\n//          if(dp[i - 1] > 0) {\n//              dp[i] = dp[i - 1] + nums[i];\n//          }else {\n//              dp[i] = nums[i];\n//          }\n//      }\n//      max= Arrays.stream(dp).max().getAsInt();\n//      return max;\n\n//      2.\u6539\u8fdb\u4e00\u70b9\u70b9,\u4f9d\u7136\u662fdp\n//      \u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b:\n//      f(i)=max{f(i\u22121)+nums[i],nums[i]}1\n//      \u91c7\u7528for each\u5faa\u73af\u52a0\u6eda\u52a8\u6570\u7ec4\u7684\u601d\u60f3\n//      info\n//      \u89e3\u7b54\u6210\u529f:\n//      \u6267\u884c\u8017\u65f6:1 ms,\u51fb\u8d25\u4e86100.00% \u7684Java\u7528\u6237\n//      \u5185\u5b58\u6d88\u8017:50.4 MB,\u51fb\u8d25\u4e8664.61% \u7684Java\u7528\u6237\n//      int pre=0,maxAns=nums[0];\n//      for(int x:nums){\n//          pre=Math.max(pre+x,x);\n//          maxAns=Math.max(maxAns,pre);\n//      }\n//      return maxAns;\n//    }\n}\n\n")))}f.isMDXComponent=!0}}]);