<script>
import {
  computed,
  defineComponent,
  ref,
  useStore,
} from "@nuxtjs/composition-api";
import Card from "@/components/display/Card.vue";
import Mark from "@/components/display/Mark.vue";
import InputField from "@/components/entry/InputField.vue";
import TheText from "@/components/display/TheText.vue";

export default defineComponent({
  components: { InputField, Card, Mark, TheText },
  setup() {
    const store = useStore();
    const form = ref({
      valFrom: "",
      valTo: "",
      amount: "",
    });

    const fields = [
      {
        key: "valFrom",
        label: "Валюта 1",
        placeholder: "Введите название или код",
      },
      {
        key: "valTo",
        label: "Валюта 2",
        placeholder: "Введите название или код",
      },
      {
        key: "amount",
        label: "Количество",
        placeholder: "Введите число",
        type: "number",
      },
    ];

    const valFrom = computed(() =>
      Object.values(store.state.valutes).find(
        (val) => val.CharCode === form.value.valFrom.toUpperCase()
      )
    );
    const valTo = computed(() =>
      Object.values(store.state.valutes).find(
        (val) => val.CharCode === form.value.valTo.toUpperCase()
      )
    );
    const result = computed(() =>
      ((valFrom.value?.Value / valTo.value?.Value) * form.value.amount).toFixed(
        3
      )
    );

    return {
      store,
      fields,
      result,
      form,

      valFrom,
      valTo,
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
      :type="field.type"
      v-model="form[field.key]"
    />
    <Card class="flex items-center mt-11">
      <Mark :icon="'info'" class="mr-11" />
      <TheText
        :content="`Итого: ${result || '...'}`"
        :overrideClasses="'text-24 font-bold text-primary'"
      />
    </Card>
  </div>
</template>
