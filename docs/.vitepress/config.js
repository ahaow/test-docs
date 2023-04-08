export default {
  themeConfig: {
    siteTitle: "文档",
    nav: [
      { text: "guild", link: "/guild/installation" },
      { text: "vue", link: "/vue/interview/1" },
      { text: "scheme", link: "/scheme/pc/index" },
    ],
    sidebar: {
      "/vue/": [
        {
          text: "高级",
          items: [
            {
              text: "premium",
              link: "/vue/premium/index",
            },
          ],
        },
        {
          text: "面试相关",
          items: [
            {
              text: "面试1",
              link: "/vue/interview/1",
            },
            {
              text: "面试2",
              link: "/vue/interview/2",
            },
          ],
        },
      ],
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "性能优化相关",
          items: [
            {
              text: "图片相关",
              link: "/guild/performance/img",
            },
            {
              text: "http缓存相关",
              link: "/guild/performance/http-cache",
            },
          ],
        },
        {
          text: "其他",
          items: [
            {
              text: "git",
              link: "/guild/git",
            },
          ],
        },
      ],

      "/scheme/": [
        {
          text: "pc端相关",
          items: [
            {
              text: "首页",
              link: "/scheme/pc/index",
            },
          ],
        },
        {
          text: "h5相关",
          items: [
            {
              text: "首页",
              link: "/scheme/h5/index",
            },
            {
              text: "移动端适配",
              link: "/scheme/h5/adaptive",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/ahaow" }],
  },
};
