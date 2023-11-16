"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7423],{4137:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return f}});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=a.createContext({}),m=function(e){var r=a.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=m(e.components);return a.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},s=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=m(n),f=t,p=s["".concat(d,".").concat(f)]||s[f]||u[f]||i;return n?a.createElement(p,c(c({ref:r},l),{},{components:n})):a.createElement(p,c({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var m=2;m<i;m++)c[m]=n[m];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},659:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(3117),t=n(102),i=(n(7294),n(4137)),c=["components"],o={id:"camara",slug:"/camara",title:"rk camara\u5b89\u5353\u9002\u914d"},d=void 0,m={unversionedId:"Android/camara",id:"Android/camara",title:"rk camara\u5b89\u5353\u9002\u914d",description:"uvc\u5185\u6838\u7ea7\u652f\u6301",source:"@site/docs/Android/camara.mdx",sourceDirName:"Android",slug:"/camara",permalink:"/docs/camara",draft:!1,tags:[],version:"current",frontMatter:{id:"camara",slug:"/camara",title:"rk camara\u5b89\u5353\u9002\u914d"},sidebar:"Android",previous:{title:"rk\u5b89\u5353 4g/5g\u6a21\u5757\u9002\u914d",permalink:"/docs/lte_nr"},next:{title:"rk\u5b89\u5353 \u89e6\u6478\u5c4f\u9002\u914d",permalink:"/docs/touchscreen"}},l={},u=[{value:"uvc\u5185\u6838\u7ea7\u652f\u6301",id:"uvc\u5185\u6838\u7ea7\u652f\u6301",level:2},{value:"BoardConfig",id:"boardconfig",level:3}],s={toc:u};function f(e){var r=e.components,n=(0,t.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"uvc\u5185\u6838\u7ea7\u652f\u6301"},"uvc\u5185\u6838\u7ea7\u652f\u6301"),(0,i.kt)("h3",{id:"boardconfig"},"BoardConfig"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-makefile"},"# CAMERA\nifeq ($(BOARD_CAMERA_SUPPORT),true)\nifeq ($(BOARD_CAMERA_SUPPORT_EXT),true)\nPRODUCT_COPY_FILES += \\\n    frameworks/native/data/etc/android.hardware.camera.external.xml:$(TARGET_COPY_OUT_VENDOR)/etc/permissions/android.hardware.camera.external.xml\n\nPRODUCT_COPY_FILES += \\\n    device/rockchip/common/external_camera_config.xml:$(TARGET_COPY_OUT_VENDOR)/etc/external_camera_config.xml\n\nPRODUCT_PACKAGES += \\\n    android.hardware.camera.provider@2.4-external-service\nDEVICE_MANIFEST_FILE += device/rockchip/common/manifests/android.hardware.camera.provider@2.4-provider.external.xml\nelse\nDEVICE_MANIFEST_FILE += device/rockchip/common/manifests/android.hardware.camera.provider@2.4-provider.legacy.xml\nendif\nPRODUCT_PACKAGES += \\\n    librkisp_aec \\\n    librkisp_awb \\\n    librkisp_af\n\nPRODUCT_COPY_FILES += \\\n    frameworks/native/data/etc/android.hardware.camera.xml:$(TARGET_COPY_OUT_VENDOR)/etc/permissions/android.hardware.camera.xml \\\n    frameworks/native/data/etc/android.hardware.camera.front.xml:$(TARGET_COPY_OUT_VENDOR)/etc/permissions/android.hardware.camera.front.xml\n\nPRODUCT_PACKAGES += \\\n    camera.$(TARGET_BOARD_HARDWARE) \\\n    Camera\n\n# Camera HAL\nPRODUCT_PACKAGES += \\\n    camera.device@1.0-impl \\\n    camera.device@3.2-impl \\\n    android.hardware.camera.provider@2.4-impl \\\n    android.hardware.camera.metadata@3.2\n\nifeq ($(ROCKCHIP_USE_LAZY_HAL),true)\nPRODUCT_PROPERTY_OVERRIDES += \\\n    ro.camera.enableLazyHal=true\nifeq ($(TARGET_ARCH), $(filter $(TARGET_ARCH), arm64))\nPRODUCT_PACKAGES += \\\n    android.hardware.camera.provider@2.4-service-lazy_64\nelse\nPRODUCT_PACKAGES += \\\n    android.hardware.camera.provider@2.4-service-lazy\nendif\nelse\nPRODUCT_PACKAGES += \\\n    android.hardware.camera.provider@2.4-service\nendif\n\n$(call inherit-product-if-exists, hardware/rockchip/camera/Config/rk32xx_camera.mk)\n$(call inherit-product-if-exists, hardware/rockchip/camera/Config/user.mk)\n$(call inherit-product-if-exists, hardware/rockchip/camera/etc/camera_etc.mk)\nendif\n\n# Camera Autofocus\nifeq ($(CAMERA_SUPPORT_AUTOFOCUS),true)\nPRODUCT_COPY_FILES += \\\n    frameworks/native/data/etc/android.hardware.camera.autofocus.xml:$(TARGET_COPY_OUT_VENDOR)/etc/permissions/android.hardware.camera.autofocus.xml \\\n\nendif\n")))}f.isMDXComponent=!0}}]);