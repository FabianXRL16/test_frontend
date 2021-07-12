<template>
  <button
    @click="ok = !ok"
    class="transform hover:scale-110
        motion-reduce:transform-none h-16 w-16 rounded-full
        fixed right-4 bottom-6 sm:right-24 sm:bottom-8
        md:right-36 md:bottom-16 outline-none btn flex justify-center items-center"
    :class="ok ? 'bg-yellow-600' : 'bg-red-600'"
  >
    <img v-if="ok" src="../../assets/edit.svg" class="h-8 w-8" alt="editar" />
    <img v-else src="../../assets/cancel.svg" class="h-6 w-6" alt="cancelar" />
  </button>
</template>

<script>
export default {
  name: "Edit",
  props: {},
  data() {
    return {
      ok: true,
    };
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
