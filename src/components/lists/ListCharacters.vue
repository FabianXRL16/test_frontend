<template>
  <div class="flex">
    <div class="md:grid grid-cols-1 gap-4">
      <item-characters
        @closeModal="closeModal()"
        v-for="(item, i) of items"
        :key="i"
        :active="editActive"
      />
    </div>
    <div class="flex justify-end">
    </div>
  </div>
</template>

<script>
import ItemCharacters from "../items/ItemCharacters.vue";
export default {
  name: "ListCharacters",
  components: {
    ItemCharacters,
  },
  props: {
    editActive: Boolean,
  },
  data() {
    return {
      items: [2, 2, 3, 4, 5, 5, 6, 1, 6, 7, 3, 8, 8, 8, 9, 9, 9, 6],
    };
  },
  methods:{
    closeModal(resp){
      this.$emit("closeModal",resp)
    }
  }
};
</script>

<style scoped>
</style>
