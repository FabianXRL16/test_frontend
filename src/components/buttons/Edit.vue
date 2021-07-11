<template>
  <button
    class="bg-yellow-600 transform hover:scale-110
        motion-reduce:transform-none h-16 w-16 rounded-full
        fixed right-4 bottom-6 sm:right-24 sm:bottom-8
        md:right-36 md:bottom-16 outline-none btn flex justify-center items-center"
  >
    <img src="../../assets/edit.svg" class="h-8 w-8" alt="editar" />
  </button>
</template>

<script>
export default {
  name: "Edit",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.btn {
  box-shadow: 0px 0px 36px black;
  z-index: 10;
}
</style>
