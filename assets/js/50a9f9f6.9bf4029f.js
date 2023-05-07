"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6716],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2715:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(3117),i=n(102),o=(n(7294),n(4137)),a=["components"],l={id:"two_degree_arm",slug:"/ros",title:"\u4ece\u96f6\u5230\u4e24\u6746\u673a\u68b0\u81c2"},p=void 0,c={unversionedId:"ros/two_degree_arm",id:"ros/two_degree_arm",title:"\u4ece\u96f6\u5230\u4e24\u6746\u673a\u68b0\u81c2",description:"\u73af\u5883\u914d\u7f6e",source:"@site/docs/ros/\u4ece\u96f6\u5230\u4e24\u6746\u673a\u68b0\u81c2.md",sourceDirName:"ros",slug:"/ros",permalink:"/docs/ros",draft:!1,tags:[],version:"current",frontMatter:{id:"two_degree_arm",slug:"/ros",title:"\u4ece\u96f6\u5230\u4e24\u6746\u673a\u68b0\u81c2"},sidebar:"ros",next:{title:"WSL2\u4e0b\u7684ROS\u5b66\u4e60\u8bb0\u5f55",permalink:"/docs/wsl2_ros"}},s={},u=[{value:"\u73af\u5883\u914d\u7f6e",id:"\u73af\u5883\u914d\u7f6e",level:2},{value:"Cmake infinite loop",id:"cmake-infinite-loop",level:3},{value:"\u6700\u540e",id:"\u6700\u540e",level:3},{value:"SW \u5bfc\u51faurdf\u63cf\u8ff0\u6587\u4ef6",id:"sw-\u5bfc\u51faurdf\u63cf\u8ff0\u6587\u4ef6",level:2},{value:"Moveit!",id:"moveit",level:2},{value:"Setup Assistant \u751f\u6210config",id:"setup-assistant-\u751f\u6210config",level:3},{value:"Self-collision\u81ea\u78b0\u649e\u68c0\u6d4b",id:"self-collision\u81ea\u78b0\u649e\u68c0\u6d4b",level:3},{value:"Planning Groups",id:"planning-groups",level:3},{value:"Define Robot Poses\u5b9a\u4e49\u4f4d\u7f6e",id:"define-robot-poses\u5b9a\u4e49\u4f4d\u7f6e",level:3},{value:"Controllers\u63a7\u5236\u5668",id:"controllers\u63a7\u5236\u5668",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u73af\u5883\u914d\u7f6e"},"\u73af\u5883\u914d\u7f6e"),(0,o.kt)("p",null,"\u8fd9\u90e8\u5206\u4e0d\u591a\u8bf4\uff0c\u8fd9\u91cc\u63a8\u8350\u9c7c\u9999ros\u7684\u4e00\u952e\u5b89\u88c5\u3002"),(0,o.kt)("p",null,"\u76ee\u524d\u6211\u7528\u7684\u662fub20.04\uff0c\u6015\u51fa\u4e8b\u5c31\u7528\u7684ros1 neotic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget http://fishros.com/install -O fishros && . fishros\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u597d\u684c\u9762\u7248\u7684ros\u540e\uff0c\u8bb0\u5f97\u5b89\u88c5rosdep"),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u6211\u4e0d\u6e05\u695a\u9c7c\u9999\u7684rosdep\u600e\u4e48init\u7684\uff0c\u4f46\u662f\u811a\u672c\u770b\u597d\u50cf\u6709\uff0c\u4f46\u662f\u6211\u7684OpenCV\u6ca1\u6709\u7ed9\u6211\u5b89\u88c5\uff0c\u4f30\u8ba1\u662f\u5916\u7f6e\u7684")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u73b0\u6709\u7684gcc/g++\u5de5\u5177\u94fe\u88c5\u4e86arm\u7684\u4ea4\u53c9\uff0c\u6781\u5927\u53ef\u80fd\u4e0e\u6b63\u5e38linux\u7684\u51b2\u7a81\u4e86\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u5220\u6389arm\u7684\u5de5\u5177\u94fe\u540e\u91cd\u65b0\u5220\u9664catkin_ws\uff0c\u91cd\u65b0\u751f\u6210cmakelist"),(0,o.kt)("p",{parentName:"admonition"},"\u6216\u8005\u5b89\u88c5docker\u7248\u672c\u9694\u79bb\u4e0d\u540c\u7684\u73af\u5883\uff08\u4e0d\u77e5\u9053\u5bb9\u5668\u7684\u6027\u80fd\u600e\u4e48\u6837\uff0c\u6211stm32\u5728\u5199cmakelist\u65f6\u6307\u5b9a\u4e86\u5de5\u5177\u94fe\u4f4d\u7f6e\u6765\u89c4\u907f\u8fd9\u4e2a\u95ee\u9898\uff09")),(0,o.kt)("h3",{id:"cmake-infinite-loop"},"Cmake infinite loop"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5\u73af\u5883\u7684\u65f6\u5019\uff0c\u9047\u5230\u4e86cmake infinite loop\u7684\u6050\u6016\u95ee\u9898\uff0c\u7248\u672c\u597d\u50cf\u662f3.10\uff0c\u4e0d\u77e5\u9053\u662f\u4e0d\u662fespidf\u7ed9\u6211\u88c5\u7684\u8fd8\u662f\u8c01\uff0c\u603b\u4e4b\u91cd\u88c5\u5c31\u597d\u4e86\u3002"),(0,o.kt)("h3",{id:"\u6700\u540e"},"\u6700\u540e"),(0,o.kt)("p",null,"\u5176\u5b9e\u770b\u5b98\u7f51\u7684\u6765\u4e00\u6b65\u6b65\u8d70\u53ef\u80fd\u4f1a\u597d\u4e00\u70b9\uff0c\u8fd9\u91cc\u6211\u662f\u5077\u61d2\u7684\u634f\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://wiki.ros.org/ROS/Tutorials"},"http://wiki.ros.org/ROS/Tutorials")),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u80fd\u6b63\u5e38\u5728catkin_ws\u4e0bcatkin_make\u5c31\u5e94\u8be5\u5dee\u4e0d\u591a\u4e86"),(0,o.kt)("h2",{id:"sw-\u5bfc\u51faurdf\u63cf\u8ff0\u6587\u4ef6"},"SW \u5bfc\u51faurdf\u63cf\u8ff0\u6587\u4ef6"),(0,o.kt)("p",null,"\u8fd9\u91cc\u53c2\u8003\u53e4\u6708\u5c45\u7684P3"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1g44y1K7U6?p=3&vd_source=1dec09b0beea25da1b1f70b68fbcf6d7"},"https://www.bilibili.com/video/BV1g44y1K7U6?p=3&vd_source=1dec09b0beea25da1b1f70b68fbcf6d7")),(0,o.kt)("p",null,"\u5927\u6982\u6d41\u7a0b\u662f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\uff08\u753b\u597d\u673a\u68b0\u81c2\uff09"),(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u8f7dsw2urdf\u7684\u63d2\u4ef6"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u9009\u597d\u51e0\u4e2a\u53c2\u8003\u8f74")),(0,o.kt)("li",{parentName:"ol"},"\u5728\u63d2\u4ef6\u91cc\u9009\u597d\u6a21\u578b\uff0c\u8ba9\u63d2\u4ef6\u4f9d\u9760\u4f60\u7684\u53c2\u8003\u8f74\u548c\u6a21\u578b\u6587\u4ef6\u751f\u6210",(0,o.kt)("strong",{parentName:"li"},"joint\u7684\u5750\u6807\u8f74")),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u751f\u6210\u597d\u4e86\uff0c\u9009\u597d\u5173\u8282\u90fd\u4e3acontinuous\u7684\uff0c\u5bfc\u51fa\u4e4b\u540e\u90fd\u786e\u5b9e\u4e3acontinuous\u7684\uff0c\u5c31\u5dee\u4e0d\u591a\u5f97\u4e86")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u751f\u6210\u7684\u5173\u8282\u662fcontinuous\u7684\uff0c\u4f46\u662f\u751f\u6210\u51fa\u6765\u7684\u662ffixed\u7684\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u68c0\u67e5"),"\u90a3\u4e2a\u5173\u8282\u7684\u5750\u6807\u7cfb\u662f\u5426\u6b63\u5e38\uff0c\u5426\u5219\u81ea\u5df1\u5efa\u4e00\u4e2a\uff0c\u8ba9\u63d2\u4ef6\u4e0d\u8981\u81ea\u5df1\u751f\u6210\uff08\u5361\u4e86\u6211\u5f88\u4e45\uff0c\u4f46\u662f\u6ca1\u6709\u7528\uff09")),(0,o.kt)("h2",{id:"moveit"},"Moveit!"),(0,o.kt)("p",null,"\u4e07\u4f17\u671f\u5f85\u7684\u5730\u65b9\u6765\u529b\uff0cmoveit\u53ef\u80fd\u662f\u6bd4\u8f83\u96be\u7684\u5730\u65b9\u4e86\uff0c\u8981\u5b9e\u73b0\u7684\u4e1c\u897f\u86ee\u591a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cbf7e0d2dde57776380f7",alt:"image-20230429145557450"})),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\uff1aMoveit\uff0c\u7528Setup Assistant \u751f\u6210config"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u9a71\u52a8"),"\uff1a\u6dfb\u52a0\u673a\u5668\u4eba\u63a7\u5236\u63d2\u4ef6\uff08controller\uff09\uff0c\u6211\u4eec\u540e\u7eed\u7684\u8def\u5f84\u89c4\u5212\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u5916\u7f6e\u7684\u6211\u4eec\u81ea\u5df1\u5199\u7684controller\u5b9e\u73b0\u9065\u63a7\u5668/\u952e\u9f20\u63a7\u5236"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u63a7\u5236"),"\uff1aMoveit\u63a7\u5236\u4eff\u771f\uff08\u540e\u7eed\u5c06ros control \u91cc\u7684read write\u5b9e\u73b0\uff0c\u5c31\u80fd\u4e0b\u53d1\u771f\u673a\uff09")),(0,o.kt)("h3",{id:""}),(0,o.kt)("h3",{id:"setup-assistant-\u751f\u6210config"},"Setup Assistant \u751f\u6210config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"roscore\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rosrun moveit_setup_assistant moveit_setup_assistant\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cbf600d2dde5777636827",alt:"image-20230429145027931"})),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u5df2\u7ecf\u542f\u52a8\u4e86Assistant\u4e86\u3002"),(0,o.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u5c31\u9009\u62e9Create\u4e00\u4e2a\u65b0\u7684\u5427\uff0c\u5982\u679c\u6709\u8c03\u6574\u7684\u8bdd\u518d\u9009edit existing"),(0,o.kt)("h3",{id:"self-collision\u81ea\u78b0\u649e\u68c0\u6d4b"},"Self-collision\u81ea\u78b0\u649e\u68c0\u6d4b"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cc0a80d2dde577764d4a0",alt:"image-20230429150055664"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Collision Matrix"),"\u5373\u53ef")),(0,o.kt)("h3",{id:"planning-groups"},"Planning Groups"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cc1f80d2dde5777663ede",alt:"image-20230429150631961"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Planning Groups "),"\u8fdb\u5165\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"add group"),"\u540e\uff0c\u65b0\u5efa\u89c4\u5212\u7ec4"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"group name"),"\u8981\u8bb0\u5f97\uff0c\u6211\u8fd9\u8fb9\u586b\u7684\u662fmanipulator\uff0c\u4ee5\u540e\u5199\u4ee3\u7801\u7684\u65f6\u5019\u53ef\u80fd\u4f1a\u7528\u5230"),(0,o.kt)("li",{parentName:"ul"},"\u6c42\u89e3\u5668Kinematic\u5148\u7528\u7740",(0,o.kt)("inlineCode",{parentName:"li"},"kdl"),"\u5427"),(0,o.kt)("li",{parentName:"ul"},"OMPL Planning\u7b97\u6cd5\u5148\u9009\u62e9",(0,o.kt)("inlineCode",{parentName:"li"},"RRT"),"\uff0c\u6709\u5174\u8da3\u7684\u53ef\u4ee5\u53bb\u4e86\u89e3\u5176\u4ed6\u7684"))),(0,o.kt)("p",null,"\u4e4b\u540e\u6700\u4e0b\u9762\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Kin.Chain")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cc2d20d2dde5777670444",alt:"image-20230429151009982"})),(0,o.kt)("p",null,"\u5728\u6700\u4e0b\u9762\u7684\u5730\u65b9\u9009\u62e9\u597dBase Link \u548c Tip Link\uff08\u672b\u5c3e\u7aef\uff09"),(0,o.kt)("h3",{id:"define-robot-poses\u5b9a\u4e49\u4f4d\u7f6e"},"Define Robot Poses\u5b9a\u4e49\u4f4d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cc3810d2dde577767938a",alt:"image-20230429151304939"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"(\u968f\u4fbf\u9009\u4e86\u4e2a\u5730\u65b9\u4f5c\u4e3ahome\u4e86")),(0,o.kt)("h3",{id:"controllers\u63a7\u5236\u5668"},"Controllers\u63a7\u5236\u5668"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u6211\u61d2\u5f97\u53bb\u914dros control\u90e8\u5206\u4e86\uff0c\u4f46\u662f\u53e4\u6708\u5c45\u63a8\u8350\u81ea\u5df1\u624b\u52a8\u52a0\u6587\u4ef6\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u6211\u5148\u901d\u901d\uff0c\u4e0d\u884c\u518d\u91cd\u65b0edit")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cc42e0d2dde5777681865",alt:"image-20230429151558097"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6dfb\u52a0\u4e4b\u540e\uff0c\u9009\u62e9",(0,o.kt)("inlineCode",{parentName:"p"},"edit selected"),"\u9009\u62e9\u597d\u7c7b\u578b"),(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u6211\u4eec\u7684\u7535\u673a\u662f3508+\u7f16\u7801\u5668\u548c\u8235\u673a\u7684\u7ec4\u5408\uff0c\u90fd\u662f\u5e26\u7f16\u7801\u5668\u7684\uff0c\u6240\u4ee5\u9009\u62e9position-trajectory"),(0,o.kt)("p",{parentName:"blockquote"},"\u53ef\u80fd\u4e4b\u540e\u4f1a\u6362\u6210\u5176\u4ed6\u7684\uff1f")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/644cc4e30d2dde577768a9a0",alt:"image-20230429151859302"})))}d.isMDXComponent=!0}}]);