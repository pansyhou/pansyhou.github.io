"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[76780],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return v}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(n),f=o,v=s["".concat(c,".").concat(f)]||s[f]||m[f]||u;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<u;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82935:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(87462),o=n(63366),u=(n(67294),n(3905)),a=["components"],i={slug:"electron-vue3-development-environment",title:"\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883",date:new Date("2022-03-17T00:00:00.000Z"),authors:"kuizuo",tags:["electron","vue","vite"],keywords:["electron","vue","vite"],description:"\u642d\u5efa Electron Vue3 \u7684\u5f00\u53d1\u73af\u5883\uff0c\u7528\u4e8e\u7f16\u5199\u8de8\u5e73\u53f0\u5e94\u7528"},c=void 0,l={permalink:"/en/electron-vue3-development-environment",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/program/\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883.md",source:"@site/blog/program/\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883.md",title:"\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883",description:"\u642d\u5efa Electron Vue3 \u7684\u5f00\u53d1\u73af\u5883\uff0c\u7528\u4e8e\u7f16\u5199\u8de8\u5e73\u53f0\u5e94\u7528",date:"2022-03-17T00:00:00.000Z",formattedDate:"March 17, 2022",tags:[{label:"electron",permalink:"/en/tags/electron"},{label:"vue",permalink:"/en/tags/vue"},{label:"vite",permalink:"/en/tags/vite"}],readingTime:2.66,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"electron-vue3-development-environment",title:"\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883",date:"2022-03-17T00:00:00.000Z",authors:"kuizuo",tags:["electron","vue","vite"],keywords:["electron","vue","vite"],description:"\u642d\u5efa Electron Vue3 \u7684\u5f00\u53d1\u73af\u5883\uff0c\u7528\u4e8e\u7f16\u5199\u8de8\u5e73\u53f0\u5e94\u7528"},prevItem:{title:"\u53bb\u9664typescript\u4ee3\u7801\u7c7b\u578b",permalink:"/en/remove-ts-code-type"},nextItem:{title:"SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",permalink:"/en/sse-server-send-event"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s},f="wrapper";function v(e){var t=e.components,n=(0,o.Z)(e,a);return(0,u.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220316204205165.png",alt:"image-20220316204205165"})),(0,u.kt)("p",null,"\u4e4b\u524d\u7528 electron-vue \u5199\u8fc7\u4e00\u4e2a\u534a\u6210\u54c1\u7684\u684c\u9762\u7aef\u5e94\u7528\uff0c\u4f46\u662f\u662f\u57fa\u4e8e Vue2 \u7684\uff0c\u6700\u8fd1\u53c8\u60f3\u91cd\u5199\u70b9\u684c\u9762\u7aef\u5e94\u7528\uff0c\u60f3\u8981\u4e0a Vue3+TypeScript\uff0c\u4e8e\u662f\u4fbf\u6709\u4e86\u8fd9\u7bc7\u6587\u7ae0\u603b\u7ed3\u4e0b\u5177\u4f53\u7684\u642d\u5efa\u8fc7\u7a0b\u3002"))}v.isMDXComponent=!0}}]);