<script>
import { defineComponent } from "@nuxtjs/composition-api";
import TextInput from "./TextInput.vue";

export default defineComponent({
  components: { TextInput },
  props: {
    label: {
      type: String,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
  },
  setup() {},
});
</script>
<template>
  <div class="flex flex-col">
    <span
      v-text="label"
      class="text-dark font-medium mb-[15px] text-14 leading-19"
    />
    <TextInput :type="type" :placeholder="placeholder" />
  </div>
</template>
