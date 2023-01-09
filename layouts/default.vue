<template>
  <div>
    <Container>
      <slot />
    </Container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Container from "~/components/common/Container.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    Container,
  },
});
</script>

<style scoped></style>
