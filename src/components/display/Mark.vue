<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "red",
    },
    icon: {
      type: String,
      default: "info.svg",
    },
  },
});
</script>

<template>
  <div
    :class="`w-[50px] h-[50px] border-[3px] rounded-tr-[15px] rounded-bl-[15px] text-${color}`"
  >
    <img
      class="w-[50px] h-[50px] p-3"
      :src="require(`~/assets/images/${icon}.svg`)"
    />
  </div>
</template>
