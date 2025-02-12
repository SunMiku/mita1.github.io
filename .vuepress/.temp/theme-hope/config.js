import { Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "D:/IDE/nodejs_project/mita/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/IDE/nodejs_project/mita/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/IDE/nodejs_project/mita/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/IDE/nodejs_project/mita/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/IDE/nodejs_project/mita/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/IDE/nodejs_project/mita/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/IDE/nodejs_project/mita/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/IDE/nodejs_project/mita/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
