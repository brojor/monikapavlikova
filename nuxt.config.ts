// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@unocss/nuxt'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  fonts: {
    families: [
      {
        name: 'Playfair Display',
        weights: [800],
      },
      {
        name: 'Inter',
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },
})
