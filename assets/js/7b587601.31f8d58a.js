"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1244],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8437:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=r(102),l=(r(7294),r(4137)),i=["components"],o={id:"stl",slug:"/stl",title:"stl"},p=void 0,c={unversionedId:"oi/C++/stl",id:"oi/C++/stl",title:"stl",description:"string\u5bb9\u5668",source:"@site/docs/oi/02-C++/stl.md",sourceDirName:"oi/02-C++",slug:"/stl",permalink:"/docs/stl",draft:!1,tags:[],version:"current",frontMatter:{id:"stl",slug:"/stl",title:"stl"},sidebar:"oi",previous:{title:"C++\u57fa\u7840\u7b80\u4ecb",permalink:"/docs/C++-oi-basic-guides"},next:{title:"\u7b80\u4ecb",permalink:"/docs/tree-review"}},s={},u=[{value:"string\u5bb9\u5668",id:"string\u5bb9\u5668",level:2},{value:"sort",id:"sort",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"string\u5bb9\u5668"},"string\u5bb9\u5668"),(0,l.kt)("p",null,"\u5728\u505a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/"},"2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6"),"\u7684\u65f6\u5019\uff0c\u9047\u5230\u4e86string\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7ed9\u4f60\u4e00\u4e2a\u4ec5\u7531 \u5927\u5199 \u82f1\u6587\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32 s \u3002"),(0,l.kt)("p",{parentName:"blockquote"},'\u4f60\u53ef\u4ee5\u5bf9\u6b64\u5b57\u7b26\u4e32\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\uff0c\u5728\u6bcf\u4e00\u6b65\u64cd\u4f5c\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4ece s \u4e2d\u5220\u9664 \u4efb\u4e00\u4e2a "AB" \u6216 "CD" \u5b50\u5b57\u7b26\u4e32\u3002'),(0,l.kt)("p",{parentName:"blockquote"},'\u901a\u8fc7\u6267\u884c\u64cd\u4f5c\uff0c\u5220\u9664\u6240\u6709 "AB" \u548c "CD" \u5b50\u4e32\uff0c\u8fd4\u56de\u53ef\u83b7\u5f97\u7684\u6700\u7ec8\u5b57\u7b26\u4e32\u7684 \u6700\u5c0f \u53ef\u80fd\u957f\u5ea6\u3002'),(0,l.kt)("p",{parentName:"blockquote"},'\u6ce8\u610f\uff0c\u5220\u9664\u5b50\u4e32\u540e\uff0c\u91cd\u65b0\u8fde\u63a5\u51fa\u7684\u5b57\u7b26\u4e32\u53ef\u80fd\u4f1a\u4ea7\u751f\u65b0\u7684 "AB" \u6216 "CD" \u5b50\u4e32\u3002')),(0,l.kt)("p",null,"\u5927\u610f\u662f\u5220\u9664\u5b50\u4e32\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u9996\u5148\u60f3\u5230\u4e86\u7528stl\u7684string\u5bb9\u5668\u3002\uff08\u672c\u8d28\u662f\u4e00\u4e2a\u7c7b\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dynamic array of ",(0,l.kt)("inlineCode",{parentName:"li"},"char")," (similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"vector<char>"),")"),(0,l.kt)("li",{parentName:"ul"},"concatenation with ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"+=")),(0,l.kt)("li",{parentName:"ul"},"single character access with ",(0,l.kt)("inlineCode",{parentName:"li"},"[index]")),(0,l.kt)("li",{parentName:"ul"},'modifiable ("mutable") unlike in e.g., Python or Java'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"regular"),": deeply copyable, deeply comparable")),(0,l.kt)("p",null,"\u7c7b\u91cc\u6709\u5f88\u591a\u65b9\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u67e5\u627efind/rfind",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u201cr\u201d"),(0,l.kt)("li",{parentName:"ul"},"'a',5 \u4eceindex=5\u5f00\u59cb\u627ea\u5b57\u7b26\u6700\u521d\u51fa\u73b0\u7684index"))),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664delete"),(0,l.kt)("li",{parentName:"ol"},"\u66ff\u6362replace"),(0,l.kt)("li",{parentName:"ol"},"\u63d2\u5165insert"),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664erase"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u5b9a\u4e49\u5927\u5c0fresize",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"20\uff0c?? (\u5982\u679c\u4e00\u5f00\u59cb\u662f5\u4e2a\u5b57\u7b26\uff0c\u540e\u9762\u7684\u5c06\u4f1a\u7ed9\uff1f\u586b\u6ee1)"))),(0,l.kt)("li",{parentName:"ol"},"\u5b50\u4e32substr"),(0,l.kt)("li",{parentName:"ol"},"\u5305\u542bcontains\uff08bool\uff09"),(0,l.kt)("li",{parentName:"ol"},"ends_with\uff08bool\uff09"),(0,l.kt)("li",{parentName:"ol"},"start_with\uff08bool\uff09")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff0cC++14\u540e\u7684\u7279\u6027\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'auto s1="seven of"; //\u8fd9\u54e5\u4eec\u662fchar[]\nauto s1="seven of"s;//\u8fd9\u54e5\u4eec\u662f\\std::string\n')),(0,l.kt)("h1",{id:"standard-library-sequence-reordering-algorithms"},(0,l.kt)("a",{parentName:"h1",href:"https://hackingcpp.com/cpp/std/algorithms/reordering.html#nav-roota"},"Standard Library Sequence Reordering Algorithms")),(0,l.kt)("h2",{id:"sort"},"sort"),(0,l.kt)("p",null,"\u4f30\u8ba1\u662f\u9ed8\u8ba4\u4ece\u5c0f\u5230\u5927\u7684\uff0c\u6240\u4ee5\u4ed6\u540e\u9762\u7684\u7b2c\u4e09\u4e2a\u5165\u53c2\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"greater<>{}")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/649138251ddac507ccbab860",alt:"image-20230620132445904"})))}d.isMDXComponent=!0}}]);