---
id: docusaurus-math-equations
slug: /docusaurus-math-equations
title: 数学公式加入
authors: pansyhou
---

我发现kuizuo的博客框架没加入docusaurus的公式

给他加一手

为了开启KaTeX，要 安装 `mathjax`、`remark-math` 和 `rehype-katex` 插件

```shell
npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0
npm install mathjax
```

在present里加上

```javascript
remarkPlugins: [require('remark-math')],
rehypePlugins: [require('rehype-katex')],
```

像这样

![image-20230504153946157](https://pic.imgdb.cn/item/645361420d2dde5777886c32)

最后，找到stylesheets，把kuizuo留下的空白填满即可

```javascript
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ',
      crossorigin: 'anonymous',
    },
  ],
```



最后可能长这样

```javascript
const math = require('remark-math');

async function createConfig() {
  return {
    title: 'Docusaurus',
    tagline: 'Build optimized websites quickly, focus on your content',
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            path: 'docs',
			remarkPlugins: [require('remark-math')],
			rehypePlugins: [require('rehype-katex')],
          },
        },
      ],
    ],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ',
        crossorigin: 'anonymous',
      },
    ],
  };
}

module.exports = createConfig;
```



