import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    'bonsai.css',
    '~/assets/scss/index.scss'
  ],
  alias: {
    "@scss": "assets/scss",
  }
})
