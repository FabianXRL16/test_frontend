<template>
  <div>
    <card :active="active" />
  </div>
</template>

<script>
import Card from "../global/Card.vue";
export default {
  name: "ItemCharacters",
  components: {
    Card,
  },
  props: {
    active: Boolean
  },
};
</script>

<style scoped></style>