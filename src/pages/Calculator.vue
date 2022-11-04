<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Title from "@/components/display/Title.vue";
import CalculatorForm from "@/components/calculator/CalculatorForm.vue";
import CalculatorInfo from "@/components/calculator/CalculatorInfo/CalculatorInfo.vue";

export default defineComponent({
  components: { Title, CalculatorForm, CalculatorInfo },
});
</script>

<template>
  <div class="mt-[30px]">
    <Title :title="'Валютный калькулятор'" />
    <div class="grid-main">
      <CalculatorForm class="grid-main__calc" />
      <CalculatorInfo class="grid-main__info" />
      <CalculatorSupport class="grid-main__support" />
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
  &__support {
    margin-top: 40px;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}
</style>
