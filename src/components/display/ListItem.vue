<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    textClasses: {
      type: String,
    },
  },
});
</script>

<template>
  <div>
    <span class="text-red mr-3">•</span>
    <span v-text="name" :class="textClasses" />
  </div>
</template>
