<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const imgs = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.png"];
    return {
      imgs,
    };
  },
});
</script>

<template>
  <div class="info-imgs">
    <img
      class="info-imgs__item"
      v-for="img in imgs"
      :key="img"
      :src="require(`~/assets/images/${img}`)"
    />
  </div>
</template>
<style lang="scss" scoped>
.info-imgs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 8px;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    &__item {
      max-width: 120px;
    }
  }

  @media (max-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &__item {
  }
}
</style>
