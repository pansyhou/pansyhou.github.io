"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[44739],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(t),m=i,d=g["".concat(u,".").concat(m)]||g[m]||c[m]||a;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93083:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return g}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={id:"try-gin-framework",slug:"/try-gin-framework",title:"Gin\u6846\u67b6\u521d\u4f53\u9a8c",date:new Date("2021-09-01T00:00:00.000Z"),authors:"kuizuo",tags:["go","gin"],keywords:["go","gin"]},u=void 0,s={unversionedId:"skill/go/try-gin-framework",id:"skill/go/try-gin-framework",title:"Gin\u6846\u67b6\u521d\u4f53\u9a8c",description:"\u5b89\u88c5 Gin",source:"@site/docs/skill/go/Gin\u6846\u67b6\u521d\u4f53\u9a8c.md",sourceDirName:"skill/go",slug:"/try-gin-framework",permalink:"/en/docs/try-gin-framework",draft:!1,tags:[{label:"go",permalink:"/en/docs/tags/go"},{label:"gin",permalink:"/en/docs/tags/gin"}],version:"current",frontMatter:{id:"try-gin-framework",slug:"/try-gin-framework",title:"Gin\u6846\u67b6\u521d\u4f53\u9a8c",date:"2021-09-01T00:00:00.000Z",authors:"kuizuo",tags:["go","gin"],keywords:["go","gin"]},sidebar:"skill",previous:{title:"Go\u5e76\u53d1",permalink:"/en/docs/go-concurrent"},next:{title:"Git",permalink:"/en/docs/category/git"}},p={},g=[{value:"\u5b89\u88c5 Gin",id:"\u5b89\u88c5-gin",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u70ed\u52a0\u8f7d",id:"\u70ed\u52a0\u8f7d",level:3},{value:"Fresh",id:"fresh",level:3},{value:"\u8fd4\u56de\u6570\u636e\u683c\u5f0f",id:"\u8fd4\u56de\u6570\u636e\u683c\u5f0f",level:3},{value:"JSON",id:"json",level:3},{value:"HTML",id:"html",level:3},{value:"\u914d\u7f6e\u9759\u6001 Web \u76ee\u5f55",id:"\u914d\u7f6e\u9759\u6001-web-\u76ee\u5f55",level:3},{value:"\u83b7\u53d6 Query \u53c2\u6570",id:"\u83b7\u53d6-query-\u53c2\u6570",level:3},{value:"\u83b7\u53d6 Post \u6570\u636e",id:"\u83b7\u53d6-post-\u6570\u636e",level:3},{value:"Post \u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53",id:"post-\u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53",level:3},{value:"\u52a8\u6001\u8def\u7531\u4f20\u503c",id:"\u52a8\u6001\u8def\u7531\u4f20\u503c",level:3},{value:"\u8def\u7531\u5206\u7ec4",id:"\u8def\u7531\u5206\u7ec4",level:3},{value:"\u63a7\u5236\u5668",id:"\u63a7\u5236\u5668",level:3},{value:"\u4e2d\u95f4\u4ef6",id:"\u4e2d\u95f4\u4ef6",level:3},{value:"\u5c40\u90e8\u4e2d\u95f4\u4ef6",id:"\u5c40\u90e8\u4e2d\u95f4\u4ef6",level:4},{value:"\u5168\u5c40\u4e2d\u95f4\u4ef6",id:"\u5168\u5c40\u4e2d\u95f4\u4ef6",level:4},{value:"\u5206\u7ec4\u4e2d\u95f4\u4ef6",id:"\u5206\u7ec4\u4e2d\u95f4\u4ef6",level:4},{value:"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6",id:"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6",level:4},{value:"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528 goroutine \u534f\u7a0b",id:"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528-goroutine-\u534f\u7a0b",level:4},{value:"\u6587\u4ef6\u4e0a\u4f20",id:"\u6587\u4ef6\u4e0a\u4f20",level:3},{value:"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784",id:"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784",level:2},{value:"\u6574\u4f53\u611f\u53d7",id:"\u6574\u4f53\u611f\u53d7",level:2}],c={toc:g},m="wrapper";function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5b89\u88c5-gin"},"\u5b89\u88c5 Gin"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gin-gonic.com/zh-cn/docs/"},"\u6587\u6863 | Gin Web Framework (gin-gonic.com)")),(0,a.kt)("p",null,"\u6253\u5f00\u547d\u4ee4\u884c\u7a97\u53e3\uff0c\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go get -u github.com/gin-gonic/gin\n")),(0,a.kt)("p",null,"\u5927\u6982\u7387\u53ef\u80fd\u5b89\u88c5\u4e0d\u4e0a\uff0c\u4e00\u822c\u8fd9\u91cc\u5c31\u9700\u8981\u914d\u7f6e Go \u4ee3\u7406"),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u521b\u5efa\u6587\u4ef6\u5939 GinTest\uff0c\u8fdb\u5165\u76ee\u5f55\u8f93\u5165\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"go mod init GinTest"),"\u6765\u7ba1\u7406\u9879\u76ee\u7684\u5305"),(0,a.kt)("p",null,"\u521b\u5efa\u6587\u4ef6 main.go \u5185\u5bb9\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'package main\n\nimport "github.com/gin-gonic/gin"\n\nfunc main() {\n    r := gin.Default()\n\n    r.GET("/", func(c *gin.Context) {\n        c.String(200, "\u4f60\u597d,gin")\n    })\n\n    r.Run()\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},'go run "f:\\GO\\GinTest\\main.go"'),"\u5373\u53ef\u8fd0\u884c go \u670d\u52a1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210831045351327.png",alt:"image-20210831045351327"})),(0,a.kt)("p",null,"\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http:127.0.0.1:8080"),"\u4fbf\u53ef\u8f93\u51fa",(0,a.kt)("inlineCode",{parentName:"p"},"\u4f60\u597d,gin")),(0,a.kt)("h3",{id:"\u70ed\u52a0\u8f7d"},"\u70ed\u52a0\u8f7d"),(0,a.kt)("p",null,"\u7531\u4e8e\u6bcf\u6b21\u66f4\u6539\u4ee3\u7801\u540e\u90fd\u9700\u8981\u91cd\u65b0\u542f\u52a8\uff0c\u901a\u8fc7\u70ed\u52a0\u8f7d\u53ef\u4ee5\u7701\u53bb\u6bcf\u6b21\u624b\u52a8\u7f16\u8bd1\u7684\u8fc7\u7a0b"),(0,a.kt)("h3",{id:"fresh"},"Fresh"),(0,a.kt)("p",null,"\u8fd9\u8fb9\u4f7f\u7528\u7684\u662f fresh\uff0c\u8fd8\u6709\u5176\u4ed6\u7684\u70ed\u52a0\u8f7d\u5de5\u5177\uff0c\u4f8b\u5982 Air\uff0cbee\uff0cgin \u7b49\u7b49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go get github.com/pilu/fresh\n")),(0,a.kt)("p",null,"\u63a5\u7740\u8f93\u5165 fresh \u5373\u53ef"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210831061629685.png",alt:"image-20210831061629685"})),(0,a.kt)("p",null,"\u540c\u65f6\u8fd8\u4f1a\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u521b\u5efa tmp \u6587\u4ef6\u5939\uff0c\u6709\u4e2a\u7f16\u8bd1\u597d\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u6570\u636e\u683c\u5f0f"},"\u8fd4\u56de\u6570\u636e\u683c\u5f0f"),(0,a.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6240\u6f14\u793a\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"c.String()")," \u8fd4\u56de\u7684\u662f\u6587\u672c\u683c\u5f0f\uff0c\u4f46\u6709\u65f6\u5019\u8981\u8fd4\u56de\u7684\u53ef\u80fd\u662f\u4e00\u4e2a JSON \u7c7b\u578b\uff0c\u6216\u8005\u662f\u4e00\u4e2a HTML \u6216 XML \u683c\u5f0f\u3002\u8fd9\u65f6\u5019\u7684\u8bdd\u5c31\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u65b9\u6cd5\u4e86"),(0,a.kt)("h3",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r.GET("/json", func(c *gin.Context) {\n    c.JSON(200, map[string]interface{}{\n        "code": 200,\n        "msg":  "\u6210\u529f",\n    })\n})\n')),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/json%E6%98%BE%E7%A4%BA%E5%A6%82%E4%B8%8B%E6%95%B0%E6%8D%AE"},"http://127.0.0.1:8080/json\u663e\u793a\u5982\u4e0b\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "code": 200, "msg": "\u6210\u529f" }\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8: msg \u5c5e\u6027\u540e\uff0c\u5fc5\u987b\u8981\u6709,\u53f7")),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),"\u53ef\u4ee5\u7b80\u5199\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"gin.H")),(0,a.kt)("p",null,"\u4e5f\u53ef\u901a\u8fc7\u5b9a\u4e49\u7ed3\u6784\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'type Article struct {\n    Title   string `json:"title"`\n    Desc    string `json:"desc"`\n    Content string `json:"content"`\n}\n\nr.GET("/json3", func(c *gin.Context) {\n    a := &Article{\n        Title:   "\u8fd9\u662f\u6807\u9898",\n        Desc:    "\u63cf\u8ff0",\n        Content: "\u6d4b\u8bd5\u5185\u5bb9",\n    }\n\n    c.JSON(200, a)\n})\n')),(0,a.kt)("p",null,"\u5f97\u5230\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "title": "\u8fd9\u662f\u6807\u9898", "desc": "\u63cf\u8ff0", "content": "\u6d4b\u8bd5\u5185\u5bb9" }\n')),(0,a.kt)("p",null,"JSONP \u4e0e XML \u6570\u636e\u5c31\u4e0d\u505a\u4ecb\u7ecd\uff0c\u987a\u4fbf\u63d0\u4e00\u4e0b\uff0c\u8fd9\u5e74\u5934\u8fd8\u6709\u4eba\u7528 JSONP \u6765\u8de8\u57df\u5417\uff1f"),(0,a.kt)("h3",{id:"html"},"HTML"),(0,a.kt)("p",null,"\u8981\u53d1\u9001 HTML \u7684\u8bdd\uff0c\u9996\u5148\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u5939",(0,a.kt)("inlineCode",{parentName:"p"},"templates"),"\uff0c\u518d\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"test.html"),"\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"<body>"),"\u5185\u5bb9\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/templates/test.html"',title:'"/templates/test.html"'},"<body>\n  <h2>{{.title}}</h2>\n</body>\n")),(0,a.kt)("p",null,"\u63a5\u7740\u5728 main.go \u4e2d\u914d\u7f6e Html \u6a21\u677f\u6587\u4ef6\uff0c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r := gin.Default()\nr.LoadHTMLFiles("templates/*")\n')),(0,a.kt)("p",null,"\u91cd\u542f\u4e0b\u670d\u52a1\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u8def\u7531\u4e2d\u8fd4\u56de HTML \u6587\u4ef6\uff0c\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r.GET("/html", func(c *gin.Context) {\n\n    c.HTML(200, "test.html", gin.H{\n        "title": "\u4e00\u4e2a\u6807\u9898\u800c\u5df2",\n    })\n})\n')),(0,a.kt)("p",null,"\u7ed3\u679c\u5c31\u4e0d\u653e\u56fe\u4e86\uff0c\u5c31\u662f\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e00\u4e2a\u6807\u9898\u800c\u5df2"),"\u586b\u5165\u81f3 h2 \u6807\u7b7e\u5904"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u9759\u6001-web-\u76ee\u5f55"},"\u914d\u7f6e\u9759\u6001 Web \u76ee\u5f55"),(0,a.kt)("p",null,"\u548c\u914d\u7f6e html \u6a21\u677f\u4e00\u6837\uff0c\u5148\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u4e00\u4e2a\u9759\u6001 web \u76ee\u5f55 static\uff0c\u7136\u540e\u6dfb\u52a0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r.Static("/static", "./static")\n')),(0,a.kt)("p",null,"\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/static"},"http://127.0.0.1:8080/static")," \u5c31\u80fd\u8bbf\u95ee\u9759\u6001\u6587\u4ef6\u5939\u4e0b\u7684\u8d44\u6e90"),(0,a.kt)("h3",{id:"\u83b7\u53d6-query-\u53c2\u6570"},"\u83b7\u53d6 Query \u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r.GET("/query", func(c *gin.Context) {\n    username := c.Query("username")\n    page := c.DefaultQuery("page", "1")\n\n    c.String(200, username+page)\n})\n')),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u8bf7\u6c42",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/query?username=kuizuo"},"http://127.0.0.1:8080/query?username=kuizuo")," \u4fbf\u53ef\u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"kuizuo1")),(0,a.kt)("h3",{id:"\u83b7\u53d6-post-\u6570\u636e"},"\u83b7\u53d6 Post \u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r.POST("/add", func(c *gin.Context) {\n    username := c.PostForm("username")\n    password := c.PostForm("password")\n\n    c.String(200, username+password)\n})\n')),(0,a.kt)("p",null,"\u4f7f\u7528 api \u8bf7\u6c42\u5de5\u5177\u53d1\u9001 post \u6570\u636e\u4fbf\u53ef\u8f93\u51fa\u76f8\u5e94\u6570\u636e"),(0,a.kt)("h3",{id:"post-\u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53"},"Post \u4f20\u503c\u7ed1\u5b9a\u5230\u7ed3\u6784\u4f53"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'type UserInfo struct {\n    Username string `json:"username" form:"username"`\n    Password string `json:"password" form:"password"`\n}\n\nr.POST("/add1", func(c *gin.Context) {\n    user := &UserInfo{}\n\n    if err := c.ShouldBind(&user); err == nil {\n        c.JSON(200, user)\n    } else {\n        c.JSON(400,gin.H{\n            "err":err.Error()\n        })\n    }\n})\n')),(0,a.kt)("p",null,"\u540c\u6837\u4f7f\u7528 api \u8bf7\u6c42\u5de5\u5177\uff0c\u53d1\u9001 post \u6570\u636e\uff0c\u5c31\u53ef\u76f4\u63a5\u901a\u8fc7 user \u83b7\u53d6\u4fe1\u606f"),(0,a.kt)("h3",{id:"\u52a8\u6001\u8def\u7531\u4f20\u503c"},"\u52a8\u6001\u8def\u7531\u4f20\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r.GET("/list/:id", func(c *gin.Context) {\n    id := c.Param("id")\n    c.String(200, id)\n})\n')),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u8bf7\u6c42",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/list/123"},"http://127.0.0.1:8080/list/123")," id \u4fbf\u53ef\u8d4b\u503c\u4e3a 123"),(0,a.kt)("h3",{id:"\u8def\u7531\u5206\u7ec4"},"\u8def\u7531\u5206\u7ec4"),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u5939",(0,a.kt)("inlineCode",{parentName:"p"},"routers"),"\uff0c\u91cc\u9762\u521b\u5efa\u8def\u7531\u6587\u4ef6\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"apiRouters.go"),"\uff0c\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/routers/apiRouters.go"',title:'"/routers/apiRouters.go"'},'package routers\n\nimport "github.com/gin-gonic/gin"\n\nfunc ApiRoutersInit(r *gin.Engine) {\n    apiRouters := r.Group("/api")\n    {\n        apiRouters.GET("/json", func(c *gin.Context) {\n            c.JSON(200, gin.H{\n                "code": 200,\n                "msg":  "\u6210\u529f",\n            })\n        })\n    }\n}\n')),(0,a.kt)("p",null,"\u63a5\u7740\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"main.go"),"\u6587\u4ef6\u4e2d\uff0c\u5bfc\u5165 routers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'import (\n    "GinTest/routers"\n    "github.com/gin-gonic/gin"\n)\n')),(0,a.kt)("p",null,"\u540c\u65f6\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},"r := gin.Default()\n\nrouters.ApiRoutersInit(r)\n")),(0,a.kt)("p",null,"\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/api/json%EF%BC%8C%E6%98%BE%E7%A4%BA%60%7B%22code%22:200,%22msg%22:%22%E6%88%90%E5%8A%9F%22%7D%60"},'http://127.0.0.1:8080/api/json\uff0c\u663e\u793a`{"code":200,"msg":"\u6210\u529f"}`')),(0,a.kt)("h3",{id:"\u63a7\u5236\u5668"},"\u63a7\u5236\u5668"),(0,a.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa\u6587\u4ef6\u5939",(0,a.kt)("inlineCode",{parentName:"p"},"controllers"),"\uff0c\u91cc\u9762\u521b\u5efa\u63a7\u5236\u5668\u6587\u4ef6\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"userController.go"),"\uff0c\u5185\u5bb9\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/controllers/user/userController.go"',title:'"/controllers/user/userController.go"'},'package user\n\nimport "github.com/gin-gonic/gin"\n\ntype UserController\n\nfunc UserList(c *gin.Context) {\n    c.String(200, "\u7528\u6237\u5217\u8868")\n}\n\nfunc UserAdd(c *gin.Context) {\n    c.String(200, "\u6dfb\u52a0\u7528\u6237")\n}\n\nfunc UserEdit(c *gin.Context) {\n    c.String(200, "\u7f16\u8f91\u7528\u6237")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/routers/userRouters.go"',title:'"/routers/userRouters.go"'},'package routers\n\nimport (\n    "GinTest/controllers/user"\n    "github.com/gin-gonic/gin"\n)\n\nfunc UserRoutersInit(r *gin.Engine) {\n    userRouters := r.Group("/user")\n    {\n        userRouters.GET("/list", user.UserList)\n        userRouters.GET("/add", user.UserAdd)\n        userRouters.GET("/edit", user.UserEdit)\n    }\n}\n')),(0,a.kt)("p",null,"\u5206\u522b\u8bbf\u95ee\u5bf9\u5e94\u4e09\u4e2a\u8def\u7531\uff0c\u90fd\u53ef\u5f97\u5230\u5bf9\u5e94\u7ed3\u679c"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236\u5668\u7ed3\u6784\u4f53\u4f18\u5316\u6210\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/controllers/user/userController.go"',title:'"/controllers/user/userController.go"'},'package user\n\nimport "github.com/gin-gonic/gin"\n\ntype UserController struct {\n}\n\nfunc (con UserController) List(c *gin.Context) {\n    c.String(200, "\u7528\u6237\u5217\u8868")\n}\n\nfunc (con UserController) Add(c *gin.Context) {\n    c.String(200, "\u6dfb\u52a0\u7528\u6237")\n}\n\nfunc (con UserController) Edit(c *gin.Context) {\n    c.String(200, "\u7f16\u8f91\u7528\u6237")\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/routers/userRouters.go"',title:'"/routers/userRouters.go"'},'package routers\n\nimport (\n    "GinTest/controllers/user"\n\n    "github.com/gin-gonic/gin"\n)\n\nfunc UserRoutersInit(r *gin.Engine) {\n    userRouters := r.Group("/user")\n    {\n        userRouters.GET("/list", user.UserController{}.List)\n        userRouters.GET("/add", user.UserController{}.Add)\n        userRouters.GET("/edit", user.UserController{}.Edit)\n    }\n}\n')),(0,a.kt)("h3",{id:"\u4e2d\u95f4\u4ef6"},"\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u4e2d\u95f4\u4ef6\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u8def\u7531\u6267\u884c\u7684\u65f6\u5019\u53ef\u4ee5\u5728\u5bf9\u5e94\u7684\u5730\u65b9\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u6267\u884c\uff0c\u5982"),(0,a.kt)("h4",{id:"\u5c40\u90e8\u4e2d\u95f4\u4ef6"},"\u5c40\u90e8\u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'func initMiddleware(c *gin.Context) {\n    fmt.Println("1-\u4e2d\u95f4\u4ef6")\n\n    c.Next()\n\n    fmt.Println("2-\u4e2d\u95f4\u4ef6")\n}\n\nr.GET("/", initMiddleware, func(c *gin.Context) {\n    c.String(200, "\u4f60\u597d,gin")\n})\n')),(0,a.kt)("p",null,"\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080%E4%BE%BF%E4%BC%9A%E8%BE%93%E5%87%BA"},"http://127.0.0.1:8080\u4fbf\u4f1a\u8f93\u51fa")," ",(0,a.kt)("inlineCode",{parentName:"p"},"1-\u4e2d\u95f4\u4ef6")," ",(0,a.kt)("inlineCode",{parentName:"p"},"2-\u4e2d\u95f4\u4ef6")),(0,a.kt)("h4",{id:"\u5168\u5c40\u4e2d\u95f4\u4ef6"},"\u5168\u5c40\u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},"r.Use(initMiddleware)\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u9700\u8981\u7ed9\u6bcf\u4e2a\u8def\u7531\u6dfb\u52a0\u4e2d\u95f4\u4ef6\u914d\u7f6e\uff0c\u6240\u6709\u8def\u7531\u8bf7\u6c42\u540e\u90fd\u5c06\u4f1a\u8f93\u51fa\u3002"),(0,a.kt)("h4",{id:"\u5206\u7ec4\u4e2d\u95f4\u4ef6"},"\u5206\u7ec4\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"\u4e0e\u5168\u5c40\u4e2d\u95f4\u4ef6\u4f7f\u7528\u4e00\u6837\uff0c\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/routers/apiRouters.go"',title:'"/routers/apiRouters.go"'},'apiRouters := r.Group("/api",initMiddleware)\n\n// \u6216\napiRouters := r.Group("/api")\napiRouters.Use(initMiddleware)\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u521b\u5efa\u4e2d\u95f4\u4ef6\u76ee\u5f55",(0,a.kt)("inlineCode",{parentName:"p"},"middlewares"),"\uff0c\u521b\u5efa\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"init.go"),"\uff0c\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/middleware/init.go"',title:'"/middleware/init.go"'},'package middlewares\n\nimport (\n    "fmt"\n    "github.com/gin-gonic/gin"\n)\n\nfunc InitMiddleware(c *gin.Context) {\n    fmt.Println("1-\u4e2d\u95f4\u4ef6")\n\n    c.Next()\n\n    fmt.Println("2-\u4e2d\u95f4\u4ef6")\n}\n')),(0,a.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\uff08\u524d\u63d0\u9700\u8981\u5bfc\u5165\u4e2d\u95f4\u4ef6\u7684\u5305\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/routers/apiRouters.go"',title:'"/routers/apiRouters.go"'},"apiRouters.Use(middlewares.InitMiddleware)\n")),(0,a.kt)("h4",{id:"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6"},"\u53d6\u6d88\u9ed8\u8ba4\u4e2d\u95f4\u4ef6"),(0,a.kt)("p",null,"gin.Default()\u9ed8\u8ba4\u4f7f\u7528\u4e86 Logger \u548c Recovery \u4e2d\u95f4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// Default returns an Engine instance with the Logger and Recovery middleware already attached.\nfunc Default() *Engine {\n    debugPrintWARNINGDefault()\n    engine := New()\n    engine.Use(Logger(), Recovery())\n    return engine\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u4e0a\u9762\u4e24\u4e2a\u9ed8\u8ba4\u7684\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 gin.New()\u65b0\u5efa\u4e00\u4e2a\u6ca1\u6709\u4efb\u4f55\u4e2d\u95f4\u4ef6\u7684\u8def\u7531"),(0,a.kt)("h4",{id:"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528-goroutine-\u534f\u7a0b"},"\u4e2d\u95f4\u4ef6\u4e2d\u4f7f\u7528 goroutine \u534f\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="/middleware/init.go"',title:'"/middleware/init.go"'},'func InitMiddleware(c *gin.Context) {\n    fmt.Println("1-\u4e2d\u95f4\u4ef6")\n\n    cCp := c.Copy()\n    go func() {\n        time.Sleep(2 * time.Second)\n        fmt.Println("path: " + cCp.Request.URL.Path)\n    }()\n\n    c.Next()\n\n    fmt.Println("2-\u4e2d\u95f4\u4ef6")\n}\n')),(0,a.kt)("p",null,"\u8bf7\u6c42\u5b8c\u6210\u4e24\u79d2\u540e\uff0c\u5c06\u4f1a\u6253\u5370",(0,a.kt)("inlineCode",{parentName:"p"},"path /")),(0,a.kt)("h3",{id:"\u6587\u4ef6\u4e0a\u4f20"},"\u6587\u4ef6\u4e0a\u4f20"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="main.go"',title:'"main.go"'},'r.MaxMultipartMemory = 8 << 20 // 8 MiB\nr.POST("/upload", func(c *gin.Context) {\n    // \u5355\u6587\u4ef6\n    file, _ := c.FormFile("file")\n    log.Println(file.Filename)\n\n    // \u4e0a\u4f20\u6587\u4ef6\u81f3\u6307\u5b9a\u76ee\u5f55\n    dst := path.Join("./static/upload", file.Filename)\n    c.SaveUploadedFile(file, dst)\n\n    c.String(200, fmt.Sprintf("\'%s\' uploaded!", file.Filename))\n})\n')),(0,a.kt)("p",null,"\u4f7f\u7528 curl\uff0c\u5373\u53ef\u4e0a\u4f20\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST http://localhost:8080/upload \\\n  -F "file=@/Users/appleboy/test.zip" \\\n  -H "Content-Type: multipart/form-data"\n')),(0,a.kt)("h2",{id:"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784"},"\u6700\u7ec8\u9879\u76ee\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210901033059576.png",alt:"image-20210901033059576"})),(0,a.kt)("h2",{id:"\u6574\u4f53\u611f\u53d7"},"\u6574\u4f53\u611f\u53d7"),(0,a.kt)("p",null,"\u8bf4\u5b9e\u8bdd\uff0c\u6211\u5df2\u7ecf\u5feb\u4e00\u5e74\u6ca1\u771f\u6b63\u63a5\u89e6\u4e00\u95e8\u65b0\u7684\u8bed\u8a00\u4e86\uff0c\u5199 Js \u548c Ts \u4ee3\u7801\u4e5f\u5199\u4e86\u5feb\u4e00\u5e74\u4e86\uff0c\u521d\u6b21\u4f53\u9a8c Gin \u6846\u67b6\u6574\u4f53\u611f\u53d7\u8fd8\u7b97\u4e0d\u9519\uff0c\u5927\u90e8\u5206\u7684\u540e\u7aef\u6846\u67b6\u8def\u7531\u57fa\u672c\u90fd\u662f\u8fd9\u4e48\u5199\u7684\uff0c\u4f53\u9a8c\u8fc7 Express\uff0cFlask \u8def\u7531\u5199\u6cd5\u5927\u81f4\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u4ec5\u4ec5\u53ea\u662f\u521d\u6b65\u4f53\u9a8c\uff0c\u540e\u7eed\u4f30\u8ba1\u4f1a\u8003\u8651\u5c1d\u8bd5\u4e0a\u624b gin-vue-admin \u9879\u76ee"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.gin-vue-admin.com/"},"\u81ea\u52a8\u5316\u5168\u6808\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf | Gin-Vue-Admin")))}d.isMDXComponent=!0}}]);