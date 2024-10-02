import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import "dotenv/config";

import icon from "astro-icon";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:8080",
  build: {
    redirects: false,
  },
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    compress(),
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
    build: {
      cssMinify: "lightningcss",
    },
    ssr: {
      noExternal: ["tailwindcss"],
    },
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
