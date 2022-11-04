<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    overrideClasses: {
      type: String,
    },
    content: {
      type: String,
      default: "Нет данных",
    },
  },
  setup() {},
});
</script>

<template>
  <div
    :class="overrideClasses || 'text-36 text-text-blue font-medium'"
    v-text="content"
  />
</template>
