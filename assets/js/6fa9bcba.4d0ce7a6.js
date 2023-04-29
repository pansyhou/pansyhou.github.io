"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[17726],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return h}});n(67294);var r=n(86010),i=n(1422),o=n(83699),c=n(2735),a=n(97325),s="cardContainer_fWXF",l="cardTitle_rnsV",u="cardDescription_PWke",d=n(35944);function p(e){var t=e.href,n=e.children;return(0,d.tZ)(o.Z,{href:t,className:(0,r.Z)("card padding--lg",s),children:n})}function f(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return(0,d.BX)(p,{href:t,children:[(0,d.BX)("h2",{className:(0,r.Z)("text--truncate",l),title:i,children:[n," ",i]}),o&&(0,d.tZ)("p",{className:(0,r.Z)("text--truncate",u),title:o,children:o})]})}function m(e){var t,n=e.item,r=(0,i.Wl)(n);return r?(0,d.tZ)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function y(e){var t,n,r=e.item,o=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=r.docId)?t:void 0);return(0,d.tZ)(f,{href:r.href,icon:o,title:r.label,description:null!=(n=r.description)?n:null==a?void 0:a.description})}function g(e){var t=e.item;switch(t.type){case"link":return(0,d.tZ)(y,{item:t});case"category":return(0,d.tZ)(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,n=(0,i.jA)();return(0,d.tZ)(h,{items:n.items,className:t})}function h(e){var t=e.items,n=e.className;if(!t)return(0,d.tZ)(b,Object.assign({},e));var o=(0,i.MN)(t);return(0,d.tZ)("section",{className:(0,r.Z)("row",n),children:o.map((function(e,t){return(0,d.tZ)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.tZ)(g,{item:e})},t)}))})}},98332:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return f}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),c=n(17661),a=n(1422),s=["components"],l={id:"code-specification-guides",slug:"/code-specification",title:"\u4ee3\u7801\u89c4\u8303",authors:"kuizuo",keywords:["code-specification"]},u=void 0,d={unversionedId:"skill/code-specification/code-specification-guides",id:"skill/code-specification/code-specification-guides",title:"\u4ee3\u7801\u89c4\u8303",description:"\u6742\u4e71\u4e0d\u582a\u5982\u540c\u5c4e\u5c71\u822c\u7684\u4ee3\u7801\uff0c\u4f1a\u8ba9\u5f00\u53d1\u8005\u5934\u76ae\u53d1\u9ebb\uff0c\u65e0\u4ece\u4e0b\u624b\uff0c\u5f80\u5f80\u66f4\u5bb9\u6613\u8bf1\u53d1bug\u3002\u800c\u4e00\u4e2a\u826f\u597d\u7684\u4ee3\u7801\u89c4\u8303\uff0c\u80fd\u591f\u4fee\u590d\u56e2\u961f\u7684\u5404\u4e2a\u6210\u5458\u95f4\u4ee3\u7801\u683c\u5f0f\u4e0d\u7edf\u4e00\uff0c\u6709\u5229\u4e8e\u7ef4\u62a4\u4e0e\u5ba1\u67e5\u3002",source:"@site/docs/skill/code-specification/guides.md",sourceDirName:"skill/code-specification",slug:"/code-specification",permalink:"/docs/code-specification",draft:!1,tags:[],version:"current",frontMatter:{id:"code-specification-guides",slug:"/code-specification",title:"\u4ee3\u7801\u89c4\u8303",authors:"kuizuo",keywords:["code-specification"]},sidebar:"skill",previous:{title:"\u90e8\u7f72",permalink:"/docs/docusaurus-deploy"},next:{title:"eslint",permalink:"/docs/eslint"}},p={},f=[],m={toc:f};function y(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6742\u4e71\u4e0d\u582a\u5982\u540c\u5c4e\u5c71\u822c\u7684\u4ee3\u7801\uff0c\u4f1a\u8ba9\u5f00\u53d1\u8005\u5934\u76ae\u53d1\u9ebb\uff0c\u65e0\u4ece\u4e0b\u624b\uff0c\u5f80\u5f80\u66f4\u5bb9\u6613\u8bf1\u53d1bug\u3002\u800c\u4e00\u4e2a\u826f\u597d\u7684\u4ee3\u7801\u89c4\u8303\uff0c\u80fd\u591f\u4fee\u590d\u56e2\u961f\u7684\u5404\u4e2a\u6210\u5458\u95f4\u4ee3\u7801\u683c\u5f0f\u4e0d\u7edf\u4e00\uff0c\u6709\u5229\u4e8e\u7ef4\u62a4\u4e0e\u5ba1\u67e5\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u4e3b\u8981\u4e0d\u662f\u4ecb\u7ecd\u5177\u4f53\u7684\u4ee3\u7801\u89c4\u8303\u6807\u51c6\uff0c\u8fd9\u4e9b\u5728\u5bf9\u5e94\u7684\u5b98\u65b9\u6587\u6863\u4e2d\u7684\u98ce\u683c\u6307\u5357\u53ef\u67e5\u770b\u3002\u672c\u6587\u4e3b\u8981\u5229\u7528\u63d2\u4ef6\u5de5\u5177\uff0c\u5728\u4fdd\u5b58\u4ee3\u7801\u4e0e\u4e0a\u4f20\u4ee3\u7801\u65f6\uff0c\u6839\u636e\u914d\u7f6e\u89c4\u5219\u6765\u89c4\u8303\u4ee3\u7801\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u680f\u4e3b\u8981\u9488\u5bf9\u524d\u7aef\u9879\u76ee\u7684\u4ee3\u7801\u89c4\u8303\u914d\u7f6e\uff0c\u4f7f\u7528 VSCode \u6587\u672c\u7f16\u8f91\u5668\u53ca\u5176\u63d2\u4ef6\u914d\u7f6e\u3002")),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);