<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Title from "@/components/display/Title.vue";
import CalculatorForm from "@/components/calculator/CalculatorForm.vue";

export default defineComponent({
  components: { Title, CalculatorForm },
  setup() {},
});
</script>

<template>
  <div class="mt-[30px]">
    <Title :title="'Валютный калькулятор'" />
    <CalculatorForm />
  </div>
</template>
