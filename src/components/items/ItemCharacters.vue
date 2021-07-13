<template>
  <div>
    <card :hero="hero" @closeModal="closeModal()" :active="active" />
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
    active: Boolean,
    hero: Object,
  },
  methods:{
    closeModal(resp){
      this.$emit("closeModal",resp)
    }
  }
};
</script>

<style scoped></style>