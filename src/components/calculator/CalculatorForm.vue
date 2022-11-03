<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Card from "../display/Card.vue";
import InputField from "../entry/InputField.vue";

export default defineComponent({
  components: { InputField, Card },
  setup() {
    const fields = [
      {
        key: "value1",
        label: "Валюта 1",
        placeholder: "Введите название или код",
      },
      {
        key: "value2",
        label: "Валюта 2",
        placeholder: "Введите название или код",
      },
      {
        key: "amount",
        label: "Количество",
        placeholder: "Введите число",
      },
    ];
    return {
      fields,
    };
  },
});
</script>

<template>
  <div class="mt-[30px]">
    <InputField
      v-for="field in fields"
      :key="field.key"
      :label="field.label"
      :placeholder="field.placeholder"
    />
    <Card> \Hello </Card>
  </div>
</template>
