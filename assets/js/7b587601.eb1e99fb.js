"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1244],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(3117),a=n(102),l=(n(7294),n(4137)),i=["components"],o={id:"stl",slug:"/stl",title:"stl"},s=void 0,c={unversionedId:"oi/C++/stl",id:"oi/C++/stl",title:"stl",description:"string\u5bb9\u5668",source:"@site/docs/oi/02-C++/stl.md",sourceDirName:"oi/02-C++",slug:"/stl",permalink:"/docs/stl",draft:!1,tags:[],version:"current",frontMatter:{id:"stl",slug:"/stl",title:"stl"},sidebar:"oi",previous:{title:"C++\u57fa\u7840\u7b80\u4ecb",permalink:"/docs/C++-oi-basic-guides"},next:{title:"\u7b80\u4ecb",permalink:"/docs/tree-review"}},p={},u=[{value:"string\u5bb9\u5668",id:"string\u5bb9\u5668",level:2},{value:"sort",id:"sort",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"string\u5bb9\u5668"},"string\u5bb9\u5668"),(0,l.kt)("p",null,"\u5728\u505a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode.cn/problems/minimum-string-length-after-removing-substrings/"},"2696.\u5220\u9664\u5b50\u4e32\u540e\u7684\u5b57\u7b26\u4e32\u6700\u5c0f\u957f\u5ea6"),"\u7684\u65f6\u5019\uff0c\u9047\u5230\u4e86string\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7ed9\u4f60\u4e00\u4e2a\u4ec5\u7531 \u5927\u5199 \u82f1\u6587\u5b57\u7b26\u7ec4\u6210\u7684\u5b57\u7b26\u4e32 s \u3002"),(0,l.kt)("p",{parentName:"blockquote"},'\u4f60\u53ef\u4ee5\u5bf9\u6b64\u5b57\u7b26\u4e32\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\uff0c\u5728\u6bcf\u4e00\u6b65\u64cd\u4f5c\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4ece s \u4e2d\u5220\u9664 \u4efb\u4e00\u4e2a "AB" \u6216 "CD" \u5b50\u5b57\u7b26\u4e32\u3002'),(0,l.kt)("p",{parentName:"blockquote"},'\u901a\u8fc7\u6267\u884c\u64cd\u4f5c\uff0c\u5220\u9664\u6240\u6709 "AB" \u548c "CD" \u5b50\u4e32\uff0c\u8fd4\u56de\u53ef\u83b7\u5f97\u7684\u6700\u7ec8\u5b57\u7b26\u4e32\u7684 \u6700\u5c0f \u53ef\u80fd\u957f\u5ea6\u3002'),(0,l.kt)("p",{parentName:"blockquote"},'\u6ce8\u610f\uff0c\u5220\u9664\u5b50\u4e32\u540e\uff0c\u91cd\u65b0\u8fde\u63a5\u51fa\u7684\u5b57\u7b26\u4e32\u53ef\u80fd\u4f1a\u4ea7\u751f\u65b0\u7684 "AB" \u6216 "CD" \u5b50\u4e32\u3002')),(0,l.kt)("p",null,"\u5927\u610f\u662f\u5220\u9664\u5b50\u4e32\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u9996\u5148\u60f3\u5230\u4e86\u7528stl\u7684string\u5bb9\u5668\u3002\uff08\u672c\u8d28\u662f\u4e00\u4e2a\u7c7b\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dynamic array of ",(0,l.kt)("inlineCode",{parentName:"li"},"char")," (similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"vector<char>"),")"),(0,l.kt)("li",{parentName:"ul"},"concatenation with ",(0,l.kt)("inlineCode",{parentName:"li"},"+")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"+=")),(0,l.kt)("li",{parentName:"ul"},"single character access with ",(0,l.kt)("inlineCode",{parentName:"li"},"[index]")),(0,l.kt)("li",{parentName:"ul"},'modifiable ("mutable") unlike in e.g., Python or Java'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"regular"),": deeply copyable, deeply comparable")),(0,l.kt)("p",null,"\u7c7b\u91cc\u6709\u5f88\u591a\u65b9\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u67e5\u627efind/rfind",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u201cr\u201d"),(0,l.kt)("li",{parentName:"ul"},"'a',5 \u4eceindex=5\u5f00\u59cb\u627ea\u5b57\u7b26\u6700\u521d\u51fa\u73b0\u7684index"))),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664delete"),(0,l.kt)("li",{parentName:"ol"},"\u66ff\u6362replace"),(0,l.kt)("li",{parentName:"ol"},"\u63d2\u5165insert"),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664erase"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u5b9a\u4e49\u5927\u5c0fresize",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"20\uff0c?? (\u5982\u679c\u4e00\u5f00\u59cb\u662f5\u4e2a\u5b57\u7b26\uff0c\u540e\u9762\u7684\u5c06\u4f1a\u7ed9\uff1f\u586b\u6ee1)"))),(0,l.kt)("li",{parentName:"ol"},"\u5b50\u4e32substr"),(0,l.kt)("li",{parentName:"ol"},"\u5305\u542bcontains\uff08bool\uff09"),(0,l.kt)("li",{parentName:"ol"},"ends_with\uff08bool\uff09"),(0,l.kt)("li",{parentName:"ol"},"start_with\uff08bool\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c++"},"string s;  //\u751f\u6210\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32s\nstring s(str); //\u62f7\u8d1d\u6784\u9020\u51fd\u6570 \u751f\u6210str\u7684\u590d\u5236\u54c1\nstring s(str,stridx); //\u5c06\u5b57\u7b26\u4e32str\u5185\u201c\u59cb\u4e8e\u4f4d\u7f6estridx\u201d\u7684\u90e8\u5206\u5f53\u4f5c\u5b57\u7b26\u4e32\u7684\u521d\u503c\nstring s(str,stridx,strlen); //\u5c06\u5b57\u7b26\u4e32str\u5185\u201c\u59cb\u4e8estridx\u4e14\u957f\u5ea6\u9876\u591astrlen\u201d\u7684\u90e8\u5206\u4f5c\u4e3a\u5b57\u7b26\u4e32\u7684\u521d\u503c\nstring s(cstr); //\u5c06C\u5b57\u7b26\u4e32\u4f5c\u4e3as\u7684\u521d\u503c\nstring s(chars,chars_len); //\u5c06C\u5b57\u7b26\u4e32\u524dchars_len\u4e2a\u5b57\u7b26\u4f5c\u4e3a\u5b57\u7b26\u4e32s\u7684\u521d\u503c\u3002\nstring s(num,c); //\u751f\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5305\u542bnum\u4e2ac\u5b57\u7b26\nstring s(beg,end); //\u4ee5\u533a\u95f4beg;end(\u4e0d\u5305\u542bend)\u5185\u7684\u5b57\u7b26\u4f5c\u4e3a\u5b57\u7b26\u4e32s\u7684\u521d\u503c\ns.~string(); //\u9500\u6bc1\u6240\u6709\u5b57\u7b26\uff0c\u91ca\u653e\u5185\u5b58\n\n\u4f5c\u8005\uff1a\u72ec\u604b\u4e91\u98ce\u661f\u6708\n\u94fe\u63a5\uff1ahttps://leetcode.cn/problems/ti-huan-kong-ge-lcof/solutions/2120489/jian-zhi-offerlian-xi-c-t6-by-zealous-ga-vbek/\n\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u8457\u4f5c\u6743\u5f52\u4f5c\u8005\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u4f5c\u8005\u83b7\u5f97\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff0cC++14\u540e\u7684\u7279\u6027\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'auto s1="seven of"; //\u8fd9\u54e5\u4eec\u662fchar[]\nauto s1="seven of"s;//\u8fd9\u54e5\u4eec\u662f\\std::string\n')),(0,l.kt)("h1",{id:"standard-library-sequence-reordering-algorithms"},(0,l.kt)("a",{parentName:"h1",href:"https://hackingcpp.com/cpp/std/algorithms/reordering.html#nav-roota"},"Standard Library Sequence Reordering Algorithms")),(0,l.kt)("h2",{id:"sort"},"sort"),(0,l.kt)("p",null,"\u4f30\u8ba1\u662f\u9ed8\u8ba4\u4ece\u5c0f\u5230\u5927\u7684\uff0c\u6240\u4ee5\u4ed6\u540e\u9762\u7684\u7b2c\u4e09\u4e2a\u5165\u53c2\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"greater<>{}")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/649138251ddac507ccbab860",alt:"image-20230620132445904"})))}d.isMDXComponent=!0}}]);