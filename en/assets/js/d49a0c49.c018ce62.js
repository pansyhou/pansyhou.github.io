"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[50221],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(n),b=o,g=f["".concat(c,".").concat(b)]||f[b]||s[b]||i;return n?r.createElement(g,u(u({ref:t},p),{},{components:n})):r.createElement(g,u({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54678:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),u=["components"],a={slug:"use-github-action-to-auto-deploy",title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",date:new Date("2022-05-11T00:00:00.000Z"),authors:"kuizuo",tags:["github","git"],keywords:["github","git"]},c=void 0,l={permalink:"/en/use-github-action-to-auto-deploy",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72.md",source:"@site/blog/develop/\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72.md",title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",description:"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002",date:"2022-05-11T00:00:00.000Z",formattedDate:"May 11, 2022",tags:[{label:"github",permalink:"/en/tags/github"},{label:"git",permalink:"/en/tags/git"}],readingTime:4.7,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"use-github-action-to-auto-deploy",title:"\u4f7f\u7528Github Action\u81ea\u52a8\u5316\u90e8\u7f72",date:"2022-05-11T00:00:00.000Z",authors:"kuizuo",tags:["github","git"],keywords:["github","git"]},prevItem:{title:"Vercel\u90e8\u7f72Serverless",permalink:"/en/vercel-deploy-serverless"},nextItem:{title:"Vercel\u90e8\u7f72\u4e2a\u4eba\u535a\u5ba2",permalink:"/en/vercel-deploy-blog"}},p={authorsImageUrls:[void 0]},s=[],f={toc:s};function b(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u6709\u5199\u8fc7\u9879\u76ee\u7684\u7ecf\u5386\uff0c\u5c31\u514d\u4e0d\u4e86\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5b89\u88c5\u4f9d\u8d56\uff0c\u7136\u540e\u8f93\u5165\u542f\u52a8\u547d\u4ee4\u7684\u6b65\u9aa4\u3002\u4f46\u662f\u6709\u7684\u9879\u76ee\u5f80\u5f80\u9700\u8981\u7ecf\u5e38\u6027\u7684\u6539\u52a8\uff0c\u5982\u679c\u8fd8\u662f\u7167\u7740\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u7684\u8bdd\u3002\u5148\u4e0d\u8bf4\u8fd9\u6837\u64cd\u4f5c\u7684\u6548\u7387\uff0c\u64cd\u4f5c\u4e2a\u51e0\u6b21\u5c31\u60f3\u7f62\u5de5\u4e86\u3002\u5e76\u4e14\u4e0a\u9762\u8fd9\u6837\u64cd\u4f5c\u7684\u5f80\u5f80\u5bb9\u6613\u8bef\u64cd\u4f5c\u3002\u800c Github Actions \u6b63\u662f\u8be5\u95ee\u9898\u7684\u826f\u836f\u3002"))}b.isMDXComponent=!0}}]);