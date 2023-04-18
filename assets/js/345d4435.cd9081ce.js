"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[89406],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=r.createContext({}),i=function(e){var t=r.useContext(_),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(_.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,_=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=i(n),m=a,d=c["".concat(_,".").concat(m)]||c[m]||s[m]||u;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=m;var l={};for(var _ in t)hasOwnProperty.call(t,_)&&(l[_]=t[_]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<u;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67266:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return _},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var r=n(87462),a=n(63366),u=(n(67294),n(3905)),o=["components"],l={id:"uart-send-recv",slug:"/uart-send-recv",title:"\u4e32\u53e3\u6536\u53d1\u7684\u51e0\u79cd\u65b9\u5f0f",date:new Date("2020-09-08T00:00:00.000Z"),authors:"pansyhou",tags:["uart","stm32","DMA"],keywords:["uart","stm32","DMA"]},_="\u524d\u8a00",i={unversionedId:"stm32/uart-send-recv",id:"stm32/uart-send-recv",title:"\u4e32\u53e3\u6536\u53d1\u7684\u51e0\u79cd\u65b9\u5f0f",description:"\u524d\u51e0\u5929\u5fd7\u575a\u54e5\u54e5\u5728\u7528\u63a5\u6536dr16\u90a3\u5957\u4e32\u53e3DMA\u53cc\u7f13\u51b2\u7684\u65b9\u6cd5\u63a5\u88c1\u5224\u7cfb\u7edf\u7684\u6570\u636e\u7684\u65f6\u5019\u5f15\u53d1\u4e86\u6211\u7684\u601d\u8003",source:"@site/docs/stm32/\u4e32\u53e3\u6536\u53d1\u7684\u51e0\u79cd\u65b9\u5f0f.md",sourceDirName:"stm32",slug:"/uart-send-recv",permalink:"/docs/uart-send-recv",draft:!1,tags:[{label:"uart",permalink:"/docs/tags/uart"},{label:"stm32",permalink:"/docs/tags/stm-32"},{label:"DMA",permalink:"/docs/tags/dma"}],version:"current",frontMatter:{id:"uart-send-recv",slug:"/uart-send-recv",title:"\u4e32\u53e3\u6536\u53d1\u7684\u51e0\u79cd\u65b9\u5f0f",date:"2020-09-08T00:00:00.000Z",authors:"pansyhou",tags:["uart","stm32","DMA"],keywords:["uart","stm32","DMA"]},sidebar:"stm32",previous:{title:"\u5f00\u53d1\u5de5\u5177\u63a8\u8350",permalink:"/docs/stm32"}},p={},c=[{value:"DMA",id:"dma",level:2},{value:"\u4e3a\u4ec0\u4e48\u88c1\u5224\u7cfb\u7edf\u7684\u4e32\u53e3\u63a5\u6536\u63a8\u8350\u4f7f\u7528FIFO\uff1f",id:"\u4e3a\u4ec0\u4e48\u88c1\u5224\u7cfb\u7edf\u7684\u4e32\u53e3\u63a5\u6536\u63a8\u8350\u4f7f\u7528fifo",level:2},{value:"\u53cc\u7f13\u51b2+FIFO\u793a\u4f8b\u7a0b\u5e8f",id:"\u53cc\u7f13\u51b2fifo\u793a\u4f8b\u7a0b\u5e8f",level:3}],s={toc:c},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,u.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,u.kt)("p",null,"\u524d\u51e0\u5929\u5fd7\u575a\u54e5\u54e5\u5728\u7528\u63a5\u6536dr16\u90a3\u5957\u4e32\u53e3DMA\u53cc\u7f13\u51b2\u7684\u65b9\u6cd5\u63a5\u88c1\u5224\u7cfb\u7edf\u7684\u6570\u636e\u7684\u65f6\u5019\u5f15\u53d1\u4e86\u6211\u7684\u601d\u8003"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u4e3a\u4ec0\u4e48dr16\u5b98\u65b9\uff08C\u677f\u793a\u4f8b\u7a0b\u5e8f\uff09\u7528\u7684\u662f",(0,u.kt)("strong",{parentName:"p"},"DMA\u53cc\u7f13\u51b2"),"\uff0c\u800cicra2021github\u5f00\u6e90\u7684\u90a3\u5957\u662f\u53ea\u7528\u4e86",(0,u.kt)("strong",{parentName:"p"},"\u5355\u7f13\u51b2"),"\u3002"),(0,u.kt)("p",{parentName:"blockquote"},"\u53e6\u5916\uff0c\u5b98\u65b9\u63a5\u6536uart6\u7684\u9a71\u52a8\u7528\u7684\u53ea\u662f\u5355\u5355",(0,u.kt)("strong",{parentName:"p"},"DMA+\u4e32\u53e3\u7a7a\u95f2\u4e2d\u65ad/DMA\u534a/\u6ea2\u4f20\u8f93\u4e2d\u65ad+FIFO"),"\uff1f")),(0,u.kt)("p",null,"\u4e0b\u9762\u5185\u5bb9\u90e8\u5206\u53c2\u8003",(0,u.kt)("a",{parentName:"p",href:"https://www.eet-china.com/mp/a28491.html"},"\u4e00\u4e2a\u4e25\u8c28\u7684STM32\u4e32\u53e3DMA\u53d1\u9001","&","\u63a5\u6536\uff081.5Mbps\u6ce2\u7279\u7387\uff09\u673a\u5236")),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u61d2\u5f97\u770b\u91cc\u9762\u53ef\u4ee5\u770b\u6211\u7684\u975e\u5e38\u7cbe\u7b80\u7248\u672c\uff08\u91cc\u9762\u6709\u5f88\u591a\u539f\u7406\u56fe\uff0c\u5efa\u8bae\u770b\u770b"),(0,u.kt)("h2",{id:"dma"},"DMA"),(0,u.kt)("p",null,"\u5f53\u6211\u4eec\u7684\u6ce2\u7279\u7387\u8bbe\u7f6e\u5728115200\u6216\u8005\u4ee5\u4e0b\u65f6\uff0c\u800c\u4e14\u6570\u636e\u91cf\u4e0d\u5927\u7684\u573a\u666f\u65f6\uff0c\u4e00\u822c\u6ca1\u5fc5\u8981\u4f7f\u7528DMA\uff08\u5d4c\u5165\u5f0f\u5927\u6742\u70e9\u8bf4\u7684\u55f7\uff0c\u6211\u8fd8\u6ca1\u5b9e\u9645\u4e0asystemview\u770b\u53d1\u9001/\u63a5\u6536\u7528\u65f6\uff0c\u6216\u8005\u8bf4\u7528DMA\u672a\u80fd\u53d1\u6325\u51faDMA\u7684\u4f5c\u7528"),(0,u.kt)("p",null,"\u53d1\u9001\u7aef\u4f7f\u7528\u4e2d\u65ad\u53d1\u9001\u4ee5115200\u6ce2\u7279\u7387\u65f6\uff0c1s\u4f20\u8f9311520\u5b57\u8282\uff0c\u5927\u7ea669us\u9700\u54cd\u5e94\u4e00\u6b21\u4e2d\u65ad\uff0c\u5982\u6ce2\u7279\u7387\u518d\u63d0\u9ad8\uff0c\u5c06\u6d88\u8017\u66f4\u591aCPU\u8d44\u6e90"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"An example showing the ",(0,u.kt)("inlineCode",{parentName:"p"},"tip")," type prompt.\n{: .prompt-tip}")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"An example showing the ",(0,u.kt)("inlineCode",{parentName:"p"},"info")," type prompt.\n{: .prompt-info}")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"An example showing the ",(0,u.kt)("inlineCode",{parentName:"p"},"warning")," type prompt.\n{: .prompt-warning}")),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"An example showing the ",(0,u.kt)("inlineCode",{parentName:"p"},"danger")," type prompt.\n{: .prompt-danger}")),(0,u.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u88c1\u5224\u7cfb\u7edf\u7684\u4e32\u53e3\u63a5\u6536\u63a8\u8350\u4f7f\u7528fifo"},"\u4e3a\u4ec0\u4e48\u88c1\u5224\u7cfb\u7edf\u7684\u4e32\u53e3\u63a5\u6536\u63a8\u8350\u4f7f\u7528FIFO\uff1f"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u662f\u5426\u8003\u8651\u8fc7\u5728\u8ba1\u7b97\u6570\u636e\u5e27\u6821\u9a8c\u503c\u7684\u65f6\u5019\uff0c\u6570\u636e\u6e90\u6539\u53d8\u4e86\u7684\u95ee\u9898\u5462\uff1f\n{: .prompt-danger}")),(0,u.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u90fd\u4e0d\u4f1a\u5199\u4e34\u754c\u533a\u4fdd\u62a4\u5728\u6211\u4eec\u7684\u4ee3\u7801\u91cc\uff08\u81f3\u5c11\u6211\u770b\u8fc7\u5f88\u591a\u4eba\u90fd\u6ca1\u5199\uff0c\u4e2d\u65ad\u90fd\u4e0d\u5173\u7684\uff09"),(0,u.kt)("p",null,"\u4f46\u662f\uff0c\u5355\u7f13\u51b2\u4e0b\u7684\u63a5\u6536\u4e00\u822c\u90fd\u662f\u7528\u6307\u9488\u4f20\u53c2\u5230\u5904\u7406\u51fd\u6570\u7684\uff0c\u4e00\u65e6\u5728\u5904\u7406\u51fd\u6570\u7684\u65f6\u5019\u8fdb\u5165\u4e86\u4e2d\u65ad\uff0c\u6211\u4eec\u7684\u6570\u636e\u6e90\u5c31\u4f1a\u88ab\u65b0\u6765\u7684\u6570\u636e\u51b2\u6389\u4e00\u90e8\u5206\uff0c\u6821\u9a8c\u76f4\u63a5\u5bc4\u6389\uff0c\u88c1\u5224\u7cfb\u7edf\u4e5f\u6ca1\u6709\u91cd\u53d1\u673a\u5236\u3002"),(0,u.kt)("p",null,"\u90a3\u53cc\u7f13\u51b2\u80fd\u89e3\u51b3\u4e00\u4e22\u4e22\u8fd9\u6837\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u4f60\u5904\u7406\u6570\u636e\u7684\u65f6\u5019\u65e7\u6570\u636e\u662f\u5728\u7f13\u51b2\u533a1\uff0c\u800c\u7f13\u51b2\u533a2\u5728\u63a5\u6536\u65b0\u6570\u636e\uff0c\u4e0d\u4f1a\u88ab\u51b2\u6389\u3002"),(0,u.kt)("p",null,"\u4f46\u662f\u88c1\u5224\u7cfb\u7edf\u7684CRC\u6821\u9a8c\u548c\u6570\u636e\u5904\u7406\u6211\u4e0d\u786e\u5b9a\u4ed6\u7684\u8ba1\u7b97\u65f6\u95f4\u771f\u7684\u662f\u5426\u80fd\u6491\u8fc7\u4e24\u6b21\u7684\u7f13\u51b2\u533a\u5237\u65b0\uff0c\u6700\u597d\u91c7\u7528FIFO\u7684\u673a\u5236\uff0c\u800c\u4e14\u88c1\u5224\u7cfb\u7edf\u7684\u5b9e\u65f6\u6027\u4e0d\u7528\u50cfdr16\u7684\u90a3\u4e48\u9ad8\u3002"),(0,u.kt)("p",null,"\u5982\u56fe\uff0c\u4f7f\u7528dr16\u7c7b\u4f3c\u7684\u5c0f\u7f13\u5b58+\u53cc\u7f13\u51b2\u673a\u5236\u771f\u7684\u5f88\u5bb9\u6613\u51b2\u6389\u6570\u636e\uff0c\u4f46\u662f\uff0c\u6211\u4eec\u5c06\u7f13\u51b2\u533a\u5f00\u5927\u70b9\uff0c\u540c\u65f6\u5c06\u6570\u636e\u5206\u4e3a\u4e00\u4e2a\u5305\u4e00\u4e2a\u5305\u6765\uff0c\u73af\u5f62\u961f\u5217\u7f13\u5b58\uff0c\u51cf\u5c11\u88ab\u51b2\u7684\u53ef\u80fd\uff0c\u4fdd\u6301\u6570\u636e\u5b8c\u6574\u3002"),(0,u.kt)("p",null,(0,u.kt)("img",{parentName:"p",src:"https://pic.imgdb.cn/item/62efb93b16f2c2beb19b191d.png",alt:null})),(0,u.kt)("p",null,"\u5b98\u65b9C\u677f\u4f8b\u7a0b\u7528\u7684\u4e5f\u662f\u53cc\u7f13...\u4f46\u662f\u4e5f\u662f\u6254\u8fdb\u53bbfifo\u7684\uff0c\u8bf4\u660e\u4e5f\u6709\u53ef\u80fd"),(0,u.kt)("h3",{id:"\u53cc\u7f13\u51b2fifo\u793a\u4f8b\u7a0b\u5e8f"},"\u53cc\u7f13\u51b2+FIFO\u793a\u4f8b\u7a0b\u5e8f"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-c"},"/************************** Dongguan-University of Technology -ACE**************************\n * @brief \u7406\u8bba\u4e0a\u901a\u7528\u7684\u53cc\u7f13\u51b2\u5f00\u542f\uff0c\u56e0\u4e3a\u677f\u5b50\u4e0d\u4e00\u6837\uff0c\u5c31\u6709\u4e0d\u4e00\u6837\u7684\u4e32\u53e3(hal\u5e93\u7684\u901a\u7528\u6027\u5927\u5927\u63d0\u9ad8\u4e86)//TODO:\u5f85\u6d4b\u8bd5\n * \u53cc\u7f13\u51b2\u6a21\u5f0f\u81ea\u52a8\u5f00\u542f\u5faa\u73af\u63a5\u6536\uff0c\u6240\u4ee5\u4f60cubeMX\u7231\u5f00\u4e0d\u5f00\n * \n * @param huart \n * @param rx1_buf \n * @param rx2_buf \n * @param dma_buf_num \n************************** Dongguan-University of Technology -ACE***************************/\nvoid usart_DoubleBuffer_init(UART_HandleTypeDef *huart,uint8_t *rx1_buf, uint8_t *rx2_buf, uint16_t dma_buf_num)\n{\n\n    //enable the DMA transfer for the receiver and tramsmit request\n    //\u4f7f\u80fdDMA\u4e32\u53e3\u63a5\u6536\u548c\u53d1\u9001\n    SET_BIT(huart->Instance->CR3, USART_CR3_DMAR);\n    SET_BIT(huart->Instance->CR3, USART_CR3_DMAT);\n\n    //enalbe idle interrupt\n    //\u4f7f\u80fd\u7a7a\u95f2\u4e2d\u65ad\n    __HAL_UART_ENABLE_IT(huart, UART_IT_IDLE);\n\n    //disable DMA\n    //\u5931\u6548DMA\n    __HAL_DMA_DISABLE(huart->hdmarx);\n  \n    while(huart->hdmarx->Instance->CR & DMA_SxCR_EN)\n    {\n        __HAL_DMA_DISABLE(huart->hdmarx);\n    }\n\n    __HAL_DMA_CLEAR_FLAG(huart->hdmarx, DMA_LISR_TCIF1);\n\n    huart->hdmarx->Instance->PAR = (uint32_t) & (huart->Instance->DR);\n    //memory buffer 1\n    //\u5185\u5b58\u7f13\u51b2\u533a1\n    huart->hdmarx->Instance->M0AR = (uint32_t)(rx1_buf);\n    //memory buffer 2\n    //\u5185\u5b58\u7f13\u51b2\u533a2\n    huart->hdmarx->Instance->M1AR = (uint32_t)(rx2_buf);\n    //data length\n    //\u6570\u636e\u957f\u5ea6\n    __HAL_DMA_SET_COUNTER(huart->hdmarx, dma_buf_num);\n\n    //enable double memory buffer\n    //\u4f7f\u80fd\u53cc\u7f13\u51b2\u533a\n    SET_BIT(huart->hdmarx->Instance->CR, DMA_SxCR_DBM);\n\n    //enable DMA\n    //\u4f7f\u80fdDMA\n    __HAL_DMA_ENABLE(huart->hdmarx);\n\n\n    //disable DMA\n    //\u5931\u6548DMA\n    __HAL_DMA_DISABLE(huart->hdmarx);\n\n    while(huart->hdmarx->Instance->CR & DMA_SxCR_EN)\n    {\n        __HAL_DMA_DISABLE(huart->hdmarx);\n    }\n\n    huart->hdmarx->Instance->PAR = (uint32_t) & (huart->Instance->DR);\n\n}\n\nvoid Referee_IRQHadler(UART_HandleTypeDef huart)\n{\n\n    static volatile uint8_t res;\n    if (huart.Instance->SR & UART_FLAG_IDLE)//\u8fd9\u91cc\u7684USART6->SR\u6539\u6210\u4e86huart.Instance->SR\uff0c\u63d0\u9ad8\u9002\u7528\u6027\n    {\n        __HAL_UART_CLEAR_PEFLAG(&huart);\n\n        static uint16_t this_time_rx_len = 0;\n\n        if ((huart.hdmarx->Instance->CR & DMA_SxCR_CT) == RESET)\n        {\n            __HAL_DMA_DISABLE(huart.hdmarx);\n            this_time_rx_len = USART_RX_BUF_LENGHT - __HAL_DMA_GET_COUNTER(huart.hdmarx);\n            __HAL_DMA_SET_COUNTER(huart.hdmarx, USART_RX_BUF_LENGHT);\n            huart.hdmarx->Instance->CR |= DMA_SxCR_CT;\n            __HAL_DMA_ENABLE(huart.hdmarx);\n            fifo_s_puts(&referee_fifo, (char *)usart_Referee_buf[0], this_time_rx_len);\n            // detect_hook(REFEREE_TOE);\n        }\n        else\n        {\n            __HAL_DMA_DISABLE(huart.hdmarx);\n            this_time_rx_len = USART_RX_BUF_LENGHT - __HAL_DMA_GET_COUNTER(huart.hdmarx);\n            __HAL_DMA_SET_COUNTER(huart.hdmarx, USART_RX_BUF_LENGHT);\n            huart.hdmarx->Instance->CR &= ~(DMA_SxCR_CT);\n            __HAL_DMA_ENABLE(huart.hdmarx);\n            fifo_s_puts(&referee_fifo, (char *)usart_Referee_buf[1], this_time_rx_len);\n            // detect_hook(REFEREE_TOE);\n        }\n    }\n}\n")))}d.isMDXComponent=!0}}]);