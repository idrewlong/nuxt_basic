// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "/")
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  // routeRules: {
  //   '/about/**' : {static:true},
  //   '/**' : {ssr:false},
  //   '/events/**' : {cors:true},
  // },

  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/myPlugin.ts'
  ],

  compatibilityDate: "2024-08-04",
})
