<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Title from "@/components/display/Title.vue";
import CalculatorForm from "@/components/calculator/CalculatorForm.vue";
import CalculatorInfo from "@/components/calculator/CalculatorInfo/CalculatorInfo.vue";

export default defineComponent({
  components: { Title, CalculatorForm, CalculatorInfo },
  setup() {},
});
</script>

<template>
  <div class="mt-[30px]">
    <Title :title="'Валютный калькулятор'" />
    <div class="grid-main">
      <CalculatorForm class="grid-main__calc" />
      <CalculatorInfo class="grid-main__info" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.grid-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  &__calc {
  }
}
</style>
