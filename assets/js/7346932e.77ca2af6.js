"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[30422],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,s=function(t,e){if(null==t)return{};var n,r,s={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,s=t.mdxType,o=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(n),m=s,d=c["".concat(i,".").concat(m)]||c[m]||g[m]||o;return n?r.createElement(d,a(a({ref:e},u),{},{components:n})):r.createElement(d,a({ref:e},u))}));function d(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[c]="string"==typeof t?t:s,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40860:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"go-send-http-request",slug:"/go-send-http-request",title:"Go\u53d1\u9001http\u8bf7\u6c42",date:new Date("2022-05-22T00:00:00.000Z"),authors:"kuizuo",tags:["go","http"],keywords:["go","http"]},i=void 0,p={unversionedId:"skill/go/go-send-http-request",id:"skill/go/go-send-http-request",title:"Go\u53d1\u9001http\u8bf7\u6c42",description:"Get \u8bf7\u6c42",source:"@site/docs/skill/go/Go\u53d1\u9001http\u8bf7\u6c42.md",sourceDirName:"skill/go",slug:"/go-send-http-request",permalink:"/docs/go-send-http-request",draft:!1,tags:[{label:"go",permalink:"/docs/tags/go"},{label:"http",permalink:"/docs/tags/http"}],version:"current",frontMatter:{id:"go-send-http-request",slug:"/go-send-http-request",title:"Go\u53d1\u9001http\u8bf7\u6c42",date:"2022-05-22T00:00:00.000Z",authors:"kuizuo",tags:["go","http"],keywords:["go","http"]},sidebar:"skill",previous:{title:"Go\u8bed\u8a00\u4e4bjson\u4f7f\u7528",permalink:"/docs/go-json-usage"},next:{title:"Go\u8c03\u7528js\u4ee3\u7801",permalink:"/docs/go-call-js"}},u={},c=[{value:"Get \u8bf7\u6c42",id:"get-\u8bf7\u6c42",level:2},{value:"Post \u8bf7\u6c42",id:"post-\u8bf7\u6c42",level:2},{value:"\u53d1\u9001 querystring",id:"\u53d1\u9001-querystring",level:3},{value:"\u53d1\u9001 json",id:"\u53d1\u9001-json",level:3},{value:"HTTP \u8bf7\u6c42\u5e93",id:"http-\u8bf7\u6c42\u5e93",level:2},{value:"grequests",id:"grequests",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],g={toc:c},m="wrapper";function d(t){var e=t.components,n=(0,s.Z)(t,a);return(0,o.kt)(m,(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"get-\u8bf7\u6c42"},"Get \u8bf7\u6c42"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "fmt"\n  "io/ioutil"\n  "net/http"\n)\n\nfunc main() {\n  resp, err := http.Get("http://127.0.0.1:5000/api/test")\n\n  if err != nil {\n    panic(err)\n\n  }\n  defer resp.Body.Close()\n\n  s, _ := ioutil.ReadAll(resp.Body)\n\n  fmt.Println(resp.StatusCode)\n  fmt.Println(string(s))\n}\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u8fd8\u9700\u8981\u5bf9",(0,o.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u4f53"),"\u8fdb\u884c\u8bfb\u53d6\uff0c\u5982\u679c\u6bcf\u6761\u8bf7\u6c42\u90fd\u9700\u8981\u5982\u6b64\u64cd\u4f5c\u7684\u8bdd\uff0c\u4ee3\u7801\u903b\u8f91\u5c06\u4f1a\u5341\u5206\u81c3\u80bf\uff0c\u4e00\u822c\u90fd\u9700\u8981\u81ea\u884c\u5c01\u88c5\u3002\u800c\u4e8b\u5b9e\u4e0a\u5927\u90e8\u5206\u7684\u7f16\u7a0b\u8bed\u8a00\u7684 http \u8bf7\u6c42\u5e93(\u5305)\u90fd\u4e0d\u4f1a\u8fc7\u5ea6\u5c01\u88c5\uff0c\u4e00\u822c\u90fd\u9700\u8981\u7528\u6237\u81ea\u884c\u5c01\u88c5\u6216\u4f7f\u7528\u7b2c\u4e09\u65b9\u8bf7\u6c42\u5e93\u3002"),(0,o.kt)("p",null,"\u5f53\u7136\u8fd9\u91cc\u80af\u5b9a\u6beb\u4e0d\u72b9\u8c6b\u7684\u9009\u62e9\u7b2c\u4e09\u65b9\u5e93\uff0c\u540e\u6587\u4f1a\u63a8\u8350\u51e0\u4e2a\uff0c\u4ee5\u53ca\u4e00\u4e9b\u4f7f\u7528\u4ee3\u7801\uff0c\u8fd9\u91cc\u8fd8\u9700\u8981\u4f7f\u7528\u539f\u751f http \u5e93\u53d1\u9001 Post \u8bf7\u6c42"),(0,o.kt)("h2",{id:"post-\u8bf7\u6c42"},"Post \u8bf7\u6c42"),(0,o.kt)("h3",{id:"\u53d1\u9001-querystring"},"\u53d1\u9001 querystring"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "fmt"\n  "io/ioutil"\n  "net/http"\n  "strings"\n)\n\nfunc main() {\n  payload := strings.NewReader("foo=1&bar=2")\n\n  resp, err := http.Post("http://127.0.0.1:5000/api/test", "application/x-www-form-urlencoded", payload)\n\n  if err != nil {\n    panic(err)\n  }\n  defer resp.Body.Close()\n\n  s, _ := ioutil.ReadAll(resp.Body)\n\n  fmt.Println(resp.StatusCode)\n  fmt.Println(string(s))\n}\n\n')),(0,o.kt)("p",null,"\u6b64\u5916\u8fd8\u53ef\u4ee5\u4f7f\u7528 http.PostForm\uff08\u7701\u7565\u8bfb\u53d6\u54cd\u5e94\u4ee3\u7801\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "net/http"\n  "net/url"\n)\n\nfunc main() {\n  payload := url.Values{"foo": {"1"}, "bar": {"2"}}\n\n  resp, err := http.PostForm("http://127.0.0.1:5000/api/test", payload)\n}\n\n')),(0,o.kt)("h3",{id:"\u53d1\u9001-json"},"\u53d1\u9001 json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "fmt"\n  "net/http"\n  "strings"\n)\n\nfunc main() {\n  payload := strings.NewReader(`{"name":"kuizuo"}`)\n\n  req, _ := http.NewRequest("POST", "http://127.0.0.1:5000/api/test", payload)\n\n  req.Header.Add("Content-Type", "application/json")\n\n  res, _ := http.DefaultClient.Do(req)\n  fmt.Println(res)\n}\n\n')),(0,o.kt)("p",null,"\u81f3\u4e8e\u5176\u4ed6\u65b9\u6cd5\u5c31\u4e0d\u505a\u6f14\u793a\uff0c\u4e0d\u5bf9\u5176\u5c01\u88c5\u5c06\u5341\u5206\u96be\u7528\uff0c\u65e5\u5e38\u5f00\u53d1\u4e3b\u8981\u8fd8\u662f\u4f7f\u7528\u7b2c\u4e09\u65b9 http \u8bf7\u6c42\u5e93\u3002"),(0,o.kt)("h2",{id:"http-\u8bf7\u6c42\u5e93"},"HTTP \u8bf7\u6c42\u5e93"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/valyala/fasthttp"},"valyala/fasthttp: Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http (github.com)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/go-resty/resty"},"go-resty/resty: Simple HTTP and REST client library for Go (github.com)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/imroc/req"},"imroc/req: Simple Go HTTP client with Black Magic (github.com)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/levigross/grequests"},'levigross/grequests: A Go "clone" of the great and famous Requests library (github.com)')),(0,o.kt)("p",null,"\u6574\u5408\u4e86\u51e0\u4e2a Github \u4e0a\u6240\u5f00\u6e90\u7684 http \u8bf7\u6c42\u5e93\uff0c\u66f4\u591a http \u5e93\u53ef\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/topics/http-client?l=go"},"http-client \xb7 GitHub Topics"),"\u4e0a\u67e5\u770b \uff0c\u8fd9\u91cc\u5bf9\u5176\u8fdb\u884c\u7b80\u5355\u4f18\u70b9\u4ecb\u7ecd\uff0c\u4ee5\u53ca\u4e2a\u4eba\u7684\u9009\u62e9\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/valyala/fasthttp"},"fasthttp")," \u53f7\u79f0\u6bd4 net/http \u5feb 10 \u500d\u7684 http \u5305\uff0c\u5e76\u4e14 star \u6570\u6700\u591a\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/go-resty/resty#usage"},"resty")," \u4e00\u4e2a\u94fe\u5f0f\u8c03\u7528\u7684\u8bf7\u6c42\u5e93\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://req.cool/"},"Req")," \u4e0e resty \u4f7f\u7528\u76f8\u4f3c\uff0c\u5e76\u4e14\u63d0\u4f9b\u975e\u5e38\u53cb\u597d\u7684\u4f7f\u7528\u6587\u6863\uff08\u6709\u4e2d\u6587\uff09\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/levigross/grequests"},"grequests")," go \u8bed\u8a00\u7248\u7684 python requests\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u8fc7 python requests \u5e93\uff0c\u90a3\u4e48\u53ef\u4ee5\u6beb\u4e0d\u72b9\u8c6b\u7684\u9009\u62e9 grequests\u3002\u5f88\u663e\u7136\uff0c\u6211\u4f7f\u7528\u8fc7 requests\uff0c\u6240\u4ee5\u4e5f\u5c31\u6beb\u4e0d\u72b9\u8c6b\u7684\u9009\u62e9 grequests\u3002"),(0,o.kt)("h2",{id:"grequests"},"grequests"),(0,o.kt)("p",null,"\u8fd9\u91cc\u5199\u4e00\u4e2a\u6a21\u62df\u767b\u5f55\u7684\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'\nimport (\n  "fmt"\n\n  "github.com/levigross/grequests"\n)\n\ntype Demo struct {\n  Session *grequests.Session\n  User    User\n}\n\ntype User struct {\n  Username string\n  Password string\n}\n\ntype Result struct {\n  Code int    `json:"code"`\n  Msg  string `json:"msg"`\n}\n\nfunc (dm *Demo) login() string {\n\n  resp, err := dm.Session.Post("http://127.0.0.1:5000/api/login",\n    &grequests.RequestOptions{\n      Data: map[string]string{\n        "username": dm.User.Username,\n        "password": dm.User.Password,\n      },\n      Headers: map[string]string{\n        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",\n        "User-Agent":   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36",\n      },\n    })\n\n  var result Result\n  resp.JSON(&result)\n\n  if err == nil && result.Code == 200 {\n    return "\u767b\u5f55\u6210\u529f"\n  }\n\n  return result.Msg\n}\n\nfunc main() {\n  var session = grequests.NewSession(nil)\n  dm := Demo{\n    Session: session,\n    User: User{\n      Username: "kuizuo",\n      Password: "a123456",\n    },\n  }\n  loginResult := dm.login()\n  fmt.Println(loginResult)\n  // TODO:\n}\n\n')),(0,o.kt)("p",null,"\u56e0\u4e3a go \u4e2d\u6ca1\u6709\u7c7b\u7684\u6982\u5ff5\uff0c\u6240\u4ee5\u60f3\u8981\u5b9e\u73b0\u201c\u7c7b\u201d\uff0c\u5c31\u5f97\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," \u548c\u65b9\u6cd5\u540d\u4e4b\u95f4\u6dfb\u52a0\u65b9\u6cd5\u6240\u5c5e\u7684\u7c7b\u578b\u58f0\u660e\uff08\u6709\u7684\u5730\u65b9\u5c06\u5176\u79f0\u4e4b\u4e3a\u63a5\u6536\u8005\u58f0\u660e\uff09"),(0,o.kt)("p",null,"\u4e5f\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"func (dm *Demo) login() string {")," \u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"(dm *Demo)")," \u5176\u4e2d\u8fd9\u91cc\u7684 Demo \u6839\u636e\u5b9e\u9645\u9700\u6c42\u8fdb\u884c\u66f4\u6362\uff0c\u5e76\u4e14\u524d\u9762\u7684 dm \u65e0\u6cd5\u66f4\u540d\u4e3a this \u6216 self\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u53d1\u9001 json \u8bf7\u6c42\u7684\u8bdd\uff0cgrequests \u5199\u6cd5\u4e5f\u633a\u7b80\u5355\u7684\uff0c\u53ea\u9700\u8981\u5c06 Data \u66ff\u6362\u4e3a JSON\uff08\u534f\u8bae\u5934\u4f1a\u81ea\u52a8\u6dfb\u52a0 Content-Type: application/json\uff09\uff0c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'  resp, err := dm.Session.Post("http://127.0.0.1:5000/api/login",\n    &grequests.RequestOptions{\n      JSON: map[string]string{\n        "username": dm.User.Username,\n        "password": dm.User.Password,\n      },\n    })\n')),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u76f8\u6bd4 js \u548c python \u6765\u5199 http \u8bf7\u6c42\uff0c\u7531\u4e8e go \u4e2d\u6ca1\u6709\u7c7b\u7684\u6982\u5ff5\uff08\u5373\u65e0 class \u5173\u952e\u5b57\uff09\uff0c\u6240\u4ee5\u53ea\u80fd\u5229\u7528",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53"),"\u6765\u5b9e\u73b0\u8fd9\u6837\u529f\u80fd\uff0c\u5e76\u4e14\u5728\u4ee3\u7801\u5199\u6cd5\u4e0a\u4e5f\u4e0d\u7b97\u4f18\u96c5\u3002\u7efc\u5408\u8003\u8651\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd8\u662f\u4f18\u9009 js \u548c python \u6765\u590d\u73b0 http \u534f\u8bae\u3002"))}d.isMDXComponent=!0}}]);