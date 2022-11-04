<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Card from "@/components/display/Card.vue";
import TheText from "@/components/display/TheText.vue";
import CalculatorInfoList from "./CalculatorInfoList.vue";
import CalculatorInfoImgs from "./CalculatorInfoImgs.vue";

export default defineComponent({
  components: {
    TheText,
    Card,
    CalculatorInfoList,
    CalculatorInfoImgs,
  },
  setup() {},
});
</script>
<template>
  <Card>
    <TheText
      :content="'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor:'"
      :overrideClasses="'font-medium font-15 text-primary uppercase mb-[30px]'"
    />
    <div class="info">
      <CalculatorInfoList />
      <CalculatorInfoImgs />
    </div>
  </Card>
</template>
<style lang="scss" scoped>
.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
