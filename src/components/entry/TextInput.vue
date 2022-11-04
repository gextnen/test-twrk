<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    overrideClasses: {
      type: Object,
      default: () => {},
    },
  },
});
</script>

<template>
  <input
    :type="type"
    class="p-5 border border-[#DFDFDF] rounded-[5px] placeholder-text-text-300"
    :class="overrideClasses"
  />
</template>
