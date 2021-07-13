<template>
  <button class="text-white px-4 rounded-full bg-blue-600 outline-none hover:shadow-lg hover:bg-blue-700">
    {{text}}
  </button>
</template>

<script>
export default {
  name: "BtnPrimary",
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
