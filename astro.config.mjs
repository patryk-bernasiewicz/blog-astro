import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:8080",
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
  ],
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  vite: {
    resovle: {
      alias: {
        "@i18n": "/src/i18n",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@lib": "/src/lib",
        "@images": "/src/images",
        "@types": "/src/types.ts",
        "@consts": "/src/consts.ts",
        "@": "/src",
      },
    },
  },
});
