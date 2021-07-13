<template>
  <button class="text-white px-4 rounded-full bg-red-600 outline-none hover:shadow-lg hover:bg-red-700">
    {{text}}
  </button>
</template>

<script>
export default {
  name: "BtnSecondary",
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
