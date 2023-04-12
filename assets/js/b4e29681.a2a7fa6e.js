"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[33741],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)r=p[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,p=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=c(r),f=a,y=m["".concat(l,".").concat(f)]||m[f]||s[f]||p;return r?n.createElement(y,i(i({ref:e},u),{},{components:r})):n.createElement(y,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=r.length,i=new Array(p);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var c=2;c<p;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37613:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),i=["components"],o={slug:"typescript-full-stack-technology-trpc",title:"Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC",date:new Date("2023-03-07T00:00:00.000Z"),authors:"kuizuo",tags:["trpc","next","prisma","zod","auth.js"],keywords:["trpc","next","prisma","zod","auth.js"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 tRPC \u6280\u672f\u4ee5\u53ca\u5b83\u4e0e\u4f20\u7edf RESTful API \u7684\u533a\u522b\u3002\u540c\u65f6 tRPC \u53ef\u4ee5\u5e2e\u52a9\u4eba\u4eec\u66f4\u5feb\u5730\u5f00\u53d1\u5168\u6808 TypeScript \u5e94\u7528\u7a0b\u5e8f\uff0c\u540c\u65f6\u65e0\u9700\u4f20\u7edf\u7684 API \u5c42\uff0c\u5e76\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u5feb\u901f\u8fed\u4ee3\u65f6\u7684\u7a33\u5b9a\u6027\u3002",toc_max_heading_level:3},l=void 0,c={permalink:"/typescript-full-stack-technology-trpc",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/program/Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC.md",source:"@site/blog/program/Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC.md",title:"Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 tRPC \u6280\u672f\u4ee5\u53ca\u5b83\u4e0e\u4f20\u7edf RESTful API \u7684\u533a\u522b\u3002\u540c\u65f6 tRPC \u53ef\u4ee5\u5e2e\u52a9\u4eba\u4eec\u66f4\u5feb\u5730\u5f00\u53d1\u5168\u6808 TypeScript \u5e94\u7528\u7a0b\u5e8f\uff0c\u540c\u65f6\u65e0\u9700\u4f20\u7edf\u7684 API \u5c42\uff0c\u5e76\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u5feb\u901f\u8fed\u4ee3\u65f6\u7684\u7a33\u5b9a\u6027\u3002",date:"2023-03-07T00:00:00.000Z",formattedDate:"2023\u5e743\u67087\u65e5",tags:[{label:"trpc",permalink:"/tags/trpc"},{label:"next",permalink:"/tags/next"},{label:"prisma",permalink:"/tags/prisma"},{label:"zod",permalink:"/tags/zod"},{label:"auth.js",permalink:"/tags/auth-js"}],readingTime:14.92,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"typescript-full-stack-technology-trpc",title:"Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC",date:"2023-03-07T00:00:00.000Z",authors:"kuizuo",tags:["trpc","next","prisma","zod","auth.js"],keywords:["trpc","next","prisma","zod","auth.js"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 tRPC \u6280\u672f\u4ee5\u53ca\u5b83\u4e0e\u4f20\u7edf RESTful API \u7684\u533a\u522b\u3002\u540c\u65f6 tRPC \u53ef\u4ee5\u5e2e\u52a9\u4eba\u4eec\u66f4\u5feb\u5730\u5f00\u53d1\u5168\u6808 TypeScript \u5e94\u7528\u7a0b\u5e8f\uff0c\u540c\u65f6\u65e0\u9700\u4f20\u7edf\u7684 API \u5c42\uff0c\u5e76\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u5feb\u901f\u8fed\u4ee3\u65f6\u7684\u7a33\u5b9a\u6027\u3002",toc_max_heading_level:3},prevItem:{title:"\u8ddd\u79bb\u6211\u4e0a\u7bc7\u7b14\u8bb0\u8fd8\u662f\u5728?",permalink:"/why-i-dont-write-notes"},nextItem:{title:"\u5c06 Supabase \u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u540e\u7aef\u670d\u52a1",permalink:"/use-supabase-as-backend-service"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(t){var e=t.components,r=(0,a.Z)(t,i);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/trpc-banner.png",alt:"trpc-banner"})),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6210\u4e3a\u4e00\u4e2a ",(0,p.kt)("strong",{parentName:"p"},"Typescript \u5168\u6808\u5de5\u7a0b\u5e08"),"\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u5173\u6ce8\u4e00\u4e0b ",(0,p.kt)("a",{parentName:"p",href:"https://trpc.io/"},"tRPC")," \u6846\u67b6\u3002"),(0,p.kt)("p",null,"\u672c\u6587\u603b\u5171\u4f1a\u63a5\u89e6\u5230\u4ee5\u4e0b\u4e3b\u8981\u6280\u672f\u6808\u3002"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://nextjs.org/",title:"Next.js"},"Next.js")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://trpc.io/",title:"TRPC"},"TRPC")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://www.prisma.io/",title:"Prisma"},"Prisma")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/vriad/zod",title:"Zod"},"Zod")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://authjs.dev/",title:"Auth.js"},"Auth.js"))),(0,p.kt)("p",null,"\u4e0d\u662f\u4ecb\u7ecd tRPC \u5417\uff0c\u600e\u4e48\u7a81\u7136\u51fa\u73b0\u8fd9\u4e48\u591a\u6280\u672f\u6808\u3002\u597d\u5427\uff0c\u4e3b\u8981\u8fd9\u4e9b\u6280\u672f\u6808\u90fd\u4e0e typescript \u76f8\u5173\uff0c\u5e76\u4e14\u5728 trpc \u7684\u793a\u4f8b\u5e94\u7528\u4e2d\u90fd\u6216\u591a\u6216\u5c11\u4f7f\u7528\u5230\uff0c\u56e0\u6b64\u4e5f\u662f\u6709\u5fc5\u8981\u4e86\u89e3\u4e00\u4e0b\u3002"),(0,p.kt)("p",null,"\u5728\u7ebf\u4f53\u9a8c\u5730\u5740\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://trpc.kuizuo.cn/"},"TRPC demo")))}f.isMDXComponent=!0}}]);