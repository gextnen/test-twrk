<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    overrideClasses: {
      type: Object,
    },
  },
  setup() {},
});
</script>

<template>
  <div>
    <span
      v-text="title"
      class="text-primary text-34 font-bold"
      :class="overrideClasses"
    />
  </div>
</template>
