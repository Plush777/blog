import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
// https://www.freecodecamp.org/news/how-to-add-google-analytics-to-your-astro-website/
export default defineConfig({
  site: "https://plush-tech.netlify.app/",
  integrations: [
    mdx(),
    sitemap(),

    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: true,
        serviceWorker: {
          cache: false,
          skipWaiting: true,
          clientsClaim: true
        }
      },
    }),
  ],
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});
