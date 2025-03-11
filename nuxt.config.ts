// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: ["~/assets/global.css"],
  app: {
    head: {
      title: "Lucas Zhang",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
});
