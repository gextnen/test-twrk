<script>
import { defineComponent } from "@nuxtjs/composition-api";
import Card from "../display/Card.vue";
import TheText from "../display/TheText.vue";

export default defineComponent({
  components: { Card, TheText },
  setup() {},
});
</script>

<template>
  <Card>
    <div class="flex">
      <div class="max-w-[60%]">
        <TheText :content="'Нужна помощь?'" />
        <TheText
          :content="'Мы поможем! Просто свяжитесь с нами.'"
          class="mb-[30px]"
        />
        <span
          v-text="
            'Наши специалисты с радостью ответят на все ваши вопросы и дадут профессиональную консультацию по товарам.'
          "
        />
      </div>
      <div class="flex flex-col text-center">
        <a
          href="tel:+79998887766"
          class="text-50 text-text-blue"
          v-text="'8 (800) 888-90-28'"
        />
        <span class="text-main text-24" v-text="'или'" />
        <a
          href="mailto:info@example.ru"
          class="text-34 text-text-blue"
          v-text="'info@example.ru'"
        />
      </div>
    </div>
  </Card>
</template>
