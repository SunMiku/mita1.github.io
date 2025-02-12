import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/mita2.github.io/",

  lang: "en-US",
  title: "MiTA 2025",
  //description: "A docs demo for vuepress-theme-hope",
  head: [['link', { rel: 'icon', href:'/image/logo.png' }]],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
