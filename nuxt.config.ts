import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nitro-cloudflare-dev",
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/icon',
//    '@nuxtjs/tailwindcss',
    'nuxt-studio',
    '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  compatibilityDate: "2025-05-15",
  ui: {
    content: true
  },
  studio: {
    i18n: {
      defaultLocale: 'es'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    },

    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  css: ['./app/assets/css/main.css'],
})