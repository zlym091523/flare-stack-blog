import type { SiteConfig } from "@/features/config/site-config.schema";

export const blogConfig = {
  title: "ShawYoungの博客",
  author: "Yoviz-Design Studio",
  description:
    "在信息过载的时代，真正有价值的不是知识本身，而是被验证过的方法。Yoviz Design Studio是一个专注于技术分享与数字实践的内容平台，聚焦前端开发、AI工具应用、网站搭建以及新媒体与副业探索。如果你正在寻找一个既有深度又有实用性的学习平台，这里会是一个长期值得收藏的地方！",
  social: [
    { platform: "github", url: "https://github.com/zlym091523" },
    { platform: "email", url: "2739560891aa@gmail.com" },
    { platform: "rss", url: "/rss.xml" },
    { platform: "wechat", url: "Sy-Yoviz_design777" },
  ],
  icons: {
    faviconSvg: "/favicon.svg",
    faviconIco: "/favicon.ico",
    favicon96: "/favicon-96x96.png",
    appleTouchIcon: "/apple-touch-icon.png",
    webApp192: "/web-app-manifest-192x192.png",
    webApp512: "/web-app-manifest-512x512.png",
  },
  theme: {
    default: {
      navBarName: "Shaw Young的博客",
    },
    fuwari: {
      homeBg: "/images/home-bg.webp",
      avatar: "/images/avatar.png",
      primaryHue: 250,
    },
  },
} as const satisfies SiteConfig;
