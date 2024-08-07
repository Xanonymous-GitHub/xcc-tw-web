import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],

  unocss: {
    preflight: true,
  },

  colorMode: {
    classSuffix: '',
  },

  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },

  sourcemap: false,
  compatibilityDate: '2024-07-16',
})
