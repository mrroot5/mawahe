const ampBoilerplate =
  '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'

const modifyHtml = (html) => {
  // Add amp-custom tag to added CSS and join all the CSS into one <style-tag>
  let styleConcat = ''
  html = html.replace(
    /(<style\b[^<>]*>)([^<]*)(<\/style>)/gi,
    (_match, p1, p2) => {
      styleConcat += p2
      return ''
    }
  )

  // Remove every script tag from generated HTML except the JSON type for the amp-state or the AMP templates
  html = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    (match) => {
      if (match.includes(`type="application/json"`)) {
        return match.replace(/&quot;/g, '"')
      }

      return ''
    }
  )

  const styleAmpCustom = `<style amp-custom>${styleConcat}</style>`

  // Add AMP script before </head>
  const ampScript = `<script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
  <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
  <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
  <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>`

  html = html.replace(
    '</head>',
    `
    ${ampBoilerplate}
    ${styleAmpCustom}
    ${ampScript}
    </head>
    `
  )

  html = html.replace(/<amp-carousel([^>]*)>/gi, (match) => {
    return match.replace('autoplay="autoplay"', 'autoplay')
  })

  return html
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // htmlAttrs: {
    //   amp: 'amp'
    // },
    title: `@${process.env.npm_package_name}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'mawahe tattoo and illustrator artist'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Adrián Garrido, https://github.com/mrroot5'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: '/' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#fff' },
  loading: false, // Disable loading bar since AMP will not generate a dynamic page
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  render: {
    // Disable resourceHints since we don't load any scripts for AMP
    resourceHints: false
  },
  hooks: {
    // This hook is called before generatic static html files for SPA mode
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  }
}
