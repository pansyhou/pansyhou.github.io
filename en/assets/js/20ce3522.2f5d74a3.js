"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[50289],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),k=r,d=s["".concat(i,".").concat(k)]||s[k]||m[k]||p;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<p;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8379:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var a=n(83117),r=n(80102),p=(n(67294),n(3905)),o=["components"],l={slug:"content-type-of-http-request",title:"HTTP\u8bf7\u6c42\u4e4bContent-Type",date:new Date("2020-12-12T00:00:00.000Z"),authors:"kuizuo",tags:["http"],keywords:["http"]},i=void 0,u={permalink:"/en/content-type-of-http-request",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/HTTP\u8bf7\u6c42\u4e4bContent-Type.md",source:"@site/blog/develop/HTTP\u8bf7\u6c42\u4e4bContent-Type.md",title:"HTTP\u8bf7\u6c42\u4e4bContent-Type",description:"Content-type",date:"2020-12-12T00:00:00.000Z",formattedDate:"December 12, 2020",tags:[{label:"http",permalink:"/en/tags/http"}],readingTime:2.3933333333333335,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"content-type-of-http-request",title:"HTTP\u8bf7\u6c42\u4e4bContent-Type",date:"2020-12-12T00:00:00.000Z",authors:"kuizuo",tags:["http"],keywords:["http"]},prevItem:{title:"\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91",permalink:"/en/why-i-dont-use-qiniu-cloud"},nextItem:{title:"node\u4e0e\u6d4f\u89c8\u5668\u4e2d\u7684cookie",permalink:"/en/cookie-of-node-and-browser"}},c={authorsImageUrls:[void 0]},m=[{value:"Content-type",id:"content-type",level:2},{value:"\u8bf4\u8bf4\u6211\u90a3\u65f6\u5019\u7684\u60c5\u51b5",id:"\u8bf4\u8bf4\u6211\u90a3\u65f6\u5019\u7684\u60c5\u51b5",level:3}],s={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,p.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"content-type"},"Content-type"),(0,p.kt)("p",null,"\u5148\u770b\u4e00\u6761 HTTP \u8bf7\u6c42"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-http"},'POST https://xxx.kuizuo.cn/v2/login HTTP/1.1\nHost: xxx.kuizuo.cn\nConnection: keep-alive\nContent-Length: 121\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36\n// Content-Type: application/json;charset=UTF-8\nAccept: application/json, text/plain, */*\n\n{"username":"kuizuo","password":"a12345678"}\n')),(0,p.kt)("p",null,"\u4e0a\u9762\u90a3\u4e2a\u8bf7\u6c42\u53d1\u9001\u5230\u6211\u7684\u670d\u52a1\u5668\uff0c\u670d\u52a1\u5668\u5374\u63a5\u6536\u5230\u7684\u662f\u8fd9\u6837\u4e00\u4e32\u503c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{ "{\\"username\\":\\"kuizuo\\",\\"password\\":\\"a12345678\\"}": "" }\n')),(0,p.kt)("p",null,"\u5f88\u663e\u7136\uff0c\u5b83\u628a json \u683c\u5f0f\u89e3\u6790\u6210\u4e86 x-www-form-urlencoded\u3002"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5f88\u7b80\u5355\u7684\u767b\u5f55\u8bf7\u6c42\uff0c\u6ce8\u610f\u4e00\u4e2a\u534f\u8bae\u5934",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type"),"\uff0c\u5b83\u51b3\u5b9a\u4e86\u4f60\u7684\u6570\u636e\u53d1\u9001\u5230\u670d\u52a1\u7aef\u4e0a\u4f1a\u662f\u4ec0\u4e48\u683c\u5f0f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"\u7c7b\u578b\u683c\u5f0f\uff1atype/subtype(;parameter)?\ntype \u4e3b\u7c7b\u578b\uff0c\u4efb\u610f\u7684\u5b57\u7b26\u4e32\uff0c\u5982text\uff0c\u5982\u679c\u662f*\u53f7\u4ee3\u8868\u6240\u6709\uff1b\nsubtype \u5b50\u7c7b\u578b\uff0c\u4efb\u610f\u7684\u5b57\u7b26\u4e32\uff0c\u5982html\uff0c\u5982\u679c\u662f*\u53f7\u4ee3\u8868\u6240\u6709\uff1b\nparameter \u53ef\u9009\uff0c\u4e00\u4e9b\u53c2\u6570\uff0c\u5982Accept\u8bf7\u6c42\u5934\u7684q\u53c2\u6570\uff0c Content-Type\u7684charset\u53c2\u6570\u3002\n")),(0,p.kt)("p",null,"\u5e38\u89c1\u7684\u5a92\u4f53\u683c\u5f0f\u7c7b\u578b\u5982\u4e0b\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"text/html \uff1a HTML \u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"text/plain \uff1a\u7eaf\u6587\u672c\u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"text/xml \uff1a XML \u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"image/gif \uff1agif \u56fe\u7247\u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"image/jpeg \uff1ajpg \u56fe\u7247\u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"image/png\uff1apng \u56fe\u7247\u683c\u5f0f"),(0,p.kt)("p",{parentName:"li"},"\u4ee5 application \u5f00\u5934\u7684\u5a92\u4f53\u683c\u5f0f\u7c7b\u578b\uff1a")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/xhtml+xml \uff1aXHTML \u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/xml \uff1a XML \u6570\u636e\u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/atom+xml \uff1aAtom XML \u805a\u5408\u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/json \uff1a JSON \u6570\u636e\u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/pdf \uff1apdf \u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/msword \uff1a Word \u6587\u6863\u683c\u5f0f")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/octet-stream \uff1a \u4e8c\u8fdb\u5236\u6d41\u6570\u636e\uff08\u5982\u5e38\u89c1\u7684\u6587\u4ef6\u4e0b\u8f7d\uff09")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"application/x-www-form-urlencoded \uff1a form \u8868\u5355\u6570\u636e\u88ab\u7f16\u7801\u4e3a key/value \u683c\u5f0f\uff08\u901a\u8fc7=\u4e0e&\u62fc\u63a5\uff09\u53d1\u9001\u5230\u670d\u52a1\u5668\uff08\u8868\u5355\u9ed8\u8ba4\u7684\u63d0\u4ea4\u6570\u636e\u7684\u683c\u5f0f\uff09\u683c\u5f0f\u5982: username=kuizuo&password=a12345678"),(0,p.kt)("p",{parentName:"li"},"\u53e6\u5916\u4e00\u79cd\u5e38\u89c1\u7684\u5a92\u4f53\u683c\u5f0f\u662f\u4e0a\u4f20\u6587\u4ef6\u4e4b\u65f6\u4f7f\u7528\u7684\uff1a")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"multipart/form-data \uff1a \u9700\u8981\u5728\u8868\u5355\u4e2d\u8fdb\u884c\u6587\u4ef6\u4e0a\u4f20\u65f6\uff0c\u5c31\u9700\u8981\u4f7f\u7528\u8be5\u683c\u5f0f"))),(0,p.kt)("p",null,"\u5b9e\u9645\u4e0a\u9047\u5230\u6700\u591a\u7684\u4e5f\u5c31\u662f text/html\uff0ctext/plain\uff0capplication/json\uff0capplication/x-www-form-urlencoded \u8fd9\u51e0\u4e2a\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u8d44\u6599 ",(0,p.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/klb561/p/10090540.html"},"Http \u8bf7\u6c42\u4e2d Content-Type"))),(0,p.kt)("h3",{id:"\u8bf4\u8bf4\u6211\u90a3\u65f6\u5019\u7684\u60c5\u51b5"},"\u8bf4\u8bf4\u6211\u90a3\u65f6\u5019\u7684\u60c5\u51b5"),(0,p.kt)("p",null,"\u8fd9\u662f\u5728\u6211\u5e2e\u522b\u4eba\u5206\u6790\u767b\u5f55\u7b97\u6cd5\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u534f\u8bae\u5934\u4e2d\u5c11\u6dfb\u52a0\u4e86\u4e00\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type"),"\uff0c\u5bfc\u81f4\u6211\u53d1\u9001\u7684\u6570\u636e\uff0c\u670d\u52a1\u7aef\u89e3\u6790\u4e0d\u4e86\uff0c\u6536\u5230\u4e86\u8fd9\u6837\u7684\u54cd\u5e94"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{ "code": 500001, "message": "\u4eb2\uff0c\u6211\u4eec\u7684\u7cfb\u7edf\u76ee\u524d\u5fd9\u788c\u4e2d\u6216\u65e0\u6cd5\u56de\u5e94\uff0c\u8bf7\u5c06\u6b64\u95ee\u9898\u56de\u62a5\u7ed9\u6211\u4eec\u7684\u5ba2\u670d\u4eba\u5458\u3002 \u9519\u8bef\u4ee3\u78bc(68523)", "data": null }\n')),(0,p.kt)("p",null,"\u7136\u800c\u5b9e\u9645\u54cd\u5e94\u5e94\u8be5\u662f\u8fd9\u6837\u7684"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json"},'{ "code": 400020, "message": "\u5bc6\u7801\u9519\u8bef", "data": "\u9a8c\u8bc1\u7801\u9519\u8bef" }\n')),(0,p.kt)("p",null,"\u539f\u56e0\u5c31\u662f\u56e0\u4e3a\u534f\u8bae\u5934\u6ca1\u6709\u6dfb\u52a0",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json;charset=UTF-8"),"\u6240\u5bfc\u81f4\u7684\u3002\u56e0\u4e3a\u8fd9\u4e2a\uff0c\u5751\u4e86\u6211\u8fd1\u4e00\u4e2a\u5c0f\u65f6\uff0c\u8fd8\u4e00\u76f4\u4ee5\u4e3a\u662f\u6570\u636e\u9519\u8bef\uff0c\u6ca1\u60f3\u5230\u4ec5\u4ec5\u53ea\u662f\u5c11\u52a0\u4e86\u4e00\u4e9b\u534f\u8bae\u5934\u5bfc\u81f4\u7684\u8bf7\u6c42\u6570\u636e\u683c\u5f0f\u9519\u8bef\u3002"),(0,p.kt)("p",null,"\u4e00\u4e2a\u5370\u8c61\u5f88\u6df1\u523b\u7684\u6559\u8bad\uff0c\u6a21\u62df HTTP \u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u4e0d\u8981\u541d\u556c\u8865\u5168\u534f\u8bae\u5934\uff0c\u4e0d\u7136\u5751\u7684\u5c31\u662f\u81ea\u5df1\u4e86\u3002\u6211\u5df2\u7ecf\u7ed9\u5751\u8fc7\u4e24\u6b21\u4e86\uff0c\u6240\u4ee5\u5728\u7279\u610f\u60f3\u501f\u6b64\u8bb0\u5f55\u4e00\u4e0b\uff0c\u514d\u5f97\u4e0b\u6b21\u53c8\u662f\u4e00\u756a\u6298\u817e\u3002\u5199\u4e2a\u6ce8\u610f\uff0c\u9192\u76ee\u4e00\u70b9\u3002"),(0,p.kt)("admonition",{type:"danger"},(0,p.kt)("p",{parentName:"admonition"},"\u53d1\u9001\u7684\u662f JSON \u683c\u5f0f\u6570\u636e\uff0c\u5207\u8bb0\u4e00\u5b9a\u8981\u6dfb\u52a0\u4e0a\u534f\u8bae\u5934",(0,p.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json;charset=UTF-8"),"\uff01\uff01\uff01")))}k.isMDXComponent=!0}}]);