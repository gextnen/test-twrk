<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const items = [
      "Incididunt ut labore et dolore magna aliqua",
      "Incididunt ut labore et",
      "Incididunt ut labore et dolore",
      "Labore et dolore",
      "Incididunt ut",
      "Incididunt ut labore et dolore",
      "Incididunt ut labore",
    ];

    return {
      items,
    };
  },
});
</script>

<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item">
        <span class="text-red mr-3">•</span>
        <span v-text="item" />
      </li>
    </ul>
  </div>
</template>
