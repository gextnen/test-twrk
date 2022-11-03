<template>
  <div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootPath: this.$route.matched[0].path,
    };
  },

  computed: {
    isRoot() {
      return this.rootPath === this.$route.path;
    },

    title() {
      return this.$route.name.replace(/^.*?-/, "");
    },

    h1() {
      return this.isRoot ? "Elements:" : `The ${this.title} element.`;
    },
  },
};
</script>

<style lang="scss" module>
.Example {
  //
}
</style>
