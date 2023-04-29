"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[65385],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),b=o,m=f["".concat(c,".").concat(b)]||f[b]||s[b]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},86548:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],u={slug:"vite-webworker",title:"Vite\u4f7f\u7528WebWorker",date:new Date("2022-07-26T00:00:00.000Z"),authors:"kuizuo",tags:["vite","webworker"],keywords:["vite","webworker"]},c=void 0,l={permalink:"/en/vite-webworker",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/Vite\u4f7f\u7528WebWorker.md",source:"@site/blog/develop/Vite\u4f7f\u7528WebWorker.md",title:"Vite\u4f7f\u7528WebWorker",description:"\u51c6\u5907\u7ed9\u6211\u7684\u4e00\u4e2a Vite \u9879\u76ee\u8fdb\u884c\u91cd\u6784\uff0c\u5176\u4e2d\u4e00\u4e2a\u529f\u80fd(\u51fd\u6570)\u8981\u82b1\u8d39 JS \u4e3b\u7ebf\u7a0b\u5927\u91cf\u65f6\u95f4\uff0c\u4f1a\u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u753b\u9762\u5361\u6b7b\uff0c\u65e0\u6cd5\u6b63\u5e38\u70b9\u51fb\uff0c\u76f4\u5230\u8be5\u529f\u80fd(\u51fd\u6570)\u6267\u884c\u5b8c\u6bd5\u800c\u8a00\u3002\u8fd9\u6837\u7684\u7528\u6237\u4f53\u9a8c\u975e\u5e38\u5dee\uff0c\u4e8e\u662f\u5c31\u51c6\u5907\u4f7f\u7528 WebWorker \u5bf9\u8be5\u529f\u80fd\u5c01\u88c5\u3002",date:"2022-07-26T00:00:00.000Z",formattedDate:"July 26, 2022",tags:[{label:"vite",permalink:"/en/tags/vite"},{label:"webworker",permalink:"/en/tags/webworker"}],readingTime:2.3766666666666665,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"vite-webworker",title:"Vite\u4f7f\u7528WebWorker",date:"2022-07-26T00:00:00.000Z",authors:"kuizuo",tags:["vite","webworker"],keywords:["vite","webworker"]},prevItem:{title:"pnpm monorepo\u5b9e\u8df5",permalink:"/en/pnpm-monorepo-practice"},nextItem:{title:"KZ-API\u63a5\u53e3\u670d\u52a1",permalink:"/en/use-nuxt3-build-api-server"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function b(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u51c6\u5907\u7ed9\u6211\u7684\u4e00\u4e2a Vite \u9879\u76ee\u8fdb\u884c\u91cd\u6784\uff0c\u5176\u4e2d\u4e00\u4e2a\u529f\u80fd(\u51fd\u6570)\u8981\u82b1\u8d39 JS \u4e3b\u7ebf\u7a0b\u5927\u91cf\u65f6\u95f4\uff0c\u4f1a\u5bfc\u81f4\u4e3b\u7ebf\u7a0b\u753b\u9762\u5361\u6b7b\uff0c\u65e0\u6cd5\u6b63\u5e38\u70b9\u51fb\uff0c\u76f4\u5230\u8be5\u529f\u80fd(\u51fd\u6570)\u6267\u884c\u5b8c\u6bd5\u800c\u8a00\u3002\u8fd9\u6837\u7684\u7528\u6237\u4f53\u9a8c\u975e\u5e38\u5dee\uff0c\u4e8e\u662f\u5c31\u51c6\u5907\u4f7f\u7528 WebWorker \u5bf9\u8be5\u529f\u80fd\u5c01\u88c5\u3002"))}b.isMDXComponent=!0}}]);