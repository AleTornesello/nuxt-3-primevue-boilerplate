// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "App",
    },
  },
  build: {
    transpile: ["primevue", "i18n", "pinia-plugin-store.client"],
  },
  css: [
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
    "bootstrap/dist/css/bootstrap-reboot.min.css",
    "bootstrap/dist/css/bootstrap-grid.min.css",
  ],
  modules: ["@pinia/nuxt"],
});
