import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
  ],

  css: ['~/styles/main.scss'],

  unocss: {
    preflight: true,
  },

  colorMode: {
    classSuffix: '',
  },

  sourcemap: false,
})
