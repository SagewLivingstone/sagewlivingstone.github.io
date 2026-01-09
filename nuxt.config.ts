// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    // Private keys (server-side only, never exposed to client)
    flickrApiKey: process.env.NUXT_FLICKR_API_KEY,
    flickrUserId: process.env.NUXT_FLICKR_USER_ID,
  },
});
