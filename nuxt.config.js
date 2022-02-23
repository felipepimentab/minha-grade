export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Minha Grade',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~layouts/global.css',
    './assets/sass/base/_normalize.scss',
    './assets/sass/base/_container.scss',
    './assets/sass/project/_buttons.scss',
    './assets/sass/project/_form.scss',
    './assets/fonts/_fonts.scss',
    '~assets/global.css',
  ],

  // Variables and mixins
  styleResources: {
    scss: [
      './assets/sass/base/_colors.scss',
      './assets/sass/base/_variables.scss',
      './assets/sass/base/_breakpoints.scss',
    ],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // style
    '@nuxtjs/style-resources',
    // Nuxt Firebase https://firebase.nuxtjs.org/
/*  [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAXOXgxbQsnmZzel8eIRhbrCmmCfBXNSEw",
          authDomain: "minha-grade-265c7.firebaseapp.com",
          projectId: "minha-grade-265c7",
          storageBucket: "minha-grade-265c7.appspot.com",
          messagingSenderId: "17615535995",
          appId: "1:17615535995:web:d56ed17923256a6c61c7de",
          measurementId: "G-BQEJ6MP7RD"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
            emulatorPort: 9099,
            emulatorHost: 'http://localhost',
          },
          storage: true,
          database: {
            emulatorPort: 9000,
            emulatorHost: 'http://localhost',
          },
          performance: true,
          analytics: true,
        }
      }
    ] */
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Minha Grade',
      short_name: 'Minha Grade',
      background_color: '#000000',
      lang: 'pt-br',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Nuxt Color Mode Configuration: https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  }
}
