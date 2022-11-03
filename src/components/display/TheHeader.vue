<script>
import {
  defineComponent,
  useRoute,
  useRouter,
  computed,
} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const navigationItems = computed(() => [
      {
        title: "Калькулятор",
        path: "/calculator/",
        isActive: route.name === "calculator",
      },
      {
        title: "Курс рубля",
        path: "/rate/",
        isActive: route.name === "rate",
      },
    ]);
    return {
      navigationItems,
      router,
    };
  },
});
</script>
<template>
  <div class="py-4">
    <NuxtLink
      class="pr-8"
      v-for="item in navigationItems"
      :to="item.path"
      :key="item.title"
      v-text="item.title"
    />
  </div>
</template>
