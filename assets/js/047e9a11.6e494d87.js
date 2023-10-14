"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3381],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,s=d["".concat(o,".").concat(m)]||d[m]||k[m]||l;return n?a.createElement(s,i(i({ref:t},c),{},{components:n})):a.createElement(s,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return k}});var a=n(3117),r=n(102),l=(n(7294),n(4137)),i=["components"],p={id:"arm-driver-dev3",slug:"/arm-driver-dev3",title:"ARM-Linux\u9a71\u52a8\u5f00\u53d13",authors:"pansyhou"},o=void 0,u={unversionedId:"skill/Linux/arm-driver-dev3",id:"skill/Linux/arm-driver-dev3",title:"ARM-Linux\u9a71\u52a8\u5f00\u53d13",description:"\u975e\u963b\u585eIO",source:"@site/docs/skill/Linux/ARMLinux\u9a71\u52a8\u5f00\u53d13.md",sourceDirName:"skill/Linux",slug:"/arm-driver-dev3",permalink:"/docs/arm-driver-dev3",draft:!1,tags:[],version:"current",frontMatter:{id:"arm-driver-dev3",slug:"/arm-driver-dev3",title:"ARM-Linux\u9a71\u52a8\u5f00\u53d13",authors:"pansyhou"},sidebar:"skill",previous:{title:"ARM-Linux\u9a71\u52a8\u5f00\u53d12",permalink:"/docs/arm-driver-dev2"}},c={},k=[{value:"\u975e\u963b\u585eIO",id:"\u975e\u963b\u585eio",level:2},{value:"\u7b49\u5f85\u961f\u5217",id:"\u7b49\u5f85\u961f\u5217",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:4},{value:"\u7b49\u5f85\u961f\u5217\u9879",id:"\u7b49\u5f85\u961f\u5217\u9879",level:4},{value:"\u5c06\u961f\u5217\u9879\u6dfb\u52a0/\u79fb\u9664\u7b49\u5f85\u961f\u5217\u5934",id:"\u5c06\u961f\u5217\u9879\u6dfb\u52a0\u79fb\u9664\u7b49\u5f85\u961f\u5217\u5934",level:4},{value:"\u7b49\u5f85\u5524\u9192",id:"\u7b49\u5f85\u5524\u9192",level:4},{value:"\u7b49\u5f85\u4e8b\u4ef6",id:"\u7b49\u5f85\u4e8b\u4ef6",level:4},{value:"\u8f6e\u8be2",id:"\u8f6e\u8be2",level:4}],d={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u975e\u963b\u585eio"},"\u975e\u963b\u585eIO"),(0,l.kt)("p",null,"\u5f53\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'fd = open("/dev/xxx_dev", O_RDWR | O_NONBLOCK);\n')),(0,l.kt)("p",null,"\u624d\u662f\u975e\u963b\u585e\u5730\u53bb\u6253\u5f00\u6587\u4ef6"),(0,l.kt)("h3",{id:"\u7b49\u5f85\u961f\u5217"},"\u7b49\u5f85\u961f\u5217"),(0,l.kt)("p",null,"Linux \u5185\u6838\u63d0\u4f9b\u4e86\u7b49\u5f85\u961f\u5217(wait queue)\u6765\u5b9e\u73b0\u963b\u585e\u8fdb\u7a0b\u7684\u5524\u9192\u5de5\u4f5c"),(0,l.kt)("p",null,"\u4f7f\u7528\u9700\u8981\u521b\u5efa\u521d\u59cb\u5316",(0,l.kt)("strong",{parentName:"p"},"\u7b49\u5f85\u961f\u5217\u5934"),(0,l.kt)("inlineCode",{parentName:"p"},"wait_queue_head_t")),(0,l.kt)("p",null,"\u5728\u6587\u4ef6 include/linux/wait.h"),(0,l.kt)("h4",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void init_waitqueue_head(wait_queue_head_t *q)\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b8fDECLARE_WAIT_QUEUE_HEAD\u6765\u4e00\u6b21\u6027\u5b8c\u6210\u7b49\u5f85\u961f\u5217\u5934\u7684\u5b9a\u4e49\u7684\u521d\u59cb"),(0,l.kt)("h4",{id:"\u7b49\u5f85\u961f\u5217\u9879"},"\u7b49\u5f85\u961f\u5217\u9879"),(0,l.kt)("p",null,"\u5f53\u8bbe\u5907\u4e0d\u53ef\u7528\u7684\u65f6\u5019\u5c31\u8981\u5c06\u8fdb\u7a0b\u5bf9\u5e94\u7684\u7b49\u5f85\u961f\u5217\u9879\u6dfb\u52a0\u5230\u7b49\u5f85\u961f\u5217\u91cc\u9762"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wait_queue_t"),"\u6765\u8868\u793a\u7b49\u5f85\u961f\u5217\u9879"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct __wait_queue {\n    unsigned int        flags;\n    void            *private;\n    wait_queue_func_t   func;\n    struct list_head    task_list;\n};\ntypedef struct __wait_queue wait_queue_t;\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u5b8f DECLARE_WAITQUEUE \u5b9a\u4e49\u5e76\u521d\u59cb\u5316\u4e00\u4e2a\u7b49\u5f85\u961f\u5217\u9879\uff0c\u5b8f\u7684\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"DECLARE_WAITQUEUE(name, tsk)\n")),(0,l.kt)("p",null,"name \u5c31\u662f\u7b49\u5f85\u961f\u5217\u9879\u7684\u540d\u5b57\uff0ctsk \u8868\u793a\u8fd9\u4e2a\u7b49\u5f85\u961f\u5217\u9879\u5c5e\u4e8e\u54ea\u4e2a\u4efb\u52a1(\u8fdb\u7a0b)\uff0c\u4e00\u822c\u8bbe\u7f6e\u4e3acurrent \uff0c\u5728 Linux \u5185 \u6838 \u4e2d current \u76f8 \u5f53 \u4e8e \u4e00 \u4e2a \u5168 \u5c40 \u53d8 \u91cf \uff0c \u8868 \u793a \u5f53 \u524d \u8fdb \u7a0b \u3002 \u56e0\u6b64\u5b8fDECLARE_WAITQUEUE \u5c31\u662f\u7ed9\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u8fdb\u7a0b\u521b\u5efa\u5e76\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u7b49\u5f85\u961f\u5217\u9879\u3002"),(0,l.kt)("h4",{id:"\u5c06\u961f\u5217\u9879\u6dfb\u52a0\u79fb\u9664\u7b49\u5f85\u961f\u5217\u5934"},"\u5c06\u961f\u5217\u9879\u6dfb\u52a0/\u79fb\u9664\u7b49\u5f85\u961f\u5217\u5934"),(0,l.kt)("p",null,"\u9700\u8981\u5c06\u8fdb\u7a0b\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u7b49\u5f85\u961f\u5217\u9879")," \u6dfb\u52a0\u5230\u524d\u9762\u521b\u5efa\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u7b49\u5f85\u961f\u5217\u5934 "),"\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void add_wait_queue(wait_queue_head_t *q, wait_queue_t *wait)\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u961f\u5217\u9879\u8981\u52a0\u5165\u7684\u5934"),(0,l.kt)("li",{parentName:"ol"},"\u961f\u5217\u9879")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void remove_wait_queue(wait_queue_head_t *q,wait_queue_t *wait)\n")),(0,l.kt)("h4",{id:"\u7b49\u5f85\u5524\u9192"},"\u7b49\u5f85\u5524\u9192"),(0,l.kt)("p",null,"\u5f53\u8bbe\u5907\u53ef\u4ee5\u4f7f\u7528\u7684\u65f6\u5019\u5c31\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"\u5524\u9192"),"\u8fdb\u5165\u4f11\u7720\u6001\u7684\u8fdb\u7a0b\uff0c\u5524\u9192\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u4e24\u4e2a\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void wake_up(wait_queue_head_t *q)\nvoid wake_up_interruptible(wait_queue_head_t *q)\n")),(0,l.kt)("p",null,"\u8fd9\u4e24\u4e2a\u51fd\u6570\u4f1a\u5c06\u8fd9\u4e2a\u7b49\u5f85\u961f\u5217\u5934\u4e2d\u7684\u6240\u6709\u8fdb\u7a0b\u90fd\u5524\u9192"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"wake_up\u51fd\u6570\u53ef\u4ee5\u5524\u9192\u5904\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"TASK_INTERRUPTIBLE")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"TASK_UNINTERRUPTIBLE"),"\u72b6\u6001\u7684\u8fdb\u7a0b"),(0,l.kt)("p",{parentName:"blockquote"},"\u800c wake_up_interruptible \u51fd\u6570\u53ea\u80fd\u5524\u9192\u5904\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"TASK_INTERRUPTIBLE"),"\u72b6\u6001\u7684\u8fdb\u7a0b\u3002")),(0,l.kt)("h4",{id:"\u7b49\u5f85\u4e8b\u4ef6"},"\u7b49\u5f85\u4e8b\u4ef6"),(0,l.kt)("p",null,"\u9664\u4e86\u4e3b\u52a8\u5524\u9192\u4ee5\u5916\uff0c\u4e5f\u53ef\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"\u8bbe\u7f6e"),"\u7b49\u5f85\u961f\u5217\u7b49\u5f85\u67d0\u4e2a\u4e8b\u4ef6\uff0c\u5f53\u8fd9\u4e2a\u4e8b\u4ef6\u6ee1\u8db3\u4ee5\u540e\u5c31\u81ea\u52a8\u5524\u9192\u7b49\u5f85\u961f\u5217\u4e2d\u7684\u8fdb\u7a0b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"wait_event(wq, condition)"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u7b49\u5f85\u4ee5 wq \u4e3a\u7b49\u5f85\u961f\u5217\u5934\u7684\u7b49\u5f85\u961f\u5217\u88ab\u5524\u9192\uff0c\u524d\u63d0\u662f condition \u6761\u4ef6\u5fc5\u987b\u6ee1\u8db3(\u4e3a\u771f)\uff0c\u5426\u5219\u4e00\u76f4\u963b\u585e\uff0c\u6b64\u51fd\u6570\u4f1a\u5c06\u8fdb\u7a0b\u8bbe\u7f6e\u4e3aTASK_UNINTERRUPTIBLE \u72b6\u6001"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"wait_event_timeout(wq, condition, timeout)"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u529f\u80fd\u548c wait_event \u7c7b\u4f3c\uff0c\u4f46\u662f\u6b64\u51fd\u6570\u53ef\u4ee5\u6dfb\u52a0",(0,l.kt)("strong",{parentName:"p"},"\u8d85\u65f6\u65f6\u95f4"),"\uff0c\u4ee5 jiffies \u4e3a\u5355\u4f4d\u3002"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u6b64\u51fd\u6570\u6709\u8fd4\u56de\u503c"),"\uff0c\u5982\u679c\u8fd4\u56de 0 \u7684\u8bdd\u8868\u793a\u8d85\u65f6\u65f6\u95f4\u5230\uff0c\u800c\u4e14 condition \u4e3a\u5047\u3002\u4e3a 1 \u7684\u8bdd\u8868\u793a condition \u4e3a\u771f\uff0c\u4e5f\u5c31\u662f\u6761\u4ef6\u6ee1\u8db3\u4e86"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"wait_event_interruptible(wq, condition)"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4e0e wait_event \u51fd\u6570\u7c7b\u4f3c\uff0c\u4f46\u662f\u6b64\u51fd\u6570\u5c06\u8fdb\u7a0b\u8bbe\u7f6e\u4e3a TASK_INTERRUPTIBLE\uff0c\u5c31\u662f",(0,l.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u88ab\u4fe1\u53f7\u6253\u65ad"),"\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"wait_event_interruptible_timeout(wq, condition, timeout)"))),(0,l.kt)("h4",{id:"\u8f6e\u8be2"},"\u8f6e\u8be2"),(0,l.kt)("p",null,"\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f\u63d0\u4f9b\u975e\u963b\u585e\u7684\u5904\u7406\u65b9\u5f0f\uff0c \u4e5f\u5c31\u662f\u8f6e\u8be2"),(0,l.kt)("p",null,"poll\u3001epoll \u548c select \u53ef\u4ee5\u7528\u4e8e\u5904\u7406\u8f6e\u8be2\uff0c\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7 select\u3001epoll \u6216 poll \u51fd\u6570\u6765\u67e5\u8be2\u8bbe\u5907\u662f\u5426\u53ef\u4ee5\u64cd\u4f5c\uff0c\u5982\u679c\u53ef\u4ee5\u64cd\u4f5c\u7684\u8bdd\u5c31\u4ece\u8bbe\u5907\u8bfb\u53d6\u6216\u8005\u5411\u8bbe\u5907\u5199\u5165\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u5f53\u5e94\u7528\u7a0b\u5e8f\u8c03\u7528 select\u3001epoll \u6216 poll \u51fd\u6570\u7684\u65f6\u5019\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f\u4e2d\u7684 poll \u51fd\u6570\u5c31\u4f1a\u6267\u884c\uff0c\u56e0\u6b64\u9700\u8981\u5728\u8bbe\u5907\u9a71\u52a8\u7a0b\u5e8f\u4e2d\u7f16\u5199 poll \u51fd\u6570"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"select"),"\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int select(  int nfds, \n            fd_set *readfds, \n            fd_set *writefds, \n            fd_set *exceptfds, \n            struct timeval  *timeout)\n")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"nfds\uff1a\u6240\u8981\u76d1\u89c6\u7684 \u8fd9\u4e09\u7c7b\u6587\u4ef6\u63cf\u8ff0\u96c6\u5408\u4e2d\uff0c\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26\u52a01"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u610f\u4e49\u4f55\u5728\uff1f"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"readfds\u3001writefds \u548c exceptfds\uff1a\u8fd9\u4e09\u4e2a\u6307\u9488\u6307\u5411\u63cf\u8ff0\u7b26\u96c6\u5408\uff0c\u8fd9\u4e09\u4e2a\u53c2\u6570\u6307\u660e\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u5173\u5fc3\u54ea\u4e9b\u63cf\u8ff0\u7b26\u3001\u9700\u8981\u6ee1\u8db3\u54ea\u4e9b\u6761\u4ef6"),"\u7b49\u7b49\uff0c\u8fd9\u4e09\u4e2a\u53c2\u6570\u90fd\u662f fd_set \u7c7b\u578b\u7684\uff0cfd_set \u7c7b\u578b\u53d8\u91cf\u7684\u6bcf\u4e00\u4e2a\u90fd\u4ee3\u8868\u4e86\u4e00\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"readfds "),"\u7528\u4e8e\u76d1\u89c6\u6307\u5b9a\u63cf\u8ff0\u7b26\u96c6\u7684",(0,l.kt)("strong",{parentName:"p"},"\u8bfb\u53d8\u5316")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4e5f\u5c31\u662f\u76d1\u89c6\u8fd9\u4e9b\u6587\u4ef6\u662f\u5426\u53ef\u4ee5\u8bfb\u53d6\uff0c\u53ea\u8981\u8fd9\u4e9b\u96c6\u5408\u91cc\u9762\u6709\u4e00\u4e2a\u6587\u4ef6\u53ef\u4ee5\u8bfb\u53d6\u90a3\u4e48seclect\u5c31\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5927\u4e8e 0 \u7684\u503c\u8868\u793a\u6587\u4ef6\u53ef\u4ee5\u8bfb\u53d6"),(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6ca1\u6709\u6587\u4ef6\u53ef\u4ee5\u8bfb\u53d6\uff0c\u90a3\u4e48\u5c31\u4f1a\u6839\u636e timeout \u53c2\u6570\u6765\u5224\u65ad\u662f\u5426\u8d85\u65f6\u3002\u53ef\u4ee5\u5c06 readfs\u8bbe\u7f6e\u4e3a NULL\uff0c\u8868\u793a\u4e0d\u5173\u5fc3\u4efb\u4f55\u6587\u4ef6\u7684\u8bfb\u53d8\u5316"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"writefds \u548c readfs "),"\u7c7b\u4f3c\uff0c\u53ea\u662f writefs \u7528\u4e8e\u76d1\u89c6\u8fd9\u4e9b\u6587\u4ef6\u662f\u5426\u53ef\u4ee5\u8fdb\u884c\u5199\u64cd\u4f5c\u3002exceptfds \u7528\u4e8e\u76d1\u89c6\u8fd9\u4e9b\u6587\u4ef6\u7684\u5f02\u5e38")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"timeout"),"\uff1a\u8c03\u7528  select \u51fd\u6570\u7b49\u5f85\u67d0\u4e9b\u6587\u4ef6\u63cf\u8ff0\u7b26\u53ef\u4ee5\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u7528\u7ed3\u6784\u4f53",(0,l.kt)("inlineCode",{parentName:"p"},"timeval"),"\u8868\u793a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-c"},"struct timeval {\n    __kernel_time_t     tv_sec;     /* seconds */\n    __kernel_suseconds_t    tv_usec;    /* microseconds */\n};\n")),(0,l.kt)("p",{parentName:"li"},"\u5f53  timeout \u4e3a NULL \u7684\u65f6\u5019\u5c31\u8868\u793a\u65e0\u9650\u671f\u7684\u7b49\u5f85\u3002"))))),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2afd_set\u53d8\u91cf\uff0c\u4f20\u7ed9readfds"),(0,l.kt)("p",null,"\u6709\u51e0\u4e2a\u5b8f\u8fdb\u884c\u64cd\u4f5c\uff1a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4ed6\u5988\u662f\u5b8f\u662f\u5427\uff1f"),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/652a434bc458853aefea910c",alt:"image-20231014152907543"}))),(0,l.kt)("admonition",{title:"s",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-c"},"void FD_ZERO(fd_set *set)\nvoid FD_SET(int fd, fd_set *set)//\u5c06fd_set\u53d8\u91cf\u7684\u67d0\u4e2a\u4f4d\u7f6e1,fd\u662f\u6587\u4ef6\u63cf\u8ff0\u7b26\nvoid FD_CLR(int fd, fd_set *set) \nint  FD_ISSET(int fd, fd_set *set)//\u6d4b\u8bd5\u4e00\u4e2a\u6587\u4ef6\u662f\u5426\u5c5e\u4e8e\u67d0\u4e2a\u96c6\u5408\uff0c\u53c2\u6570  fd \u5c31\u662f\u8981\u5224\u65ad\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\n"))),(0,l.kt)("p",null,"select\u51fd\u6570\u793a\u4f8b\uff0c\u4f46\u662f\u6ca1\u6709\u5b9e\u73b0select\u51fd\u6570"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/652a4831c458853aeffb4cb5",alt:"image-20231014155008528"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"poll\u51fd\u6570")),(0,l.kt)("p",null,"\u5728\u5355\u4e2a\u7ebf\u7a0b\u4e2d\uff0cselect \u51fd\u6570\u80fd\u591f\u76d1\u89c6\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf",(0,l.kt)("strong",{parentName:"p"},"\u6709\u6700\u5927\u7684\u9650\u5236"),"\uff0c\u4e00\u822c\u4e3a 1024\uff0c\u53ef\u4ee5\u4fee\u6539\u5185\u6838\u5c06\u76d1\u89c6\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\u6539\u5927\uff0c\u4f46\u662f\u8fd9\u6837\u4f1a\u964d\u4f4e\u6548\u7387\uff01"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528 poll \u51fd\u6570\uff0cpoll \u51fd\u6570\u672c\u8d28\u4e0a\u548c select \u6ca1\u6709\u592a\u5927\u7684\u5dee\u522b\uff0c\u4f46\u662f poll \u51fd\u6570\u6ca1\u6709\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26\u9650\u5236\uff0cLinux \u5e94\u7528\u7a0b\u5e8f\u4e2d poll \u51fd\u6570\u539f\u578b\u5982\u4e0b\u6240\u793a\uff1a"))}m.isMDXComponent=!0}}]);