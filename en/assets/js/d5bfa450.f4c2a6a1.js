"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[35146],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},p=Object.keys(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),i=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=i(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(n),k=r,d=m["".concat(u,".").concat(k)]||m[k]||c[k]||p;return n?l.createElement(d,a(a({ref:t},s),{},{components:n})):l.createElement(d,a({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var i=2;i<p;i++)a[i]=n[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var l=n(87462),r=n(63366),p=(n(67294),n(3905)),a=["components"],o={slug:"rollup-js-experience",title:"rollup.js \u521d\u4f53\u9a8c",date:new Date("2022-10-18T00:00:00.000Z"),authors:"kuizuo",tags:["rollup","webpack","utils"],keywords:["rollup","webpack","utils"]},u="rollup.js \u521d\u4f53\u9a8c",i={permalink:"/en/rollup-js-experience",editUrl:"https://github.com/pansyhou/pansyhou.github.io/edit/main/blog/develop/rollup.js\u521d\u4f53\u9a8c.md",source:"@site/blog/develop/rollup.js\u521d\u4f53\u9a8c.md",title:"rollup.js \u521d\u4f53\u9a8c",description:"rollup.js",date:"2022-10-18T00:00:00.000Z",formattedDate:"October 18, 2022",tags:[{label:"rollup",permalink:"/en/tags/rollup"},{label:"webpack",permalink:"/en/tags/webpack"},{label:"utils",permalink:"/en/tags/utils"}],readingTime:3.43,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"rollup-js-experience",title:"rollup.js \u521d\u4f53\u9a8c",date:"2022-10-18T00:00:00.000Z",authors:"kuizuo",tags:["rollup","webpack","utils"],keywords:["rollup","webpack","utils"]},prevItem:{title:"Protocol \u534f\u8bae\u590d\u73b0\u6a21\u677f",permalink:"/en/protocol-template"},nextItem:{title:"\u6df1\u8c08\u4e2a\u4eba\u5bf9\u65b0\u6280\u672f\u7684\u770b\u6cd5",permalink:"/en/talk-new-technologies-opinion"}},s={authorsImageUrls:[void 0]},c=[{value:"\u4e3a\u4ec0\u4e48\u4e0d\u662fWebpack\uff1f",id:"\u4e3a\u4ec0\u4e48\u4e0d\u662fwebpack",level:3},{value:"\u652f\u6301\u6253\u5305\u7684\u6a21\u5757\u683c\u5f0f",id:"\u652f\u6301\u6253\u5305\u7684\u6a21\u5757\u683c\u5f0f",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u7ed3\u5408rollup\u63d2\u4ef6\u4f7f\u7528",id:"\u7ed3\u5408rollup\u63d2\u4ef6\u4f7f\u7528",level:3},{value:"\u7c7b\u4f3c\u5de5\u5177",id:"\u7c7b\u4f3c\u5de5\u5177",level:2},{value:"\u76f8\u5173\u6587\u7ae0",id:"\u76f8\u5173\u6587\u7ae0",level:2}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,a);return(0,p.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/rollupjs.png",alt:"rollup.js"})),(0,p.kt)("p",null,"\u8fd1\u671f\u51c6\u5907\u5199\u4e00\u4e2a\u5de5\u5177\u5305 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/kuizuo/utils",title:"@kuizuo/utils"},"@kuizuo/utils"),"\uff0c\u7531\u4e8e\u8981\u5c06\u5176\u53d1\u5e03\u5230npm\u4e0a\uff0c\u5fc5\u7136\u5c31\u8981\u517c\u5bb9\u4e0d\u540c\u6a21\u5757\uff08\u4f8b\u5982 CommonJS \u548c ESModule\uff09\uff0c\u901a\u8fc7\u6253\u5305\u5668\u53ef\u4ee5\u5f88\u8f7b\u677e\u7684\u5c06\u4ee3\u7801\u5206\u522b\u7f16\u8bd1\u6210\u8fd9\u4e0d\u540c\u6a21\u5757\u683c\u5f0f\u3002"),(0,p.kt)("p",null,"\u6070\u597d ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rollup/rollup/releases/tag/v3.0.0",title:"rollup 3"},"rollup 3")," \u6b63\u5f0f\u53d1\u5e03\uff0c\u4e5f\u7b97\u662f\u6765\u4f53\u9a8c\u4e00\u4e0b\u3002"),(0,p.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4e0d\u662fwebpack"},"\u4e3a\u4ec0\u4e48\u4e0d\u662fWebpack\uff1f"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"rollup")," \u7684\u7279\u8272\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"ES6")," \u6a21\u5757\u548c\u4ee3\u7801 ",(0,p.kt)("inlineCode",{parentName:"p"},"Tree-shaking"),"\uff0c\u8fd9\u4e9b ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack")," \u540c\u6837\u652f\u6301\uff0c\u9664\u6b64\u4e4b\u5916 ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack")," \u8fd8\u652f\u6301\u70ed\u6a21\u5757\u66ff\u6362\u3001\u4ee3\u7801\u5206\u5272\u3001\u9759\u6001\u8d44\u6e90\u5bfc\u5165\u7b49\u66f4\u591a\u529f\u80fd\u3002"),(0,p.kt)("p",null,"\u5f53\u5f00\u53d1\u5e94\u7528\u65f6\u5f53\u7136\u4f18\u5148\u9009\u62e9\u7684\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"webpack"),"\uff0c\u4f46\u662f\u82e5\u4f60\u9879\u76ee\u53ea\u9700\u8981\u6253\u5305\u51fa\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"bundle")," \u5305\uff0c\u5e76\u662f\u57fa\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"ES6")," \u6a21\u5757\u5f00\u53d1\u7684\uff0c\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"rollup"),"\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"strong"},"rollup")," \u76f8\u6bd4 ",(0,p.kt)("inlineCode",{parentName:"strong"},"webpack"),"\uff0c\u5b83\u66f4\u5c11\u7684\u529f\u80fd\u548c\u66f4\u7b80\u5355\u7684 api\uff0c\u662f\u6211\u4eec\u5728\u6253\u5305\u7c7b\u5e93\u65f6\u9009\u62e9\u5b83\u7684\u539f\u56e0\u3002"),"\u4f8b\u5982\u672c\u6b21\u8981\u7f16\u5199\u7684\u5de5\u5177\u5305\u5c31\u662f\u8fd9\u7c7b\u9879\u76ee\u3002"),(0,p.kt)("h2",{id:"\u652f\u6301\u6253\u5305\u7684\u6a21\u5757\u683c\u5f0f"},"\u652f\u6301\u6253\u5305\u7684\u6a21\u5757\u683c\u5f0f"),(0,p.kt)("p",null,"\u76ee\u524d\u5e38\u89c1\u7684\u6a21\u5757\u89c4\u8303\u6709\uff1a"," "),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"IFFE\uff1a\u4f7f\u7528\u7acb\u5373\u6267\u884c\u51fd\u6570\u5b9e\u73b0\u6a21\u5757\u5316 \u4f8b\uff1a",(0,p.kt)("inlineCode",{parentName:"p"},"(function(){})()"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"CJS\uff1a\u57fa\u4e8e CommonJS \u6807\u51c6\u7684\u6a21\u5757\u5316")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"AMD\uff1a\u4f7f\u7528 Require \u7f16\u5199")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"ESM\uff1aES \u6807\u51c6\u7684\u6a21\u5757\u5316\u65b9\u6848 ( ES6 \u6807\u51c6\u63d0\u51fa )")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"UMD\uff1a\u517c\u5bb9 CJS \u4e0e AMD\u3001IFFE \u89c4\u8303"))),(0,p.kt)("p",null,"\u4ee5\u4e0a Rollup \u90fd\u662f\u652f\u6301\u7684\u3002"),(0,p.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,p.kt)("p",null,"\u5b98\u65b9\u6709\u4e00\u7bc7\u6587\u7ae0 ",(0,p.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/#creating-your-first-bundle",title:"\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2abundle"},"\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2abundle")," \uff0c\u4e0d\u8fc7\u82f1\u6587\u6587\u6863\u6bd4\u8f83\u96be\u5543\uff0c\u540c\u65f6\u901a\u8fc7\u547d\u4ee4\u65b9\u5f0f+\u9009\u9879\u7684\u65b9\u5f0f\u6765\u6253\u5305\u80af\u5b9a\u4e0d\u662f\u5de5\u7a0b\u5316\u60f3\u8981\u7684\u3002"),(0,p.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,p.kt)("p",null,"\u6240\u4ee5\u8fd9\u91cc\u6240\u6f14\u793a\u7684\u662f\u901a\u8fc7 ",(0,p.kt)("inlineCode",{parentName:"p"},"rollup.config.js")," \u6587\u4ef6\uff0c\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"rollup -c")," \u6765\u6253\u5305\u3002"),(0,p.kt)("p",null,"\u4e00\u4e2a\u793a\u4f8b\u6587\u4ef6\u5982\u4e0b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='rollup.config.js'",title:"'rollup.config.js'"},"export default {\n  input: 'src/main.js',\n  output: {\n    file: 'bundle.js',\n    format: 'cjs'\n  }\n};\n")),(0,p.kt)("p",null,"\u6267\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"rollup -c")," \u5c31\u4f1a\u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"main.js")," \u4e2d\u6240\u5f15\u7528\u5230\u7684js\u4ee3\u7801\uff0c\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"commonjs"),"\u7684\u65b9\u5f0f\u7f16\u5199\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"bundle.js"),"\uff0c\u5c31\u50cf\u8fd9\u6837\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='bundle.js'",title:"'bundle.js'"},"'use strict';\n\nvar foo = 'hello world!';\n\nfunction main () {\n  console.log(foo);\n}\n\nmodule.exports = main;\n\n")),(0,p.kt)("p",null,"\u4f46\u662f\u66f4\u591a\u7684\u60c5\u51b5\u4e0b\uff0c\u662f\u9700\u8981\u540c\u65f6\u6253\u5305\u591a\u4e2a\u6a21\u5757\u683c\u5f0f\u7684\u5305\uff0c\u5c31\u53ef\u4ee5\u5728output\u4f20\u5165\u6570\u7ec4\uff0c\u4f8b\u5982"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='rollup.config.js'",title:"'rollup.config.js'"},"export default {\n  input: 'src/main.js',\n  output: [{\n    file: 'bundle.cjs',\n    format: 'cjs'\n  }, {\n    file: 'bundle.mjs',\n    format: 'esm'\n  }]\n};\n")),(0,p.kt)("p",null,"\u4fbf\u4f1a\u751f\u6210 ",(0,p.kt)("inlineCode",{parentName:"p"},"bundle.cjs"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"bundle.mjs")," \u4e24\u79cd\u4e0d\u540c\u7684\u6a21\u5757\u683c\u5f0f\u7684\u6587\u4ef6\u3002\u540c\u65f6\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\uff0c\u6307\u5b9a\u5bf9\u5e94\u6a21\u5757\u8def\u5f84\uff0c\u5728\u5f15\u5165\u65f6\uff0c\u4fbf\u4f1a\u6839\u636e\u5f53\u524d\u7684\u9879\u76ee\u73af\u5883\u53bb\u9009\u62e9\u5bfc\u5165\u54ea\u4e2a\u6a21\u5757\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='package.json'",title:"'package.json'"},'{\n  "main": "bundle.cjs",\n  "module": "bundle.mjs"\n}\n')),(0,p.kt)("h3",{id:"\u7ed3\u5408rollup\u63d2\u4ef6\u4f7f\u7528"},"\u7ed3\u5408rollup\u63d2\u4ef6\u4f7f\u7528"),(0,p.kt)("p",null,"\u4e0d\u8fc7\u66f4\u591a\u60c5\u51b5\u4e0b\uff0crollup\u9700\u8981\u914d\u7f6e\u63d2\u4ef6\u6765\u4f7f\u7528\u3002\u5b98\u65b9\u63d2\u4ef6\u5730\u5740\uff1a",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rollup/plugins",title:"rollup/plugins: \ud83c\udf63 The one-stop shop for official Rollup plugins (github.com)"},"rollup/plugins: \ud83c\udf63 The one-stop shop for official Rollup plugins (github.com)")),(0,p.kt)("p",null,"\u6bd4\u5982\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/egoist/rollup-plugin-esbuild",title:"rollup-plugin-esbuild"},"rollup-plugin-esbuild")," \u63d2\u4ef6\u6765\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://esbuild.docschina.org/",title:"esbuild"},"esbuild"),"\uff08\u4e5f\u662f\u4e00\u4e2a\u6253\u5305\u5668\uff0c\u5e76\u4e14\u6784\u5efa\u975e\u5e38\u5feb\uff09\u6765\u52a0\u5feb\u6253\u5305\u901f\u5ea6\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/rollup/plugins/tree/master/packages/babel",title:"@rollup/plugin-babel"},"@rollup/plugin-babel")," \u501f\u52a9babel\uff0c\u7f16\u8bd1\u6210\u517c\u5bb9\u6027\u66f4\u5f3a\u7684js\u4ee3\u7801\u6216\u8005\u4ee3\u7801\u8f6c\u6362\u7b49\u7b49\u3002"),(0,p.kt)("p",null,"\u4ee5\u4e0b\u662frollup+\u63d2\u4ef6\u7684\u914d\u7f6e\u793a\u4f8b\uff0c\u6765\u6e90 ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/antfu/utils/blob/main/rollup.config.js",title:"antfu/utils/rollup.config.js"},"antfu/utils/rollup.config.js")," \uff0c\u4e5f\u4f5c\u4e3a\u672c\u6b21\u5de5\u5177\u5305\u7684\u914d\u7f6e\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title='rollup.config.js'",title:"'rollup.config.js'"},"import esbuild from 'rollup-plugin-esbuild'\nimport dts from 'rollup-plugin-dts'\nimport resolve from '@rollup/plugin-node-resolve'\nimport commonjs from '@rollup/plugin-commonjs'\nimport json from '@rollup/plugin-json'\nimport alias from '@rollup/plugin-alias'\n\nconst entries = [\n  'src/index.ts',\n]\n\nconst plugins = [\n  alias({\n    entries: [\n      { find: /^node:(.+)$/, replacement: '$1' },\n    ],\n  }),\n  resolve({\n    preferBuiltins: true,\n  }),\n  json(),\n  commonjs(),\n  esbuild({\n    target: 'node14',\n  }),\n]\n\nexport default [\n  ...entries.map(input => ({\n    input,\n    output: [\n      {\n        file: input.replace('src/', 'dist/').replace('.ts', '.mjs'),\n        format: 'esm',\n      },\n      {\n        file: input.replace('src/', 'dist/').replace('.ts', '.cjs'),\n        format: 'cjs',\n      },\n    ],\n    external: [],\n    plugins,\n  })),\n  ...entries.map(input => ({\n    input,\n    output: {\n      file: input.replace('src/', '').replace('.ts', '.d.ts'),\n      format: 'esm',\n    },\n    external: [],\n    plugins: [\n      dts({ respectExternal: true }),\n    ],\n  })),\n]\n\n")),(0,p.kt)("p",null,"\u4ee5\u4e0b\u662f\u5bf9\u5e94\u7684npm \u5b89\u88c5\u547d\u4ee4"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm i -D rollup @rollup/plugin-alias @rollup/plugin-commonjs @rollup/plugin-json @rollup/plugin-node-resolve rollup-plugin-esbuild rollup-plugin-dts\n")),(0,p.kt)("p",null,"\u5173\u4e8erollup\u66f4\u591a\u4f7f\u7528\uff0c\u4e0d\u59a8\u53c2\u89c1 ",(0,p.kt)("a",{parentName:"p",href:"https://rollupjs.org/",title:"rollup\u5b98\u65b9\u6587\u6863"},"rollup\u5b98\u65b9\u6587\u6863"),"\uff0c\u4ee5\u53ca\u4e00\u4e9b\u4f7f\u7528 rollup \u6765\u6253\u5305\u7684\u5f00\u6e90\u9879\u76ee\u3002"),(0,p.kt)("h2",{id:"\u7c7b\u4f3c\u5de5\u5177"},"\u7c7b\u4f3c\u5de5\u5177"),(0,p.kt)("p",null,"\u7c7b\u4f3c\u7684\u5de5\u5177\u8fd8\u6709 ",(0,p.kt)("a",{parentName:"p",href:"https://webpack.js.org/",title:"webpack.js"},"webpack.js"),", ",(0,p.kt)("a",{parentName:"p",href:"https://esbuild.github.io/",title:"esbuild"},"esbuild"),", ",(0,p.kt)("a",{parentName:"p",href:"https://parceljs.org/",title:"parceljs"},"parceljs")),(0,p.kt)("p",null,"\u4e0d\u8fc7\u5c31\u6253\u5305\u7c7b\u5e93\u800c\u8a00\uff0c\u5e76\u4e0d\u8981\u6c42\u8fc7\u5f3a\u7684\u6027\u80fd\uff0c\u6709\u4e2a\u76f8\u5bf9\u7b80\u5355\u7684\u914d\u7f6e\u5c31\u8db3\u4ee5\uff0c\u800c ",(0,p.kt)("a",{parentName:"p",href:"https://rollupjs.org/",title:"rollup"},"rollup")," \u6b63\u662f\u8fd9\u6837\u7684\u6253\u5305\u5de5\u5177\u3002"),(0,p.kt)("h2",{id:"\u76f8\u5173\u6587\u7ae0"},"\u76f8\u5173\u6587\u7ae0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7145090564801691684",title:"\u3010\u5b9e\u6218\u7bc7\u3011\u6700\u8be6\u7ec6\u7684Rollup\u6253\u5305\u9879\u76ee\u6559\u7a0b"},"\u3010\u5b9e\u6218\u7bc7\u3011\u6700\u8be6\u7ec6\u7684Rollup\u6253\u5305\u9879\u76ee\u6559\u7a0b")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/221968604",title:"\u4e00\u6587\u5e26\u4f60\u5feb\u901f\u4e0a\u624bRollup"},"\u4e00\u6587\u5e26\u4f60\u5feb\u901f\u4e0a\u624bRollup")))}k.isMDXComponent=!0}}]);