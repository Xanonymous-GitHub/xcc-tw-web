import { defineNuxtConfig } from 'nuxt/config'

const buildDate = (() => {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
})()

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
  ],

  css: ['~/styles/main.scss'],

  runtimeConfig: {
    public: {
      privacyPolicyBuildDay: buildDate,
    },
  },

  nitro: {
    prerender: {
      routes: ['/privacy'],
    },
  },

  unocss: {
    preflight: true,
  },

  colorMode: {
    classSuffix: '',
  },

  sourcemap: false,

  vite: {
    esbuild: {
      logOverride: {
        'css-syntax-error': 'silent',
      },
    },
  },
})
