"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(n),s=r,g=k["".concat(u,".").concat(s)]||k[s]||m[s]||i;return n?l.createElement(g,a(a({ref:t},c),{},{components:n})):l.createElement(g,a({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44155:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var l=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],o={slug:"server-and-domain-beian",title:"\u670d\u52a1\u5668\u4e0e\u57df\u540d\u5907\u6848",date:new Date("2020-11-17T00:00:00.000Z"),authors:"kuizuo",tags:["server","cloud"],keywords:["develop","cloud"]},u=void 0,p={permalink:"/server-and-domain-beian",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/\u670d\u52a1\u5668\u4e0e\u57df\u540d\u5907\u6848.md",source:"@site/blog/develop/\u670d\u52a1\u5668\u4e0e\u57df\u540d\u5907\u6848.md",title:"\u670d\u52a1\u5668\u4e0e\u57df\u540d\u5907\u6848",description:"\u4e91\u670d\u52a1\u5668",date:"2020-11-17T00:00:00.000Z",formattedDate:"2020\u5e7411\u670817\u65e5",tags:[{label:"server",permalink:"/tags/server"},{label:"cloud",permalink:"/tags/cloud"}],readingTime:9.636666666666667,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"server-and-domain-beian",title:"\u670d\u52a1\u5668\u4e0e\u57df\u540d\u5907\u6848",date:"2020-11-17T00:00:00.000Z",authors:"kuizuo",tags:["server","cloud"],keywords:["develop","cloud"]},prevItem:{title:"node\u4e0e\u6d4f\u89c8\u5668\u4e2d\u7684cookie",permalink:"/cookie-of-node-and-browser"},nextItem:{title:"\u6613\u8bed\u8a00",permalink:"/easy-language"}},c={authorsImageUrls:[void 0]},m=[{value:"\u4e91\u670d\u52a1\u5668",id:"\u4e91\u670d\u52a1\u5668",level:2},{value:"\u670d\u52a1\u5668\u7684\u914d\u7f6e",id:"\u670d\u52a1\u5668\u7684\u914d\u7f6e",level:3},{value:"\u4e91\u670d\u52a1\u5668\u548c\u8f7b\u91cf\u5e94\u7528\u670d\u52a1",id:"\u4e91\u670d\u52a1\u5668\u548c\u8f7b\u91cf\u5e94\u7528\u670d\u52a1",level:3},{value:"github\u5b66\u751f\u8ba4\u8bc1\u9001\u670d\u52a1\u5668",id:"github\u5b66\u751f\u8ba4\u8bc1\u9001\u670d\u52a1\u5668",level:3},{value:"windows \u548c Linus \u670d\u52a1\u5668\u7684\u533a\u522b",id:"windows-\u548c-linus-\u670d\u52a1\u5668\u7684\u533a\u522b",level:3},{value:"\u9009\u62e9\u54ea\u5bb6\u4e91\u670d\u52a1\u5668\u5382\u5546",id:"\u9009\u62e9\u54ea\u5bb6\u4e91\u670d\u52a1\u5668\u5382\u5546",level:2},{value:"\u4e3a\u5565\u8981\u5907\u6848",id:"\u4e3a\u5565\u8981\u5907\u6848",level:3},{value:"ICP \u5907\u6848",id:"icp-\u5907\u6848",level:3},{value:"\u516c\u5b89\u5907\u6848",id:"\u516c\u5b89\u5907\u6848",level:3},{value:"\u60ac\u6302\u5907\u6848\u53f7",id:"\u60ac\u6302\u5907\u6848\u53f7",level:3}],k={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4e91\u670d\u52a1\u5668"},"\u4e91\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u8bf4\u767d\u5c31\u662f\u5168\u5929 24 \u5c0f\u65f6\u4e0d\u505c\u6b47\u7684\u8fd0\u884c\u4e00\u53f0\u7535\u8111\uff0c\u540c\u65f6\u5206\u914d\u4e00\u4e2a\u516c\u7f51 IP \u7ed9\u8fd9\u4e2a\u7535\u8111\uff0c\u4f60\u53ea\u9700\u8981\u628a\u4f60\u8981\u7684\u8d44\u6e90\u653e\u7f6e\u5230\u8fd9\u53f0\u7535\u8111\u4e0a\uff0c\u522b\u4eba\u901a\u8fc7\u8bbf\u95ee\u8be5 IP \u5c31\u80fd\u8bbf\u95ee\u5230\u8fd9\u53f0\u7535\u8111\u7684\u8d44\u6e90\uff0c\u6bd4\u5982\u4f60\u653e\u4e00\u4e2a\u7f51\u9875\u90e8\u7f72\u5728\u8fd9\u53f0\u670d\u52a1\u5668\u4e0a\uff0c\u522b\u4eba\u8bbf\u95ee \u8fd9\u4e2aIP\u5c31\u80fd\u8bbf\u95ee\u5230\u7f51\u9875\u7684\u5185\u5bb9\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u6765\u5b89\u88c5\u670d\u52a1\u5668\u7684\u7cfb\u7edf\uff0c\u8fd9\u4e9b\u5728\u4e91\u670d\u52a1\u5382\u5546\u4e2d\u90fd\u662f\u53ef\u4ee5\u9009\u62e9\u7684\u3002"),(0,i.kt)("h3",{id:"\u670d\u52a1\u5668\u7684\u914d\u7f6e"},"\u670d\u52a1\u5668\u7684\u914d\u7f6e"),(0,i.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u4e00\u4e9b\u63d0\u4f9b\u4e91\u670d\u52a1\u5668\u7684\u5382\u5546\u90fd\u4f1a\u7ed9\u65b0\u7528\u6237\u4e00\u4e2a\u65b0\u7528\u6237\u4ef7\uff0c\u5dee\u4e0d\u591a\u4e5f\u5c31\u662f 100 \u5de6\u53f3\u4e00\u5e74\u7684\u4e91\u670d\u52a1\u5668,\u914d\u7f6e\u4e00\u822c\u90fd\u662f 2g \u5185\u5b58,1 \u6838,1m \u5e26\u5bbd,50g \u786c\u76d8\u8bf4\u5b9e\u8bdd\u5bf9\u4e8e\u6ca1\u6709\u7279\u6b8a\u9700\u6c42\u7684\u670d\u52a1\u5668\u591f\u7528\u4e86\u3002\u800c\u4e0d\u662f\u65b0\u7528\u6237\u7684\u4ef7\u683c\uff0c\u8fd9\u6837\u7684\u914d\u7f6e\u4e00\u4e2a\u6708\u5dee\u4e0d\u591a 70 \u5143\uff0c\u7b97\u4e00\u4e0b\u4e00\u5e74\u6253\u6298\u540e 700 \u5143\uff0c\u8fd9\u8fd8\u7b97\u4fbf\u5b9c\u7684\u4e86\uff0c\u670d\u52a1\u5668\u8d35\u8fd9\u5f88\u6b63\u5e38\uff0c\u5168\u5929\u4e0d\u95f4\u65ad\u8fd0\u884c\uff0c\u7535\u8d39\uff0c\u7f51\u8d39\u548c\u4e00\u4e9b\u670d\u52a1\u8d39\u7528\uff0c\u5176\u5b9e\u5c31\u5df2\u7ecf\u975e\u5e38\u503c\u4e86\u3002"),(0,i.kt)("p",null,"\u5176\u4ed6\u51e0\u4e2a\u914d\u7f6e\u6ca1\u4ec0\u4e48\u53ef\u8bf4\u7684\uff0c\u5982\u679c\u8981\u8bf4\u670d\u52a1\u5668\u54ea\u4e2a\u914d\u7f6e\u6700\u8d35\u7684\u8bdd\uff0c\u65e0\u7591\u5c31\u662f\u5e26\u5bbd\u4e86\u30021M \u7684\u5e26\u5bbd\u7406\u8bba\u4e0a\u4f20\u901f\u5ea6\u4e3a 128kB/s\uff0c\u4e5f\u5c31\u662f\u6211\u4ece\u670d\u52a1\u5668\u4e2d\u4e0b\u8f7d\u4e00\u4e2a 10m \u7684\u8f6f\u4ef6\uff0c\u9700\u8981 80 \u79d2\uff0c\u8fd9\u8fd8\u53ea\u662f\u7406\u8bba\u901f\u5ea6\uff0c\u6211\u5b9e\u6d4b\u8fc7\u5e73\u5747\u901f\u5ea6\u4e0d\u5230 100kB/s\u3002\u5982\u679c\u642d\u5efa\u7f51\u7ad9\u7684\u8bdd 1m \u6709\u4e9b\u6162\uff0c\u867d\u8bf4\u4e00\u4e2a\u9875\u9762\u4e00\u822c\u90fd\u4e0d\u4f1a\u8d85\u8fc7 100kb\uff0c\u4f46\u80cc\u540e\u52a0\u8f7d\u7684\u56fe\u7247 css js\u8d44\u6e90\u53ef\u5c31\u4e0d\u53ea\u662fkb\u5927\u5c0f\u4e86\uff0c\u7528\u6237\u8bbf\u95ee\u7f51\u9875\u5c31\u9700\u8981\u82b1\u8d39\u4e00\u5b9a\u65f6\u95f4\u7b49\u5f85\u52a0\u8f7d\uff0c\u4f53\u9a8c\u975e\u5e38\u4e0d\u597d\u3002\u4e2a\u4eba\u5efa\u8bae\u5e26\u5bbd5m\u8d77\u6b65\uff0c\u5426\u5219\u5c31\u4e0d\u5efa\u8bae\u8d2d\u4e70\u3002"),(0,i.kt)("h3",{id:"\u4e91\u670d\u52a1\u5668\u548c\u8f7b\u91cf\u5e94\u7528\u670d\u52a1"},"\u4e91\u670d\u52a1\u5668\u548c\u8f7b\u91cf\u5e94\u7528\u670d\u52a1"),(0,i.kt)("p",null,"\u5173\u4e8e\u670d\u52a1\u5668\u7684\u9009\u62e9\u5f88\u591a\u4eba\u4e0d\u77e5\u9053\u4e91\u670d\u52a1\u5668\u548c\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u7684\u533a\u522b\uff0c\u8fd9\u91cc\u4e24\u79cd\u670d\u52a1\u5668\u6211\u90fd\u4e70\u8fc7\uff0c\u4e14\u76ee\u524d\u90fd\u5728\u5f79\u3002\u4e3b\u8981\u533a\u522b\u548c\u4f18\u52bf\u8bf7\u53c2\u8003\u4e0b\u8868\uff08\u817e\u8baf\u4e91\u6587\u6863\uff09"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image_CO_V_ghsyo.png",alt:null})),(0,i.kt)("p",null,"\u66f4\u5177\u4f53\u7684\u53ef\u4ee5\u67e5\u770b\u5bf9\u5e94\u4e91\u670d\u52a1\u5546\u7684\u4ecb\u7ecd"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/1023850?spm=5176.21213303.J_6704733920.7.432353c9DbykNf%5C&scm=20140722.S_community@@%E6%96%87%E7%AB%A0@@1023850._.ID_community@@%E6%96%87%E7%AB%A0@@1023850-RL_%E9%98%BF%E9%87%8C%E4%BA%91ecs%E4%BA%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%92%8C%E8%BD%BB%E9%87%8F%E5%BA%94%E7%94%A8%E6%9C%8D%E5%8A%A1%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E5%8F%8A%E9%80%89%E6%8B%A9%E6%96%B9%E6%B3%95-LOC_main-OR_ser-V_2-P0_0",title:"\u963f\u91cc\u4e91ECS\u4e91\u670d\u52a1\u5668\u548c\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u6709\u4ec0\u4e48\u533a\u522b\u53ca\u9009\u62e9\u65b9\u6cd5-\u963f\u91cc\u4e91\u5f00\u53d1\u8005\u793e\u533a (aliyun.com)"},"\u963f\u91cc\u4e91ECS\u4e91\u670d\u52a1\u5668\u548c\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u6709\u4ec0\u4e48\u533a\u522b\u53ca\u9009\u62e9\u65b9\u6cd5-\u963f\u91cc\u4e91\u5f00\u53d1\u8005\u793e\u533a (aliyun.com)")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/document/product/1207/49819",title:"\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u5668 \u4e0e\u4e91\u670d\u52a1\u5668 CVM \u5bf9\u6bd4-\u4ea7\u54c1\u7b80\u4ecb-\u6587\u6863\u4e2d\u5fc3-\u817e\u8baf\u4e91 (tencent.com)"},"\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u5668 \u4e0e\u4e91\u670d\u52a1\u5668 CVM \u5bf9\u6bd4-\u4ea7\u54c1\u7b80\u4ecb-\u6587\u6863\u4e2d\u5fc3-\u817e\u8baf\u4e91 (tencent.com)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u603b\u7ed3\uff1a\u4e70\u8f7b\u91cf\u5e94\u7528\u670d\u52a1\u5668\u662f\u6700\u5b9e\u60e0\u7684")),(0,i.kt)("h3",{id:"github\u5b66\u751f\u8ba4\u8bc1\u9001\u670d\u52a1\u5668"},"github\u5b66\u751f\u8ba4\u8bc1\u9001\u670d\u52a1\u5668"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u60f3\u82b1\u94b1\u4e70\u4e00\u4e2a\u670d\u52a1\u5668\u7684\u8bdd\uff0c\u53ef\u4ee5\u8003\u8bd5github\u5b66\u751f\u8ba4\u8bc1\uff0c\u4f1a\u9001\u4f60\u4e00\u4e2a\u670d\u52a1\u5668\u3002\u5177\u4f53\u53ef\u5230\u5b98\u65b9\u4e2d\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://education.github.com/experiences/virtual_event_kit",title:"https://education.github.com/experiences/virtual_event_kit"},"https://education.github.com/experiences/virtual","_","event","_","kit")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image_Rsh8Y_TBfe.png",alt:null})),(0,i.kt)("h3",{id:"windows-\u548c-linus-\u670d\u52a1\u5668\u7684\u533a\u522b"},"windows \u548c Linus \u670d\u52a1\u5668\u7684\u533a\u522b"),(0,i.kt)("p",null,"\u8fd9\u91cc\u53ef\u80fd\u4f1a\u8bf4\u7684\u4e0d\u5bf9\uff0c\u6bd5\u7adf\u6211\u63a5\u89e6\u670d\u52a1\u5668\u76f8\u5173\u7b49\u914d\u7f6e\u4e5f\u6ca1\u592a\u591a\u65f6\u95f4\uff0c\u4f46\u662f\u6211\u89c9\u5f97\u6709\u5fc5\u8981\u8bf4\u4e00\u4e0b\uff0c\u6211\u90a3\u65f6\u5019\u7528 windows \u670d\u52a1\u5668\u7684\u65f6\u5019\uff0c\u53ea\u8981\u901a\u8fc7 windows",(0,i.kt)("strong",{parentName:"p"},"\u4e13\u4e1a\u7248"),"\uff08\u4e00\u5b9a\u8981\u4e13\u4e1a\u7248\u624d\u80fd\u8fdc\u7a0b\u8fde\u63a5\u522b\u4eba\u7684\u7535\u8111\uff09\u81ea\u5e26\u7684\u8fdc\u7a0b\u684c\u9762\uff08cmd \u4e2d\u8f93\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"mstsc"),"\u5373\u53ef\uff09\uff0c\u7136\u540e\u8f93\u5165 ip \u5730\u5740\uff0c\u63a5\u7740\u5728\u8f93\u5165\u76f8\u5e94\u7684\u8d26\u53f7\u5bc6\u7801\u5373\u53ef\uff0c\u4f46\u6709\u53ef\u80fd\u65e0\u6cd5\u8fde\u63a5\uff0c\u539f\u56e0\u662f\u9632\u706b\u5899\u548c ip \u767d\u540d\u5355\u6ca1\u6709\u914d\u7f6e\u597d\uff0c\u670d\u52a1\u5668\u4e0d\u5141\u8bb8\u8fde\u63a5\u3002"),(0,i.kt)("p",null,"\u800c\u5bf9\u4e8e Linux\uff0c\u7528\u7684\u6700\u591a\u7684\u5c31\u662f\u5b9d\u5854\u9762\u677f\u4e86\uff0c\u4f46\u662f\u8fde\u63a5\u4e0d\u662f\u901a\u8fc7 windows \u8fdc\u7a0b\u684c\u9762\uff0c\u800c\u662f\u901a\u8fc7\u50cf\u7ec8\u7aef\u90a3\u6837\u8fde\u63a5\u767b\u5f55\uff0c\u6211\u4e00\u822c\u662f\u7528 Xshell \u6765\u8fde\u63a5\u3002\u4f46\u662f\u8fde\u63a5\u5b8c\u5c31\u5f00\u59cb\u8f93\u5165\u547d\u4ee4\u5b89\u88c5\u5b9d\u5854\u9762\u677f\uff0c\u7136\u540e\u4f1a\u6709\u5bf9\u5e94\u7684\u9762\u677f\u5730\u5740\u548c\u767b\u5f55\u5b9d\u5854\u9762\u677f\u7684\u8d26\u53f7\u5bc6\u7801\uff0c\u53ea\u8981\u8bbf\u95ee\u7ed9\u5b9a\u7684\u9762\u677f\u5730\u5740\u52a0\u4e0a\u7528\u6237\u5bc6\u7801\u5373\u53ef\u767b\u5f55\u3002\u50cf\u5bf9\u5e94\u7684\u754c\u9762\u5982\u4e0b"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20200918141519472.png",alt:"image-20200918141519472",title:"image-20200918141519472"})),(0,i.kt)("h2",{id:"\u9009\u62e9\u54ea\u5bb6\u4e91\u670d\u52a1\u5668\u5382\u5546"},"\u9009\u62e9\u54ea\u5bb6\u4e91\u670d\u52a1\u5668\u5382\u5546"),(0,i.kt)("p",null,"\u76ee\u524d\u5e02\u573a\u4e0a\u4e3b\u8981\u6709\u963f\u91cc\u4e91\u548c\u817e\u8baf\u4e91\u7684\u670d\u52a1\u5668\uff0c\u8fd9\u4e24\u8005\u7684\u670d\u52a1\u5668\u8d28\u91cf\u548c\u64cd\u4f5c\u4f53\u9a8c\u4e0a\u90fd\u5c5e\u4e8e\u5927\u5382\u7ea7\u522b\u3002\u4e0d\u5206\u4e0a\u4e0b\uff0c\u90fd\u53ef\u4ee5\u9009\u62e9\u8d2d\u4e70\uff0c\u4e0d\u8fc7\u6700\u597d\u6709\u4e2a\u539f\u5219\uff0c\u4f60\u57df\u540d\u5728\u54ea\u8d2d\u4e70\uff0c\u670d\u52a1\u5668\u5c31\u4e70\u54ea\u4e00\u5bb6\u7684\uff0c\u56e0\u4e3a\u5230\u65f6\u5019\u5907\u6848\u662f\u9700\u8981\u670d\u52a1\u5668\u624d\u80fd\u5907\u6848\u7684\u3002"),(0,i.kt)("h1",{id:"\u57df\u540d"},"\u57df\u540d"),(0,i.kt)("p",null,"\u6b63\u5e38\u6765\u8bf4\u4f60\u8bbf\u95ee\u4f60\u4e00\u4e2a\u7f51\u7ad9\u80af\u5b9a\u4e0d\u662f\u8bbf\u95ee\u4e00\u4e2aip\u5730\u5740\uff0c\u800c\u662f\u4e00\u4e2a\u57df\u540d\uff0c\u6bd4\u65b9\u8bf4\u8bbf\u95eekuizuo.cn\uff0cbaidu.com\u3002\u4f46\u5176\u5b9e\u8bbf\u95ee\u57df\u540d\u5c31\u76f8\u5f53\u4e8e\u8bbf\u95ee\u8fd9\u4e2aip\uff0c\u8fc7\u7a0b\u5982\u4e0b\uff1a\u9996\u5148\u8bbf\u95ee\u57df\u540d\u4f1a\u7ecf\u8fc7DNS\u89e3\u6790\uff0cDNS\uff08\u57df\u540d\u7cfb\u7edf\uff09\u4f1a\u627e\u5230\u4f60\u8981\u8bbf\u95ee\u7684\u57df\u540d\u6240\u89e3\u6790\u7684ip\uff0c\u7136\u540e\u8bbf\u95ee\u8fd9\u4e2aip\u3002"),(0,i.kt)("p",null,"\u4f46\u6709\u9057\u61be\u7684\u5730\u65b9\u5c31\u662f\u5f88\u591a\u65f6\u5019\u60f3\u8981\u6ce8\u518c\u81ea\u5df1\u60f3\u8981\u7684\u57df\u540d\u975e\u5e38\u96be\uff0c\u56e0\u4e3a\u5df2\u7ecf\u88ab\u522b\u4eba\u73b0\u884c\u6ce8\u518c\u4e86\u3002\u6bd4\u5982\u6211\u7684\u73b0\u5728\u7684kuizuo.cn\u8fd9\u4e2a\u57df\u540d\u662f\u4ece\u4ed6\u4eba\u624b\u91cc\u8d2d\u4e70\u800c\u6765\u7684\u3002\u6240\u4ee5\u57df\u540d\u8fd9\u4e1c\u897f\u8bf7\u4f18\u5148\u51c6\u5907\u597d\uff0c\u5907\u6848\u89e3\u6790\u5565\u7684\u5b8c\u5168\u4e0d\u6025\uff0c\u4e00\u5e74\u4e5f\u5c31\u662f\u51e0\u5341\u5757\u94b1\uff0c\u4f46\u662f\u4f60\u4e0d\u5148\u4e70\u5c31\u5f88\u6709\u53ef\u80fd\u7ed9\u522b\u4eba\u5148\u6ce8\u518c\uff0c\u5230\u65f6\u5019\u60f3\u4e70\u90fd\u6ca1\u5f97\u4e70\uff0c\u8981\u4e0d\u7136\u5c31\u8981\u82b1\u5927\u4ef7\u683c\u8d2d\u4e70\uff0c\u56e0\u6b64\u4e5f\u6709\u5f88\u591a\u4eba\u53bb\u505a\u57df\u540d\u4e70\u5356\u7684\u751f\u610f\u3002"),(0,i.kt)("p",null,"\u4e00\u822c\u4e00\u4e2a\u57df\u540d\u591f\u7528\u4e86\uff0c\u9700\u8981\u7684\u8bdd\u5728\u57df\u540d\u89e3\u6790\u4e2d\u53bb\u6dfb\u52a0\u57df\u540d\u7684\u5b50\u57df\u540d\uff08\u4e8c\u7ea7\uff0c\u4e09\u7ea7\u7b49\u7b49\uff09\uff0c\u6bd4\u5982\u6211\u7684\u4e00\u4e9b\u4e2a\u4eba\u9879\u76ee\u5c31\u662f\u4f7f\u7528\u4e8c\u7ea7\u57df\u540d\u6765\u8bbf\u95ee\u7684\uff0c\u8fd9\u91cc\u6211\u4e5f\u5c31\u4e0d\u5728\u5217\u4e3e\u4e86\u3002"),(0,i.kt)("h3",{id:"\u4e3a\u5565\u8981\u5907\u6848"},"\u4e3a\u5565\u8981\u5907\u6848"),(0,i.kt)("p",null,"\u9996\u5148\u5907\u6848\u8981\u63d0\u4ea4\u8d1f\u8d23\u4eba\u7684\u8eab\u4efd\u4fe1\u606f\uff08\u8eab\u4efd\u8bc1\u6b63\u53cd\uff0c\u624b\u6301\uff0c\u4eba\u8138\uff0c\u624b\u673a\u53f7\uff0c\u4f4f\u5740\u7b49\uff09\uff0c\u8bb0\u5f55\u4f60\u8fd9\u4e2a\u57df\u540d\u5185\u7684\u7f51\u7ad9\u7684\u8d1f\u8d23\u4eba\u548c\u5355\u4f4d\uff0c\u4e3b\u8981\u4e3a\u4e86\u9632\u6b62\u5728\u7f51\u4e0a\u4ece\u4e8b\u975e\u6cd5\u7684\u7f51\u7ad9\u7ecf\u8425\u6d3b\u52a8\uff0c\u6253\u51fb\u4e0d\u826f\u4e92\u8054\u7f51\u4fe1\u606f\u7684\u4f20\u64ad\uff0c\u80fd\u7ed9\u4e88\u8b66\u544a\u548c\u5c01\u7981\u3002\uff08\u7f51\u7ad9\u5907\u6848\u53ea\u9488\u5bf9\u56fd\u5185\u670d\u52a1\u5668\uff09"),(0,i.kt)("p",null,"\u603b\u4e4b\u4e0d\u8981\u53bb\u641e\u8fdd\u89c4\u8fdd\u6cd5\u884c\u4e3a\uff0c\u5929\u7f51\u6062\u6062\u758f\u800c\u4e0d\u6f0f\uff0c\u7f51\u8b66\u8981\u627e\u603b\u5f52\u6709\u65b9\u6cd5\u3002"),(0,i.kt)("h3",{id:"icp-\u5907\u6848"},"ICP \u5907\u6848"),(0,i.kt)("p",null,"9 \u6708 3 \u53f7\u8d2d\u4e70\u7684\u817e\u8baf\u4e91\u4e0e\u57df\u540d\uff0c\u7136\u540e\u8fdb\u884c\u521d\u6b65\u7684\u670d\u52a1\u5668\u7b80\u5355\u90e8\u7f72\u914d\u7f6e\uff0c\u7b2c\u4e8c\u5929\u5f00\u59cb\u57df\u540d\u5b9e\u540d\u8ba4\u8bc1\uff0c\u63a5\u7740\u5b9e\u540d\u540e\u9700\u8981 3 \u5929\u65f6\u95f4\u624d\u53ef\u4ee5\u8fdb\u884c\u5f00\u59cb\u57df\u540d\u5907\u6848\uff0c\u7b49\u4e86 3 \u5929\u5f00\u59cb\u57df\u540d\u5907\u6848\u63d0\u4ea4\u7f51\u7ad9\u7684\u7528\u9014\u4fe1\u606f\u7b49\u7b49\uff0c\u7136\u540e\u62cd\u8eab\u4efd\u8bc1\uff0c\u4eba\u8138\uff0c\u624b\u6301\uff0c\u63a5\u7740\u5230 9 \u6708 9 \u65e5\u817e\u8baf\u4e91\u670d\u52a1\u5668\u7684\u5ba2\u670d\u6253\u7535\u8bdd\u7ed9\u6211\u8981\u6211\u4fee\u6539\u4e00\u4e9b\u4fe1\u606f\uff0c\u6bd4\u5982\u7f51\u7ad9\u8be6\u60c5\u5199\u7684\u4e0d\u884c\uff0c\u8d44\u6599\u4e0d\u5168\uff0c\u8fc7\u4e0d\u4e86\u5907\u6848\u7b49\u7b49\uff0c\u7136\u540e\u4fee\u6539\u91cd\u65b0\u63d0\u4ea4\u4e00\u6b21\uff0c\u6700\u7ec8\u7b49\u5f85\u6536\u5230\u817e\u8baf\u4e91\u52a9\u624b\u7684\u901a\u77e5\uff0c\u76f4\u5230 9 \u6708 18 \u53f7\uff0c\u5982\u4e0b\u7ed3\u679c"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20200918113449612.png",alt:"image-20200918113449612",title:"image-20200918113449612"})),(0,i.kt)("p",null,"\u81f3\u6b64 ICP \u5907\u6848\u5c31\u641e\u5b9a\u4e86\uff0cICP \u8fd8\u7b97\u8f7b\u677e\uff0c\u8eab\u4efd\u4fe1\u606f\u771f\u5b9e\uff0c\u6765\u8bbf\u7535\u8bdd\u53ca\u65f6\u63a5\u542c\uff0c\u7b49\u5c31\u884c\u4e86\u3002"),(0,i.kt)("p",null,"\u53ea\u8981ICP \u5907\u6848\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u57df\u540d ",(0,i.kt)("a",{parentName:"p",href:"https://kuizuo.cn",title:"kuizuo.cn"},"kuizuo.cn")," \u8bbf\u95ee\u5230\u6211\u7684\u4e2a\u4eba\u535a\u5ba2\u3002(\u5f53\u7136\u524d\u63d0\u9700\u8981\u5230\u57df\u540d\u7ba1\u7406\u4e2d\u7684DNS\u89e3\u6790\u6dfb\u52a0)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image_nuVA2RTh_b.png",alt:null})),(0,i.kt)("h3",{id:"\u516c\u5b89\u5907\u6848"},"\u516c\u5b89\u5907\u6848"),(0,i.kt)("p",null,"\u4f46\u8fd8\u6709\u4e00\u4e2a\u516c\u5b89\u5907\u6848\uff0c\u867d\u8bf4\u4e0d\u662f\u5f3a\u5236\u7684\uff0c\u4f46\u4e00\u822c\u90fd\u662f\u5efa\u8bae\u53bb\u516c\u5b89\u5907\u6848\u4e00\u4e0b\u3002\u6211\u4e4b\u524d\u7684\u57df\u540dkzcode.cn\u5c31\u6709\u516c\u5b89\u5907\u6848\uff0c\u4f46\u73b0\u5728\u7684kuizuo.cn \u5e76\u6ca1\u6709\u3002\u4e3b\u8981\u539f\u56e0\u8fd8\u662f\u592a\u8fc7\u4e8e\u7e41\u7410\uff0c\u6bd4ICP\u5907\u6848\u590d\u6742\u591a\u4e86\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u9700\u8981\u767b\u5f55 ",(0,i.kt)("a",{parentName:"p",href:"http://www.beian.gov.cn",title:"http://www.beian.gov.cn"},"http://www.beian.gov.cn")," \u6ce8\u518c\u5e76\u4e14\u767b\u5f55\u586b\u5199\u7684\u4fe1\u606f\u4e5f\u6bd4\u4e0a\u9762\u7684\u591a\uff0c\u5982\u4e0b\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20201119191204222.png",alt:"image-20201119191204222",title:"image-20201119191204222"})),(0,i.kt)("p",null,"\u586b\u5199\u8d44\u6599\u6298\u817e\u4e86\u534a\u5c0f\u65f6\u5de6\u53f3\u7684\u65f6\u95f4\uff0c\u624d\u63d0\u4ea4\u4e0a\u53bb\uff0c\u800c\u4e14\u8fc7\u4e86\u5feb\u4e24\u5468\u540e\uff0c\u6211\u6536\u5230\u4e86\u5982\u4e0b\u7684\u77ed\u4fe1"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u3010\u516c\u5b89\u7f51\u7ad9\u670d\u52a1\u5e73\u53f0\u3011\u5c0a\u656c\u7684\u7528\u6237:\u60a8\u5f00\u529e\u7684\u7f51\u7ad9(\u4e92\u8054\u7f51\u6280\u672f\u6587\u7ae0\u5206\u4eab:kzcode.cn)\u5ba1\u6838\u672a\u901a\u8fc7\uff0c\u539f\u56e0\uff1a\u7f51\u7ad9\u4fe1\u606f\u68c0\u67e5\u6709\u8bef\uff0c\u5ba1\u6838\u4e0d\u901a\u8fc7\uff0c\u8bf7\u5c3d\u5feb\u767b\u5f55www",".","beian.gov.cn\u7f51\u7ad9\uff0c\u5728\u8349\u7a3f\u4e2d\u4fee\u6539\u5e76\u91cd\u65b0\u63d0\u4ea4\u7f51\u7ad9\u5907\u6848\u7533\u8bf7\uff0c\u5982\u6709\u7591\u95ee\u53ef\u5728\u5de5\u4f5c\u65e5\uff08\u4e0a\u53488:30-11:30\u3001\u4e0b\u534814:00-17:00\uff09\u8054\u7cfb\u7f51\u8b66\uff0c\u8054\u7cfb\u7535\u8bdd\uff1a059xxxxxxxx\uff0c\u8c22\u8c22\u60a8\u7684\u914d\u5408\u3002")),(0,i.kt)("p",null,"\u5de5\u4f5c\u4eba\u5458\u7535\u8bdd\u548c\u6211\u8054\u7cfb\u662f\u8bf4\u6211\u6237\u7c4d\u8f6c\u4e86\uff0c\u9700\u8981\u5728\u6211\u8f6c\u5165\u5730\u53bb\u7533\u8bf7\uff0c\u4e8e\u662f\u53c8\u91cd\u65b0\u63d0\u4ea4\u6539\u6570\u636e\uff0c\u53cd\u6b63\u5c31\u662f\u7167\u7740\u817e\u8baf\u4e91\u7684\u5e2e\u52a9\u6587\u6863\u586b\u5199\u81ea\u5df1\u7684\u4e2a\u4eba\u4fe1\u606f\uff0c\u4e2d\u9014\u6709\u51e0\u6b21\u5c31\u8fd9\u4e48\u78e8\u7740\u78e8\u7740\u5230\u4e86 11 \u6708 17 \u53f7\uff0c\u77ed\u4fe1\u6536\u5230\u4e86\u8fd9\u4e00\u6761"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u3010\u516c\u5b89\u7f51\u7ad9\u670d\u52a1\u5e73\u53f0\u3011\u5c0a\u656c\u7684\u7528\u6237:\u60a8\u7684\u5f00\u529e\u4e3b\u4f53\u5df2\u7ecf\u5ba1\u6838\u901a\u8fc7\uff0c\u5982\u679c\u5b58\u5728\u81ea\u52a8\u5173\u8054\u7684\u5f85\u5907\u6848\u6216\u5f85\u8ba4\u9886\u7f51\u7ad9\uff0c\u8bf7\u5c3d\u5feb\u6838\u5bf9\u5f52\u5c5e\uff0c\u8fdb\u884c\u65b0\u7f51\u7ad9\u5907\u6848\u4ee5\u53ca\u5df2\u5907\u6848\u7f51\u7ad9\u8ba4\u9886\u7684\u7533\u8bf7\u3002\u5982\u6709\u7591\u95ee\u53ef\u5728\u5de5\u4f5c\u65f6\u95f4\uff08\u5468\u4e00\u81f3\u5468\u4e94\u4e0a\u5348 9:00-12:00\u3001\u4e0b\u5348 14:00-17:00\uff09\u8054\u7cfb\u7f51\u8b66\uff0c\u8054\u7cfb\u7535\u8bdd\uff1a059xxxxxxxx\uff0c\u8c22\u8c22\u60a8\u7684\u914d\u5408\u3002")),(0,i.kt)("p",null,"\u7136\u800c\uff0c\u6211\u767b\u5f55\u4e86\u7f51\u7ad9\u5374\u6ca1\u6709\u770b\u5230\u5df2\u5907\u6848\u7684\u7f51\u7ad9\uff0c\u4e8e\u662f\u8054\u7cfb\u5de5\u4f5c\u4eba\u5458 \uff0c\u7136\u540e\u53eb\u6211\u91cd\u65b0\u63d0\u4ea4\u4e00\u6b21\uff0c\u8fd9\u6b21\u4e0d\u5230\u534a\u5c0f\u65f6\u5c31\u641e\u5b9a\uff0c\u6700\u7ec8\u77ed\u4fe1\u7ed3\u679c\u5982\u4e0b"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u3010\u516c\u5b89\u7f51\u7ad9\u670d\u52a1\u5e73\u53f0\u3011\u5c0a\u656c\u7684\u7528\u6237:\u60a8\u5f00\u529e\u7684\u7f51\u7ad9(\u4e92\u8054\u7f51\u6280\u672f\u6587\u7ae0\u5206\u4eab:kzcode.cn)\u5df2\u7ecf\u5ba1\u6838\u901a\u8fc7\uff0c\u8bf7\u5c3d\u5feb\u767b\u5f55www",".","beian.gov.cn\u7f51\u7ad9,\u4e0b\u8f7d\u5907\u6848\u53f7\u7801\uff0c\u9644\u5728\u7f51\u7ad9\u5e95\u90e8\uff0c\u5982\u6709\u7591\u95ee\u53ef\u5728\u5de5\u4f5c\u65e5\uff08\u4e0a\u53489:00-12:00\u3001\u4e0b\u534814:00-17:00\uff09\u8054\u7cfb\u7f51\u8b66\uff0c\u8054\u7cfb\u7535\u8bdd\uff1a059xxxxxxxx\uff0c\u8c22\u8c22\u60a8\u7684\u914d\u5408\u3002")),(0,i.kt)("p",null,"\u7136\u540e\u767b\u5f55\u516c\u5b89\u5907\u6848\u7f51\u7ad9\uff0c\u67e5\u770b\u5907\u6848\u7ed3\u679c\u5982\u4e0b\u56fe\uff0c\u5e05\u7684\u4e0d\u8c08\uff01"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20201117152619474.png",alt:"image-20201117152619474",title:"image-20201117152619474"})),(0,i.kt)("h3",{id:"\u60ac\u6302\u5907\u6848\u53f7"},"\u60ac\u6302\u5907\u6848\u53f7"),(0,i.kt)("p",null,"\u5982\u679c\u4e0a\u9762\u90fd\u5df2\u7ecf\u5f04\u597d\u4e86\u4e5f\u522b\u592a\u9ad8\u5174\uff0c\u8981\u5728\u7f51\u9875\u6e90\u4ee3\u7801\u5c06\u516c\u5b89\u8054\u7f51\u5907\u6848\u4fe1\u606f\u653e\u7f6e\u5728\u7f51\u9875\u5e95\u90e8\u3002\u7b80\u5355\u7684\u8bf4\u5b8c\u6210\u4e24\u9879\u5907\u6848\u540e\u90fd\u9700\u8981\u5728\u7f51\u7ad9\u9875\u9762\u5e95\u90e8\u663e\u793a\u5907\u6848\u53f7\uff0c\u5e76\u6307\u660e\u8f6c\u5230\u94fe\u63a5\u3002\u5728\u6211\u7684\u4e2a\u4eba\u535a\u5ba2\u9875\u9762\u6700\u4e0b\u65b9\uff0c\u5c31\u4f1a\u770b\u5230\u5982\u4e0b\u56fe\u8fd9\u6837\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20201117153209037.png",alt:"image-20201117153209037",title:"image-20201117153209037"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.gov.cn/gongbao/content/2005/content_93018.htm",title:"\u5de5\u4fe1\u90e8\u539f\u6587"},"\u5de5\u4fe1\u90e8\u539f\u6587")," \u7b2c\u5341\u4e09\u6761\u548c\u7b2c\u4e8c\u5341\u4e94\u6761"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u7b2c\u5341\u4e09\u6761")," \u975e\u7ecf\u8425\u6027\u4e92\u8054\u7f51\u4fe1\u606f\u670d\u52a1\u63d0\u4f9b\u8005\u5e94\u5f53\u5728\u5176\u7f51\u7ad9\u5f00\u901a\u65f6\u5728\u4e3b\u9875\u5e95\u90e8\u7684\u4e2d\u592e\u4f4d\u7f6e\u6807\u660e\u5176\u5907\u6848\u7f16\u53f7\uff0c\u5e76\u5728\u5907\u6848\u7f16\u53f7\u4e0b\u65b9\u6309\u8981\u6c42\u94fe\u63a5\u4fe1\u606f\u4ea7\u4e1a\u90e8\u5907\u6848\u7ba1\u7406\u7cfb\u7edf\u7f51\u5740\uff0c\u4f9b\u516c\u4f17\u67e5\u8be2\u6838\u5bf9\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u5341\u4e94\u6761")," \u8fdd\u53cd\u672c\u529e\u6cd5\u7b2c\u5341\u4e09\u6761\u7684\u89c4\u5b9a\uff0c\u672a\u5728\u5176\u5907\u6848\u7f16\u53f7\u4e0b\u65b9\u94fe\u63a5\u4fe1\u606f\u4ea7\u4e1a\u90e8\u5907\u6848\u7ba1\u7406\u7cfb\u7edf\u7f51\u5740\u7684\uff0c\u6216\u672a\u5c06\u5907\u6848\u7535\u5b50\u9a8c\u8bc1\u6807\u8bc6\u653e\u7f6e\u5728\u5176\u7f51\u7ad9\u6307\u5b9a\u76ee\u5f55\u4e0b\u7684\uff0c\u7531\u4f4f\u6240\u6240\u5728\u5730\u7701\u901a\u4fe1\u7ba1\u7406\u5c40\u8d23\u4ee4\u6539\u6b63\uff0c\u5e76\u59045\u5343\u5143\u4ee5\u4e0a1\u4e07\u5143\u4ee5\u4e0b\u7f5a\u6b3e\u3002")),(0,i.kt)("p",null,"\u5f53\u7136\u4e5f\u6709\u5f88\u591a\u7f51\u7ad9\u5e76\u6ca1\u6709\u8fd9\u4e48\u505a\uff0c\u5177\u4f53\u8fd8\u662f\u9700\u8981\u770b\u7f51\u7ad9\u7684\u6027\u8d28\uff0c\u662f\u5426\u7ecf\u8425\u6027\u7f51\u7ad9\u3002\u50cf\u4e2a\u4eba\u535a\u5ba2\u8fd9\u79cd\uff0c\u53ea\u9700\u8981\u60ac\u6302\u4e00\u4e2aICP\u5907\u6848\u53f7\u5373\u53ef\uff0c\u4f46\u5bf9\u4e8e\u7edd\u5927\u591a\u6570\u7684\u56fd\u5185\u7f51\u7ad9\u662f\u80af\u5b9a\u60ac\u6302\u516c\u5b89\u5907\u6848\uff0c\u5e76\u4e14\u9664\u4e86\u5907\u6848\u4fe1\u606f\u5916\uff0c\u8fd8\u6709\u4e00\u5806\u76f8\u5173\u8bc1\u4ef6\uff0c\u5982\u8425\u4e1a\u6267\u7167\uff0c\u8bb8\u53ef\u8bc1\uff0c\u8d44\u683c\u8bc1\u7b49\u7b49\uff0c\u56fd\u5185\u7684\u7f51\u7ad9\u76d1\u7ba1\u975e\u5e38\u4e25\u683c\u7684\u3002"))}s.isMDXComponent=!0}}]);