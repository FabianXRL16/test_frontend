<template>
  <button class="text-white px-4 rounded-full bg-blue-600 outline-none">
    {{text}}
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
