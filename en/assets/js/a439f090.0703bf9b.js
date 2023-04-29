"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[65143],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,g=s["".concat(p,".").concat(d)]||s[d]||c[d]||o;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},75207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],l={id:"how-to-decompiling-miniprogram",slug:"/how-to-decompiling-miniprogram",title:"\u5c0f\u7a0b\u5e8f\u5982\u4f55\u53cd\u7f16\u8bd1",date:new Date("2021-08-30T00:00:00.000Z"),authors:"kuizuo",tags:["reverse","decompilation","miniprogram"],keywords:["reverse","decompilation","miniprogram"]},p=void 0,u={unversionedId:"skill/reverse/web/how-to-decompiling-miniprogram",id:"skill/reverse/web/how-to-decompiling-miniprogram",title:"\u5c0f\u7a0b\u5e8f\u5982\u4f55\u53cd\u7f16\u8bd1",description:"\u73af\u5883\u5b89\u88c5",source:"@site/docs/skill/reverse/web/\u5c0f\u7a0b\u5e8f\u5982\u4f55\u53cd\u7f16\u8bd1.md",sourceDirName:"skill/reverse/web",slug:"/how-to-decompiling-miniprogram",permalink:"/en/docs/how-to-decompiling-miniprogram",draft:!1,tags:[{label:"reverse",permalink:"/en/docs/tags/reverse"},{label:"decompilation",permalink:"/en/docs/tags/decompilation"},{label:"miniprogram",permalink:"/en/docs/tags/miniprogram"}],version:"current",frontMatter:{id:"how-to-decompiling-miniprogram",slug:"/how-to-decompiling-miniprogram",title:"\u5c0f\u7a0b\u5e8f\u5982\u4f55\u53cd\u7f16\u8bd1",date:"2021-08-30T00:00:00.000Z",authors:"kuizuo",tags:["reverse","decompilation","miniprogram"],keywords:["reverse","decompilation","miniprogram"]},sidebar:"skill",previous:{title:"JS\u4ee3\u7801\u6df7\u6dc6\u4e0e\u8fd8\u539f",permalink:"/en/docs/js-code-obfuscation-and-reverse"},next:{title:"\u6d45\u8c08\u52a0\u5bc6\u7b97\u6cd5",permalink:"/en/docs/brief-talk-encryption-algorithm"}},m={},c=[{value:"\u73af\u5883\u5b89\u88c5",id:"\u73af\u5883\u5b89\u88c5",level:2},{value:"\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177",id:"\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177",level:3},{value:"nodejs",id:"nodejs",level:3},{value:"\u6a21\u62df\u5668",id:"\u6a21\u62df\u5668",level:3},{value:"\u89e3\u5305\u5de5\u5177",id:"\u89e3\u5305\u5de5\u5177",level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",level:2},{value:"\u4e00\u952e\u5bfc\u5305\u5de5\u5177",id:"\u4e00\u952e\u5bfc\u5305\u5de5\u5177",level:2},{value:"\u4e00\u4e9b\u95ee\u9898",id:"\u4e00\u4e9b\u95ee\u9898",level:2},{value:"Q\uff1a\u7535\u8111\u4e5f\u80fd\u8fd0\u884c\u5c0f\u7a0b\u5e8f\uff0c\u90a3\u80fd\u4e0d\u80fd\u4ece\u7535\u8111\u4e0a\u5bfc\u5305\u5462",id:"q\u7535\u8111\u4e5f\u80fd\u8fd0\u884c\u5c0f\u7a0b\u5e8f\u90a3\u80fd\u4e0d\u80fd\u4ece\u7535\u8111\u4e0a\u5bfc\u5305\u5462",level:3},{value:"Q\uff1a\u53cd\u7f16\u8bd1\u540e\u7684\u5c0f\u7a0b\u5e8f\u80fd\u91cd\u65b0\u6253\u5305\u540e\u5728\u53d1\u5e03\u5417",id:"q\u53cd\u7f16\u8bd1\u540e\u7684\u5c0f\u7a0b\u5e8f\u80fd\u91cd\u65b0\u6253\u5305\u540e\u5728\u53d1\u5e03\u5417",level:3},{value:"\u6700\u540e",id:"\u6700\u540e",level:2}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u73af\u5883\u5b89\u88c5"},"\u73af\u5883\u5b89\u88c5"),(0,o.kt)("h3",{id:"\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177"},"\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html"},"\u7a33\u5b9a\u7248 Stable Build | \u5fae\u4fe1\u5f00\u653e\u6587\u6863 (qq.com)")),(0,o.kt)("p",null,"\u53ea\u652f\u6301 windows \u548c mac"),(0,o.kt)("h3",{id:"nodejs"},"nodejs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/download/"},"\u4e0b\u8f7d | Node.js (nodejs.org)")),(0,o.kt)("h3",{id:"\u6a21\u62df\u5668"},"\u6a21\u62df\u5668"),(0,o.kt)("p",null,"\u8fd9\u91cc\u63a8\u8350\u7528\u96f7\u7535\u6a21\u62df\u5668\uff0c\u771f\u673a\u4e5f\u884c\uff0c\u53ea\u8981\u80fd\u767b\u5f55\u5fae\u4fe1\u90fd\u53ef\u4ee5"),(0,o.kt)("h3",{id:"\u89e3\u5305\u5de5\u5177"},"\u89e3\u5305\u5de5\u5177"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/xuedingmiaojun/wxappUnpacker"},"xuedingmiaojun/wxappUnpacker: \u5c0f\u7a0b\u5e8f\u53cd\u7f16\u8bd1(\u652f\u6301\u5206\u5305) (github.com)")),(0,o.kt)("p",null,"\u9009\u62e9\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/xuedingmiaojun/wxappUnpacker\n\ncd wxappUnpacker\n\nnpm install\n")),(0,o.kt)("h2",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,o.kt)("p",null,"\u9996\u5148\u6253\u5f00\u6a21\u62df\u5668\uff0c\u5b89\u88c5\u4e0b\u5fae\u4fe1\uff08\u83b7\u53d6\u5c0f\u7a0b\u5e8f\u7684\u5305\uff09\u548c RE \u6587\u4ef6\u7ba1\u7406\u5668\u6216\u81ea\u5e26\u6587\u4ef6\u7ba1\u7406\u5668\uff08\u627e\u5230\u5c0f\u7a0b\u5e8f\u7684\u5305\u5e76\u5bfc\u51fa\uff09"),(0,o.kt)("p",null,"\u767b\u5f55\u5fae\u4fe1\uff0c\u7136\u540e\u8fdb\u5165\u8981\u53cd\u7f16\u8bd1\u7684\u5c0f\u7a0b\u5e8f\uff0c\u6253\u5f00 RE \u6587\u4ef6\u7ba1\u7406\u5668\uff0c\u627e\u5230\u8def\u5f84",(0,o.kt)("inlineCode",{parentName:"p"},"/data/data/com.tencent.mm/MicroMsg/{{\u54c8\u5e0c\u503c}}/appbrand/pkg/xxxxx.wxapkg")," \u5bf9\u5e94\u7a0b\u5e8f\u5305\u3002"),(0,o.kt)("p",null,"\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"/data/data/com.tencent.mm/MicroMsg/a5e1a6f4438d7cad5182e77248180f50/appbrand/pkg/xxxxx.wxapkg"),"\uff0c\u5177\u4f53\u54c8\u5e0c\u503c\u9700\u8981\u6839\u636e\u751f\u6210\u6587\u4ef6\u65f6\u95f4\u6765\u5224\u65ad"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210831222820533.png",alt:"image-20210831222820533"})),(0,o.kt)("p",null,"\u5982\u679c\u662f\u6a21\u62df\u5668\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528 QQ \u6216\u8005\u662f\u6a21\u62df\u5668\u81ea\u5e26\u7684\u6587\u4ef6\u5171\u4eab\u5668\uff0c\u5c06\u6587\u4ef6\u5bfc\u5165\u81f3\u7535\u8111\uff0c\u771f\u673a\u7684\u8bdd\u76f4\u63a5\u8fde\u63a5\u7535\u8111\u4f20\u8f93\u6587\u4ef6\u5373\u53ef\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\uff1a\u672c\u4eba\u6d4b\u8bd5\u4e2d Root \u8fc7\u7684\u673a\u578b\u662f\u65e0\u6cd5\u767b\u5f55\u5fae\u4fe1\uff0c\u8981\u4e48\u4e00\u76f4\u8f6c\u5708\u5708\u8981\u4e48\u6ed1\u5757\u52a0\u8f7d\u4e0d\u51fa\u6765\uff0c\u4e5f\u8bb8\u662f\u6a21\u62df\u5668\u7684\u95ee\u9898\u6216\u662f\u4e4b\u524d\u5df2\u7ecf\u5b89\u88c5\u8fc7\u4e00\u4e9b\u63d2\u4ef6\u5bfc\u81f4\u7684\u3002\u5982\u679c\u767b\u5f55\u4e0d\u4e0a\u53ef\u9009\u62e9\u5173\u95ed Root \u767b\u5f55\u5fae\u4fe1\u540e\uff0c\u5728\u6253\u5f00 Root\u3002")),(0,o.kt)("p",null,"\u63a5\u7740\u6253\u5f00\u89e3\u5305\u5de5\u5177\u6587\u4ef6\u5939\uff0c\u6253\u5f00\u63a7\u5236\u53f0\u7a97\u53e3\n\u8f93\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"node wuWxapkg.js <wxapkg\u8def\u5f84>"),"\uff0c\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b\u56fe"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210830034643420.png",alt:"image-20210830034643420"})),(0,o.kt)("p",null,"\u4f1a\u5728 wxapkg \u6587\u4ef6\u4e0b\u751f\u6210\u4e0e\u4e4b\u5bf9\u5e94\u7684\u6587\u4ef6\u5939\uff0c\u63a5\u7740\u6253\u5f00\u5fae\u4fe1\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u9009\u62e9\u5bfc\u5165\u9879\u76ee\uff0c\u9009\u62e9\u5bf9\u5e94\u6587\u4ef6\u5939\uff0c\u9009\u62e9\u6d4b\u8bd5\u53f7"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210830034848958.png",alt:"image-20210830034848958"})),(0,o.kt)("p",null,"\u5bfc\u5165\u5373\u53ef\u8fd0\u884c\uff0c\u63a5\u7740\u5c31\u53ef\u4ee5\u5f00\u59cb\u5206\u6790\u5c0f\u7a0b\u5e8f\u7684\u53c2\u6570\u548c\u9875\u9762\u6837\u5f0f\u4e86\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210831222521295.png",alt:"image-20210831222521295"})),(0,o.kt)("h2",{id:"\u4e00\u952e\u5bfc\u5305\u5de5\u5177"},"\u4e00\u952e\u5bfc\u5305\u5de5\u5177"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/xuedingmiaojun/mp-unpack"},"xuedingmiaojun/mp-unpack: \u57fa\u4e8e electron-vue \u5f00\u53d1\u7684\u8de8\u5e73\u53f0\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u81ea\u52a9\u89e3\u5305(\u53cd\u7f16\u8bd1)\u5ba2\u6237\u7aef (github.com)")),(0,o.kt)("p",null,"\u6709\u4e2a\u57fa\u4e8e electron-vue \u5f00\u53d1\u7684\u4e00\u952e\u5bfc\u5305\u5de5\u5177\uff0c\u5177\u4f53\u7684\u8bdd\u53ef\u4ee5\u67e5\u770b\u5bf9\u5e94\u6e90\u7801\uff0c\u9700\u8981\u7684\u53ef\u81ea\u884c\u7f16\u8bd1\uff0c\u4e0d\u8fc7\u4e5f\u5df2\u7ecf\u63d0\u4f9b\u5404\u5e73\u53f0\u5bf9\u5e94\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210831222006013.png",alt:"image-20210831222006013"})),(0,o.kt)("p",null,"\u4e0d\u8fc7\u662f\u56e0\u4e3a electron \u5199\u7684\uff0c\u4e14\u4e0d\u652f\u6301\u9009\u62e9\u8def\u5f84\uff0c\u6240\u4ee5 C \u76d8\u4f1a\u77ac\u95f4\u591a\u4e2a 150M \u5de6\u53f3\uff0c\u5b89\u88c5\u5305\u5927\u7ea6 40M\uff0c\u9664\u6b64\u5916\u7684\u8bdd\u4f7f\u7528\u4f53\u9a8c\u8fd8\u662f\u975e\u5e38\u597d\u7684\u3002\uff08\u81f3\u5c11\u53ef\u4ee5\u4e0d\u7528\u8f93\u5165\u547d\u4ee4\uff09"),(0,o.kt)("h2",{id:"\u4e00\u4e9b\u95ee\u9898"},"\u4e00\u4e9b\u95ee\u9898"),(0,o.kt)("h3",{id:"q\u7535\u8111\u4e5f\u80fd\u8fd0\u884c\u5c0f\u7a0b\u5e8f\u90a3\u80fd\u4e0d\u80fd\u4ece\u7535\u8111\u4e0a\u5bfc\u5305\u5462"},"Q\uff1a\u7535\u8111\u4e5f\u80fd\u8fd0\u884c\u5c0f\u7a0b\u5e8f\uff0c\u90a3\u80fd\u4e0d\u80fd\u4ece\u7535\u8111\u4e0a\u5bfc\u5305\u5462"),(0,o.kt)("p",null,"A\uff1a\u80fd\uff0c\u7535\u8111\u5bfc\u5305\u7684\u8def\u5f84\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Users\\{{\u7535\u8111\u7528\u6237\u540d}}\\Documents\\WeChat Files\\Applet\\{{\u5c0f\u7a0b\u5e8fAppID}}\\{{\u968f\u673a\u4ea7\u751f\u7684\u6570\u5b57}}\\__APP__.wxapkg"),"\uff0c\u7136\u540e\u6309\u7167\u5982\u4e0a\u6b65\u9aa4\uff0c\u5c31\u53ef\u53cd\u7f16\u8bd1\u5c0f\u7a0b\u5e8f\uff0c\u4e0d\u8fc7\u7535\u8111\u5bfc\u5305\u53ef\u80fd\u4f1a\u51fa\u73b0",(0,o.kt)("strong",{parentName:"p"},"magic number is not correct")," \u7684\u9519\u8bef \uff08\u672c\u4eba\u6d4b\u8bd5\u662f\u8fd9\u6837\u7684\uff09\uff0c\u6bd5\u7adf\u5c0f\u7a0b\u5e8f\u4e3b\u8981\u8fd0\u884c\u5728\u624b\u673a\u4e0a\uff0c\u6240\u4ee5\u8fd8\u662f\u63a8\u8350\u624b\u673a\u5bfc\u5305\u3002"),(0,o.kt)("h3",{id:"q\u53cd\u7f16\u8bd1\u540e\u7684\u5c0f\u7a0b\u5e8f\u80fd\u91cd\u65b0\u6253\u5305\u540e\u5728\u53d1\u5e03\u5417"},"Q\uff1a\u53cd\u7f16\u8bd1\u540e\u7684\u5c0f\u7a0b\u5e8f\u80fd\u91cd\u65b0\u6253\u5305\u540e\u5728\u53d1\u5e03\u5417"),(0,o.kt)("p",null,"A: \u7406\u8bba\u4e0a\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u4e0d\u80fd\u4fdd\u8bc1\u53cd\u7f16\u8bd1\u540e\u7684\u5c0f\u7a0b\u5e8f\u5c31\u4e00\u5b9a\u80fd\u91cd\u7f16\u8bd1\u6210\u529f\uff0c\u6bd5\u7adf\u6709\u4e00\u4e9b\u63d2\u4ef6\u7b49\u7b49\uff0c\u7f16\u8bd1\u90fd\u4e0d\u80fd\u7f16\u8bd1\uff0c\u5c31\u522b\u8c08\u6253\u5305\u4e86\u3002\u5e76\u4e14\u53cd\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u90fd\u662f\u7ecf\u8fc7\u538b\u7f29\u7684\uff0c\u9605\u8bfb\u6027\u7565\u5dee\uff0c\u4e0d\u8fc7\u5982\u679c\u662f uniapp \u7f16\u5199\u7684\u8bdd\uff0c\u9664\u4e86 js \u6587\u4ef6\u5916\uff0c\u5176\u4f59\u57fa\u672c\u539f\u5c01\u4e0d\u52a8\uff08\u524d\u63d0\u6ca1\u505a\u6df7\u6dc6\u7684\u60c5\u51b5\u4e0b\uff09\uff0c\u6240\u4ee5\u8981\u4eff\u4e00\u4e2a\u9875\u9762\u7684\u8bdd\uff0c\u5b8c\u5168\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a Vue \u6587\u4ef6\uff0c\u7136\u540e\u5c06\u5176 html \u4e0e css \u6dfb\u52a0\u81f3\u5bf9\u5e94\u6a21\u677f\u5904\uff0c\u7136\u540e js \u5c31\u53ea\u80fd\u6263\u53bb\u90e8\u5206\u4ee3\u7801\uff0c\u81f3\u4e8e\u63a5\u53e3\u7684\u8bdd\u90fd\u662f\u522b\u4eba\u7684\uff0c\u6240\u4ee5\u4e00\u822c\u5206\u6790\u4e0b\u9875\u9762\u6837\u5f0f\u548c\u53c2\u6570\u5c31\u5dee\u4e0d\u591a\u4e86\u3002"),(0,o.kt)("p",null,"\u6211\u5199\u8fd9\u7bc7\u7684\u65f6\u5019\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u67e5\u770b\u522b\u4eba\u5c0f\u7a0b\u5e8f\u7684\u6837\u5f0f\u800c\u5df2\u3002"),(0,o.kt)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,o.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u53cd\u7f16\u8bd1\u6bd4\u6211\u60f3\u8c61\u4e2d\u7684\u7b80\u5355\uff0c\u76f8\u5bf9\u4e8e\u5b89\u5353\u4e0e windows \u7a0b\u5e8f\u53cd\u7f16\u8bd1\u7684\u8bdd\uff08\u5f53\u7136\u4e5f\u53ef\u80fd\u662f\u6211\u9006\u5411\u73a9\u591a\u4e86\uff09\uff0c\u5e76\u4e14\u51e0\u4e4e\u80fd\u65e0\u7f1d\u8fd0\u884c\uff0c\u4e0d\u8fc7\u5c0f\u7a0b\u5e8f\u4e5f\u7b97\u662f\u7528\u524d\u7aef\u6280\u672f\u5199\u7684\u4e86\uff0c\u7f51\u9875 F12 \u6253\u5f00\u63a7\u5236\u53f0\u5c31\u53ef\u770b\u5230\u6e90\u7801\uff0c\u5c0f\u7a0b\u5e8f\u7684\u8bdd\uff0cem\u3002\u3002\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u6211\u662f\u63a5\u89e6\u8fc7 Uniapp \u5f00\u53d1\u7684\uff0c\u5e76\u4e14\u6211\u81ea\u5df1\u6240\u7f16\u8bd1\u7684\u5c0f\u7a0b\u5e8f\u4e5f\u662f Uniapp \u5f00\u53d1\u7684\uff0c\u6240\u4ee5\u4e00\u4e9b\u76f8\u5173\u7684\u6837\u5f0f\u5c31\u81ea\u7136\u719f\u6089\u4e0d\u8fc7\u4e86\uff0c\u5c06\u5176\u51e0\u4e2a\u9875\u9762\u8f6c\u5316\u4e3a Vue \u4ee3\u7801\u4e5f\u7b97\u6bd4\u8f83\u8f7b\u677e\u4e86"))}d.isMDXComponent=!0}}]);