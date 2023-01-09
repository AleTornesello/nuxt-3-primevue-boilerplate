<template>
  <div>
    <NuxtLayout :key="route.fullPath">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>
