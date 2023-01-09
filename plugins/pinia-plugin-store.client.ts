import { storePlugin } from "pinia-plugin-store";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$pinia?.use(
    storePlugin({
      stores: [{ name: "TestStore" }],
      storage: localStorage,
    })
  );
});
