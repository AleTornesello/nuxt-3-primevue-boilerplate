<template>
  <div>
    <div>i18n: {{ i18n.t("TEST") }}</div>
    <div>testStore: {{ testStoreData }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useTestStore } from "~/stores/test";

export default defineComponent({
  name: "Home",
  setup() {
    useHead({
      titleTemplate: (originalTitle) => `${originalTitle} - Home`,
    });

    const i18n = useI18n();
    const testStore = useTestStore();

    const testStoreData = computed(() => testStore.getData);

    return {
      i18n,
      testStoreData,
    };
  },
});
</script>

<style scoped></style>
