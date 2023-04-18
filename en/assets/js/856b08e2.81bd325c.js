"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[52662],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,f=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},64095:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],u={slug:"rust-wasm-md5",title:"Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528",date:new Date("2023-01-04T00:00:00.000Z"),authors:"kuizuo",tags:["rust","wasm"],keywords:["rust","wasm"]},i=void 0,l={permalink:"/en/rust-wasm-md5",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528.md",source:"@site/blog/develop/Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528.md",title:"Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528",description:"\u6211\u521d\u8bc6 WebAssembly \u662f\u5f53\u521d\u60f3\u8981\u5206\u6790\u67d0\u4e2a\u7f51\u7ad9\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u6700\u7ec8\u5b9a\u4f4d\u5230\u4e86\u4e00\u4e2a .wasm \u6587\u4ef6\uff0c\u6ca1\u9519\uff0c\u8fd9\u4e2a\u5c31\u662f WebAssembly \u7684\u6784\u5efa\u4ea7\u7269\uff0c\u80fd\u591f\u76f4\u63a5\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u3002\u5728\u6211\u5f53\u65f6\u770b\u6765\u8fd9\u95e8\u6280\u672f\u5f88\u5148\u8fdb\uff0c\u4e0d\u8fc7\u5982\u4eca\u770b\u6765\u7edd\u5927\u591a\u6570\u7684 web \u5e94\u7528\u8c8c\u4f3c\u90fd\u6ca1\u4f7f\u7528\u4e0a\uff0c\u8fc4\u4eca\u4e3a\u6b62\u6211\u4e5f\u53ea\u5728\u8fd9\u4e2a\u7f51\u7ad9\u4e2d\u770b\u5230\u4f7f\u7528 WebAssembly \u7684\uff08\u4e5f\u8bb8\u6709\u5f88\u591a\uff0c\u53ea\u662f\u6ca1\u5b9e\u8d28\u5206\u6790\u8fc7\uff09\u3002",date:"2023-01-04T00:00:00.000Z",formattedDate:"January 4, 2023",tags:[{label:"rust",permalink:"/en/tags/rust"},{label:"wasm",permalink:"/en/tags/wasm"}],readingTime:4.863333333333333,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"rust-wasm-md5",title:"Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528",date:"2023-01-04T00:00:00.000Z",authors:"kuizuo",tags:["rust","wasm"],keywords:["rust","wasm"]},prevItem:{title:"Deno\u4e0d\u53ea\u662f\u4e2aJavascript\u8fd0\u884c\u65f6",permalink:"/en/deno-is-not-only-a-javascript-runtime"},nextItem:{title:"GraphQL \u5b9e\u8df5\u4e0e\u670d\u52a1\u642d\u5efa",permalink:"/en/graphql-practice"}},c={authorsImageUrls:[void 0]},m=[],p={toc:m},b="wrapper";function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)(b,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"https://img.kuizuo.cn/wasm-ferris.png",width:"230",height:"150"}),(0,o.kt)("p",null,"\u6211\u521d\u8bc6 WebAssembly \u662f\u5f53\u521d\u60f3\u8981\u5206\u6790\u67d0\u4e2a\u7f51\u7ad9\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u6700\u7ec8\u5b9a\u4f4d\u5230\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},".wasm")," \u6587\u4ef6\uff0c\u6ca1\u9519\uff0c\u8fd9\u4e2a\u5c31\u662f WebAssembly \u7684\u6784\u5efa\u4ea7\u7269\uff0c\u80fd\u591f\u76f4\u63a5\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u3002\u5728\u6211\u5f53\u65f6\u770b\u6765\u8fd9\u95e8\u6280\u672f\u5f88\u5148\u8fdb\uff0c\u4e0d\u8fc7\u5982\u4eca\u770b\u6765\u7edd\u5927\u591a\u6570\u7684 web \u5e94\u7528\u8c8c\u4f3c\u90fd\u6ca1\u4f7f\u7528\u4e0a\uff0c\u8fc4\u4eca\u4e3a\u6b62\u6211\u4e5f\u53ea\u5728\u8fd9\u4e2a\u7f51\u7ad9\u4e2d\u770b\u5230\u4f7f\u7528 WebAssembly \u7684\uff08\u4e5f\u8bb8\u6709\u5f88\u591a\uff0c\u53ea\u662f\u6ca1\u5b9e\u8d28\u5206\u6790\u8fc7\uff09\u3002"),(0,o.kt)("p",null,"\u6070\u597d\u6700\u8fd1\u6b63\u5728\u63a5\u89e6 Rust\uff0c\u800c Rust \u5f00\u53d1 WebAssembly \u4e5f\u975e\u5e38\u65b9\u4fbf\uff0c\u56e0\u6b64\u672c\u6587\u7b97\u662f\u6211\u5bf9 Rust + WebAssembly \u7684\u521d\u63a2\u3002"))}f.isMDXComponent=!0}}]);