<template>
  <div id="app" class="w-full bg-gray-800">
    <header-marvel class="ad" />
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
.ad{
  z-index: 10;
}
.cont{
  display: grid;
  grid-auto-rows: 4rem 1fr;
}
</style>
