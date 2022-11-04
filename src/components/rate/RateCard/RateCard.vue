<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Card from "@/components/display/Card.vue";
import Mark from "@/components/display/Mark.vue";
import ListItem from "@/components/display/ListItem.vue";

export default defineComponent({
  components: { Card, Mark, ListItem },
  props: {
    value: {
      type: Object,
    },
  },
  setup() {},
});
</script>

<template>
  <Card
    overrideClases="bg-gray cursor-pointer hover:drop-shadow"
    class="rate-card"
  >
    <div class="mb-[36px]">
      <Mark :icon="'cash'" />
    </div>
    <div class="mb-[28px]">
      <span class="text-primary text-20 font-bold" v-text="value.CharCode" />
    </div>
    <div class="mb-[40px]">
      <span class="text-text-gray-950 text-16" v-text="value.Name" />
    </div>
    <div class="mb-[24px]">
      <ListItem
        :name="`Номинал: ${value.Nominal}`"
        :textClasses="'text-16 font-medium text-text-gray-900'"
      />
      <ListItem
        :name="`Курс: ${value.Value}`"
        :textClasses="'text-16 font-medium text-text-gray-900'"
      />
    </div>
  </Card>
</template>
