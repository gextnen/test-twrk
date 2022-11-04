<script>
import { defineComponent, computed, useStore } from "@nuxtjs/composition-api";
import RateCard from "./RateCard/RateCard.vue";

export default defineComponent({
  components: { RateCard },
  setup() {
    const store = useStore();
    const rateList = computed(() => Object.values(store.state.valutes));
    return {
      rateList,
    };
  },
});
</script>

<template>
  <div class="rate-list">
    <RateCard v-for="val in rateList" :key="val.ID" :value="val" />
  </div>
</template>
<style lang="scss" scoped>
.rate-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 40px;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
