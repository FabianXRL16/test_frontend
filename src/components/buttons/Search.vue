<template>
  <button @click="ToShow" class="px-2 sm:px-8 bg-blue-600 rounded-full outline-none -ml-10 flex justify-center items-center">
      <span class="text-white font-medium mr-4 text-lg hidden sm:block">{{ text }}</span>
      <img src="@/assets/search.svg" alt="icon-search" class="h-6 w-6">
  </button>
</template>

<script>
export default {
  name: 'Search',
  props: {
      text: String
  },
  data() {
    return {
        ok: false
    };
  },
  methods:{
      ToShow(){
          this.ok = !this.ok
          this.$emit("ToShowInputSearch",this.ok)
      }
  }
}
</script>

<style scoped>
</style>