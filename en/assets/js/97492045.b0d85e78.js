"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[47484],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),k=o,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={slug:"axios-http-class-library",title:"\u57fa\u4e8eAxios\u5c01\u88c5HTTP\u7c7b\u5e93",date:new Date("2021-08-26T00:00:00.000Z"),authors:"kuizuo",tags:["node","http","axios"],keywords:["node","http","axios"],description:"\u57fa\u4e8e Axios \u5c01\u88c5 HTTP \u7c7b\u5e93\uff0c\u5e76\u53d1\u5e03\u5230 npm \u4ed3\u5e93\u4e2d"},s=void 0,l={permalink:"/en/axios-http-class-library",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/\u57fa\u4e8eAxios\u5c01\u88c5HTTP\u7c7b\u5e93.md",source:"@site/blog/develop/\u57fa\u4e8eAxios\u5c01\u88c5HTTP\u7c7b\u5e93.md",title:"\u57fa\u4e8eAxios\u5c01\u88c5HTTP\u7c7b\u5e93",description:"\u57fa\u4e8e Axios \u5c01\u88c5 HTTP \u7c7b\u5e93\uff0c\u5e76\u53d1\u5e03\u5230 npm \u4ed3\u5e93\u4e2d",date:"2021-08-26T00:00:00.000Z",formattedDate:"August 26, 2021",tags:[{label:"node",permalink:"/en/tags/node"},{label:"http",permalink:"/en/tags/http"},{label:"axios",permalink:"/en/tags/axios"}],readingTime:5.12,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"axios-http-class-library",title:"\u57fa\u4e8eAxios\u5c01\u88c5HTTP\u7c7b\u5e93",date:"2021-08-26T00:00:00.000Z",authors:"kuizuo",tags:["node","http","axios"],keywords:["node","http","axios"],description:"\u57fa\u4e8e Axios \u5c01\u88c5 HTTP \u7c7b\u5e93\uff0c\u5e76\u53d1\u5e03\u5230 npm \u4ed3\u5e93\u4e2d"},prevItem:{title:"MongoDB\u6309\u65f6\u95f4\u5206\u7ec4",permalink:"/en/mongodb-time-grouping"},nextItem:{title:"\u7b2c\u4e8c\u4e2a\u535a\u5ba2\u642d\u5efa\u4e4bDocusaurus",permalink:"/en/second-blog-is-docusaurus"}},u={authorsImageUrls:[void 0]},c=[{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u80fd\u89e3\u51b3\u4ec0\u4e48",id:"\u80fd\u89e3\u51b3\u4ec0\u4e48",level:2},{value:"Node \u73af\u5883\u4e0b\u65e0\u6cd5\u81ea\u52a8\u5c01\u88c5 Set-Cookie",id:"node-\u73af\u5883\u4e0b\u65e0\u6cd5\u81ea\u52a8\u5c01\u88c5-set-cookie",level:3},{value:"\u8bf7\u6c42\u5931\u8d25\u65e0\u6cd5\u81ea\u52a8\u91cd\u8bd5",id:"\u8bf7\u6c42\u5931\u8d25\u65e0\u6cd5\u81ea\u52a8\u91cd\u8bd5",level:3},{value:"\u914d\u7f6e\u62e6\u622a\u5668",id:"\u914d\u7f6e\u62e6\u622a\u5668",level:3},{value:"\u5c01\u88c5\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5",id:"\u5c01\u88c5\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5",level:3},{value:"\u53d1\u5e03 npm \u5305",id:"\u53d1\u5e03-npm-\u5305",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e2a\u57fa\u4e8e Axios \u5c01\u88c5 HTTP \u7c7b\u5e93"),(0,a.kt)("p",null,"\u6e90\u4ee3\u7801 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kuizuo/kz-http"},"kz-http")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"npm \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i kz-http -S\n")),(0,a.kt)("h3",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Http from 'kz-http'\n\nlet http = new Http()\n\nhttp.get('https://www.example.com').then((res) => {\n  console.log(res)\n})\n")),(0,a.kt)("h2",{id:"\u80fd\u89e3\u51b3\u4ec0\u4e48"},"\u80fd\u89e3\u51b3\u4ec0\u4e48"),(0,a.kt)("p",null,"axios \u660e\u660e\u90a3\u4e48\u597d\u7528\uff0c\u4e3a\u5565\u53c8\u8981\u57fa\u4e8e axios \u91cd\u65b0\u9020\u4e00\u4e2a\u8f6e\u5b50\u3002\u9996\u5148\u4e0d\u5f97\u5426\u8ba4\u7684\u662f axios \u786e\u5b9e\u597d\u7528\uff0cGithub \u80fd\u65a9\u83b7\u8fd1 90k \u7684 star\uff0c\u4e14\u57fa\u672c\u5df2\u6210\u4e3a\u524d\u7aef\u4f5c\u4e3a\u6570\u636e\u4ea4\u4e92\u7684\u5fc5\u5907\u5de5\u5177\u3002\u4f46\u662f\u5b83\u5bf9\u6211\u6240\u4f7f\u7528\u7684\u73af\u5883\u4e0b\u8fd8\u662f\u5b58\u5728\u4e00\u5b9a\u7684\u95ee\u9898\uff0c\u4e5f\u5c31\u662f\u6211\u4e3a\u4ec0\u4e48\u8981\u91cd\u65b0\u9020\u4e00\u4e2a\u8f6e\u5b50\u3002"),(0,a.kt)("h3",{id:"node-\u73af\u5883\u4e0b\u65e0\u6cd5\u81ea\u52a8\u5c01\u88c5-set-cookie"},"Node \u73af\u5883\u4e0b\u65e0\u6cd5\u81ea\u52a8\u5c01\u88c5 Set-Cookie"),(0,a.kt)("p",null,"\u5982\u679c axios \u662f\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u90a3\u8fd8\u597d\u8bf4\uff0c\u5c31\u7b97\u4f60\u65e0\u8bba\u600e\u4e48\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u90fd\u4f1a\u81ea\u52a8\u5c06\u4f60\u7684\u6240\u6709\u8bf7\u6c42\u4e2d\u7684\u54cd\u5e94\u5305\u542b set-cookie \u53c2\u6570\uff0c\u63d0\u4f9b\u7ed9\u4e0b\u4e00\u6b21\u540c\u57df\u4e0b\u7684\u8bf7\u6c42\u3002\u4f46\u662f\uff0cNode \u73af\u5883\u5e76\u4e0d\u662f\u6d4f\u89c8\u5668\u73af\u5883\uff0c\u5728 Node \u73af\u5883\u4e2d\u8fd0\u884c\u5e76\u4e0d\u4f1a\u81ea\u52a8\u4fdd\u5b58 Cookie\uff0c\u8fd8\u9700\u8981\u624b\u52a8\u4fdd\u5b58\uff0c\u5e76\u5c06 Cookie \u6dfb\u52a0\u81f3\u534f\u8bae\u5934\u7ed9\u4e0b\u4e00\u4e2a\u8bf7\u6c42\u3002\uff08\u5982\u679c\u662f Python \u7684\u8bdd\uff0crequest \u6709\u4e2a session \u65b9\u6cd5\u53ef\u4ee5\u81ea\u52a8\u4fdd\u5b58 cookie\uff0c\u5341\u5206\u65b9\u4fbf\uff09"),(0,a.kt)("p",null,"\u4e00\u5f00\u59cb\u6211\u662f\u81ea\u884c\u5c01\u88c5\uff0c\u5c06\u54cd\u5e94\u4e2d\u7684 set-cookie \u5168\u90fd\u5b58\u5728\u5b9e\u4f8b\u5bf9\u8c61 http.cookies \u4e0a\uff0c\u4f46\u5c01\u88c5\u7684\u4e0d\u5f7b\u5e95\uff0c\u5982\u679c\u6709\u7684\u7f51\u7ad9"),(0,a.kt)("p",null,"\u95f4\u8bf7\u6c42\u5b58\u5728\u8de8\u57df\uff0c\u90a3\u4e48\u4f1a\u5c06\u643a\u5e26\u4e0d\u8be5\u5c5e\u4e8e\u8be5\u57df\u4e0b\u7684 Cookies\u3002\u4e8e\u662f\u4e4e\uff0c\u6211\u5728 github \u4ed3\u5e93\u627e\u5230\u4e86\u4e00\u4e2a\u5e93\u53ef\u8fbe\u5230\u6211\u7684\u76ee\u7684"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/3846masa/axios-cookiejar-support"},"3846masa/axios-cookiejar-support: Add tough-cookie support to axios. (github.com)")),(0,a.kt)("p",null,"\u5177\u4f53\u5b89\u88c5\u53ef\u4ee5\u76f4\u63a5\u70b9\u51fb\u94fe\u63a5\u67e5\u770b\uff0c\u8fd9\u91cc\u8d34\u4e0b\u6211",(0,a.kt)("strong",{parentName:"p"},"\u4e4b\u524d"),"\u7684\u5c01\u88c5\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const tough = require('tough-cookie');\nconst axiosCookieJarSupport = require('axios-cookiejar-support').default;\naxiosCookieJarSupport(axios);\n\nclass Http {\n  public cookieJar;\n  public instance: AxiosInstance;\n  construction() {\n    this.cookieJar = new tough.CookieJar(null, { allowSpecialUseDomain: true });\n    this.instance = axios.create({\n      jar: this.cookieJar,\n      ignoreCookieErrors: false,\n      withCredentials: true,\n    });\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837 axios \u5c31\u4f1a\u81ea\u52a8\u5c06\u54cd\u5e94\u4e2d\u7684 set-cookie \u5c01\u88c5\u8d77\u6765\uff0c\u4f9b\u4e0b\u6b21\u4f7f\u7528"),(0,a.kt)("p",null,"\u4f46\u662f\u6b63\u662f\u7531\u4e8e\u5bfc\u5165\u4e86\u8fd9\u4e2a\u5305\uff0c\u5bfc\u81f4\u6bcf\u6b21\u8bf7\u6c42\u90fd\u9700\u8981\u5904\u7406\uff0c\u5c31\u4f1a\u5bfc\u81f4\u8bf7\u6c42\u901f\u5ea6\u53d8\u6162\uff0c\u5b9e\u6d4b\u5927\u7ea6\u662f\u5728 100ms \u5de6\u53f3\uff0c\u540c\u65f6\u5bfc\u5165\u8fd9\u4e2a\u5305\u4e4b\u540e\uff0c\u5b9e\u4f8b\u5316\u7684\u5bf9\u8c61\u90fd\u5c06\u4f1a\u643a\u5e26\u5bf9\u5e94 cookies\uff0c\u60f3\u8981\u5220\u9664\u53c8\u5f97\u5bf9\u5e94 Url\uff0c\u4e8e\u662f\u51b3\u5b9a\u81ea\u884c\u5c01\u88c5\u76f8\u5173\u4ee3\u7801\u53ef\u67e5\u770b request \u65b9\u6cd5\uff0c\u5b9e\u6d4b\u4e0b\u6765\u5927\u7ea6\u6709 10ms \u5de6\u53f3\u7684\u5dee\u8ddd\uff08\u524d\u63d0\u90fd\u901a\u8fc7\u521b\u5efa\u5b9e\u4f8b\u6765\u8bf7\u6c42\uff09\uff0c\u4e0d\u8fc7\u6709\u4e2a\u7f3a\u9677\uff0c\u6211\u5c01\u88c5\u7684\u4ee3\u7801\u662f\u4e0d\u8fdb\u884c\u540c\u6e90\u5224\u65ad\u7684\uff0c\u5982\u4f55\u4f60\u5f53\u524d\u7ad9\u70b9\u8bf7\u6c42\u7684\u662f api1.test.com\uff0c\u83b7\u53d6\u5230 cookie1\uff0c\u90a3\u4e48\u8bf7\u6c42 api2.test.com \u7684\u65f6\u5019\u4e5f\u4f1a\u5c06 cookie1 \u643a\u5e26\uff0c\u8fd9\u8fb9\u4e0d\u505a\u5224\u65ad\u662f\u4e0d\u60f3\u5728\u8bf7\u6c42\u7684\u65f6\u5019\u8017\u8d39\u65f6\u95f4\uff0c\u6bd4\u5982\u7f51\u9875\u4e0e\u624b\u673a\u534f\u8bae\uff0c\u4e00\u822c\u8fd9\u79cd\u60c5\u51b5\u5efa\u8bae\u5b9e\u4f8b\u5316\u4e24\u4e2a\u5bf9\u8c61\uff0c\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let http_api1 = new Http()\nlet http_api2 = new Http()\n")),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u5931\u8d25\u65e0\u6cd5\u81ea\u52a8\u91cd\u8bd5"},"\u8bf7\u6c42\u5931\u8d25\u65e0\u6cd5\u81ea\u52a8\u91cd\u8bd5"),(0,a.kt)("p",null,"\u5728\u9ad8\u5e76\u53d1\u7684\u60c5\u51b5\u4e0b\uff0c\u5076\u5c14\u4f1a\u51fa\u73b0\u8bf7\u6c42\u8d85\u65f6\uff0c\u8bf7\u6c42\u62d2\u7edd\u7684\u60c5\u51b5\uff0c\u4f46\u662f\u9ed8\u8ba4\u4e0b axios \u662f\u4e0d\u652f\u6301\u81ea\u52a8\u91cd\u8bd5\u8bf7\u6c42\u7684\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u501f\u52a9\u63d2\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"axios-retry"),"\u6765\u8fbe\u5230\u8fd9\u4e2a\u76ee\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const axiosRetry = require('axios-retry')\n\nclass Http {\n  constructor(retryConfig?) {\n    this.instance = axios.create()\n\n    if (retryConfig) {\n      axiosRetry(this.instance, {\n        retries: retryConfig.retry, // \u8bbe\u7f6e\u81ea\u52a8\u53d1\u9001\u8bf7\u6c42\u6b21\u6570\n        retryDelay: (retryCount) => {\n          return retryCount * retryConfig.delay // \u91cd\u590d\u8bf7\u6c42\u5ef6\u8fdf\n        },\n        shouldResetTimeout: true, // \u91cd\u7f6e\u8d85\u65f6\u65f6\u95f4\n        retryCondition: (error) => {\n          if (axiosRetry.isNetworkOrIdempotentRequestError(error)) {\n            return true\n          }\n\n          if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {\n            return true\n          }\n          if (['ECONNRESET', 'ETIMEDOUT'].includes(error.code)) {\n            // , 'ENOTFOUND'\n            return true\n          }\n          return false\n        },\n      })\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u8fb9\u5224\u65ad\u91cd\u65b0\u53d1\u9001\u8bf7\u6c42\u6761\u4ef6\u662f\u8fde\u63a5\u62d2\u7edd\uff0c\u8fde\u63a5\u91cd\u7f6e\uff0c\u548c\u8fde\u63a5\u8d85\u65f6\u7684\u60c5\u51b5\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u62e6\u622a\u5668"},"\u914d\u7f6e\u62e6\u622a\u5668"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u4e00\u4e2a\u7f51\u7ad9\u7684\u534f\u8bae\u662f\u8fd9\u6837\u7684\uff0c\u6bcf\u4e00\u6761 Post \u90fd\u81ea\u52a8\u5c06\u6240\u6709\u53c2\u6570\u8fdb\u884c\u62fc\u63a5\uff0c\u7136\u540e\u8fdb\u884c MD5 \u52a0\u5bc6\uff0c\u5e76\u6dfb\u52a0\u4e3a sign \u53c2\u6570\uff0c\u4e8e\u662f\uff0c\u4e0d\u5f97\u4e0d\u7ed9\u6bcf\u4e00\u6761\u8bf7\u6c42\u90fd\u8fdb\u884c\u8fd9\u6837\u7684\u64cd\u4f5c\uff0c\u90a3\u4e48\u6709\u6ca1\u6709\u4ec0\u4e48\u80fd\u5728\u6bcf\u6b21\u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u90fd\u81ea\u52a8\u7684\u5bf9\u53c2\u6570\u8fdb\u884c MD5 \u52a0\u5bc6\u3002\u5982\u679c\u4f7f\u7528\u8fc7 axios \u6765\u914d\u7f6e\u8fc7 JWT \u6548\u9a8c\uff0c\u90a3\u81ea\u7136\u5c31\u4f1a\u719f\u6089\u7ed9\u6bcf\u6761\u8bf7\u6c42\u534f\u8bae\u5934\u90fd\u643a\u5e26 JWT \u6570\u503c\u3002\u540c\u6837\u7684\uff0c\u8fd9\u91cc\u7684\u52a0\u5bc6\u4f8b\u5b50\u540c\u6837\u4f7f\u7528\uff0c\u5177\u4f53\u914d\u7f6e\u5b9e\u4f8b\u5bf9\u8c61 http \u7684\u8bf7\u6c42\u62e6\u622a\u5668\u5373\u53ef\uff0c\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let http = new Http()\n\n// axios\u5b9e\u4f8binstance\u662f\u516c\u5f00\u7684\nhttp.instance.interceptors.request.use(\n  (config) => {\n    // \u6267\u884c\u6bcf\u6761\u8bf7\u6c42\u90fd\u8981\u5904\u7406\u7684\u64cd\u4f5c\n    return config\n  },\n  (error) => {},\n)\n")),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u54cd\u5e94\u62e6\u622a\u5668\u4e5f\u540c\u7406\uff0c\u4f8b\u5982\u8bf7\u6c42\u8fd4\u56de\u7684\u54cd\u5e94\u90fd\u8fdb\u884c\u52a0\u5bc6\u5904\u7406\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u901a\u8fc7\u54cd\u5e94\u62e6\u622a\u5668\u8fdb\u884c\u7edf\u4e00\u89e3\u5bc6\uff0c\u8fd9\u91cc\u5c31\u4e0d\u505a\u8fc7\u591a\u63cf\u8ff0\uff0c\u5177\u4f53\u573a\u666f\u5177\u4f53\u5206\u6790\u3002"),(0,a.kt)("h3",{id:"\u5c01\u88c5\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5"},"\u5c01\u88c5\u4e00\u4e9b\u5e38\u7528\u65b9\u6cd5"),(0,a.kt)("p",null,"\u6bd4\u5982\u8bbe\u7f6e\u4f2a\u9020 IP\uff08setFakeIP\uff09\uff0c\u81ea\u52a8\u8865\u5168 referer \u548c orgin \u53c2\u6570\uff0c\u7981\u6b62\u91cd\u5b9a\u5411\u7b49\u7b49\uff0c\u66f4\u8be6\u7ec6\u7684\u67e5\u770b\u6e90\u7801\u4fbf\u53ef"),(0,a.kt)("h2",{id:"\u53d1\u5e03-npm-\u5305"},"\u53d1\u5e03 npm \u5305"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u8ba9\u522b\u4eba\u4f7f\u7528\u7684\u8bdd\uff0c\u603b\u4e0d\u53ef\u80fd\u8ba9\u4ed6\u53bb\u4e0b\u8f7d\u6e90\u7801\u7136\u540e\u7f16\u8bd1\u5427\uff0c\u8fd9\u91cc\u5c31\u501f\u52a9 npm\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 npm \u4e4b\u524d\uff0c\u8bf7\u5148\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g npm@latest"),"\u5347\u7ea7\u4e3a\u6700\u65b0\u7248\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u63d0\u793a ",(0,a.kt)("strong",{parentName:"p"},"ERR! 426 Upgrade Required"),"\u3002\u539f\u6587 ",(0,a.kt)("a",{parentName:"p",href:"https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/"},"The npm registry is deprecating TLS 1.0 and TLS 1.1 | The GitHub Blog"))),(0,a.kt)("p",null,"\u521b\u5efa npm \u8d26\u53f7\uff0c\u521b\u5efa package.json"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "name": "kz-http",\n  "version": "0.1.0",\n  "description": "An HTTP class library based on axios",\n  "main": "dist/index.js",\n  "scripts": {\n    "build": "tsc"\n  },\n  "author": "kuizuo",\n  "license": "ISC",\n  "dependencies": {\n    "axios": "^0.21.1",\n    "axios-retry": "^3.1.9"\n  },\n  "devDependencies": {\n    "typescript": "^4.3.5"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/kuizuo/kz-http.git"\n  },\n  "keywords": ["node", "axios", "http"]\n}\n')),(0,a.kt)("p",null,"\u7136\u540e\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"npm login"),"\u767b\u5f55 npm \u8d26\u53f7\uff0c\u63a5\u7740\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"npm publish --access public"),"\u53d1\u5e03\u5373\u53ef"),(0,a.kt)("p",null,"\u53d1\u5e03\u7684\u662f\u8981\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c npm \u955c\u50cf\u5fc5\u987b\u662f\u5b98\u65b9\u7684\uff0c\u5426\u5219\u65e0\u6cd5\u767b\u5f55\uff0c\u955c\u50cf\u8fd8\u539f"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm config set registry https://registry.npmjs.org/\n")),(0,a.kt)("p",{parentName:"li"},"\u67e5\u770b\u955c\u50cf\u914d\u7f6e\u5730\u5740"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm get registry\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u5305\u6709\u91cd\u540d\uff0c\u90a3\u4e48\u5c31\u65e0\u6cd5\u53d1\u5e03\uff0c\u5c31\u5fc5\u987b\u8981\u8981\u6539\u540d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u90ae\u7bb1\u5fc5\u987b\u8981\u9a8c\u8bc1\uff08\u4f1a\u63a5\u53d7\u4e00\u6761\u4e0b\u56fe\u90ae\u7bb1\uff09\uff0c\u4e0d\u7136\u5c31\u4f1a\u53d1\u5e03\u5931\u8d25\n",(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210826212258752.png",alt:"image-20210826212258752"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u8bf7\u52ff\u968f\u610f\u5220\u5305\uff0c\u5426\u5219\u540c\u540d\u7684\u5305\u5c06\u9700\u8981 24 \u5c0f\u65f6\u540e\u624d\u80fd\u53d1\u5e03\uff08\u4eb2\u6d4b\uff09")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"npm ERR! 403 403 Forbidden - PUT ",(0,a.kt)("a",{parentName:"p",href:"http://registry.npmjs.org/kz-http"},"http://registry.npmjs.org/kz-http")," - kz-http cannot be republished until 24 hours have passed.")))),(0,a.kt)("p",null,"\u53d1\u5e03\u5b8c\u6210\u540e\uff0c\u522b\u4eba\u53ea\u9700\u8981\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"npm i kz-http"),"\u5c31\u53ef\u6210\u529f\u5c06\u6a21\u5757\u4e0b\u8f7d\u81f3\u672c\u5730 node_modules \u6587\u4ef6\u5939\u4e0b"))}k.isMDXComponent=!0}}]);