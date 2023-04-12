"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[94334],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),v=a,d=m["".concat(p,".").concat(v)]||m[v]||s[v]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={slug:"sse-server-send-event",title:"SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",date:new Date("2022-03-16T00:00:00.000Z"),authors:"kuizuo",tags:["http"],keywords:["http"]},p=void 0,u={permalink:"/en/sse-server-send-event",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6.md",source:"@site/blog/develop/SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6.md",title:"SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",description:"\u5148\u653e\u4e00\u5f20 gif \u56fe\u5c55\u793a\u4e0b\u6548\u679c",date:"2022-03-16T00:00:00.000Z",formattedDate:"March 16, 2022",tags:[{label:"http",permalink:"/en/tags/http"}],readingTime:2.1266666666666665,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"sse-server-send-event",title:"SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",date:"2022-03-16T00:00:00.000Z",authors:"kuizuo",tags:["http"],keywords:["http"]},prevItem:{title:"\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883",permalink:"/en/electron-vue3-development-environment"},nextItem:{title:"\u5728\u7ebf\u5de5\u5177",permalink:"/en/online-tools"}},c={authorsImageUrls:[void 0]},s=[{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u670d\u52a1\u5668\u5b9e\u73b0",id:"\u670d\u52a1\u5668\u5b9e\u73b0",level:2},{value:"\u6570\u636e\u683c\u5f0f",id:"\u6570\u636e\u683c\u5f0f",level:3},{value:"\u5ba2\u6237\u7aef API",id:"\u5ba2\u6237\u7aef-api",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],m={toc:s};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5148\u653e\u4e00\u5f20 gif \u56fe\u5c55\u793a\u4e0b\u6548\u679c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/sse.gif",alt:"sse"})),(0,o.kt)("p",null,"\u5b9e\u73b0\u4e0a\u9762\u8fd9\u4e2a\u6548\u679c\u4e4b\u524d\uff0c\u5148\u8865\u5145\u70b9\u524d\u7f6e\u77e5\u8bc6"),(0,o.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u5728 HTTP \u534f\u8bae\u4e2d\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5411\u6d4f\u89c8\u5668\u63a8\u9001\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528 WebSocket \u6765\u5b9e\u73b0\u4e24\u8005\u53cc\u5411\u901a\u4fe1\u3002\u800c\u5728\u8fd9\u91cc\u6240\u8981\u4ecb\u7ecd\u7684\u662f SSE\uff08Server-Sent Events\uff09\uff0c\u5728\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u540e\uff0c\u670d\u52a1\u5668\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u6d41\u6570\u636e\uff08\u662f\u5355\u5411\u7684\uff09\uff0c\u6765\u5b9e\u73b0\u63a5\u6536\u670d\u52a1\u5668\u7684\u6570\u636e\uff0c\u4f8b\u5982\u5728\u7ebf\u89c6\u9891\u64ad\u653e\uff0c\u548c\u50cf\u4e0a\u9762\u6240\u6f14\u793a\u7684\u6548\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.ruanyifeng.com/blogimg/asset/2017/bg2017052702.jpg",alt:"img"})),(0,o.kt)("p",null,"\u5173\u4e8e SSE \u6807\u51c6\u6587\u6863 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events"},"MDN \u6587\u6863")),(0,o.kt)("h3",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SSE \u4f7f\u7528 HTTP \u534f\u8bae\uff0c\u73b0\u6709\u7684\u670d\u52a1\u5668\u8f6f\u4ef6\u90fd\u652f\u6301\u3002WebSocket \u662f\u4e00\u4e2a\u72ec\u7acb\u534f\u8bae\u3002"),(0,o.kt)("li",{parentName:"ul"},"SSE \u5c5e\u4e8e\u8f7b\u91cf\u7ea7\uff0c\u4f7f\u7528\u7b80\u5355\uff1bWebSocket \u534f\u8bae\u76f8\u5bf9\u590d\u6742\u3002"),(0,o.kt)("li",{parentName:"ul"},"SSE \u9ed8\u8ba4\u652f\u6301\u65ad\u7ebf\u91cd\u8fde\uff0cWebSocket \u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u3002"),(0,o.kt)("li",{parentName:"ul"},"SSE \u4e00\u822c\u53ea\u7528\u6765\u4f20\u9001\u6587\u672c\uff0c\u4e8c\u8fdb\u5236\u6570\u636e\u9700\u8981\u7f16\u7801\u540e\u4f20\u9001\uff0cWebSocket \u9ed8\u8ba4\u652f\u6301\u4f20\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"SSE \u652f\u6301\u81ea\u5b9a\u4e49\u53d1\u9001\u7684\u6d88\u606f\u7c7b\u578b\u3002")),(0,o.kt)("h2",{id:"\u670d\u52a1\u5668\u5b9e\u73b0"},"\u670d\u52a1\u5668\u5b9e\u73b0"),(0,o.kt)("h3",{id:"\u6570\u636e\u683c\u5f0f"},"\u6570\u636e\u683c\u5f0f"),(0,o.kt)("p",null,"\u670d\u52a1\u5668\u5411\u6d4f\u89c8\u5668\u53d1\u9001\u7684 SSE \u6570\u636e\uff0c\u5fc5\u987b\u662f UTF-8 \u7f16\u7801\u7684\u6587\u672c\uff0c\u5177\u6709\u5982\u4e0b\u7684 HTTP \u5934\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"Content-Type: text/event-stream; charset=utf-8\nCache-Control: no-cache\nConnection: keep-alive\n")),(0,o.kt)("p",null,"\u4f7f\u7528 Node \u5b9e\u73b0\u7684\u4ee3\u7801\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var http = require('http')\n\nhttp\n  .createServer(function (req, res) {\n    var fileName = '.' + req.url\n\n    if (fileName === './stream') {\n      res.writeHead(200, {\n        'Content-Type': 'text/event-stream',\n        'Cache-Control': 'no-cache',\n        Connection: 'keep-alive',\n        'Access-Control-Allow-Origin': '*',\n      })\n      res.write('retry: 10000\\n')\n      res.write('event: connecttime\\n')\n      res.write('data: ' + new Date() + '\\n\\n')\n      res.write('data: ' + new Date() + '\\n\\n')\n\n      interval = setInterval(function () {\n        res.write('data: ' + new Date() + '\\n\\n')\n      }, 1000)\n\n      req.connection.addListener(\n        'close',\n        function () {\n          clearInterval(interval)\n        },\n        false,\n      )\n    }\n  })\n  .listen(8844, '127.0.0.1')\n")),(0,o.kt)("p",null,"\u901a\u8fc7 node server.js \u8fd0\u884c\u670d\u52a1\u7aef\uff0c\u6b64\u65f6\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8844/stream"},"http://127.0.0.1:8844/stream")," \u5f97\u5230\u7684\u6548\u679c\u5c31\u662f\u5f00\u5934\u7684 gif \u6240\u6f14\u793a\u7684\u3002"),(0,o.kt)("h2",{id:"\u5ba2\u6237\u7aef-api"},"\u5ba2\u6237\u7aef API"),(0,o.kt)("p",null,"\u50cf\u4e0a\u9762\u662f\u76f4\u63a5\u5411\u670d\u52a1\u5668\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"EventSource"),"\u5bf9\u8c61\uff0c\u6bd4\u5982\u76d1\u542c SSE \u8fde\u63a5\uff0c\u4ee5\u53ca\u4e3b\u52a8\u5173\u95ed SSE \u8fde\u63a5\uff0c\u5177\u4f53\u7684\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <title>JS Bin</title>\n  </head>\n  <body>\n    <div id=\"example\"></div>\n    <script>\n      var source = new EventSource('http://127.0.0.1:8844/stream')\n      var div = document.getElementById('example')\n\n      source.onopen = function (event) {\n        div.innerHTML += '<p>Connection open ...</p>'\n      }\n\n      source.onerror = function (event) {\n        div.innerHTML += '<p>Connection close.</p>'\n      }\n\n      source.addEventListener(\n        'connecttime',\n        function (event) {\n          div.innerHTML += '<p>Start time: ' + event.data + '</p>'\n        },\n        false,\n      )\n\n      source.onmessage = function (event) {\n        div.innerHTML += '<p>Ping: ' + event.data + '</p>'\n      }\n    <\/script>\n  </body>\n</html>\n")),(0,o.kt)("p",null,"\u5e76\u4e14\u7531\u4e8e\u662f\u8c03\u7528\u6d4f\u89c8\u5668 API\uff0c\u5728\u5f00\u53d1\u8005\u5de5\u5177\u7684\u7f51\u7edc\u9762\u677f\u4e0a\u8fd8\u80fd\u770b\u5230\u5bf9\u5e94\u7684 EventStream\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220316134321431.png",alt:"image-20220316134321431"})),(0,o.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events"},"\u4f7f\u7528\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6 - Web API \u63a5\u53e3\u53c2\u8003 | MDN (mozilla.org)")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html"},"Server-Sent Events \u6559\u7a0b - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7 (ruanyifeng.com)"))))}v.isMDXComponent=!0}}]);