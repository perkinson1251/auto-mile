// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: process.env.NODE_ENV === "production" ? false : true },
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    viewer: process.env.NODE_ENV === "production" ? false : true,
  },
})
