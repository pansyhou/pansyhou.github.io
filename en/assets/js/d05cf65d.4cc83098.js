"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[38262],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,c=m["".concat(o,".").concat(d)]||m[d]||k[d]||l;return n?r.createElement(c,p(p({ref:t},s),{},{components:n})):r.createElement(c,p({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),p=["components"],i={slug:"frontend-automated-testing",title:"\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5",date:new Date("2022-10-06T00:00:00.000Z"),authors:"kuizuo",tags:["frontend","test"],keywords:["frontend","test"]},o=void 0,u={permalink:"/en/frontend-automated-testing",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/advice/\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5.md",source:"@site/blog/advice/\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5.md",title:"\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5",description:"v2-45d641f2191559d4eff581d0607efd611440w",date:"2022-10-06T00:00:00.000Z",formattedDate:"October 6, 2022",tags:[{label:"frontend",permalink:"/en/tags/frontend"},{label:"test",permalink:"/en/tags/test"}],readingTime:8.033333333333333,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"frontend-automated-testing",title:"\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5",date:"2022-10-06T00:00:00.000Z",authors:"kuizuo",tags:["frontend","test"],keywords:["frontend","test"]},prevItem:{title:"rollup.js \u521d\u4f53\u9a8c",permalink:"/en/rollup-js-experience"},nextItem:{title:"Gitea \u4e0e Drone \u5b9e\u8df5",permalink:"/en/gitea-drone-practice"}},s={authorsImageUrls:[void 0]},m=[{value:"\u9002\u5408\u5f15\u5165\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u573a\u666f",id:"\u9002\u5408\u5f15\u5165\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u573a\u666f",level:2},{value:"\u6d4b\u8bd5\u601d\u60f3",id:"\u6d4b\u8bd5\u601d\u60f3",level:2},{value:"TDD\uff1aTest-Driven Development\uff08\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\uff09",id:"tddtest-driven-development\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1",level:3},{value:"BDD\uff1aBehavior-Driven Development\uff08\u884c\u4e3a\u9a71\u52a8\u5f00\u53d1\uff09",id:"bddbehavior-driven-development\u884c\u4e3a\u9a71\u52a8\u5f00\u53d1",level:3},{value:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7c7b\u578b",id:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7c7b\u578b",level:2},{value:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u8bef\u533a",id:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u8bef\u533a",level:2},{value:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u5230\u5e95\u5728\u6d4b\u8bd5\u4ec0\u4e48\uff1f",id:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u5230\u5e95\u5728\u6d4b\u8bd5\u4ec0\u4e48",level:2},{value:"\u4e3a\u4f55\u6211\u5f00\u59cb\u91cd\u89c6\u8d77\u6d4b\u8bd5?",id:"\u4e3a\u4f55\u6211\u5f00\u59cb\u91cd\u89c6\u8d77\u6d4b\u8bd5",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],k={toc:m},d="wrapper";function c(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)(d,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/v2-45d641f2191559d4eff581d0607efd61_1440w.jpg",alt:"v2-45d641f2191559d4eff581d0607efd61_1440w"})),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u8981\u957f\u671f\u4f7f\u7528\u5e76\u7ef4\u62a4\u7684\u8bdd\uff0c\u90a3\u4e48\u4ee3\u7801\u81ea\u52a8\u6d4b\u8bd5\u5c31\u975e\u5e38\u6709\u5fc5\u8981\u4f7f\u7528\u3002\u56e0\u4e3a\u6ca1\u4eba\u80fd\u4fdd\u8bc1\u5728\u4fee\u6539\u4ee3\u7801\u540e\uff0c\u4e0d\u4f1a\u5f15\u53d1\u5176\u4ed6\u989d\u5916 bug\uff08\u529f\u80fd\u5931\u6548\uff0c\u6e32\u67d3\u5931\u8d25\uff09\uff0c\u800c\u5728\u4fee\u6539\u5b8c\u4ee3\u7801\u540e\uff0c\u8dd1\u4e00\u904d\u6d4b\u8bd5\u5c31\u80fd\u5f88\u5927\u7a0b\u5ea6\u8ba9\u5f00\u53d1\u8005\u53d1\u73b0\u81ea\u5df1\u6240\u4fee\u6539\u7684\u4ee3\u7801\u662f\u5426\u5b58\u5728\u95ee\u9898\uff0c\u662f\u5426\u4f1a\u5bfc\u81f4\u539f\u6709\u529f\u80fd\u5931\u6548\u3002"),(0,l.kt)("p",null,"\u5c24\u5176\u662f\u5728\u5176\u4ed6\u4eba\u63a5\u624b\u8fd9\u4e2a\u9879\u76ee\u65f6\uff0c\u8bf1\u53d1 bug \u7684\u6982\u7387\u81ea\u7136\u4e5f\u5c31\u66f4\u9ad8\uff08\u56e0\u4e3a\u4ed6\u6709\u5f88\u5927\u7684\u53ef\u80fd\u4e0d\u77e5\u9053\u8fd9\u90e8\u5206\u4ee3\u7801\u7684\u4e0a\u4e0b\u6587\u7684\u529f\u80fd\u7528\u9014\uff09\uff0c\u6240\u4ee5\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48\u5f88\u591a\u5f00\u6e90\u9879\u76ee\u4e0e\u5927\u578b\u4f01\u4e1a\u7684\u516c\u53f8\u90fd\u4f1a\u4f7f\u7528\u81ea\u52a8\u5316\u6d4b\u8bd5\uff0c\u4ee5\u53ca\u8981\u6c42\u4e00\u5b9a\u7684\u4ee3\u7801\u8986\u76d6\u7387\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\u5982\u679c\u9879\u76ee\u4e0d\u662f\u957f\u671f\u7ef4\u62a4\u7684\uff0c\u90a3\u4e48\u5b8c\u5168\u6ca1\u5fc5\u8981\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801\uff0c\u8fd9\u4e48\u505a\u65e0\u7591\u662f\u5728\u6d6a\u8d39\u5f00\u53d1\u8005\u7684\u65f6\u95f4\u3002"),(0,l.kt)("h2",{id:"\u9002\u5408\u5f15\u5165\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u573a\u666f"},"\u9002\u5408\u5f15\u5165\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u573a\u666f"),(0,l.kt)("p",null,"\u63d0\u524d\u7b80\u5355\u603b\u7ed3\u4e0b",(0,l.kt)("strong",{parentName:"p"},"\u9002\u5408\u5f15\u5165\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u573a\u666f\uff08\u4f18\u70b9\uff09"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e2d\u957f\u671f\u9879\u76ee\u8fed\u4ee3/\u91cd\u6784\uff08\u9700\u8981\u9891\u7e41\u7684\u4fee\u6539\u4ee3\u7801\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u51c6\u786e\u5b9a\u4f4d\u4ee3\u7801\u95ee\u9898\uff0c\u63d0\u9ad8\u4ee3\u7801\u8d28\u91cf")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f15\u7528\u4e86\u4e0d\u53ef\u63a7\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u6781\u6613\u53d1\u751f bug\uff08\u4f8b\uff1abeta \u7248\u76f8\u5173\u7684\u5305\uff09"))),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7684\u76ee\u7684\u5728\u4e8e\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u53ca\u65f6\u53d1\u73b0\u9519\u8bef\uff0c\u63d0\u9ad8\u4ee3\u7801\u8d28\u91cf\u548c\u5f00\u53d1\u6548\u7387\uff0c\u907f\u514d\u5b58\u5728 BUG \u7684\u4ee3\u7801\u53d1\u5e03\u4e0a\u7ebf\u9020\u6210\u635f\u5931"),"\u3002"),(0,l.kt)("p",null,"\u81ea\u52a8\u5316\u6d4b\u8bd5\u8981\u6ce8\u610f\u7684\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5e76\u4e0d\u662f\u6240\u6709\u9879\u76ee\u90fd\u9002\u5408\u5f15\u5165\u81ea\u52a8\u5316\u6d4b\u8bd5\uff0c\u53cd\u800c\u4f1a\u589e\u52a0\u4e00\u5b9a\u4ee3\u7801\u6210\u672c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u9879\u76ee\u5f00\u53d1\u9636\u6bb5\u8fd8\u4e0d\u7a33\u5b9a\uff0c\u90a3\u4e48\u624b\u52a8\u6d4b\u8bd5\u6548\u7387\u4f1a\u6bd4\u81ea\u52a8\u5316\u6d4b\u8bd5\u66f4\u597d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6709\u4e9b\u4ee3\u7801\u53ef\u80fd\u8fd9\u8f88\u5b50\u90fd\u4e0d\u4f1a\u5728\u78b0\u7b2c\u4e8c\u6b21\uff0c\u5c31\u6ca1\u6709\u7f16\u5199\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u610f\u4e49"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u4ee3\u7801\u7f16\u5199\u9636\u6bb5\uff0c\u5efa\u8bae\u53ea\u5bf9\u91cd\u70b9\u529f\u80fd\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6ca1\u5fc5\u8981\u4e00\u5b9a\u8ffd\u6c42\u8fc7\u9ad8\u7684\u6d4b\u8bd5\u8986\u76d6\u7387"),"\u3002\u6ce8\u610f\uff0c\u662f\u7f16\u5199\u9636\u6bb5"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u601d\u60f3"},"\u6d4b\u8bd5\u601d\u60f3"),(0,l.kt)("h3",{id:"tddtest-driven-development\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1"},"TDD\uff1aTest-Driven Development\uff08\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TDD\uff1aTest-Driven Development\uff08\u6d4b\u8bd5\u9a71\u52a8\u5f00\u53d1\uff09\uff1aTDD \u5219\u8981\u6c42\u5728\u7f16\u5199\u67d0\u4e2a\u529f\u80fd\u7684\u4ee3\u7801\u4e4b\u524d\u5148\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801\uff0c\u7136\u540e\u53ea\u7f16\u5199\u4f7f\u6d4b\u8bd5\u901a\u8fc7\u7684\u529f\u80fd\u4ee3\u7801\uff0c\u901a\u8fc7\u6d4b\u8bd5\u6765\u63a8\u52a8\u6574\u4e2a\u5f00\u53d1\u7684\u8fdb\u884c")),(0,l.kt)("h3",{id:"bddbehavior-driven-development\u884c\u4e3a\u9a71\u52a8\u5f00\u53d1"},"BDD\uff1aBehavior-Driven Development\uff08\u884c\u4e3a\u9a71\u52a8\u5f00\u53d1\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BDD\uff1aBehavior-Driven Development\uff08\u884c\u4e3a\u9a71\u52a8\u5f00\u53d1\uff09\uff1aBDD \u53ef\u4ee5\u8ba9\u9879\u76ee\u6210\u5458\uff08\u751a\u81f3\u662f\u4e0d\u61c2\u7f16\u7a0b\u7684\uff09\u4f7f\u7528\u81ea\u7136\u8bed\u8a00\u6765\u63cf\u8ff0\u7cfb\u7edf\u529f\u80fd\u548c\u4e1a\u52a1\u903b\u8f91\uff0c\u4ece\u800c\u6839\u636e\u8fd9\u4e9b\u63cf\u8ff0\u6b65\u9aa4\u8fdb\u884c\u7cfb\u7edf\u81ea\u52a8\u5316\u7684\u6d4b\u8bd5")),(0,l.kt)("h2",{id:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7c7b\u578b"},"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7c7b\u578b"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7c7b\u578b\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u5355\u5143\u6d4b\u8bd5\uff08Unit Testing\uff09")),(0,l.kt)("p",{parentName:"li"},"\u4ee3\u7801\u4e2d\u591a\u4e2a\u7ec4\u4ef6\u5171\u7528\u7684\u5de5\u5177\u7c7b\u5e93\u3001\u591a\u4e2a\u7ec4\u4ef6\u5171\u7528\u7684\u5b50\u7ec4\u4ef6\u7b49\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u5728\u516c\u5171\u51fd\u6570/\u7ec4\u4ef6\u4e2d\u4e00\u5b9a\u8981\u6709\u5355\u5143\u6d4b\u8bd5\u6765\u4fdd\u8bc1\u4ee3\u7801\u80fd\u591f\u6b63\u5e38\u5de5\u4f5c\u3002\u5355\u5143\u6d4b\u8bd5\u4e5f\u5e94\u8be5\u662f\u9879\u76ee\u4e2d\u6570\u91cf\u6700\u591a\u3001\u8986\u76d6\u7387\u6700\u9ad8\u7684\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u96c6\u6210\u6d4b\u8bd5\uff08Integration Testing\uff09")),(0,l.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u7ecf\u8fc7\u5355\u5143\u6d4b\u8bd5\u540e\u7684\u5404\u4e2a\u6a21\u5757\u7ec4\u5408\u5728\u4e00\u8d77\u662f\u5426\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002\u4f1a\u5bf9\u7ec4\u5408\u4e4b\u540e\u7684\u4ee3\u7801\u6574\u4f53\u66b4\u9732\u5728\u5916\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5\uff0c\u67e5\u770b\u7ec4\u5408\u540e\u7684\u4ee3\u7801\u5de5\u4f5c\u662f\u5426\u7b26\u5408\u9884\u671f\u3002\u96c6\u6210\u6d4b\u8bd5\u662f\u5b89\u5168\u611f\u8f83\u9ad8\u7684\u6d4b\u8bd5\uff0c\u80fd\u5f88\u5927\u7a0b\u5ea6\u63d0\u5347\u5f00\u53d1\u8005\u7684\u4fe1\u5fc3\uff0c\u96c6\u6210\u6d4b\u8bd5\u7528\u4f8b\u8bbe\u8ba1\u5408\u7406\u4e14\u6d4b\u8bd5\u90fd\u901a\u8fc7\u80fd\u591f\u5f88\u5927\u7a0b\u5ea6\u4fdd\u8bc1\u4ea7\u54c1\u7b26\u5408\u9884\u671f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"UI \u6d4b\u8bd5 \uff08UI Testing\uff09")),(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u524d\u7aef\u7684\u6d4b\u8bd5\uff0c\u662f\u8131\u79bb\u771f\u5b9e\u540e\u7aef\u73af\u5883\u7684\uff0c\u4ec5\u4ec5\u53ea\u662f\u5c06\u524d\u7aef\u653e\u5728\u771f\u5b9e\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u800c\u540e\u7aef\u548c\u6570\u636e\u90fd\u5e94\u8be5\u4f7f\u7528 Mock \u7684\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u7aef\u5bf9\u7aef\u6d4b\u8bd5\uff08End-to-End Testing\uff09")),(0,l.kt)("p",{parentName:"li"},"\u5c06\u6574\u4e2a\u5e94\u7528\u653e\u5230\u771f\u5b9e\u7684\u73af\u5883\u4e2d\u8fd0\u884c\uff0c\u5305\u62ec\u6570\u636e\u5728\u5185\u4e5f\u662f\u9700\u8981\u4f7f\u7528\u771f\u5b9e\u7684\u3002"))),(0,l.kt)("p",null,"\u5173\u4e8e\u6d4b\u8bd5\u6846\u67b6\uff0c\u6211\u4e3b\u8981\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"Vitest")," \u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://cypress.io/"},"Cypress"),"\u3002\u8fd9\u4e24\u4e2a\u4f5c\u4e3a\u6d4b\u8bd5\u6846\u67b6\u90fd\u76f8\u5bf9\u6bd4\u8f83\u65b0\uff0c\u5e76\u4e14\u6027\u80fd\u4e0e\u5f00\u53d1\u4e0a\u4f1a\u6bd4 ",(0,l.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"https://pptr.dev/"},"Puppeteer")," \u6765\u7684\u597d\u3002\u672c\u6587\u7684\u4e00\u4e9b\u6d4b\u8bd5\u793a\u4f8b\u4e5f\u662f\u57fa\u4e8e\u8fd9\u4e24\u7c7b\u6846\u67b6\u4e4b\u4e0a\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5176\u5b9e\u8fd8\u6709\u4e2a\u63a5\u53e3\u6d4b\u8bd5\uff0c\u4e0d\u8fc7\u8fd9\u5c31\u4e0d\u662f\u524d\u7aef\u8981\u5173\u5fc3\u7684\u5185\u5bb9\u4e86\uff0c\u6240\u4ee5\u5c31\u6ca1\u5217\u4e3e\u5728\u8fd9\u4e0a\u9762\u3002")),(0,l.kt)("h2",{id:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u8bef\u533a"},"\u81ea\u52a8\u5316\u6d4b\u8bd5\u7684\u8bef\u533a"),(0,l.kt)("p",null,"\u81ea\u52a8\u5316\u6d4b\u8bd5\u548c\u666e\u901a\u8bf4\u7684\u6d4b\u8bd5\u662f\u6709\u4e9b\u4e0d\u5927\u4e00\u6837\u7684\uff0c\u6709\u5f88\u591a\u6d4b\u8bd5\uff0c\u5176\u5b9e\u90fd\u4e0d\u80fd\u5f52\u7c7b\u4e3a\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u3002\u8fd9\u91cc\u6211\u4f1a\u4e3e\u4e2a\u4f8b\u5b50\u6765\u8bf4\u660e\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,"\u5728\u81ea\u52a8\u5316\u6d4b\u8bd5\u6765\u8bf4\u6709\u4e2a\u8981\u6c42\uff1a",(0,l.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u5316\u6d4b\u8bd5\u8981\u7684\u4e0d\u662f\u67d0\u6b21\u6d4b\u8bd5\u6267\u884c\u7684\u662f\u5426\u901a\u8fc7\uff0c\u800c\u662f\u6bcf\u6b21\u6267\u884c\u90fd\u5fc5\u987b\u901a\u8fc7\u3002")),(0,l.kt)("p",null,"\u600e\u4e48\u7406\u89e3\u8fd9\u53e5\u8bdd\u5462\uff1a\u6bd4\u65b9\u8bf4\u6211\u8981\u6d4b\u8bd5\u83b7\u53d6\u535a\u5ba2\u5217\u8868\u7684\u51fd\u6570\uff0c\u5047\u8bbe\u5b9e\u9645\u7684\u63a5\u53e3\u5931\u6548\u4e86\uff0c\u90a3\u4e48\u5c31\u4f1a\u5bfc\u81f4\u7ed3\u679c\u4e0e\u9884\u671f\u4e0d\u4e00\u81f4\uff0c\u5c31\u4f1a\u5bfc\u81f4\u4ee3\u7801\u6d4b\u8bd5\u4e0d\u901a\u8fc7\u3002\u65e2\u7136\u4e0d\u901a\u8fc7\uff0c\u90a3\u6211\u5c31\u8981\u53bb\u67e5\u770b\u4e3a\u4ec0\u4e48\u4e0d\u901a\u8fc7\u3002\u5f53\u6211\u70b9\u51fb\u8fd9\u4e2a\u5355\u5143\u6d4b\u8bd5\u7684\u65f6\uff0c\u53d1\u73b0\u539f\u6765\u662f\u540e\u7aef\u63a5\u53e3\u5931\u6548\u4e86\u3002\u53ef\u4e07\u4e00\u54ea\u5929\u8fd9\u4e2a\u63a5\u53e3\u7a81\u7136\u597d\u4e86\uff0c\u53c8\u6216\u8005\u53d1\u73b0\u521a\u521a\u539f\u6765\u6ca1\u63d2\u7f51\u7ebf\u5bfc\u81f4\u7684\u8bf7\u6c42\u5931\u8d25\u5bfc\u81f4\u6d4b\u8bd5\u4e0d\u901a\u8fc7\u3002\u50cf\u8fd9\u4e9b ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u7a33\u5b9a\u56e0\u7d20")," \u5728\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\u4e2d\u5c31\u4f1a\u4f7f\u7528 mock \u7684\u65b9\u5f0f\uff0c\u5f3a\u5236\u8fd4\u56de\u4e00\u5b9a\u683c\u5f0f\u7684\u6570\u636e\u7ed9\u6d4b\u8bd5\u6846\u67b6\u3002\u5230\u8fd9\u91cc\u4f60\u53ef\u80fd\u4f1a\u597d\u5947\uff0c\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u505a\uff1f"),(0,l.kt)("p",null,"\u60f3\u60f3\u770b\uff0c\u5982\u679c\u56e0\u4e3a\u63a5\u53e3\u5931\u6548\u5bfc\u81f4\u6d4b\u8bd5\u5931\u8d25\uff0c\u662f\u56e0\u4e3a\u6d4b\u8bd5\u4ee3\u7801\u7684\u95ee\u9898\u5417\uff1f\u90a3\u8ddf\u6d4b\u8bd5\u4ee3\u7801\u6709\u6bdb\u5173\u7cfb\uff0c\u660e\u663e\u662f\u540e\u7aef\u6216\u8005\u670d\u52a1\u5668\u7684\u95ee\u9898\u3002\u6211\u4eec\u8981\u6d4b\u8bd5\u7684\u662f",(0,l.kt)("strong",{parentName:"p"},"\u83b7\u53d6\u535a\u5ba2\u5217\u8868\u7684\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u5728\u6d4b\u8bd5\u63a5\u53e3\uff08\u63a5\u53e3\u81ea\u52a8\u5316\u6d4b\u8bd5\uff09"),"\u3002\u6d4b\u8bd5\u63a5\u53e3\u4e0d\u5e94\u8be5\u662f\u524d\u7aef\u8981\u505a\u7684\u4e8b\u60c5\u3002\u786e\u4fdd\u540e\u7aef\u8fd4\u56de\u6b63\u786e\u7684\u54cd\u5e94\u7ed3\u679c\uff0c\u524d\u7aef\u80fd\u591f\u5bf9\u8fd9\u4e9b\u6570\u636e\u8fdb\u884c\u5904\u7406\u6e32\u67d3\uff0c\u8fd9\u624d\u662f\u6211\u4eec\u8981\u505a\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u6b21\u6d4b\u8bd5\u90fd\u5b58\u5728\u4e0d\u53ef\u63a7\u7684\u56e0\u7d20\uff0c\u5c31\u4f1a\u5bfc\u81f4\u6bcf\u6b21\u6d4b\u8bd5\u7ed3\u679c\u90fd\u6709\u53ef\u80fd\u4e0d\u540c\uff0c\u8fd9\u5c31\u8fdd\u80cc\u6d4b\u8bd5\u7684\u610f\u4e49\u4e86\u3002")," \u6240\u4ee5\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48\u8981\u6570\u636e mock \u7684\u539f\u56e0\u4e86\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed9\u6d4b\u8bd5\u8f93\u5165\u7684\u503c\uff0c\u5728\u7ecf\u8fc7\u6d4b\u8bd5\u540e\uff0c\u8981\u4fdd\u8bc1\u8f93\u51fa\u7684\u503c\u4e0e\u6211\u4eec\u9884\u671f\u60f3\u8981\u7ed3\u679c\u7684\u503c\u76f8\u540c\u3002")),(0,l.kt)("h2",{id:"\u81ea\u52a8\u5316\u6d4b\u8bd5\u5230\u5e95\u5728\u6d4b\u8bd5\u4ec0\u4e48"},"\u81ea\u52a8\u5316\u6d4b\u8bd5\u5230\u5e95\u5728\u6d4b\u8bd5\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u5176\u5b9e\u76ee\u524d\u524d\u7aef\u6709\u4e2a\u5c34\u5c2c\u7684\u70b9\uff0c\u76ee\u524d\u7edd\u5927\u90e8\u5206\u5b9e\u9645\u4e1a\u52a1\u9879\u76ee\u91cc\uff0c\u524d\u7aef\u7684\u5355\u5143\u6d4b\u8bd5\u90fd\u6ca1\u5565\u9e1f\u7528\uff0cUI \u81ea\u52a8\u6d4b\u8bd5\u53c8\u592a\u96be\u641e\u3002"),(0,l.kt)("p",null,"\u8fd9\u5c31\u5bfc\u81f4\u5f88\u591a\u5f00\u53d1\u8005\u4e0d\u6e05\u695a\u5230\u5e95\u8981\u6d4b\u8bd5\u4ec0\u4e48\uff0c\u5bfc\u81f4\u5bf9\u6d4b\u8bd5\u7279\u522b\u4e0d\u91cd\u89c6\uff0c\u5305\u62ec\u6211\u4e00\u5f00\u59cb\u4e5f\u662f\u5982\u6b64\u3002\u770b\u5230\u5f88\u591a\u6587\u7ae0\u90fd\u662f\u5728\u6f14\u793a\u6d4b\u8bd5 1+1 =2\uff0c\u4ecb\u7ecd\u6d4b\u8bd5\u6846\u67b6\uff0c\u5f88\u5c11\u4ece\u5b9e\u9645\u9879\u76ee\u4e2d\u51fa\u53d1\u8fdb\u884c\u6d4b\u8bd5\u3002\u4e0d\u8fc7\u539f\u56e0\u65e0\u975e\u5c31\u662f\u5b9e\u9645\u9879\u76ee\u5199\u7684\u5c11\uff0c\u5c31\u522b\u8bf4\u6d4b\u8bd5\u4ee3\u7801\u4e86\u3002\u518d\u4e0d\u7136\u5c31\u662f\u5199\u8fc7\u7684\u4ee3\u7801\u90fd\u4e0d\u600e\u4e48\u7ef4\u62a4\uff08\u91cd\u6784\uff0c\u9605\u8bfb\uff09\uff0c\u81ea\u7136\u7684\u5c31\u4e0d\u4f1a\u53bb\u5199\u6d4b\u8bd5\u4e86\u3002"),(0,l.kt)("p",null,"\u4e0d\u8fc7\u786e\u5b9e\u6ca1\u4ec0\u4e48\u597d\u4e3e\u4f8b\u7684\uff0c\u56e0\u4e3a\u592a\u591a\u4e1c\u897f\u53ef\u4ee5\u5199\u6210\u5355\u5143\u6d4b\u8bd5\u4e86\uff0c\u6bd4\u65b9\u8bf4",(0,l.kt)("inlineCode",{parentName:"p"},"formatTime.test.ts"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"param2Obj.test.ts"),",",(0,l.kt)("inlineCode",{parentName:"p"},"validate.test.ts"),"\uff0c\u4ece\u6587\u4ef6\u540d\u5c31\u77e5\u9053\u5728\u6d4b\u8bd5\u4ec0\u4e48\u4e86\uff0c\u5c31\u770b\u5f00\u53d1\u8005\u60f3\u4e0d\u60f3\u5199\u7684\u95ee\u9898\u4e86\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vitest-dev/vitest",title:"vitest-dev/vitest"},"vitest-dev/vitest")," / ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/facebook/jest"},"facebook/jest")," \u7b49\u6d4b\u8bd5\u6846\u67b6\u4e2d\u7684 example \u4e2d\u67e5\u770b\u6d4b\u8bd5\u6848\u4f8b\u3002"),(0,l.kt)("p",null,"\u5173\u4e8e UI \u6d4b\u8bd5\u548c e2e \u6d4b\u8bd5\uff0c\u6211\u975e\u5e38\u63a8\u8350\u770b\u770b cypress \u7684",(0,l.kt)("a",{parentName:"p",href:"https://example.cypress.io/todo",title:"Todo\u793a\u4f8b"},"Todo \u793a\u4f8b"),"\uff0c\u6d4b\u8bd5\u7684\u7279\u522b\u6e05\u695a\uff0c\u8fd9\u91cc\u653e\u5f20\u5b98\u65b9\u6d4b\u8bd5\u7ed3\u679c\u4f9b\u53c2\u8003\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image_a_B5FPFfJI.png",alt:null})),(0,l.kt)("p",null,"\u8fd9\u91cc\u8865\u5145\u4e00\u53e5\uff0cvitest \u662f\u80fd\u505a UI \u6d4b\u8bd5\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/vuejs/test-utils",title:"vuejs/test-utils"},"vuejs/test-utils")," \u5e93\u6765\u5b9e\u73b0\uff0c\u4f46\u662f vitest \u7684\u8fd0\u884c\u73af\u5883\u662f nodejs\uff0c\u901a\u8fc7 jsdom \u7b49\u5e93\u6765\u6a21\u62df\u6d4f\u89c8\u5668\u73af\u5883\uff0c\u800c cypress \u662f\u5b9e\u5b9e\u5728\u5728\u7684\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e0a\uff0c\u800c\u4e14\u6709\u53ef\u89c6\u5316\u9875\u9762\u64cd\u4f5c\u3002\u8fd9\u4e24\u8005\u7684\u533a\u522b\u4e5f\u5c31\u662f\u8fd0\u884c\u65f6\u73af\u5883\u7684\u533a\u522b\uff0c\u6709\u4e9b\u5b9e\u9645\u573a\u666f\u5bf9\u771f\u5b9e\u73af\u5883\u662f\u6709\u9700\u6c42\u7684\uff0c\u6240\u4ee5\u9488\u5bf9 UI \u6d4b\u8bd5\u66f4\u591a\u4f1a\u9009\u62e9\u50cf cypress \u8fd9\u79cd\u76f4\u63a5\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u7684\u6d4b\u8bd5\u6846\u67b6\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4f55\u6211\u5f00\u59cb\u91cd\u89c6\u8d77\u6d4b\u8bd5"},"\u4e3a\u4f55\u6211\u5f00\u59cb\u91cd\u89c6\u8d77\u6d4b\u8bd5?"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u6211\u6839\u672c\u4e0d\u4f1a\u5728\u610f\u6d4b\u8bd5\uff0c\u5c31\u8fde\u5df2\u6709\u7684\u6d4b\u8bd5\u4ee3\u7801\u6211\u90fd\u4e0d\u4f1a\u5c1d\u8bd5\u8fd0\u884c\u3002\u5c31\u5728\u524d\u6bb5\u65f6\u95f4\u6211\u6b63\u91cd\u6784\u6211\u7684\u4e00\u4e2a\u9879\u76ee\u65f6\uff0c\u4f46\u5f53\u6211\u5199\u4e86\u4e00\u5927\u90e8\u5206\u7684\u4ee3\u7801\u540e\uff0c\u6211\u5c1d\u8bd5\u8fd0\u884c\u53d1\u73b0\u6709\u4e9b\u529f\u80fd\u5931\u6548\u4e86\u3002\u4e8e\u662f\u6211\u8fdb\u4e00\u6b65\u7684\u6392\u67e5\uff0c\u7ec8\u4e8e\u627e\u5230\u6211\u4fee\u6539\u4ee3\u7801\u5e76\u8fd8\u539f\u6210\u6211\u539f\u6765\u7684\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u5047\u8bbe\u4e00\u5f00\u59cb\u6709\u4efd\u5b8c\u6574\u7684\u6d4b\u8bd5\u4ee3\u7801\uff0c\u5f53\u6211\u4fee\u6539\u4e00\u90e8\u5206\u4ee3\u7801\u540e\uff0c\u8dd1\u4e00\u904d\u6d4b\u8bd5\u67e5\u770b\u6d4b\u8bd5\u60c5\u51b5\u3002\u53d1\u73b0\u6ca1\u95ee\u9898\u540e\uff0c\u518d\u5f00\u59cb\u4e0b\u4e00\u6b65\u7684\u4ee3\u7801\u5de5\u4f5c\uff0c\u53cd\u590d\u6d4b\u8bd5\uff0c\u76f4\u5230\u6700\u7ec8\u91cd\u6784\u5b8c\u6bd5\u3002",(0,l.kt)("strong",{parentName:"p"},"\u4e0e\u5176\u6d6a\u8d39\u4ee3\u7801\u7684\u65f6\u95f4\uff0c\u4e0d\u5982\u5c06\u8fd9\u4e9b\u65f6\u95f4\u53bb\u7528\u6765\u5b8c\u5584\u6d4b\u8bd5\u4ee3\u7801"),"\u3002\u4e0d\u4ec5\u81ea\u5df1\u540e\u7eed\u4f7f\u7528\u9700\u8981\uff0c\u5230\u65f6\u5019\u9879\u76ee\u4ea4\u4ed8\u7ed9\u522b\u4eba\u7684\u65f6\uff0c\u522b\u4eba\u4e5f\u4e0d\u81f3\u4e8e\u4fee\u6539\u4f60\u7684\u4ee3\u7801\u65f6\u5162\u5162\u4e1a\u4e1a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7a76\u5176\u539f\u56e0\u662f\u4e3a\u4e86\u4fdd\u8bc1\u4ee3\u7801\u8d28\u91cf"),"\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u867d\u8bf4\u91cd\u89c6\uff0c\u4f46\u6211\u4e5f\u4e0d\u4f1a\u7acb\u9a6c\u4e3a\u5df2\u6709\u7684\u9879\u76ee\u589e\u52a0\u6d4b\u8bd5.\u8017\u65f6\u4e14\u8d39\u529b\u4e0d\u8ba8\u597d\u3002\u66f4\u591a\u65f6\u5019\u53ea\u4f1a\u5728\u51c6\u5907\u91cd\u6784\u7684\u9879\u76ee\uff0c\u6216\u8005\u662f\u65b0\u9879\u76ee\u4e0a\u53bb\u589e\u52a0\u6d4b\u8bd5\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u7f16\u5199\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u89e3\u60d1\u6211\u81ea\u5df1\u5bf9\u5f80\u5e38\u5bf9\u6d4b\u8bd5\u7684\u770b\u6cd5\uff0c\u4e5f\u501f\u6b64\u673a\u4f1a\u517b\u6210 TDD \u6a21\u5f0f\u7684\u5f00\u53d1\u7684\u4e60\u60ef\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904194600599560"},"\u8bd5\u8bd5\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5\uff01\uff08\u57fa\u7840\u7bc7\uff09 - \u6398\u91d1 (juejin.cn)")))}c.isMDXComponent=!0}}]);