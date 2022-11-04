<script>
import {
  defineComponent,
  useRoute,
  useRouter,
  computed,
} from "@nuxtjs/composition-api";
import Container from "./Container.vue";

export default defineComponent({
  components: { Container },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const navigationItems = computed(() => [
      {
        title: "Калькулятор",
        path: "/calculator/",
        isActive: route.value.name === "Calculator",
      },
      {
        title: "Курс рубля",
        path: "/rate/",
        isActive: route.value.name === "Rate",
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
  <div class="py-4 bg-gray">
    <Container>
      <NuxtLink
        class="pr-8 font-medium"
        :class="item.isActive ? 'text-text-gray-700' : 'text-text-gray-500'"
        v-for="item in navigationItems"
        :to="item.path"
        :key="item.title"
        v-text="item.title"
      />
    </Container>
  </div>
</template>
