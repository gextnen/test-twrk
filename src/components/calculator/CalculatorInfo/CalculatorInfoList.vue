<script>
import { defineComponent } from "@nuxtjs/composition-api";
import ListItem from "../../display/ListItem.vue";

export default defineComponent({
  components: { ListItem },
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
        <ListItem :name="item" />
      </li>
    </ul>
  </div>
</template>
