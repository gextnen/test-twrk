<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
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
    modelValue: {
      type: String,
      default: null,
    },
  },
});
</script>
<template>
  <div class="flex flex-col mb-[30px]">
    <span
      v-text="label"
      class="text-dark font-medium mb-[15px] text-14 leading-19"
    />
    <input
      :type="type"
      class="p-5 border border-[#DFDFDF] rounded-[5px] placeholder-text-text-300"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
