<template>
  <div class="px-4 sm:px-12 md:px-56 py-4 sm:py-10 h-screen scroll">
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from "../lists/ListCharacters.vue";
export default {
  name: "ContentMarvel",
  components: {
    ListCharacters,
  },
  props: {},
};
</script>

<style scoped>
.scroll {
    overflow-y: scroll;
  }
  .scroll::-webkit-scrollbar {
    width: 5px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background: #111827;
    border-radius: 5px;
  }
</style>
