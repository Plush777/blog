import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// https://vite-pwa-org.netlify.app/frameworks/astro.html
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), AstroPWA({
    mode: 'development',
    base: '/', 
    scope: '/',
    includeAssets: ['favicon.png'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'Plush tech blog',
      short_name: 'Plush blog',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/ms/ms-icon-70x70.png',
          sizes: '70x70',
          type: 'image/png',
        },
        {
          src: '/ms/ms-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/ms/ms-icon-150x150.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/ms/ms-icon-310x310.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/android/android-icon-36x36.png',
          sizes: '36x36',
          type: 'image/png',
        },
        {
          src: '/android/android-icon-48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: '/android/android-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/android/android-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/apple/apple-icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/apple/apple-icon-60x60.png',
          sizes: '60x60',
          type: 'image/png',
        },
        {
          src: '/apple/apple-icon-144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: '/apple/apple-icon-180x180.png',
          sizes: '180x180',
          type: 'image/png',
        },
        {
          src: '/size/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: '/size/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: '/size/favicon-96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globDirectory: "C:/Users/user/Desktop/my-blog/plush-blog/dev-dist",
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
      globIgnores: [
        "**/node_modules/**/*", 
        "sw.js",
        "workbox-*.js"
      ]
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\//],
    },
    experimental: {
      directoryAndTrailingSlashHandler: true,
    }
  }),]
});