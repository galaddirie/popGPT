import packageJson from "./package.json";

import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest({
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,

  options_page: "src/pages/options/index.html",
  devtools_page: "src/pages/devtools/index.html",
  background: { service_worker: "src/pages/background/index.ts", "type": "module" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "public/images/icon.png"
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.ts"],
      //css: ["assets/css/contentStyle.chunk.css"],
    },
  ],
  permissions: [
    "activeTab",
    "storage",
    "scripting",
    "contextMenus"
  ],
  icons: {
    "16": "public/images/icon.png",
    "32": "public/images/icon.png",
    "48": "public/images/icon.png",
    "128": "public/images/icon.png"
  },
  // web_accessible_resources: [
  //   {
  //     resources: [
  //       "assets/js/*.js",
  //       "assets/css/*.css",
  //       "public/images/icon.png",
  //     ],
  //     matches: ["*://*/*"],
  //   },
  // ],
});

