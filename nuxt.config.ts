import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  meta: {
    title: 'Xanonymous Core Cells',
  },
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  nitro: {
    minify: true,
    sourceMap: false,
    node: false,
    prerender: {
      routes: ['/'],
    },
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
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
      cssCodeSplit: true,
      chunkSizeWarningLimit: 100000,
    },
  },
})
