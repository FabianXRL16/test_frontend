<template>
  <div class="md:grid grid-cols-1 gap-4">
    <item-characters v-for="(item, i) of items" :key="i" />
    <Edit class="index" />
  </div>
</template>

<script>
import Edit from "../buttons/Edit.vue";
import ItemCharacters from "../items/ItemCharacters.vue";
export default {
  name: "ListCharacters",
  components: {
    ItemCharacters,
    Edit,
  },
  data() {
    return {
      items: [2, 2, 3, 4, 5, 5, 6, 1, 6, 7, 3, 8, 8, 8, 9, 9, 9, 6],
    };
  },
  props: {},
};
</script>

<style scoped>
.index {
  z-index: 10;
}
</style>
