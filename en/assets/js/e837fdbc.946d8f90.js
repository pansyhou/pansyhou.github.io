"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22007],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return v}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=s(t),v=a,d=y["".concat(c,".").concat(v)]||y[v]||p[v]||o;return t?n.createElement(d,l(l({ref:r},u),{},{components:t})):n.createElement(d,l({ref:r},u))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},46474:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=t(83117),a=t(80102),o=(t(67294),t(3905)),l=["components"],i={id:"vue-reactive-data-array",slug:"/vue-reactive-data-array",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bArray",date:new Date("2022-05-12T00:00:00.000Z"),authors:"kuizuo",tags:["vue","javascript"],keywords:["vue","javascript"]},c=void 0,s={unversionedId:"skill/vue/vue-reactive-data-array",id:"skill/vue/vue-reactive-data-array",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bArray",description:"\u4fee\u6539\u539f\u578b\u65b9\u6cd5",source:"@site/docs/skill/vue/Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bArray.md",sourceDirName:"skill/vue",slug:"/vue-reactive-data-array",permalink:"/en/docs/vue-reactive-data-array",draft:!1,tags:[{label:"vue",permalink:"/en/docs/tags/vue"},{label:"javascript",permalink:"/en/docs/tags/javascript"}],version:"current",frontMatter:{id:"vue-reactive-data-array",slug:"/vue-reactive-data-array",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bArray",date:"2022-05-12T00:00:00.000Z",authors:"kuizuo",tags:["vue","javascript"],keywords:["vue","javascript"]},sidebar:"skill",previous:{title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bObject",permalink:"/en/docs/vue-reactive-data-object"},next:{title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4b\u57fa\u672c\u6570\u636e\u7c7b\u578b",permalink:"/en/docs/vue-reactive-data-basic-type"}},u={},p=[{value:"\u4fee\u6539\u539f\u578b\u65b9\u6cd5",id:"\u4fee\u6539\u539f\u578b\u65b9\u6cd5",level:2},{value:"\u7f3a\u9677",id:"\u7f3a\u9677",level:3},{value:"Proxy",id:"proxy",level:2}],y={toc:p};function v(e){var r=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u4fee\u6539\u539f\u578b\u65b9\u6cd5"},"\u4fee\u6539\u539f\u578b\u65b9\u6cd5"),(0,o.kt)("p",null,"\u4e0a\u9762\u6240\u8bf4\u5230\u7684\u662f\u5bf9\u8c61\u7684\u54cd\u5e94\u5f0f\uff0c\u4f46 js \u4e2d\u4e0d\u6b62\u6709\u5bf9\u8c61\uff0c\u8fd8\u6709\u6570\u7ec4\uff0c\u6570\u7ec4\u80fd\u7528 Object.defineProperty \u65b9\u5f0f\u6765\u76d1\u542c\u5417\uff0c\u80fd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const original = Array.prototype.push\nArray.prototype.push = function (...args) {\n  console.log('ADD', args)\n  return original.apply(this, args)\n}\n\nconst arr = [1, 2, 3]\n\narr.push(4)\n// \u8f93\u51fa ADD 4\n")),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u8fd9\u91cc\u4fee\u6539\u4e86\u5168\u5c40\u7684 Array \u539f\u578b\uff0c\u5bf9\u4e8e\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u6570\u636e\u4e5f\u4f1a\u76d1\u542c\u5230\uff0c\u5728 Vue2 \u4e2d\u4f1a\u8fdb\u5165 Observer \u6784\u9020\u51fd\u6570\u4f53\uff0c\u5224\u65ad value \u662f\u5426\u4e3a\u6570\u7ec4\uff0c\u662f\u5219\u5bf9 value \u539f\u578b\u8d4b\u503c\u4e3a\u4fee\u6539\u540e\u7684 arrayMethods\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const arrayProto = Array.prototype\nconst arrayMethods = Object.create(arrayProto)\n\nif (Array.isArray(value)) {\n  value.__proto__ = arrayMethods\n}\n")),(0,o.kt)("p",null,"\u81f3\u4e8e\u4ee5\u53ca\u5176\u4ed6\u6570\u7ec4\u65b9\u6cd5\uff0c\u8fd9\u91cc\u4ec5\u505a\u4ee3\u7801\u5b9e\u73b0\uff0c\u7531\u4e8e\u7bc7\u5e45\u6709\u9650\uff0c\u4e0d\u505a\u7ec6\u8bf4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const arrayProto = Array.prototype\nconst arrayMethods = Object.create(arrayProto)\n\nfunction def(obj, key, val, enumerable) {\n  Object.defineProperty(obj, key, {\n    value: val,\n    enumerable: !!enumerable,\n    writable: true,\n    configurable: true,\n  })\n}\n\n;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {\n  const original = arrayProto[method]\n\n  def(arrayMethods, method, function mutator(...args) {\n    const result = original.apply(this, args)\n    let inserted\n    switch (method) {\n      case 'push':\n      case 'unshift':\n        inserted = args\n        break\n      case 'splice':\n        inserted = args.slice(2)\n        break\n    }\n\n    if (inserted) {\n      console.log('ADD', args)\n    }\n    return result\n  })\n})\n\nfunction observerArray(arr) {\n  arr.__proto__ = arrayMethods\n  return arr\n}\n\nlet arr = observerArray([1, 2, 3])\n\narr.push(4)\narr.unshift(0)\n\nconsole.log(arr)\n")),(0,o.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ADD [ 4 ]\nADD [ 0 ]\n[ 0, 1, 2, 3, 4 ]\n")),(0,o.kt)("h3",{id:"\u7f3a\u9677"},"\u7f3a\u9677"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e00\u7cfb\u5217\u539f\u578b\u65b9\u6cd5\u4fee\u6539\u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\u4e5f\u6709\u7f3a\u9677\uff0c\u5c24\u5176\u5bf9\u4e8e\u6570\u7ec4\u7279\u6b8a\u53d8\u52a8\u5e76\u6ca1\u6709\u5bf9\u5e94\u539f\u578b\u65b9\u6cd5\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5229\u7528\u7d22\u5f15\u76f4\u63a5\u8bbe\u7f6e\u4e00\u4e2a\u6570\u7ec4\u9879\u65f6\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"vm.items[indexOfItem] = newValue")),(0,o.kt)("li",{parentName:"ol"},"\u4fee\u6539\u6570\u7ec4\u7684\u957f\u5ea6\u65f6\uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"vm.items.length = newLength"))),(0,o.kt)("h2",{id:"proxy"},"Proxy"),(0,o.kt)("p",null,"\u4f46\u5728 Vue3 \u4e5f\u53ef\u4ee5\u4f7f\u7528 Proxy \u6765\u76d1\u542c\uff08\u4ee3\u7406\uff09\u6570\u636e\uff0c\u5148\u5f15\u7528\u76d1\u542c",(0,o.kt)("a",{parentName:"p",href:"/docs/vue-reactive-data-object/#%E6%9C%80%E7%BB%88%E4%BB%A3%E7%A0%81"},"Object \u4e2d\u7684\u6700\u7ec8\u4ee3\u7801"),"\uff0c\u5bf9\u5176\u7a0d\u52a0\u4fee\u6539\u4e00\u4e0b\uff0c\u770b\u770b\u6548\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function log(type, index, val) {\n  console.log(type, index, val)\n}\n\nfunction reactive(target) {\n  return new Proxy(target, {\n    get(target, key, receiver) {\n      const res = Reflect.get(target, key, receiver)\n\n      if (typeof res === 'object' && res !== null) {\n        return reactive(res)\n      }\n\n      if (Array.isArray(target) && isNaN(key)) {\n        return res\n      }\n\n      log('GET', key, res)\n      return res\n    },\n    set(target, key, newVal, receiver) {\n      const oldVal = target[key]\n\n      const type = Array.isArray(target) ? (Number(key) < target.length ? 'SET' : 'ADD') : Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'\n\n      const res = Reflect.set(target, key, newVal, receiver)\n\n      if (Array.isArray(target) && key === 'length') {\n        // log('Length', null, target.length)\n      } else {\n        if (oldVal !== newVal) {\n          log(type, key, newVal)\n        }\n      }\n\n      return res\n    },\n    deleteProperty(target, key) {\n      const hadKey = Object.prototype.hasOwnProperty.call(target, key)\n\n      const res = Reflect.deleteProperty(target, key)\n\n      if (res && hadKey) {\n        log('DELETE', key, res)\n      }\n\n      return res\n    },\n  })\n}\n\nconst target = [1, 2, 3]\nconst p = reactive(target)\n\np[1]\np.push(4)\np[2] = 100\np.pop()\nconsole.log(p)\n")),(0,o.kt)("p",null,"\u6267\u884c\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET 1 2\nADD 3 4\nSET 2 100\nGET 3 4\nDELETE 3 true\n[ 1, 2, 100 ]\n")),(0,o.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u4ee5\u4e0a\u4ee3\u7801\u5c31\u5df2\u7ecf\u80fd\u76d1\u542c\u6570\u7ec4\u6210\u5458\u65b0\u589e\uff0c\u4fee\u6539\u4e0e\u5220\u9664\u4e86\u3002\u4f46\u5bf9\u4e8e\u4e00\u4e9b\u7279\u6b8a\u65b9\u6cd5\uff08\u6570\u7ec4\u904d\u5386\uff0c\u5bfb\u627e\u6210\u5458\uff09\uff0c\u8fd8\u9700\u8981\u4fee\u6539\u5176\u539f\u578b\u65b9\u6cd5\uff0c\u5c31\u9700\u8981\u50cf Vue2 \u5bf9\u539f\u578b\u65b9\u6cd5\u90a3\u6837\u64cd\u4f5c\u3002\u4e0d\u8fc7\u5728\u76d1\u542c\u6570\u636e\u53d8\u5316\u4e0a\uff0c\u7528\u5904\u5e76\u4e0d\u662f\u7279\u522b\u5927\uff0c\u4e3b\u8981\u4f53\u73b0\u5728\u4f9d\u8d56\u6536\u96c6\u4ee5\u53ca\u526f\u4f5c\u7528\u51fd\u6570\u7684\u8c03\u7528\u4e0a\u3002"))}v.isMDXComponent=!0}}]);