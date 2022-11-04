<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Title from "@/components/display/Title.vue";
import RateList from "@/components/rate/RateList.vue";

export default defineComponent({
  components: { Title, RateList },
});
</script>

<template>
  <div class="mt-[30px]">
    <Title :title="'Курс рубля'" />
    <RateList />
  </div>
</template>
