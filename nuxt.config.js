const webpack = require('webpack')

module.exports = {
  router: {
    linkExactActiveClass: 'active',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    title: 'Nuxt template',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: '{{escape description }}'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    '@/assets/styles/main.scss'
  ],
  plugins: ['~plugins/bootstrap.js'],
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['jquery', 'bootstrap', 'axios'],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jquery': 'jquery',
        'jQuery': 'jquery'
      })
    ]
  }
}

