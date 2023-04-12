"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[55953],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=i,v=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?n.createElement(v,l(l({ref:r},u),{},{components:t})):n.createElement(v,l({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78628:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),l=["components"],o={slug:"springboot-project-structure",title:"SpringBoot\u9879\u76ee\u7ed3\u6784",date:new Date("2022-01-08T00:00:00.000Z"),authors:"kuizuo",tags:["java","springboot","develop"],keywords:["java","springboot","develop"]},p=void 0,s={permalink:"/springboot-project-structure",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/program/SpringBoot\u9879\u76ee\u7ed3\u6784.md",source:"@site/blog/program/SpringBoot\u9879\u76ee\u7ed3\u6784.md",title:"SpringBoot\u9879\u76ee\u7ed3\u6784",description:"\u6f14\u793a\u4ee3\u7801\u5730\u5740\uff1akuizuo/spring-boot-demo (github.com)",date:"2022-01-08T00:00:00.000Z",formattedDate:"2022\u5e741\u67088\u65e5",tags:[{label:"java",permalink:"/tags/java"},{label:"springboot",permalink:"/tags/springboot"},{label:"develop",permalink:"/tags/develop"}],readingTime:4.88,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"springboot-project-structure",title:"SpringBoot\u9879\u76ee\u7ed3\u6784",date:"2022-01-08T00:00:00.000Z",authors:"kuizuo",tags:["java","springboot","develop"],keywords:["java","springboot","develop"]},prevItem:{title:"\u4e3a\u4ec0\u4e48\u4f7f\u7528pnpm",permalink:"/why-use-pnpm"},nextItem:{title:"\u4e3a\u4f55\u6211\u9009\u62e9\u65e5\u591c\u98a0\u5012\u6572\u4ee3\u7801",permalink:"/why-i-turn-night-into-day-to-code"}},u={authorsImageUrls:[void 0]},c=[{value:"\u76ee\u5f55\u7ed3\u6784\u5c55\u793a\u56fe",id:"\u76ee\u5f55\u7ed3\u6784\u5c55\u793a\u56fe",level:2},{value:"controller",id:"controller",level:3},{value:"model\uff08service\uff09",id:"modelservice",level:3},{value:"entity \u7c7b",id:"entity-\u7c7b",level:4},{value:"repository \u7c7b",id:"repository-\u7c7b",level:4},{value:"UserService \u7c7b",id:"userservice-\u7c7b",level:4},{value:"service \u63a5\u53e3\u5b9e\u73b0",id:"service-\u63a5\u53e3\u5b9e\u73b0",level:4},{value:"\u6570\u636e\u63a5\u53e3",id:"\u6570\u636e\u63a5\u53e3",level:4},{value:"modelMapper",id:"modelmapper",level:5},{value:"po \u4e0e dto \u8f6c\u5316",id:"po-\u4e0e-dto-\u8f6c\u5316",level:5},{value:"view",id:"view",level:3},{value:"\u6574\u4f53\u6d41\u7a0b",id:"\u6574\u4f53\u6d41\u7a0b",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],m={toc:c};function d(e){var r=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6f14\u793a\u4ee3\u7801\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kuizuo/spring-boot-demo"},"kuizuo/spring-boot-demo (github.com)")),(0,a.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784\u5c55\u793a\u56fe"},"\u76ee\u5f55\u7ed3\u6784\u5c55\u793a\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/20220108011921.png",alt:null})),(0,a.kt)("h3",{id:"controller"},"controller"),(0,a.kt)("p",null,"controller \u76ee\u5f55\u4e0b\u5bf9\u5e94\u7684\u4e5f\u5c31\u662f\u63a7\u5236\u5668\uff0c\u7528\u4e8e\u63a5\u6536\u7528\u6237\u7684\u8bf7\u6c42\uff08get\uff0cpost \u7b49\uff09\uff0c\u5982\u4e0b\u9762\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="controller/UserController.java"',title:'"controller/UserController.java"'},'@RestController\n@RequestMapping("/user")\npublic class UserController {\n\n    @Resource\n    private UserService userService;\n\n    @GetMapping("list")\n    public List<User> list() {\n        return userService.findAll();\n    }\n}\n')),(0,a.kt)("p",null,"\u7528\u6237\u8bf7\u6c42",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/users/list"},"http://127.0.0.1:8080/user/list")," \u5c06\u4f1a\u8c03\u7528 userService.findAll \u65b9\u6cd5\uff0c\u5f53\u7136\u8fd9\u4e2a\u65b9\u6cd5\u4e8b\u5148\u5b9a\u4e49\u597d\uff0c\u7528\u4e8e\u83b7\u53d6\u6240\u6709\u7528\u6237\u3002"),(0,a.kt)("h3",{id:"modelservice"},"model\uff08service\uff09"),(0,a.kt)("p",null,"\u8fd9\u91cc\u6570\u636e\u5e93\u8fde\u63a5\u65b9\u5f0f\u4ee5 JPA\uff08\u4e00\u4e2a ORM \u6846\u67b6\uff09\u4e3a\u4f8b\uff0c\u53ef\u4ee5\u5b89\u88c5\u4e00\u4e2a IDEA \u63d2\u4ef6 JPA Buddy \u65b0\u5efa\u6587\u4ef6\u65f6\u53ef\u4ee5\u76f4\u63a5\u521b\u5efa Entity(\u5b9e\u4f53)\u6216 Repository(\u4ed3\u5e93)"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20220506115207717.png",alt:"image-20220506115207717"})),(0,a.kt)("h4",{id:"entity-\u7c7b"},"entity \u7c7b"),(0,a.kt)("p",null,"\u5728 domain \u76ee\u5f55\u4e0b\u521b\u5efa\u5b9e\u4f53\u7c7b\uff0c\u5927\u81f4\u5982\u4e0b\uff08lombok \u56e0\u4eba\u800c\u5f02\u9009\u62e9\u4f7f\u7528\uff0c\u76f8\u5bf9\u4e0d\u5c55\u793a get \u4e0e set \u4f1a\u597d\u4e00\u4e9b\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="domain/User.java"',title:'"domain/User.java"'},'import lombok.Getter;\nimport lombok.Setter;\n\nimport javax.persistence.*;\n\n@Entity\n@Getter\n@Setter\n@Table(name = "user")\npublic class User implements Serializable {\n    @Id\n    @GeneratedValue\n    @ApiModelProperty(value = "ID", hidden = true)\n    private Long id;\n\n    @Column(nullable = false, unique = true)\n    private String username;\n    @Column(nullable = false)\n    private String password;\n    @Column(nullable = false)\n    private String email;\n}\n')),(0,a.kt)("p",null,"User.java \u7528\u4e8e\u5b9a\u4e49 user \u5b9e\u4f53\uff0c\u5728 ORM \u4e2d\uff0c\u6570\u636e\u5e93\u8868\u4e2d\u7684\u5b57\u6bb5\u90fd\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f53\u7c7b\u4e2d\u7684\u5c5e\u6027\u6765\u5b9a\u4e49\u7684\uff0c\u5982\u679c\u5b9a\u4e49\u597d user \u5b9e\u4f53\uff0c\u5e76\u4e14\u5728 resources/application.yml \u4e2d\u8bbe\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"spring.jpa.hibernate.ddl-auto: update")," \u90a3\u4e48\u542f\u52a8\u9879\u76ee\u540e\uff0c\u6570\u636e\u5e93\u5c06\u4f1a\u81ea\u52a8\u521b\u5efa user \u8868\u4e14\u5176\u8868\u4e2d\u5b57\u6bb5\u81ea\u52a8\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"@Column"),"\u6ce8\u89e3\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("h4",{id:"repository-\u7c7b"},"repository \u7c7b"),(0,a.kt)("p",null,"\u521b\u5efa\u5b8c\u5b9e\u4f53\u540e\uff0c\u8fd8\u9700\u8981\u5b9a\u4e49\u6570\u636e\u63a5\u53e3\u8bbf\u95ee\u5c42 DAO\uff0c\u5728 JPA \u4e2d\u5219\u662f\u5728 repository \u76ee\u5f55\u4e0b\u521b\u5efa\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="repository/UserRepository.java"',title:'"repository/UserRepository.java"'},"public interface UserRepository extends JpaRepository<User, Long> , JpaSpecificationExecutor<User> {\n    User findByUsername(String username);\n}\n")),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u8be5\u63a5\u53e3\u65e0\u9700\u5b9a\u4e49\u989d\u5916\u65b9\u6cd5\uff0c\u5982\u6709\u9700\u8981\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u5c5e\u4e8e\u81ea\u5df1\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u6bd4\u5982\u4e0a\u9762\u7684 findByUsername\uff0c\u8fd9\u65f6\u5019\u5c31\u6ce8\u5165\u540e\u7684 userRepository \u5bf9\u8c61\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},'userRepository.findByUsername("kuizuo");')," \uff0c\u5c06\u4f1a\u8fd4\u56de\u6570\u636e\u5e93\u4e2d\u8be5\u7528\u6237\u540d\u7684\u6570\u636e\u3002"),(0,a.kt)("h4",{id:"userservice-\u7c7b"},"UserService \u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="service/UserService.java"',title:'"service/UserService.java"'},"@Service\npublic class UserService {\n    @Autowired\n    private UserRepository userRepository;\n\n    public List<User> findAll(){\n        return userRepository.findAll();\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"@Autowired \u53ef\u80fd\u4e0d\u5efa\u8bae\u4f7f\u7528\u5b57\u6bb5\u6ce8\u5165"),"\uff0c\u53ef\u4ee5\u5728\u7c7b\u6dfb\u52a0@RequiredArgsConstructor \u6ce8\u89e3\uff0c\u8868\u660e userRepository \u4e0d\u4e3a\u7a7a\uff0c\u603b\u4e4b\u76ee\u7684\u5c31\u662f\u5c06 userRepository \u6ce8\u5165\uff0c\u4f9b\u670d\u52a1\u53ef\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="service/UserService.java"',title:'"service/UserService.java"'},"import com.kuizuo.demo.domain.User;\nimport com.kuizuo.demo.repository.UserRepository;\nimport com.kuizuo.demo.service.UserService;\nimport lombok.RequiredArgsConstructor;\nimport org.springframework.stereotype.Service;\n\nimport java.util.List;\n\n@Service\n@RequiredArgsConstructor\npublic class UserService {\n    private final UserRepository userRepository;\n\n    @Override\n    public List<User> findAll() {\n        return userRepository.findAll();\n    }\n}\n")),(0,a.kt)("p",null,"\u63a5\u7740\u5c31\u53ef\u4ee5\u4f7f\u7528 userRepository \u4e0b\u7684\u65b9\u6cd5\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"userRepository.findAll"),"\u547d\u4ee4\u76f8\u5f53\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"select * from user"),"\uff0c\u8fd4\u56de\u6240\u6709\u7684\u7528\u6237\u5217\u8868\u3002"),(0,a.kt)("h4",{id:"service-\u63a5\u53e3\u5b9e\u73b0"},"service \u63a5\u53e3\u5b9e\u73b0"),(0,a.kt)("p",null,"\u6b64\u5916 service \u670d\u52a1\u8fd8\u53ef\u4ee5\u6709\u53e6\u4e00\u79cd\u5199\u6cd5\uff0c\u5728 service \u4e2d\u6dfb\u52a0\u4e00\u4e2a impl \u76ee\u5f55\uff0c\u901a\u8fc7\u5bf9 userService ",(0,a.kt)("strong",{parentName:"p"},"\u63a5\u53e3"),"\u8fdb\u884c\u5b9e\u73b0\u7684\u670d\u52a1\u3002\n\u5728\u4e0a\u9762\u6240\u5199\u7684 UserService \u662f\u4e00\u4e2a\u7c7b\uff0c\u8fd9\u8fb9\u5c06\u5176\u6539\u4e3a\u4e00\u4e2a\u63a5\u53e3\uff0c\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="service/UserService.java"',title:'"service/UserService.java"'},"public interface UserService {\n    List<User> findAll();\n    User findOne(Long id);\n}\n")),(0,a.kt)("p",null,"\u540c\u65f6\u53ea\u4fdd\u7559 UserService \u6240\u8981\u63d0\u4f9b\u7684\u65b9\u6cd5\uff0c\u7136\u540e\u5728 service/impl \u4e2d\u521b\u5efa\u6587\u4ef6 UserServiceImpl.java\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="service/impl/UserServiceImpl.java"',title:'"service/impl/UserServiceImpl.java"'},'@Service\n@RequiredArgsConstructor\npublic class UserServiceImpl implements UserService {\n    private final UserRepository userRepository;\n\n    @Override\n    public List<User> findAll() {\n        return userRepository.findAll();\n    }\n\n\n    @Override\n    public User findOne(Long id) {\n        return userRepository.findById(id).orElseThrow(() -> new BadRequestException("\u7528\u6237\u4e0d\u5b58\u5728"));\n    }\n}\n')),(0,a.kt)("p",null,"\u8c03\u7528\u5e76\u65e0\u5dee\u5f02\uff0c\u5bf9 service \u8fdb\u4e00\u6b65\u7684\u5c01\u88c5\uff0c\u76f8\u5bf9\u66f4\u89c4\u8303\u4e9b\uff08\u6211\u770b\u5916\u9762\u90fd\u8fd9\u4e48\u5199\u7684\uff0c\u6240\u4ee5\u5c31\u8fd9\u4e48\u5199\u4e86\uff09\u3002"),(0,a.kt)("h4",{id:"\u6570\u636e\u63a5\u53e3"},"\u6570\u636e\u63a5\u53e3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/694418"},"POJO\u3001PO\u3001DTO\u3001DAO\u3001BO\u3001VO \u9700\u8981\u641e\u6e05\u695a\u7684\u6982\u5ff5"),"\n\u6b64\u5916\u8fd8\u53ef\u80fd\u5bf9\u4e0d\u540c\u5c42\u7684\u6570\u636e\u8fdb\u884c\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5b9e\u4f53(entity)\u7c7b",(0,a.kt)("inlineCode",{parentName:"li"},"PO")," \uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"jpa \u9879\u76ee: domain \u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"mybatis \u9879\u76ee: entity \u76ee\u5f55"))),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u63a5\u53e3\u8bbf\u95ee\u5c42",(0,a.kt)("inlineCode",{parentName:"li"},"DAO"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"jpa \u9879\u76ee\uff1a repository \u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"mybatis \u9879\u76ee\uff1a mapper \u76ee\u5f55"))),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u4f20\u8f93\u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"li"},"DTO"),"\uff1adto \u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u89c6\u56fe\u5bf9\u8c61",(0,a.kt)("inlineCode",{parentName:"li"},"VO"),"\uff1avo \u76ee\u5f55")),(0,a.kt)("p",null,"\u5176\u4e2d\u524d\u4e24\u79cd\u5728\u4e0a\u6587\u4e2d jpa \u7684\u4f8b\u5b50\u4e2d\u5df2\u7ecf\u4ecb\u7ecd\u4e86\uff0c\u7b80\u5355\u4ecb\u7ecd\u4e0b\u540e\u4e24\u8005"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DTO")," \u7ecf\u8fc7\u5904\u7406\u540e\u7684 PO\uff0c\u5728\u4f20\u8f93\u6570\u636e\u5bf9\u8c61\u4e2d\u53ef\u80fd\u589e\u52a0\u6216\u8005\u51cf\u5c11 PO \u7684\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VO")," \u5728\u63a7\u5236\u5c42\u4e0e\u89c6\u56fe\u5c42\u8fdb\u884c\u4f20\u8f93\u4ea4\u6362"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u540e\u4e24\u8005\u800c\u8a00\uff0c\u53ef\u80fd\u8fd8\u9700\u8981\u63d0\u4f9b Mapper \u7c7b\u7528\u4e8e\u6570\u636e\u8f6c\u5316\uff0c\u5982 DTO \u8f6c PO\uff0cPO \u8f6c DTO\u3002"),(0,a.kt)("h5",{id:"modelmapper"},"modelMapper"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.modelmapper</groupId>\n    <artifactId>modelmapper</artifactId>\n    <version>2.3.5</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u540c\u65f6\u5728\u542f\u52a8\u7c7b\u4e0b\u914d\u7f6e\u4e3a\u4e00\u4e2a Bean \u624d\u80fd\u88ab\u6ce8\u5165\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\npublic class DemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n    @Bean\n    public ModelMapper modelMapper() {\n        return new ModelMapper();\n    }\n}\n\n")),(0,a.kt)("h5",{id:"po-\u4e0e-dto-\u8f6c\u5316"},"po \u4e0e dto \u8f6c\u5316"),(0,a.kt)("p",null,"\u8fd8\u662f\u4e0a\u9762\u90a3\u4e2a user \u5b9e\u4f53\uff0c\u4f46\u662f\u8fd4\u56de\u7684\u6570\u636e\u4e2d\u4e0d\u9700\u8981\u5c06 user \u7684 password \u5c55\u793a\u51fa\u6765\u3002\u5728 service/dto \u4e2d\u521b\u5efa\u4e00\u4e2a UserDTO"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="service/dto/UserDto.java"',title:'"service/dto/UserDto.java"'},"@Getter\n@Setter\npublic class UserDto {\n    private Long id;\n    private String username;\n    private String email;\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u8f6c\u5316\uff0c\u901a\u5e38\u8981\u4e00\u4e2a\u4e2a\u5b57\u6bb5\u8f6c\u5316\uff0c\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"{5-8}","{5-8}":!0},'    @Override\n    public UserDto findOne(Long id) {\n        User user =  userRepository.findById(id).orElseThrow(() -> new BadRequestException("\u7528\u6237\u4e0d\u5b58\u5728"));\n\n        UserDto userDto = new UserDto();\n        userDto.setId(user.getId());\n        userDto.setUsername(user.getUsername());\n        userDto.setEmail(user.getEmail());\n        return userDto;\n    }\n')),(0,a.kt)("p",null,"\u7ed3\u679c\u80af\u5b9a\u662f\u6ca1\u95ee\u9898\u7684\uff0c\u4f46\u662f\u4ee3\u7801\u5199\u7684\u5f88\u4e11\u964b\u4e14\u4e0d\u6613\u4e8e\u7ef4\u62a4\u3002\u5c31\u53ef\u4ee5\u4f7f\u7528 modelMapper \u6765\u8f6c\u5316\uff08\u524d\u63d0\u5df2\u7ecf\u6ce8\u5165\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"{5}","{5}":!0},'    private final ModelMapper modelMapper;\n\n    @Override\n    public UserDto findOne(Long id) {\n        User user =  userRepository.findById(id).orElseThrow(() -> new BadRequestException("\u7528\u6237\u4e0d\u5b58\u5728"));\n\n        UserDto userDto = modelMapper.map(user, UserDto.class);\n        return userDto;\n    }\n')),(0,a.kt)("p",null,"\u4e0d\u8fc7\u8fd9\u6837\u4f7f\u7528\u53ef\u80fd\u8fd8\u662f\u4e0d\u5927\u89c4\u8303\uff0c\u540c\u65f6\u8fd8\u9700\u8981\u624b\u52a8\u4f20\u5165\u5bf9\u8c61\u53ca\u5176 Class \u5bf9\u8c61\u3002\u6240\u4ee5\u53ef\u80fd\u8fd8\u4f1a\u521b\u5efa service/mapstruct\uff0c\u7136\u540e\u521b\u5efa UserMapper\uff0c\u8fd9\u91cc\u5c31\u4e0d\u4e3e\u4f8b\u4e86\u3002"),(0,a.kt)("h3",{id:"view"},"view"),(0,a.kt)("p",null,"\u6b64\u5916\u8fd8\u6709\u4e2a\u6587\u4ef6 resources/templates/user.html \u7528\u4e8e\u8fd4\u56de\u9875\u9762\uff0c\u4e0d\u8fc7\u8fd9\u4e9b\u90fd\u5c5e\u4e8e\u6a21\u677f\u8bed\u8a00\u7684\u5185\u5bb9\uff0c\u5c31\u4e0d\u7ec6\u8bf4\u4e86\uff08\u9488\u5bf9\u524d\u540e\u7aef\u5206\u79bb\u7684\u9879\u76ee\u800c\u8a00\uff0c\u540e\u7aef\u4e3b\u8981\u63d0\u4f9b\u6570\u636e\u4fbf\u53ef\uff09"),(0,a.kt)("h3",{id:"\u6574\u4f53\u6d41\u7a0b"},"\u6574\u4f53\u6d41\u7a0b"),(0,a.kt)("p",null,"\u5927\u81f4\u7684\u6d41\u7a0b\u4fbf\u53ef\u603b\u7ed3\u4e3a Controller \u63a5\u6536\u8bf7\u6c42 \u2192 \u8c03\u7528 service \u670d\u52a1 \u2192 \u8c03\u7528\u6570\u636e\u63a5\u53e3\u670d\u52a1 dao \u63d0\u4f9b\u6570\u636e \u2192 \u5c06\u6570\u636e(\u9875\u9762)\u8fd4\u56de\u7ed9\u7528\u6237"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6b64\u5916\uff0c\u8be5\u76ee\u5f55\u7ed3\u6784\u4ec5\u4ec5\u672c\u4eba\u6240\u9009\u7528\u7684 springboot \u9879\u76ee\u7ed3\u6784\uff0c\u5b9e\u9645\u60c5\u51b5\u8fd8\u9700\u989d\u5916\u8003\u8651\u3002")),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"\u56de\u5230\u5f00\u5934\uff0c\u5176\u4e2d\u63d0\u4f9b\u4e1a\u52a1\u670d\u52a1\uff08\u6570\u636e\uff09\u7684\u4e5f\u5c31\u662f service \u6240\u505a\u7684\u4e8b\u60c5\uff0c\u63a7\u5236\u63a5\u53e3\u7684\u5219\u662f controller\uff0c\u8fd8\u6709\u4e00\u4e2a\u89c6\u56fe\u5c42 view \u4ecb\u7ecd\u7684\u6bd4\u8f83\u5c11\uff08\u53cd\u6b63\u5c31\u662f\u8fd4\u56de\u6570\u636e\u6216\u9875\u9762\uff09\u3002\u5176\u4e2d\u6700\u4e3a\u590d\u6742\u7684\u4e5f\u5c31\u662f service \u6240\u63d0\u4f9b\u7684\u670d\u52a1\uff0c\u76f8\u5bf9 controller \u548c view \u800c\u8a00\u4f1a\u7e41\u7410\u8bb8\u591a\u3002"))}d.isMDXComponent=!0}}]);