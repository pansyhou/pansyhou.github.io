"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[58952],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[c]="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60092:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],u={slug:"js-function-hook",title:"JS\u51fd\u6570hook",date:new Date("2021-11-22T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","hook"],keywords:["javascript","hook"]},i=void 0,p={permalink:"/js-function-hook",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/JS\u51fd\u6570hook.md",source:"@site/blog/develop/JS\u51fd\u6570hook.md",title:"JS\u51fd\u6570hook",description:"\u524d\u8a00",date:"2021-11-22T00:00:00.000Z",formattedDate:"2021\u5e7411\u670822\u65e5",tags:[{label:"javascript",permalink:"/tags/javascript"},{label:"hook",permalink:"/tags/hook"}],readingTime:4.166666666666667,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/pansy",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"js-function-hook",title:"JS\u51fd\u6570hook",date:"2021-11-22T00:00:00.000Z",authors:"kuizuo",tags:["javascript","hook"],keywords:["javascript","hook"]},prevItem:{title:"JS\u4ee3\u7801\u4e4b\u6df7\u6dc6",permalink:"/js-code-obfuscator"},nextItem:{title:"RPC\u8fdc\u7a0b\u8c03\u7528\u6d4f\u89c8\u5668\u51fd\u6570",permalink:"/remote-call-browser-function"}},s={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6b63\u6587",id:"\u6b63\u6587",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:3},{value:"hook \u4ee3\u7801",id:"hook-\u4ee3\u7801",level:3},{value:"this \u6307\u5411\u95ee\u9898",id:"this-\u6307\u5411\u95ee\u9898",level:3},{value:"\u7528 AOP \u88c5\u9970\u51fd\u6570",id:"\u7528-aop-\u88c5\u9970\u51fd\u6570",level:3},{value:"\u5199\u540e\u611f",id:"\u5199\u540e\u611f",level:2}],d={toc:c},m="wrapper";function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)(m,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6211\u5728\u9605\u8bfb\u300aJavaScript \u8bbe\u8ba1\u6a21\u5f0f\u4e0e\u5f00\u53d1\u5b9e\u8df5\u300b\u7684\u7b2c 15 \u7ae0 \u88c5\u9970\u8005\u6a21\u5f0f\uff0c\u7a81\u7136\u53d1\u73b0 JS \u9006\u5411\u4e2d hook \u51fd\u6570\u548c js \u4e2d\u7684\u88c5\u9970\u8005\u6a21\u5f0f\u6709\u70b9\u50cf\uff0c\u4ed4\u7ec6\u9605\u8bfb\u5b8c\u5168\u7bc7\u540e\u66f4\u662f\u5bf9\u88c5\u9970\u5668\u4e0e hook \u6709\u4e86\u66f4\u6df1\u7684\u7406\u89e3\u4e8e\u662f\u4fbf\u6709\u4e86\u8fd9\u7bc7\u6587\u7ae0\u6765\u8bb0\u5f55\u4e00\u4e0b\u8be5\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"hook \u76f4\u8bd1\u7684\u610f\u601d\u4e3a\u94a9\u5b50\uff0c\u5728\u9006\u5411\u9886\u57df\u901a\u5e38\u7528\u6765\u9488\u5bf9\u67d0\u4e9b\u53c2\u6570\uff0c\u53d8\u91cf\u8fdb\u884c\u4fa6\u542c\uff0c\u6253\u5370\u8f93\u51fa\uff0c\u66ff\u6362\u7b49\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,o.kt)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(a, b) {\n  return a + b\n}\n")),(0,o.kt)("h3",{id:"hook-\u4ee3\u7801"},"hook \u4ee3\u7801"),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5f88\u7b80\u5355\u52a0\u6cd5\u51fd\u6570\uff0c\u901a\u8fc7 Hook \u80fd\u83b7\u53d6\u5230\u8fd9\u4e24\u4e2a\u53c2\u6570\u7684\u503c\uff0c\u76f8\u5f53\u4e8e\u5728 return \u4e4b\u524d\u6dfb\u52a0\u4e86\u4e00\u53e5\u4ee3\u7801",(0,o.kt)("inlineCode",{parentName:"p"},"console.log(a,b)"),"\uff0c\u8fd9\u6837\u4fbf\u80fd\u8f93\u51fa\u8fd9\u4e24\u4e2a\u7684\u503c\u4fbf\u4e8e\u5206\u6790\u3002\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684\u65b9\u5f0f\u6765\u590d\u5199\u6539\u51fd\u6570\uff0c\u800c\u8fd9\u4e2a\u65b9\u5f0f\u5728 javascript \u4e5f\u5c31\u662f\u88c5\u9970\u8005\u6a21\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let _add = add\nadd = function () {\n  console.log('arguments', arguments)\n  let result = _add.apply(this, arguments)\n  console.log('result', result)\n  return result // \u5982\u679c\u4e0d\u9700\u8981result \u5219\u53ef\u76f4\u63a5return _add()\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u4ee3\u7801")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(a, b) {\n  return a + b\n}\n\nlet _add = add\nadd = function () {\n  console.log('arguments', arguments)\n  let result = _add.apply(this, arguments)\n  console.log('result', result)\n  return result\n}\n\nadd(1, 2)\n")),(0,o.kt)("p",null,"\u518d\u6b21\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"add(1,2)"),"\u4fbf\u4f1a\u8f93\u51fa arguments \u53c2\u6570\u4ee5\u53ca\u7ed3\u679c 3\uff0c\u4e00\u4e2a\u5f88\u7b80\u5355 HOOK \u5c31\u5b9e\u73b0\u4e86\u3002"),(0,o.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\u53ef\u80fd\u8fc7\u4e8e\u7b80\u5355\uff0c\u6211\u6240\u8981\u8868\u8fbe\u7684\u610f\u601d\u662f\uff0c\u901a\u8fc7 Hook\uff0c\u5b9a\u4f4d\u5230\u6211\u4eec\u60f3 Hook \u7684\u51fd\u6570\u4e0e\u53d8\u91cf\uff0c\u901a\u8fc7\u4e00\u7cfb\u5217\u64cd\u4f5c\uff08\u51fd\u6570\u590d\u5199\uff0c\u5143\u7f16\u7a0b\uff09\uff0c\u53ea\u8981\u89e6\u53d1\u8be5\u51fd\u6570\u6216\u4f7f\u7528\uff08\u53d6\u503c\uff0c\u4fee\u6539\uff09\u8be5\u53d8\u91cf\uff0c\u4fbf\u80fd\u5c06\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\uff08\u524d\u540e\u7684\u7ed3\u679c\uff08\u5982 \u52a0\u5bc6\u524d\uff0c\u52a0\u5bc6\u540e\uff09\uff09\u83b7\u53d6\u5230\u3002\u8fd9\u624d\u662f\u6211\u4eec\u7684\u76ee\u7684\u3002"),(0,o.kt)("p",null,"\u4e66\u4e2d\u7ed9\u7684\u4f8b\u5b50\u60f3\u8bf4\u660e\u7684\uff0c\u60f3\u4e3a\u67d0\u4e2a\u539f\u51fd\u6570(\u6bd4\u5982\u8fd9\u91cc\u7684 add)\u6dfb\u52a0\u4e00\u4e9b\u529f\u80fd\uff0c\u4f46\u8be5\u539f\u51fd\u6570\u53ef\u80fd\u662f\u7531\u5176\u4ed6\u5f00\u53d1\u8005\u6240\u7f16\u5199\u7684\uff0c\u90a3\u4e48\u76f4\u63a5\u4fee\u6539\u539f\u51fd\u6570\u672c\u8eab\u5c06\u53ef\u80fd\u5bfc\u81f4\u672a\u77e5 BUG\uff0c\u4e8e\u662f\u4fbf\u53ef\u4ee5\u7528\u4e0a\u9762\u7684\u65b9\u5f0f\u8fdb\u884c\u590d\u5199\u539f\u51fd\u6570\u7684\u540c\u65f6\uff0c\u8fd8\u4e0d\u7834\u574f\u539f\u51fd\u6570\u3002"),(0,o.kt)("h3",{id:"this-\u6307\u5411\u95ee\u9898"},"this \u6307\u5411\u95ee\u9898"),(0,o.kt)("p",null,"\u4f46\u5e76\u4e0d\u662f\u4ec0\u4e48\u51fd\u6570\u90fd\u80fd\u8fd9\u6837\u64cd\u4f5c\uff0c\u6216\u8005\u8bf4\u8fd9\u6837\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u539f\u672c\u51fd\u6570\u53ef\u80fd\u6267\u884c\u4e0d\u4e86\uff0c\u6bd4\u5982 this \u6307\u5411\uff0c\u867d\u8bf4\u6ca1\u6709\u4fee\u6539\u539f\u51fd\u6570\uff0c\u4f46\u662f\u539f\u51fd\u6570\u7684 this \u5df2\u7ecf\u7ed9\u6211\u4eec\u66f4\u6539\u6210\u5f53\u524d\u73af\u5883\u4e0b\uff08\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"window"),"\uff09\uff0c\u4f46\u6709\u4e9b\u51fd\u6570\u6bd4\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"document.getElementById()")," \u7684\u5185\u90e8",(0,o.kt)("inlineCode",{parentName:"p"},"this"),"\u6307\u5411\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"document"),"\uff0c\u4e0d\u59a8\u5c1d\u8bd5\u5c06\u4e0b\u9762\u4ee3\u7801\u76f4\u63a5\u590d\u5236\u5230\u63a7\u5236\u53f0\u4e2d\u67e5\u770b\u4f1a\u62a5\u4ec0\u4e48\u9519"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let _getElementById = document.getElementById\ngetElementById = function (id) {\n  console.log(1)\n  return _getElementById(id)\n}\n\nlet div = getElementById('div')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u62a5\u9519:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Uncaught TypeError: Illegal invocation\n    at getElementById (<anonymous>:4:9)\n    at <anonymous>:7:11\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5:")),(0,o.kt)("p",null,"\u53ea\u9700\u8981\u5c06 this \u6307\u5411\u8bbe\u7f6e\u4e3a document \u5373\u53ef\uff0c\u4ee3\u7801\u6539\u5199\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let _getElementById = document.getElementById\ngetElementById = function () {\n  console.log(1)\n  return _getElementById.apply(document, arguments)\n}\n\nlet div = getElementById('div')\n")),(0,o.kt)("p",null,"\u4f46\u8fd9\u6837\u505a\u7565\u663e\u9ebb\u70e6\uff0c\u4e14\u6709\u4e9b\u51fd\u6570\u4f60\u53ef\u80fd\u90fd\u4e0d\u77e5\u9053 this \u7684\u6307\u5411\uff0c\u4f46\u53c8\u60f3\u8981\u590d\u5199\u8be5\u51fd\u6570\uff0c\u4e66\u4e2d\u4e5f\u63d0\u53ca\u5230\u7528 ",(0,o.kt)("strong",{parentName:"p"},"AOP \u88c5\u9970\u51fd\u6570")),(0,o.kt)("h3",{id:"\u7528-aop-\u88c5\u9970\u51fd\u6570"},"\u7528 AOP \u88c5\u9970\u51fd\u6570"),(0,o.kt)("p",null,"\u5148\u7ed9\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"Function.prototype.before")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Function.prototype.after"),"\u65b9\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Function.prototype.before = function (beforefn) {\n  let __self = this\n  return function () {\n    beforefn.apply(this, arguments)\n    return __self.apply(this.arguments)\n  }\n}\n\nFunction.prototype.after = function (afterfn) {\n  let __self = this\n  return function () {\n    let ret = __self.apply(this, arguments)\n    afterfn.apply(this, [ret])\n    return ret\n  }\n}\n")),(0,o.kt)("p",null,"\u6ce8\uff1a\u8fd9\u91cc after \u4e0e\u4e66\u4e2d\u7565\u6709\u4e0d\u540c\uff0c\u4e66\u4e2d\u7684\u662f\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"arguments")," \u4f20\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"afterfn.apply(this, arguments)"),"\uff0c\u800c\u6211\u7684\u505a\u6cd5\u5219\u662f\u5c06\u8fd0\u884c\u540e\u7684\u7ed3\u679c\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"afterfn.apply(this, [ret])")),(0,o.kt)("p",null,"\u90a3\u4e48\u5c06\u6211\u4eec\u4e00\u5f00\u59cb\u7684\u52a0\u6cd5\u4f8b\u5b50\u4fbf\u53ef\u4ee5\u66ff\u6362\u4e3a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function add(a, b) {\n  return a + b\n}\n\nadd = add\n  .before(function () {\n    console.log('arguments', arguments)\n  })\n  .after(function (result) {\n    console.log('result', result)\n  })\n// \u5207\u8bb0 \u8fd9\u91cc\u4e0d\u80fd\u5199\u7bad\u5934\u51fd\u6570 \u4e0d\u7136\u4f1a\u6307\u5411\u7684\u4e0d\u662f\u6267\u884c\u4e2d\u7684this \u800c\u662f\u4ee3\u7801\u73af\u5883\u4e0b\u7684this\n\nadd(1, 2)\n\n// arguments Arguments(2)\xa0[1, 2, callee: \u0192, Symbol(Symbol.iterator): \u0192]\n// result 3\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\uff1a\u8fd9\u79cd\u88c5\u9970\u65b9\u5f0f\u53e0\u52a0\u4e86\u51fd\u6570\u7684\u4f5c\u7528\u57df\uff0c\u5982\u679c\u88c5\u9970\u7684\u94fe\u6761\u8fc7\u957f\uff0c\u6027\u80fd\u4e0a\u4e5f\u4f1a\u53d7\u5230\u4e00\u5b9a\u7684\u5f71\u54cd")),(0,o.kt)("p",null,"\u4f46\u8be5\u65b9\u6cd5\u662f\u76f4\u63a5\u4fee\u6539\u539f\u578b\u65b9\u6cd5\uff0c\u6709\u4e9b\u4e0d\u559c\u6b22\u6c61\u67d3\u539f\u578b\u7684\u65b9\u5f0f\uff08\u7528\u539f\u578b\u65b9\u5f0f\u662f\u771f\u7684\u597d\u5199\uff09\uff0c\u90a3\u4e48\u505a\u4e00\u4e9b\u53d8\u901a\uff0c\u5c06\u539f\u51fd\u6570\u548c\u65b0\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u4ee3\u7801\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let before = function (fn, beforefn) {\n  return function () {\n    beforefn.apply(this, arguments)\n    return fn.apply(this, arguments)\n  }\n}\n")),(0,o.kt)("p",null,"add \u51fd\u6570\u4fee\u6539\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"add = before(add, function () {\n  console.log('arguments', arguments)\n})\n\nadd(1, 2)\n")),(0,o.kt)("p",null,"\u540c\u6837\u4e5f\u80fd\u8fbe\u5230\u6240\u8981\u7684\u76ee\u7684\u3002"),(0,o.kt)("h2",{id:"\u5199\u540e\u611f"},"\u5199\u540e\u611f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"add = function () {\n  console.log('arguments', arguments)\n  let result = _add.apply(this, arguments)\n  console.log('result', result)\n  return result\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"add = add\n  .before(function () {\n    console.log('arguments', arguments)\n  })\n  .after(function (result) {\n    console.log('result', result)\n  })\n")),(0,o.kt)("p",null,"\u5bf9\u6bd4\u4e24\u8005\u65b9\u6cd5\uff0c\u524d\u8005\u662f\u5bf9\u51fd\u6570\u8fdb\u884c\u66ff\u6362\uff0c\u800c\u540e\u8005\u901a\u8fc7\u51fd\u6570\u539f\u578b\u94fe\u5c06\u53c2\u6570\u4e0e\u7ed3\u679c\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u7684\u5f62\u5f0f\u8fdb\u884c\u4f7f\u7528\u3002\u5728\u4e0d\u8003\u8651 this \u6307\u5411\uff0c\u6211\u4e2a\u4eba\u66f4\u504f\u5411\u7b2c\u4e00\u79cd\u5199\u6cd5\uff0c\u800c\u7b2c\u4e8c\u79cd\u5199\u6cd5\u4e5f\u786e\u5b9e\u8ba9\u6211\u773c\u524d\u4e00\u4eae\uff0c\u5f88\u5de7\u5999\u7684\u4f7f\u7528 js \u7684\u539f\u578b\u94fe\uff0c\u4ece\u800c\u907f\u514d this \u6307\u5411\u7684\u95ee\u9898\u3002"))}g.isMDXComponent=!0}}]);