import { defineNuxtConfig } from '@nuxt/bridge'
import global from './utils/global'

export default defineNuxtConfig({
  ssr: process.env.SSR_ENV !== 'false',

  head: {
    titleTemplate: '%s | ' + global.siteName,
    title: global.siteName + ' | ' + global.siteTag,
    htmlAttrs: {
      lang: global.siteLang,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  env: {
    baseUrl: global.siteUrl,
  },

  loading: {
    color: global.siteColor,
  },

  css: ['./styles/main.scss'],

  plugins: ['./plugins/fontawesome.js'],

  components: true,

  modules: [],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/html-validator',
    '@nuxtjs/style-resources',
    'nuxt-purgecss',
  ],

  alias: {
    tslib: 'tslib/tslib.es6.js',
  },

  build: {
    extractCSS: process.env.NODE_ENV === 'production',
  },
})
