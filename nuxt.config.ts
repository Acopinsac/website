import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/icon',
//    '@nuxtjs/tailwindcss',
    'nuxt-studio',
    '@nuxtjs/color-mode'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
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
    }
  },
  css: ['./app/assets/css/main.css'],
})