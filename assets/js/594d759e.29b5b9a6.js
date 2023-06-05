"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9245],{4137:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(r),p=i,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7661:function(e,t,r){r.d(t,{Z:function(){return h}});r(7294);var n=r(6010),i=r(4544),o=r(3699),c=r(2735),a=r(7325),s="cardContainer_fWXF",u="cardTitle_rnsV",l="cardDescription_PWke",d=r(5944);function f(e){var t=e.href,r=e.children;return(0,d.tZ)(o.Z,{href:t,className:(0,n.Z)("card padding--lg",s),children:r})}function p(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return(0,d.BX)(f,{href:t,children:[(0,d.BX)("h2",{className:(0,n.Z)("text--truncate",u),title:i,children:[r," ",i]}),o&&(0,d.tZ)("p",{className:(0,n.Z)("text--truncate",l),title:o,children:o})]})}function m(e){var t,r=e.item,n=(0,i.Wl)(r);return n?(0,d.tZ)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function g(e){var t,r,n=e.item,o=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=n.docId)?t:void 0);return(0,d.tZ)(p,{href:n.href,icon:o,title:n.label,description:null!=(r=n.description)?r:null==a?void 0:a.description})}function y(e){var t=e.item;switch(t.type){case"link":return(0,d.tZ)(g,{item:t});case"category":return(0,d.tZ)(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,r=(0,i.jA)();return(0,d.tZ)(h,{items:r.items,className:t})}function h(e){var t=e.items,r=e.className;if(!t)return(0,d.tZ)(b,Object.assign({},e));var o=(0,i.MN)(t);return(0,d.tZ)("section",{className:(0,n.Z)("row",r),children:o.map((function(e,t){return(0,d.tZ)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.tZ)(y,{item:e})},t)}))})}},5371:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var n=r(3117),i=r(102),o=(r(7294),r(4137)),c=r(7661),a=r(4544),s=["components"],u={id:"C++-oi-basic-guides",slug:"/C++-oi-basic-guides",title:"C++\u57fa\u7840\u7b80\u4ecb",authors:"pansyhou",keywords:["guides","C++"]},l=void 0,d={unversionedId:"oi/C++/C++-oi-basic-guides",id:"oi/C++/C++-oi-basic-guides",title:"C++\u57fa\u7840\u7b80\u4ecb",description:"hi",source:"@site/docs/oi/C++/c++guide.md",sourceDirName:"oi/C++",slug:"/C++-oi-basic-guides",permalink:"/docs/C++-oi-basic-guides",draft:!1,tags:[],version:"current",frontMatter:{id:"C++-oi-basic-guides",slug:"/C++-oi-basic-guides",title:"C++\u57fa\u7840\u7b80\u4ecb",authors:"pansyhou",keywords:["guides","C++"]},sidebar:"oi",previous:{title:"\u5f00\u53d1\u5de5\u5177\u63a8\u8350",permalink:"/docs/oi"},next:{title:"stl",permalink:"/docs/stl"}},f={},p=[],m={toc:p};function g(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"hi"),(0,o.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}g.isMDXComponent=!0}}]);