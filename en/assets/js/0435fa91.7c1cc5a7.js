"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[58498],{3905:function(e,n,r){r.d(n,{Zo:function(){return k},kt:function(){return m}});var t=r(67294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=t.createContext({}),i=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},k=function(e){var n=i(e.components);return t.createElement(d.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),u=i(r),s=l,m=u["".concat(d,".").concat(s)]||u[s]||p[s]||o;return r?t.createElement(m,a(a({ref:n},k),{},{components:r})):t.createElement(m,a({ref:n},k))}));function m(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=s;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c[u]="string"==typeof e?e:l,a[1]=c;for(var i=2;i<o;i++)a[i]=r[i];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},17368:function(e,n,r){r.r(n),r.d(n,{assets:function(){return k},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var t=r(87462),l=r(63366),o=(r(67294),r(3905)),a=["components"],c={id:"docker",slug:"/docker",title:"Docker\u7b14\u8bb0",date:new Date("2021-05-26T00:00:00.000Z"),authors:"kuizuo",tags:["docker"],keywords:["docker"]},d=void 0,i={unversionedId:"skill/docker/docker",id:"skill/docker/docker",title:"Docker\u7b14\u8bb0",description:"\u5b98\u65b9\u6587\u6863",source:"@site/docs/skill/docker/Docker.md",sourceDirName:"skill/docker",slug:"/docker",permalink:"/en/docs/docker",draft:!1,tags:[{label:"docker",permalink:"/en/docs/tags/docker"}],version:"current",frontMatter:{id:"docker",slug:"/docker",title:"Docker\u7b14\u8bb0",date:"2021-05-26T00:00:00.000Z",authors:"kuizuo",tags:["docker"],keywords:["docker"]},sidebar:"skill",previous:{title:"Docker Compose",permalink:"/en/docs/docker-compose"},next:{title:"Docker\u5bb9\u5668\u65e5\u5fd7\u8fc7\u5927\u6e05\u7406",permalink:"/en/docs/docker-container-log-clean"}},k={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e\u963f\u91cc\u4e91\u955c\u50cf\u52a0\u901f",id:"\u914d\u7f6e\u963f\u91cc\u4e91\u955c\u50cf\u52a0\u901f",level:2},{value:"Docker \u7684\u547d\u4ee4",id:"docker-\u7684\u547d\u4ee4",level:2},{value:"\u955c\u50cf\u547d\u4ee4",id:"\u955c\u50cf\u547d\u4ee4",level:3},{value:"\u5bb9\u5668\u547d\u4ee4",id:"\u5bb9\u5668\u547d\u4ee4",level:3},{value:"\u542f\u52a8\u5bb9\u5668",id:"\u542f\u52a8\u5bb9\u5668",level:4},{value:"\u67e5\u770b\u5bb9\u5668",id:"\u67e5\u770b\u5bb9\u5668",level:4},{value:"\u9000\u51fa\u5bb9\u5668",id:"\u9000\u51fa\u5bb9\u5668",level:4},{value:"\u5220\u9664\u5bb9\u5668",id:"\u5220\u9664\u5bb9\u5668",level:4},{value:"\u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668\u7684\u64cd\u4f5c",id:"\u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668\u7684\u64cd\u4f5c",level:4},{value:"\u8fdb\u5165\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668",id:"\u8fdb\u5165\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668",level:4},{value:"\u540e\u53f0\u542f\u52a8\u5bb9\u5668",id:"\u540e\u53f0\u542f\u52a8\u5bb9\u5668",level:4},{value:"\u67e5\u770b\u5bb9\u5668\u5185\u7684\u8fdb\u7a0b\u4fe1\u606f",id:"\u67e5\u770b\u5bb9\u5668\u5185\u7684\u8fdb\u7a0b\u4fe1\u606f",level:4},{value:"\u67e5\u770b\u5bb9\u5668\u7684\u5143\u6570\u636e",id:"\u67e5\u770b\u5bb9\u5668\u7684\u5143\u6570\u636e",level:4},{value:"\u4ece\u5bb9\u5668\u5185\u62f7\u8d1d\u6587\u4ef6\u5230\u5bbf\u4e3b\u673a\u4e0a",id:"\u4ece\u5bb9\u5668\u5185\u62f7\u8d1d\u6587\u4ef6\u5230\u5bbf\u4e3b\u673a\u4e0a",level:4},{value:"\u81ea\u5b9a\u4e49\u7f51\u7edc",id:"\u81ea\u5b9a\u4e49\u7f51\u7edc",level:3},{value:"\u5bb9\u5668\u6570\u636e\u5377",id:"\u5bb9\u5668\u6570\u636e\u5377",level:3},{value:"\u4f7f\u7528\u6570\u636e\u5377",id:"\u4f7f\u7528\u6570\u636e\u5377",level:4},{value:"\u6307\u5b9a\u8def\u5f84\u6302\u8f7d",id:"\u6307\u5b9a\u8def\u5f84\u6302\u8f7d",level:4},{value:"\u533f\u540d\u6302\u8f7d",id:"\u533f\u540d\u6302\u8f7d",level:4},{value:"\u5177\u540d\u6302\u8f7d",id:"\u5177\u540d\u6302\u8f7d",level:4},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:4},{value:"DockerFile",id:"dockerfile",level:2},{value:"\u53d1\u5e03\u955c\u50cf",id:"\u53d1\u5e03\u955c\u50cf",level:2},{value:"Commit \u955c\u50cf",id:"commit-\u955c\u50cf",level:3},{value:"\u53d1\u5e03",id:"\u53d1\u5e03",level:3},{value:"\u90e8\u7f72\u5230\u963f\u91cc\u4e91\u5bb9\u5668\u670d\u52a1",id:"\u90e8\u7f72\u5230\u963f\u91cc\u4e91\u5bb9\u5668\u670d\u52a1",level:3}],p={toc:u},s="wrapper";function m(e){var n=e.components,r=(0,l.Z)(e,a);return(0,o.kt)(s,(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/centos/"},"\u5b98\u65b9\u6587\u6863")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://yeasy.gitbook.io/docker_practice/"},"Docker \u2014 \u4ece\u5165\u95e8\u5230\u5b9e\u8df5 (gitbook.io)")),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# \u5220\u9664\u65e7\u7684\u7248\u672c\nyum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-engine\n\n# \u9700\u8981\u7684\u5b89\u88c5\u5305\nyum install -y yum-utils\n\n# \u8bbe\u7f6e\u955c\u50cf\u4ed3\u5e93 \u4e0b\u9762\u4e3a\u963f\u91cc\u4e91\u7684\nyum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo  #\u9ed8\u8ba4\u662f\u56fd\u5916\u7684\n\nyum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\n# \u66f4\u65b0yum\u8f6f\u4ef6\u5305\u7d22\u5f15\nyum makecache fast\n\n# \u5b89\u88c5docker \u5f15\u64ce\nyum install docker-ce docker-ce-cli containerd.io\n\n# \u542f\u52a8docker\nsystemctl start docker\n\ndocker version #\u67e5\u770b\u7248\u672c\u662f\u5426\u5b89\u88c5\u6210\u529f\n\ndocker run hello-world #\u8fd0\u884c\u8be5\u955c\u50cf \u5982\u679c\u6ca1\u6709\u5c06\u4f1a\u62c9\u53bb\u5b98\u65b9\u955c\u50cf\n\ndocker images # \u67e5\u770b\u5df2\u6709\u955c\u50cf\n\n# \u5378\u8f7ddocker\n# \u5378\u8f7d\u4f9d\u8d56\nyum remove docker-ce docker-ce-cli containerd.io\n\n#\u5220\u9664\u8d44\u6e90\nsudo rm -rf /var/lib/docker\nsudo rm -rf /var/lib/containerd\n")),(0,o.kt)("p",null,"/var/liv/docker docker \u5728\u5bbf\u4e3b\u673a\u7684\u9ed8\u8ba4\u5de5\u4f5c\u8def\u5f84"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u963f\u91cc\u4e91\u955c\u50cf\u52a0\u901f"},"\u914d\u7f6e\u963f\u91cc\u4e91\u955c\u50cf\u52a0\u901f"),(0,o.kt)("p",null,"\u767b\u5f55\u963f\u91cc\u4e91 \u627e\u5230\u5bb9\u5668\u955c\u50cf\u670d\u52a1,\u6309\u7167\u4e0b\u56fe\u547d\u4ee4\u590d\u5236\u7c98\u8d34\u5373\u53ef"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20210527011655512.png",alt:null})),(0,o.kt)("h2",{id:"docker-\u7684\u547d\u4ee4"},"Docker \u7684\u547d\u4ee4"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/v2-820aee2a33654099d87cdd2b7a1ce741_r.jpg",alt:null})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker info # \u663e\u793adocker \u7cfb\u7edf\u4fe1\u606f\ndocker stats # \u663e\u793adocker \u6240\u5360\u7528\u7684\u8d44\u6e90\ndocker --help # \u67e5\u770b\u5e2e\u52a9\n")),(0,o.kt)("h3",{id:"\u955c\u50cf\u547d\u4ee4"},"\u955c\u50cf\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"#\u67e5\u770b\u672c\u5730\u4e3b\u673a\u4e0a\u7684\u955c\u50cf\ndocker images\n\n[root@localhost ~]# docker images\nREPOSITORY    TAG       IMAGE ID       CREATED       SIZE\nhello-world   latest    d1165f221234   3 weeks ago   13.3kB\n\nREPOSITORY \u4ed3\u5e93\u6e90\nTAG \u6807\u7b7e \u4e00\u822c\u4e3a\u7248\u672c\u53f7\nIMAGE ID id\nCREATED \u521b\u5efa\u65f6\u95f4\nSIZE \u5927\u5c0f\n\n-a \u663e\u793a\u5168\u90e8\n-q \u53ea\u663e\u793aid\n\ndocker search \u955c\u50cf\u540d  # \u641c\u7d22\u955c\u50cf\ndocker pull \u955c\u50cf\u540d:[TAG]  # \u4e0b\u8f7d\u955c\u50cf\ndocker rmi \u955c\u50cfID # \u5220\u9664\u955c\u50cf  -f \u5f3a\u5236\u5220\u9664\ndocker rmi \u955c\u50cfID1 \u955c\u50cfID2 \u955c\u50cfID3 # \u5220\u9664\u591a\u4e2a\u955c\u50cf \u901a\u8fc7\u7a7a\u683c\n\ndocker rmi -f $(docker images -aq) # \u5220\u9664\u5168\u90e8\u955c\u50cf\n")),(0,o.kt)("h3",{id:"\u5bb9\u5668\u547d\u4ee4"},"\u5bb9\u5668\u547d\u4ee4"),(0,o.kt)("p",null,"\u5f97\u5148\u6709\u4e86\u955c\u50cf\u624d\u53ef\u521b\u5efa\u5bb9\u5668"),(0,o.kt)("p",null,"\u5b89\u88c5\u4e00\u4e2a centos \u5bb9\u5668 docker pull centos"),(0,o.kt)("h4",{id:"\u542f\u52a8\u5bb9\u5668"},"\u542f\u52a8\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'docker run [\u53c2\u6570] image\n# \u53c2\u6570\u8bf4\u660e\n--name="\u540d\u5b57" \u6307\u5b9a\u5bb9\u5668\u540d\u5b57\n-d           \u540e\u53f0\u65b9\u5f0f\u8fd0\u884c\n-it          \u4ea4\u4e92\u65b9\u5f0f\u8fd0\u884c,\u53ef\u8fdb\u5165\u5bb9\u5668\u67e5\u770b\u5185\u5bb9\n-p           \u6307\u5b9a\u5bb9\u5668\u7684\u7aef\u53e3\n-p           \u4e3b\u673a\u7aef\u53e3:\u5bb9\u5668\u7aef\u53e3\n-v           \u5bbf\u4e3b\u673a\u8def\u5f84:\u5bb9\u5668\u5185\u8def\u5f84   \u6570\u636e\u5377\n')),(0,o.kt)("h4",{id:"\u67e5\u770b\u5bb9\u5668"},"\u67e5\u770b\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps \u547d\u4ee4\n\n-a    #\u6240\u6709+\u5386\u53f2\u8fd0\u884c\u8fc7\u7684\u5bb9\u5668\n-n=?  #\u6700\u8fd1\u521b\u5efa\u7684\u5bb9\u5668\n-q    #\u53ea\u663e\u793a\u5bb9\u5668\u7684\u7f16\u53f7\n\n")),(0,o.kt)("h4",{id:"\u9000\u51fa\u5bb9\u5668"},"\u9000\u51fa\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"exit  #\u76f4\u63a5\u505c\u6b62\u5e76\u9000\u51fa\nCtrl + P + Q #\u4e0d\u505c\u6b62\u9000\u51fa\n")),(0,o.kt)("h4",{id:"\u5220\u9664\u5bb9\u5668"},"\u5220\u9664\u5bb9\u5668"),(0,o.kt)("p",null,"\u6ce8\u610f \u6ca1\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"i")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker rm \u5bb9\u5668id   #\u5220\u9664\u6307\u5b9a\u7684\u5bb9\u5668\ndocker rm -f $(docker ps -aq) # \u5220\u9664\u6240\u6709\u7684\u5bb9\u5668\n")),(0,o.kt)("h4",{id:"\u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668\u7684\u64cd\u4f5c"},"\u542f\u52a8\u548c\u505c\u6b62\u5bb9\u5668\u7684\u64cd\u4f5c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker start \u5bb9\u5668id\ndocker restart \u5bb9\u5668id\ndocker stop \u5bb9\u5668id\ndocker kill \u5bb9\u5668id\n")),(0,o.kt)("h4",{id:"\u8fdb\u5165\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668"},"\u8fdb\u5165\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it \u5bb9\u5668id /bin/bash  #\u8fdb\u5165\u540e\u5f00\u542f\u65b0\u7684\u7ec8\u7aef \u53ef\u5728\u91cc\u9762\u64cd\u4f5c(\u5e38\u7528)\ndocker attach \u5bb9\u5668id # \u4e0d\u4f1a\u542f\u52a8\u65b0\u7684\u8fdb\u7a0b \u5355\u5355\u53ea\u662f\u8fdb\u5165\u5bb9\u5668\u7684\u7ec8\u7aef\n")),(0,o.kt)("h4",{id:"\u540e\u53f0\u542f\u52a8\u5bb9\u5668"},"\u540e\u53f0\u542f\u52a8\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d \u5bb9\u5668\ndocker run -d centos\ndocker ps\n# \u6ca1\u6709\u5bb9\u5668\u7684\u6570\u636e   \u53d1\u73b0centos \u505c\u6b62\u4e86\n\n")),(0,o.kt)("p",null,"\u5e38\u89c1\u7684\u5751 docker \u5bb9\u5668\u4f7f\u7528\u540e\u53f0\u8fd0\u884c \u5c31\u5fc5\u987b\u8981\u6709\u4e00\u4e2a\u524d\u53f0\u5e94\u7528,\u5426\u5219\u5c06\u4f1a\u81ea\u52a8\u505c\u6b62\nnginx \u5bb9\u5668\u542f\u52a8\u540e \u53d1\u73b0\u81ea\u5df1\u6ca1\u6709\u63d0\u4f9b\u670d\u52a1 \u5c31\u4f1a\u7acb\u523b\u505c\u6b62 ",(0,o.kt)("strong",{parentName:"p"},"\u5c31\u662f\u6ca1\u6709\u7a0b\u5e8f\u4e86")),(0,o.kt)("h4",{id:"\u67e5\u770b\u5bb9\u5668\u5185\u7684\u8fdb\u7a0b\u4fe1\u606f"},"\u67e5\u770b\u5bb9\u5668\u5185\u7684\u8fdb\u7a0b\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker top \u5bb9\u5668id\n")),(0,o.kt)("h4",{id:"\u67e5\u770b\u5bb9\u5668\u7684\u5143\u6570\u636e"},"\u67e5\u770b\u5bb9\u5668\u7684\u5143\u6570\u636e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker inspect \u5bb9\u5668id\n")),(0,o.kt)("h4",{id:"\u4ece\u5bb9\u5668\u5185\u62f7\u8d1d\u6587\u4ef6\u5230\u5bbf\u4e3b\u673a\u4e0a"},"\u4ece\u5bb9\u5668\u5185\u62f7\u8d1d\u6587\u4ef6\u5230\u5bbf\u4e3b\u673a\u4e0a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker cp \u5bb9\u5668id:\u5bb9\u5668\u5185\u8def\u5f84 \u5bbf\u4e3b\u673a\u8def\u5f84\n")),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u7f51\u7edc"},"\u81ea\u5b9a\u4e49\u7f51\u7edc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker network ls  #\u67e5\u770b\u6240\u6709\u7684docker \u7f51\u7edc\n\ndocker network create --driver bridge mynet\n\n\u521b\u5efa\u5bb9\u5668\u901a\u8fc7 `--net`    \u9ed8\u8ba4\u4e3a --net bridge\n\ndocker network connect   # \u8fde\u901a\u7f51\u7edc\n")),(0,o.kt)("h3",{id:"\u5bb9\u5668\u6570\u636e\u5377"},"\u5bb9\u5668\u6570\u636e\u5377"),(0,o.kt)("p",null,"\u4e00\u53e5\u8bdd \u5bb9\u5668\u7684\u6301\u4e45\u5316\u548c\u540c\u6b65\u64cd\u4f5c! \u5bb9\u5668\u95f4 \u4e5f\u662f\u53ef\u4ee5\u6570\u636e\u5171\u4eab\u7684"),(0,o.kt)("h4",{id:"\u4f7f\u7528\u6570\u636e\u5377"},"\u4f7f\u7528\u6570\u636e\u5377"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it -v \u4e3b\u673a\u76ee\u5f55:\u5bb9\u5668\u76ee\u5f55\n")),(0,o.kt)("h4",{id:"\u6307\u5b9a\u8def\u5f84\u6302\u8f7d"},"\u6307\u5b9a\u8def\u5f84\u6302\u8f7d"),(0,o.kt)("p",null,"\u6ce8\u610f \u8def\u5f84\u524d\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"/")," \u4e3a\u7edd\u5bf9\u8def\u5f84"),(0,o.kt)("h4",{id:"\u533f\u540d\u6302\u8f7d"},"\u533f\u540d\u6302\u8f7d"),(0,o.kt)("p",null,"\u53ea\u6307\u5b9a\u5bb9\u5668\u5185\u7684\u540d\u5b57"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d -P --name nginx -v /ect/nginx nginx\n\n\u901a\u8fc7 docker volume ls \u5373\u53ef\u67e5\u770b\n\u4e3alocal  .....\n")),(0,o.kt)("h4",{id:"\u5177\u540d\u6302\u8f7d"},"\u5177\u540d\u6302\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d -P --name nginx -v mynginx:/ect/nginx nginx\n\n# mynginx \u4e3a\u5377\u540d\n\ndocker volume inspect mynginx \u53ef\u67e5\u770b\u6302\u8f7d\u4f4d\u7f6e\n\u6ca1\u6307\u5b9a\u76ee\u5f55 \u90fd\u662f\u5728 /var/lib/docker/volumes/\u5377\u540d/_data\n\ndocker volume ls\nlocal  mynginx\n")),(0,o.kt)("p",null,"\u533a\u522b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"-v \u5bb9\u5668\u5185\u8def\u5f84  #\u533f\u540d\u6302\u8f7d\n-v \u5377\u540d:\u5bb9\u5668\u5185\u8def\u5f84 #\u5177\u540d\n-v /\u5bbf\u4e3b\u673a\u8def\u5f84:\u5bb9\u5668\u5185\u8def\u5f84 #\u6307\u5b9a\u8def\u5f84\n")),(0,o.kt)("p",null,"\u62d3\u5c55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-v \u5bb9\u5668\u5185\u8def\u5f84:ro   rw\nro \u8868\u793a\u53ea\u8bfb readonly \u53ea\u53ef\u5916\u90e8\u6539\u53d8 \u53ea\u53ef\u5bbf\u4e3b\u673a\u6539\u53d8\nrw \u53ef\u8bfb\u5199 readwirte  \u9ed8\u8ba4rw\n")),(0,o.kt)("h4",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("p",null,"\u5b89\u88c5Mysql"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -d -p 3307:3306 --privileged=true -v /data/mysql/log:/var/log/mysql -v /data/mysql/data:/var/lib/mysql -v /opt/docker/mysql/conf:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7\n")),(0,o.kt)("p",null,"\u5b89\u88c5Redis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d -p 6379:6379 --privileged=true -v /app/redis/redis.conf:/etc/redis/redis.conf -v /app/redis/data:/data -e MYSQL_ROOT_PASSWORD=123456 --name mysql mysql:5.7 redos-server /etc/redis/redis.conf\n")),(0,o.kt)("h2",{id:"dockerfile"},"DockerFile"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/OIP.p3NmHHlewBvLwukFPGudFgHaFV.jpg",alt:null})),(0,o.kt)("p",null,"\u6240\u6709\u547d\u4ee4\u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff08\u4f46\u63a8\u8350\u5927\u5199\uff09"),(0,o.kt)("p",null,"\u6784\u5efa\u955c\u50cf\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker build -t \u81ea\u5b9a\u955c\u50cf\u540d .\n")),(0,o.kt)("p",null,"\u4f8b\uff1a\u521b\u5efa\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684 centos \u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM cetnos\nMAINTAINER kuizuo<911993023@qq.com>\n\nENV MYPATH /usr/local\nWORKDIR $MYPATH\n\nRUN yum -y install vim\nRUN yum -y install net-tools\n\nEXPOSE 80\nCMD /bin/bash\n")),(0,o.kt)("p",null,"\u901a\u8fc7 docker history \u955c\u50cf ID \u53ef\u4ee5\u67e5\u770b \u955c\u50cf\u7684\u53d8\u66f4\u5386\u53f2"),(0,o.kt)("p",null,"CMD \u548c ENTRYPOINT \u533a\u522b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CMD  # \u6307\u5b9a\u8fd9\u4e2a\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\u8981\u8fd0\u884c\u7684\u547d\u4ee4,\u53ea\u6709\u6700\u540e\u4e00\u4e2a\u4f1a\u751f\u6548,\u53ef\u88ab\u66ff\u4ee3\nENTRYPOINT   # \u6307\u5b9a\u8fd9\u4e2a\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\u8981\u8fd0\u884c\u7684\u547d\u4ee4,\u53ef\u4ee5\u8ffd\u52a0\u547d\u4ee4 \u76f4\u63a5\u62fc\u63a5\u7684\u5f62\n")),(0,o.kt)("h2",{id:"\u53d1\u5e03\u955c\u50cf"},"\u53d1\u5e03\u955c\u50cf"),(0,o.kt)("h3",{id:"commit-\u955c\u50cf"},"Commit \u955c\u50cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'# \u547d\u4ee4\u548cgit\u539f\u7406\u5f88\u50cf\ndocker commit -m="\u63cf\u8ff0\u4fe1\u606f" -a="\u4f5c\u8005" \u5bb9\u5668id \u81ea\u5b9a\u955c\u50cf\u540d:[TAG]\n\n\u5373\u53ef\u5728\u672c\u5730\u751f\u6210\u4e00\u4e2a\u5c5e\u4e8e\u81ea\u5df1\u7684\u955c\u50cf\u6587\u4ef6\n')),(0,o.kt)("h3",{id:"\u53d1\u5e03"},"\u53d1\u5e03"),(0,o.kt)("p",null,"1\u3001\u767b\u5f55",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," \u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7"),(0,o.kt)("p",null,"2\u3001docker login -u kuizuo"),(0,o.kt)("p",null,"3\u3001\u8f93\u5165\u5bc6\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[root@localhost ~]# docker login -u kuizuo\nPassword:\nError response from daemon: Get https://registry-1.docker.io/v2/: unauthorized: incorrect username or password\n[root@localhost ~]# docker login -u kuizuo\nPassword:\nWARNING! Your password will be stored unencrypted in /root/.docker/config.json.\nConfigure a credential helper to remove this warning. See\nhttps://docs.docker.com/engine/reference/commandline/login/#credentials-store\n\nLogin Succeeded\n")),(0,o.kt)("p",null,"4\u3001docker push \u955c\u50cf ID \u955c\u50cf\u540d:","[Tag]"),(0,o.kt)("p",null,"5\u3001\u6709\u53ef\u80fd\u63d0\u4ea4\u4e0d\u4e0a \u9700\u8981\u4fee\u6539\u4e0b\u5c5e docker tag \u955c\u50cf\u540d"),(0,o.kt)("h3",{id:"\u90e8\u7f72\u5230\u963f\u91cc\u4e91\u5bb9\u5668\u670d\u52a1"},"\u90e8\u7f72\u5230\u963f\u91cc\u4e91\u5bb9\u5668\u670d\u52a1"),(0,o.kt)("p",null,"1\u3001\u767b\u5f55\u963f\u91cc\u4e91\uff0c\u5728\u5bb9\u5668\u955c\u50cf\u670d\u52a1 \u521b\u5efa\u4e2a\u4eba\u5b9e\u4f8b"),(0,o.kt)("p",null,"2\u3001\u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff0c\u4e0d\u7136\u65e0\u6cd5\u521b\u5efa\u955c\u50cf\u4ed3\u5e93\uff0c\u4e14 \u53ea\u53ef\u521b\u5efa 3 \u4e2a"),(0,o.kt)("p",null,"3\u3001\u521b\u5efa\u955c\u50cf\u4ed3\u5e93\uff0c\u7136\u540e\u9009\u62e9\u672c\u5730\u4ed3\u5e93"),(0,o.kt)("p",null,"4\u3001\u70b9\u51fb\u7ba1\u7406\u53ef\u67e5\u770b\u57fa\u672c\u4fe1\u606f\uff0c\u64cd\u4f5c\u6307\u5357\u5199\u7684\u975e\u5e38\u8be6\u7ec6"))}m.isMDXComponent=!0}}]);