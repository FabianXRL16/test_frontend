<template>
  <input
    :placeholder="isMobile ? placeholderSmall :  placeholderLarge"
    type="text"
    name="search"
    class="h-full bg-blue-600 rounded-full bg-transparent outline-none pl-4 sm:pl-6 right-20 text-white placeholder-gray-300"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    placeholderLarge: String,
    placeholderSmall: String
  },
  computed:{
    isMobile(){
      return window.innerWidth <= 396
    }
  }
};
</script>

<style scoped></style>
