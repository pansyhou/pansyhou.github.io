"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2005],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65274:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),i=["components"],o={id:"intercepting-requests",slug:"/intercepting-requests",title:"\u6293\u5305",date:new Date("2020-02-02T00:00:00.000Z"),authors:"kuizuo",tags:["android","http","\u6293\u5305"],keywords:["android","http","\u6293\u5305"]},p=void 0,s={unversionedId:"skill/reverse/android/\u5237\u673a/intercepting-requests",id:"skill/reverse/android/\u5237\u673a/intercepting-requests",title:"\u6293\u5305",description:"Charles",source:"@site/docs/skill/reverse/android/\u5237\u673a/\u6293\u5305.md",sourceDirName:"skill/reverse/android/\u5237\u673a",slug:"/intercepting-requests",permalink:"/docs/intercepting-requests",draft:!1,tags:[{label:"android",permalink:"/docs/tags/android"},{label:"http",permalink:"/docs/tags/http"},{label:"\u6293\u5305",permalink:"/docs/tags/\u6293\u5305"}],version:"current",frontMatter:{id:"intercepting-requests",slug:"/intercepting-requests",title:"\u6293\u5305",date:"2020-02-02T00:00:00.000Z",authors:"kuizuo",tags:["android","http","\u6293\u5305"],keywords:["android","http","\u6293\u5305"]},sidebar:"skill",previous:{title:"\u5b89\u88c5LSPosed",permalink:"/docs/install-lsposed"},next:{title:"\u89e3Bootloader\u9501",permalink:"/docs/solution-of-bootloader-lock"}},u={},c=[{value:"Charles",id:"charles",level:2},{value:"1\u3001\u5b89\u88c5",id:"1\u5b89\u88c5",level:3},{value:"2\u3001\u8bbe\u7f6e socket \u4ee3\u7406",id:"2\u8bbe\u7f6e-socket-\u4ee3\u7406",level:3},{value:"3\u3001\u6293\u53d6 HTTPS \u5305",id:"3\u6293\u53d6-https-\u5305",level:3},{value:"3\u3001Denying access from address not on ACL",id:"3denying-access-from-address-not-on-acl",level:3},{value:"Postern",id:"postern",level:2},{value:"1\u3001\u5b89\u88c5 postern",id:"1\u5b89\u88c5-postern",level:3},{value:"2\u3001\u914d\u7f6e\u4ee3\u7406",id:"2\u914d\u7f6e\u4ee3\u7406",level:3},{value:"3\u3001\u914d\u7f6e\u89c4\u5219",id:"3\u914d\u7f6e\u89c4\u5219",level:3},{value:"4\u3001\u914d\u7f6e SSL \u8bc1\u4e66",id:"4\u914d\u7f6e-ssl-\u8bc1\u4e66",level:3},{value:"\u5b89\u88c5\u65b9\u5f0f 1",id:"\u5b89\u88c5\u65b9\u5f0f-1",level:4},{value:"\u5b89\u88c5\u65b9\u5f0f 2",id:"\u5b89\u88c5\u65b9\u5f0f-2",level:4},{value:"2\u3001\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\uff0c\u5982\u56fe",id:"2\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\u5982\u56fe",level:3},{value:"\u68c0\u6d4b\u8bc1\u4e66",id:"\u68c0\u6d4b\u8bc1\u4e66",level:3},{value:"\u5927\u529f\u544a\u6210",id:"\u5927\u529f\u544a\u6210",level:3},{value:"\u5bf9\u6bd4 FD \u914d\u7f6e\u4ee3\u7406 \u4e0e Charles \u548c Postern \u7ec4\u5408",id:"\u5bf9\u6bd4-fd-\u914d\u7f6e\u4ee3\u7406-\u4e0e-charles-\u548c-postern-\u7ec4\u5408",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"charles"},"Charles"),(0,a.kt)("h3",{id:"1\u5b89\u88c5"},"1\u3001\u5b89\u88c5"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740: ",(0,a.kt)("a",{parentName:"p",href:"https://www.charlesproxy.com/download/"},"Download a Free Trial of Charles \u2022 Charles Web Debugging Proxy (charlesproxy.com)")),(0,a.kt)("p",null,"\u6fc0\u6d3b\u7801\u5730\u5740: ",(0,a.kt)("a",{parentName:"p",href:"https://www.zzzmode.com/mytools/charles/"},"Charles \u7834\u89e3\u5de5\u5177 (zzzmode.com)")),(0,a.kt)("h3",{id:"2\u8bbe\u7f6e-socket-\u4ee3\u7406"},"2\u3001\u8bbe\u7f6e socket \u4ee3\u7406"),(0,a.kt)("p",null,"Proxy -> Proxy Setting \u5982\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202045815609.png",alt:"image-20210202045815609"})),(0,a.kt)("p",null,"\u7528 Charles \u9488\u5bf9\u6293\u5b89\u5353\u7684\u5305\uff0c\u6240\u4ee5\u5728 Windows \u4e0b\u5c31\u4e0d\u8bbe\u7f6e\u4ee3\u7406\u3002\u540c\u65f6\u4f7f\u7528 Socket \u4ee3\u7406 \u800c\u4e0d\u662f http \u4ee3\u7406\uff0c\u914d\u7f6e\u7aef\u53e3\uff08\u8fd9\u91cc\u4e3a 8999\uff09\u5373\u53ef"),(0,a.kt)("h3",{id:"3\u6293\u53d6-https-\u5305"},"3\u3001\u6293\u53d6 HTTPS \u5305"),(0,a.kt)("p",null,"Proxy -> SSL Proxying Settings\u2026"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/20220119144147.png",alt:"image-20220119144140665"})),(0,a.kt)("p",null,"\u5339\u914d\u6240\u6709\u5730\u5740\u4e0e\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"*:*")," \uff0c\u5bf9\u4e8e\u53cc\u5411\u9a8c\u8bc1\u7684\u8bc1\u4e66\u4e5f\u53ef\u5728\u8fd9\u91cc\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/20220119144353.png",alt:"image-20220119144353270"})),(0,a.kt)("h3",{id:"3denying-access-from-address-not-on-acl"},"3\u3001Denying access from address not on ACL"),(0,a.kt)("p",null,"\u8981\u5728 charles \u5141\u8bb8\u8bbe\u5907\uff0c\u9700\u8981\u5982\u4e0b\u8bbe\u7f6e"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210517020819625.png",alt:"image-20210517020819625"})),(0,a.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u4e00\u4e2a 0.0.0.0/0 \u7684 ip \u5373\u53ef\u6293\u53d6\u6240\u6709\u8bbe\u5907"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210517020904361.png",alt:"image-20210517020904361"})),(0,a.kt)("h2",{id:"postern"},"Postern"),(0,a.kt)("h3",{id:"1\u5b89\u88c5-postern"},"1\u3001\u5b89\u88c5 postern"),(0,a.kt)("p",null,"\u4e0b\u8f7d\u5730\u5740: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/postern-overwal/postern-stuff/blob/master/Postern-3.1.2.apk"},"https://github.com/postern-overwal/postern-stuff/blob/master/Postern-3.1.2.apk")),(0,a.kt)("h3",{id:"2\u914d\u7f6e\u4ee3\u7406"},"2\u3001\u914d\u7f6e\u4ee3\u7406"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202050134094.png",alt:"image-20210202050134094"})),(0,a.kt)("p",null,"\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u52a0\u5bc6\u7c7b\u578b\u53ef\u4e0d\u586b"),(0,a.kt)("p",null,"\u6ce8\uff1a \u6709\u4e2a\u5c0f\u5751\uff0c\u8981\u4fdd\u8bc1\u7535\u8111\u4e0e\u624b\u673a\u8fde\u63a5\u7684\u662f\u540c\u4e00\u4e2a Wifi \u7f51\u7edc\uff0c\u70b9\u51fb \u83dc\u5355 -> Help -> Local IP \u53ef\u67e5\u770b\u5f53\u524d\u7f51\u7edc\u4e0b IP \u5982\u56fe\uff0c\u4e00\u822c\u4e3a Wireless\uff08\u7b14\u8bb0\u672c\uff09\uff0c\u5177\u4f53\u90fd\u8981\u5c1d\u8bd5\u4e00\u904d"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202050422857.png",alt:"image-20210202050422857"})),(0,a.kt)("h3",{id:"3\u914d\u7f6e\u89c4\u5219"},"3\u3001\u914d\u7f6e\u89c4\u5219"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202050513312.png",alt:"image-20210202050513312"})),(0,a.kt)("p",null,"\u8fd9\u91cc\u4e5f\u8981\u6ce8\u610f\uff0c\u5728",(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21"),"\u914d\u7f6e\u7684\u65f6\u5019\uff0c\u70b9\u51fb\u4fdd\u5b58\u540e\uff0cCharles \u4f1a\u5f39\u51fa\u5bf9\u8bdd\u6846\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u70b9\u51fb\u53f3\u8fb9 Allow")," \u5373\u53ef\uff0c\u5982\u679c\u6ca1\u6709\u51fa\u73b0\uff0c\u90a3\u4e48\u591a\u534a\u662f\u4ee3\u7406 IP \u6ca1\u6709\u914d\u7f6e\u597d\uff0c\u8fd9\u65f6\u5019\u5c1d\u8bd5\u591a\u5f00\u5173\u51e0\u6b21 VPN \u4e0e\u8bbe\u7f6e Local IP \u4e2d\u7684 IP \u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202051719212.png",alt:"image-20210202051719212"})),(0,a.kt)("h3",{id:"4\u914d\u7f6e-ssl-\u8bc1\u4e66"},"4\u3001\u914d\u7f6e SSL \u8bc1\u4e66"),(0,a.kt)("p",null,"\u6b64\u65f6\u53ef\u4ee5\u6293\u5305\uff0c\u4f46\u6293\u53d6 HTTPS \u5219\u662f unknown\uff0c\u5373\u672a\u89e3\u5bc6\u7684\uff0c\u8fd9\u65f6\u5019\u5c31\u8981\u914d\u7f6e SSL \u8bc1\u4e66"),(0,a.kt)("h4",{id:"\u5b89\u88c5\u65b9\u5f0f-1"},"\u5b89\u88c5\u65b9\u5f0f 1"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202051440984.png",alt:"image-20210202051440984"})),(0,a.kt)("p",null,"\u5f39\u51fa\u5b89\u88c5\u63d0\u793a\uff0c\u5e76\u975e\u76f4\u63a5\u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210202051610186.png",alt:"image-20210202051610186"})),(0,a.kt)("p",null,"\u8bbf\u95ee chls.pro/ssl \u4e0b\u8f7d \u5b89\u88c5(\u4e0e fd \u7c7b\u4f3c)"),(0,a.kt)("h4",{id:"\u5b89\u88c5\u65b9\u5f0f-2"},"\u5b89\u88c5\u65b9\u5f0f 2"),(0,a.kt)("p",null,"\u4f46\u8981\u6ce8\u610f\uff0c\u5728 Socket \u4ee3\u7406\u4e0b \u53ef\u80fd\u65e0\u6cd5\u4e0b\u8f7d\u8bc1\u4e66\uff0c\u8fd9\u65f6\u5019 \u5207\u6362\u81f3 HTTPS \u4ee3\u7406\uff08\u540c FD \u914d\u7f6e\uff09\uff0c\u7136\u540e\u4e0b\u8f7d\u8bc1\u4e66\u5b89\u88c5\u4e5f\u6709\u53ef\u80fd\u4f1a\u5931\u8d25\uff0c\u5219\u9009\u62e9 Save Charles Root Certifcate\uff0c\u5c06\u8bc1\u4e66\u63a8\u9001(adb pull)\u5230\u624b\u673a\u4e0a\uff0c\u7136\u540e\u70b9\u51fb\u5b89\u88c5\uff0c\u6216\u8005\u5230\u5b89\u5168->\u52a0\u5bc6\u4e0e\u51ed\u8bc1 -> \u4ece\u5b58\u50a8\u8bbe\u5907\u5b89\u88c5\u8bc1\u4e66 -> CA \u8bc1\u4e66\uff0c\u9009\u62e9\u5bfc\u5165\u5230\u624b\u673a\u7684\u8bc1\u4e66\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"2\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\u5982\u56fe"},"2\u3001\u7535\u8111\u7aef\u4e5f\u8981\u5b89\u88c5\u8bc1\u4e66\uff0c\u5982\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210517023044653.png",alt:"image-20210517023044653"})),(0,a.kt)("p",null,"\u70b9\u51fb \u7136\u540e\u4e0b\u4e00\u6b65\u5373\u53ef"),(0,a.kt)("h3",{id:"\u68c0\u6d4b\u8bc1\u4e66"},"\u68c0\u6d4b\u8bc1\u4e66"),(0,a.kt)("p",null,"\u7531\u4e8e fd \u4e0e charles \u90fd\u662f\u66ff\u6362\u8bc1\u4e66\u7684\uff0c\u5b89\u88c5\u7684\u8bc1\u4e66\u90fd\u662f\u7528\u6237\u4e0b\u7684\uff0c\u800c\u975e\u7cfb\u7edf\u4e0b\uff087.0 \u4ee5\u4e0a\uff09\uff0c\u4e00\u4e9b app \u4f1a\u68c0\u6d4b\u8bc1\u4e66\uff0c\u4ece\u800c\u65e0\u6cd5\u53d1\u9001\u8bf7\u6c42\uff0c\u8fd9\u65f6\u5019\u5c31\u9700\u8981\u5c06\u7528\u6237\u8bc1\u4e66\u79fb\u52a8\u5230\u7cfb\u7edf\u8bc1\u4e66\u4e0b"),(0,a.kt)("p",null,"\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/security/cacerts")),(0,a.kt)("p",null,"\u7528\u6237\u8bc1\u4e66\u8def\u5f84 ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/misc/user/0/cacerts-added")),(0,a.kt)("p",null,"\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"#\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199 \u5c06\u6839\u8def\u5f84\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199\nmount -o rw,remount /\n\n# \u5c06\u5f53\u524d\u76ee\u5f55\u4e0b\u6240\u6709\u6587\u4ef6\u79fb\u52a8\u7f6e\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84\u4e0b\ncp * /etc/security/cacerts\n")),(0,a.kt)("p",null,"\u4e0d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"mount -o rw,remount /")," \u5219\u4f1a\u62a5 cp: /etc/security/cacerts/03f1f1d0.0: Read-only file system"),(0,a.kt)("p",null,"\u6216\u7528 Root Explorer \u5c06\u7528\u6237\u8bc1\u4e66\u79fb\u52a8\u5230\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84\u4e0b\u5373\u53ef"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u8865\uff1a\u6709\u65f6\u5019\u76ee\u5f55\u65e0\u6cd5\u6302\u8f7d\u4e3a\u53ef\u8bfb\u5199\uff08\u6bd4\u5982\u5b89\u5353 10 \u4ee5\u4e0a\u7cfb\u7edf\u5206\u533a/system \u6302\u8f7d\u4e3a\u53ea\u8bfb\uff09\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 Magisk \u7684 Move Certificates \u6a21\u5757\uff0c\u5c06\u7528\u6237\u8bc1\u4e66\u79fb\u52a8\u81f3\u7cfb\u7edf\u8bc1\u4e66\u8def\u5f84\u4e0b")),(0,a.kt)("h3",{id:"\u5927\u529f\u544a\u6210"},"\u5927\u529f\u544a\u6210"),(0,a.kt)("p",null,"\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u6b63\u5e38\u7684\u6293\u5230\u5b89\u5353\u5bf9\u5e94\u7684\u5305\u4e86\u3002"),(0,a.kt)("h2",{id:"\u5bf9\u6bd4-fd-\u914d\u7f6e\u4ee3\u7406-\u4e0e-charles-\u548c-postern-\u7ec4\u5408"},"\u5bf9\u6bd4 FD \u914d\u7f6e\u4ee3\u7406 \u4e0e Charles \u548c Postern \u7ec4\u5408"),(0,a.kt)("p",null,"\u9996\u5148\u914d\u7f6e\u4ee3\u7406\u5c5e\u4e8e\u4f1a\u8bdd\u5c42\uff0c\u5f88\u5bb9\u6613\u83b7\u53d6\u5230\u4ee3\u7406\u7684 ip \u4e0e\u7aef\u53e3\uff0c\u68c0\u6d4b\u5230\u662f\u5426\u4ee3\u7406\uff0c\u4ece\u800c\u9650\u5236 app \u4f7f\u7528\uff0c"),(0,a.kt)("p",null,"\u800c\u6302\u4e86 VPN \u5219\u662f\u5c06\u5728\u7f51\u7edc\u5c42\u4e2d\uff0c\u4e0d\u6613\u88ab\u68c0\u6d4b\uff0c\u540c\u65f6\u80fd\u83b7\u53d6\u5230\u5e94\u7528\u5c42\uff08HTTP\uff09\u4e0e\u4f20\u8f93\u5c42\uff08TCP\uff09\u7b49\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u540c\u65f6 FD \u9700\u8981\u6765\u56de\u914d\u7f6e\u4ee3\u7406\u7279\u522b\u9ebb\u70e6\uff0c\u800c Postern \u53ea\u9700\u8981\u5f00\u542f VPN \u4e0e\u5173\u95ed\u5373\u53ef\u3002\u6240\u4ee5\u5728 wifi \u4e2d\u5c31\u65e0\u9700\u914d\u7f6e\u4ee3\u7406\u3002"))}d.isMDXComponent=!0}}]);