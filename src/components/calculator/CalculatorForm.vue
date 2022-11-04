<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import Card from "@/components/display/Card.vue";
import Mark from "@/components/display/Mark.vue";
import InputField from "@/components/entry/InputField.vue";
import TheText from "@/components/display/TheText.vue";

export default defineComponent({
  components: { InputField, Card, Mark, TheText },
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
    const result = ref(123);
    return {
      fields,
      result,
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
    <Card class="flex items-center mt-11">
      <Mark :icon="'info'" class="mr-11" />
      <TheText
        :content="`Итого: ${result}`"
        :overrideClasses="'text-24 font-bold'"
      />
      <!-- <TheText :content="'Нужна помощь?'" />
      <TheText :content="'Просто свяжитесьы с нами'" /> -->
    </Card>
  </div>
</template>
