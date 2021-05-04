export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wicook',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Envie de cuisiner ? Sur Wicook, retrouvez des recettes conçues avec amour !' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: './favicon.png' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['nuxt-fontawesome', {
      component: 'fa', //customize component name
      imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faHome', 'faSearch', 'faCode']
          },
          {set: '@fortawesome/free-brands-svg-icons',
          icons: []
          },
          {set: '@fortawesome/free-regular-svg-icons',
          icons: []
          },
      ]
   }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
		routes: [
		]
	},

  router: {
    base: '/wicook/'
  }
}
