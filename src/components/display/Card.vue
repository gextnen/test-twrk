<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    overrideClases: {
      type: Object,
      default: () => {},
    },
  },
});
</script>

<template>
  <div class="rounded-[16px] p-8 bg-secondary" :class="overrideClases">
    <slot />
  </div>
</template>
