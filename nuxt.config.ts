import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  meta: {
    title: 'Xanonymous Core Cells',
  },
  buildModules: [
    '@vueuse/core/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    logLevel: 'info',
    build: {
      minify: 'terser',
      brotliSize: true,
      cssCodeSplit: true,
      terserOptions: {
        sourceMap: false,
        ecma: 5,
        ie8: true,
        safari10: true,
        keep_classnames: false,
        keep_fnames: false,
        compress: true,
        format: {
          preserve_annotations: false,
          comments: false,
        },
      },
      chunkSizeWarningLimit: 100000,
    },
  },
})
