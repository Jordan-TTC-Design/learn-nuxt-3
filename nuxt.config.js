// https://nuxt.com/docs/api/configuration/nuxt-config
const config = {
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt3 高效入門全攻略',
      meta: [
        {
          name: 'description',
          content: '這是 Mike 的 Nuxt3 高效入門全攻略課程',
        },
        { property: 'og:title', content: 'Nuxt3 高效入門全攻略' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        {
          property: 'og:description',
          content: '這是 Mike 的 Nuxt3 高效入門全攻略課程',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
      ],
      script: [
        // {
        //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
        //   async: true,
        // },
      ],
    },
  },

  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxtjs/i18n',
  ],
  runtimeConfig: {
    token: '',
    public: {
      apiUrl: '',
    },
  },
  // devServer: {
  //   https: {
  //     key: './https/localhost-key.pem',
  //     cert: './https/localhost.pem',
  //   },
  // },
  vite: {
    server: {
      proxy: {},
    },
  },
  i18n: {
    locales: [
      {
        code: 'zh-TW',
        file: 'zh-TW.json',
      },
      {
        code: 'en-US',
        file: 'en-US.json',
      },
    ],
    langDir: 'language',
    defaultLocale: 'zh-TW',
    detectBrowserLanguage: {
      useCookie: true,
    },
  },
  nitro: {
    plugins: ['~/server/db/index.js'],
  },
};

// if (process.env.NODE_ENV === 'development') {
//   config.vite.server.proxy = {
//     '/VsWeb/api': {
//       target: 'https://www.vscinemas.com.tw/',
//       changeOrigin: true,
//     },
//   };
// }

export default defineNuxtConfig(config);
