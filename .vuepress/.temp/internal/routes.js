export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"Portfolio Home","i":"home"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Home","i":"home"} }],
  ["/Committees/", { loader: () => import(/* webpackChunkName: "Committees_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Committees/index.html.js"), meta: {"t":""} }],
  ["/Deadline/", { loader: () => import(/* webpackChunkName: "Deadline_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Deadline/index.html.js"), meta: {"t":""} }],
  ["/Contact/", { loader: () => import(/* webpackChunkName: "Contact_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Contact/index.html.js"), meta: {"t":""} }],
  ["/PDFReader/", { loader: () => import(/* webpackChunkName: "PDFReader_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/PDFReader/index.html.js"), meta: {"t":""} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"Guide","i":"lightbulb"} }],
  ["/Pre-Conference/", { loader: () => import(/* webpackChunkName: "Pre-Conference_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Pre-Conference/index.html.js"), meta: {"t":""} }],
  ["/Program/", { loader: () => import(/* webpackChunkName: "Program_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Program/index.html.js"), meta: {"t":""} }],
  ["/Registration/", { loader: () => import(/* webpackChunkName: "Registration_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Registration/index.html.js"), meta: {"t":""} }],
  ["/Sponsors/", { loader: () => import(/* webpackChunkName: "Sponsors_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Sponsors/index.html.js"), meta: {"t":""} }],
  ["/Speakers/", { loader: () => import(/* webpackChunkName: "Speakers_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Speakers/index.html.js"), meta: {"t":""} }],
  ["/Submission/", { loader: () => import(/* webpackChunkName: "Submission_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Submission/index.html.js"), meta: {"t":""} }],
  ["/Venue/", { loader: () => import(/* webpackChunkName: "Venue_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/Venue/index.html.js"), meta: {"t":""} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"Bar feature","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"t":"Foo feature","i":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/IDE/nodejs_project/mita/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);
