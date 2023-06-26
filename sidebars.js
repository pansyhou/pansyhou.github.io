/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction',

    {
      label: 'Docusaurus 主题魔改',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/docusaurus/docusaurus-guides'
      },
      items: [
        'skill/docusaurus/docusaurus-config',
        'skill/docusaurus/docusaurus-style',
        'skill/docusaurus/docusaurus-component',
        'skill/docusaurus/docusaurus-plugin',
        'skill/docusaurus/docusaurus-search',
        'skill/docusaurus/docusaurus-comment',
        'skill/docusaurus/docusaurus-deploy',
        'skill/docusaurus/docusaurus-math-equations'
      ],
    },
    {
      label: 'Operating-System',
      type: 'category',
      // link: {
      //   type: 'doc',
      //   id: 'skill/Operating-System/OperateSystem-guides'
      // },
      items: [
        // 'skill/Operating-System/process-management',
        // 'skill/Operating-System/processor-scheduling',
        // 'skill/Operating-System/os-final-review'
        {
          type: 'autogenerated',
          dirName: 'skill/Operating-System', // '.' means the current docs folder
        },
      ],
    },
    {
      label: 'Computer-Organization',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/Computer-Organization/ComputerOrganization-guides'
      },
      items: [
        // 'skill/Computer-Organization/storage-system',
        // 'skill/Computer-Organization/mid-term-review',
        // 'skill/Computer-Organization/Information-Coding-and-Data-Representation',
        // 'skill/Computer-Organization/final-review'
        {
          type: 'autogenerated',
          dirName: 'skill/Computer-Organization', // '.' means the current docs folder
        },
      ],
    },
    // {
    //   label: 'Vue',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     'skill/vue/vue-reactive-data-object',
    //     'skill/vue/vue-reactive-data-array',
    //     'skill/vue/vue-reactive-data-basic-type',
    //     'skill/vue/pinia',
    //   ],
    // },
    // {
    //   label: 'React',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/react',
    //     },
    //   ],
    // },
    // {
    //   label: 'Web',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/web',
    //     },
    //   ],
    // },
    // {
    //   label: 'JavaScript',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/js',
    //     },
    //   ],
    // },
    // {
    //   label: 'Node',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/node',
    //     },
    //   ],
    // },
    // {
    //   label: 'Css',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/css',
    //     },
    //   ],
    // },
    // {
    //   label: 'Java',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/java',
    //     },
    //   ],
    // },
    // {
    //   label: 'Python',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/python',
    //     },
    //   ],
    // },
    // {
    //   label: 'Go',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     'skill/go/go-environment-install',
    //     'skill/go/go-json-usage',
    //     'skill/go/go-send-http-request',
    //     'skill/go/go-call-js',
    //     'skill/go/go-concurrent',
    //     'skill/go/try-gin-framework'
    //   ],
    // },
    // {
    //   label: 'Git',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/git',
    //     },
    //   ],
    // },
    // {
    //   label: '算法',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/algorithm',
    //     },
    //   ],
    // },
    // {
    //   label: '逆向',
    //   type: 'category',
    //   link: {
    //     title: '逆向笔记',
    //     description: 'Web逆向与安卓逆向笔记',
    //     type: 'generated-index',
    //     keywords: ['reverse', 'web', 'android', 'frida'],
    //   },
    //   items: [
    //     {
    //       label: '安卓',
    //       type: 'category',
    //       link: {
    //         type: 'generated-index',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/reverse/android',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Web',
    //       type: 'category',
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/reverse/web',
    //         },
    //       ],
    //     },
    //     {
    //       label: '密码学',
    //       type: 'category',
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/reverse/crypto',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: 'Docker',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/docker',
    //     },
    //   ],
    // },
    // {
    //   label: '数据库',
    //   type: 'category',
    //   link: {
    //     // title: '',
    //     // description: '',
    //     type: 'generated-index',
    //     keywords: ['database', 'mysql', 'mongodb', 'redis', 'elasticsearch'],
    //   },
    //   items: [
    //     {
    //       label: 'Mysql',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/mysql/mysql-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/mysql',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'MongoDB',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/mongo/mongodb-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/mongo',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Redis',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/redis/redis-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/redis',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Elasticsearch',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/elasticsearch/elasticsearch-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/elasticsearch',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: '杂项',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'skill/other',
    //     },
    //   ],
    // },
  ],
  // tools: [
  //   'tools/introduction',
  //   'tools/everything-quick-search-local-files',
  //   'tools/wappalyzer-recognize-technology',
  //   'tools/windows-custom-right-click-menu',
  //   'tools/vscode-config',
  //   'tools/idea-config',
  //   'tools/vite-plugin',
  //   'tools/jetbrains-product-activation-method',
  // ],
  oi: [
    // 'oi/introduction',
    // {
    //   label: 'C++基础',
    //   type: 'category',
    //   link: {
    //     type: 'doc',
    //     id: 'oi/C++/C++-oi-basic-guides'
    //   },
    //   items: [
    //     'oi/C++/stl',
        
    //   ],
    // },
    {
      type: 'autogenerated',
      dirName: 'oi', // '.' means the current docs folder
    },
    // 'oi/two_sum', 
    // 'oi/maximum-value-of-a-string-in-an-array',
    // 'oi/greatest-sum-divisible-by-three',
    // {
    //   label: '蓝桥杯',
    //   type: 'category',
    //   link: {
    //     type: 'generated-index',
    //   },
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'oi',
    //     },
    //   ],
    // },
  ],
  stm32: [
    'stm32/introduction',
    'stm32/uart-send-recv',
    'stm32/motion-planning',
    'stm32/arm_dev_note',
    'stm32/22_embedded_task',
    'stm32/upgrade-your-fuxking-compiler',

  ],
  ros: [
    'ros/two_degree_arm',
    'ros/wsl2_ros',
    'ros/ros_control'
  ],
  // esp32: [
  //   'stm32/introduction',
  // ]
}

module.exports = sidebars
