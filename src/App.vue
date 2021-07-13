<template>
  <div id="app" class="w-full h-full bg-gray-900 md:bg-gray-800">
    <header-marvel class="index" />
    <div class="cont">
      <div>a</div>
      <content-marvel />
    </div>
  </div>
</template>

<script>
import HeaderMarvel from "./components/global/HeaderMarvel.vue";
import ContentMarvel from "./components/global/ContentMarvel.vue";

export default {
  name: "App",
  components: {
    HeaderMarvel,
    ContentMarvel,
  },
};
</script>

<style scoped>
.index{
  z-index: 10;
}
.cont{
  display: grid;
  grid-auto-rows: 4rem 1fr;
}
</style>
