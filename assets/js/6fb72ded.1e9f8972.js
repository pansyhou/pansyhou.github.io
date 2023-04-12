"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[41665],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39482:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],u={slug:"vscode-extension",title:"\u5199\u4e00\u4e2aVSCode\u6269\u5c55",date:new Date("2022-07-11T00:00:00.000Z"),authors:"kuizuo",tags:["vscode","plugin","extension","develop"],keywords:["vscode","plugin","extension","develop"],description:"\u7f16\u5199\u4e00\u4e2a\u5c5e\u4e8e\u4e2a\u4eba\u5b9a\u5236\u5316\u7684 VSCode \u6269\u5c55\uff0c\u5e76\u5c06\u5176\u53d1\u5e03\u5230\u5e94\u7528\u5546\u5e97\u4e2d",image:"/img/project/vscode-extension.png",sticky:4},c=void 0,l={permalink:"/vscode-extension",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/project/\u5199\u4e00\u4e2aVSCode\u6269\u5c55.md",source:"@site/blog/project/\u5199\u4e00\u4e2aVSCode\u6269\u5c55.md",title:"\u5199\u4e00\u4e2aVSCode\u6269\u5c55",description:"\u7f16\u5199\u4e00\u4e2a\u5c5e\u4e8e\u4e2a\u4eba\u5b9a\u5236\u5316\u7684 VSCode \u6269\u5c55\uff0c\u5e76\u5c06\u5176\u53d1\u5e03\u5230\u5e94\u7528\u5546\u5e97\u4e2d",date:"2022-07-11T00:00:00.000Z",formattedDate:"2022\u5e747\u670811\u65e5",tags:[{label:"vscode",permalink:"/tags/vscode"},{label:"plugin",permalink:"/tags/plugin"},{label:"extension",permalink:"/tags/extension"},{label:"develop",permalink:"/tags/develop"}],readingTime:19.28,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"vscode-extension",title:"\u5199\u4e00\u4e2aVSCode\u6269\u5c55",date:"2022-07-11T00:00:00.000Z",authors:"kuizuo",tags:["vscode","plugin","extension","develop"],keywords:["vscode","plugin","extension","develop"],description:"\u7f16\u5199\u4e00\u4e2a\u5c5e\u4e8e\u4e2a\u4eba\u5b9a\u5236\u5316\u7684 VSCode \u6269\u5c55\uff0c\u5e76\u5c06\u5176\u53d1\u5e03\u5230\u5e94\u7528\u5546\u5e97\u4e2d",image:"/img/project/vscode-extension.png",sticky:4},prevItem:{title:"Next.js\u9879\u76ee\u642d\u5efa\u4e0e\u90e8\u7f72",permalink:"/next.js-build-and-deploy"},nextItem:{title:"AutoHotkey\u952e\u76d8\u6620\u5c04",permalink:"/autohotkey"}},p={authorsImageUrls:[void 0]},s=[],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u81ea\u4ece\u4f7f\u7528\u8fc7 VSCode \u540e\u5c31\u518d\u4e5f\u79bb\u4e0d\u5f00 VSCode\uff0c\u5176\u8f7b\u91cf\u7684\u4ee3\u7801\u7f16\u8f91\u5668\u4e0e\u8bf8\u591a\u63d2\u4ef6\u8ba9\u591a\u6570\u5f00\u53d1\u8005\u7231\u4e0d\u91ca\u624b\u3002\u540c\u6837\u6211\u4e5f\u4e0d\u4f8b\u5916\uff0c\u4e00\u5e74\u524d\u7684\u6211\u751a\u81f3\u8fd8\u7279\u610f\u4e70\u672c\u300aVisual Studio Code \u6743\u5a01\u6307\u5357\u300b\u7684\u4e66\u7c4d\uff0c\u6765\u66f4\u8fdb\u4e00\u6b65\u4e86\u89e3\u4e0e\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u5728\u8d2d\u4e70\u8fd9\u672c\u4e66\u65f6\u5c31\u60f3\u5199\u4e00\u4e2a vscode \u63d2\u4ef6\uff08\u6269\u5c55\uff09\uff0c\u5948\u4f55\u5f53\u65f6\u4e8b\u52a1\u7e41\u5fd9\u52a0\u4e4b\u4e0d\u77e5\u505a\u4f55\u529f\u80fd\uff0c\u5c31\u8fdf\u8fdf\u672a\u80fd\u52a8\u624b\u3002\u5982\u4eca\u6709\u65f6\u95f4\u4e86\uff0c\u5c31\u987a\u5e26\u4f53\u9a8c\u4e0b vscode \u6269\u5c55\u5f00\u53d1\uff0c\u5e76\u8bb0\u5f55\u6574\u4e2a\u5f00\u53d1\u8fc7\u7a0b\u3002"),(0,i.kt)("p",null,"\u6269\u5c55\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kuizuo.vscode-extension-sample",title:"VSCode-extension"},"VSCode-extension")),(0,i.kt)("p",null,"\u5f00\u6e90\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kuizuo/vscode-extension"},"kuizuo/vscode-extension (github.com)")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220711195038039.png",alt:"vscode-extension"})))}m.isMDXComponent=!0}}]);