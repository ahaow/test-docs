export default {
  themeConfig: {
    siteTitle: "文档",
    nav: [
      { text: "guild", link: "/guild/installation" },
      { text: "vue", link: "/vue/interview/1" },
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
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/ahaow" }],
  },
};
