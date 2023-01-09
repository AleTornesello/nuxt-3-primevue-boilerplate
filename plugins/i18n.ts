import { createI18n } from "vue-i18n";
import locales from "../locales";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages: {
    en: locales.en,
  },
});

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(i18n);
});

export { i18n };
