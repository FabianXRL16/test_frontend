<template>
  <div id="app" class="w-full fixed flex h-full bg-gray-900 md:bg-gray-800">
    <header-marvel class="index" />
    <div class="cont">
      <div>a</div>
      <content-marvel />
    </div>
    <modal v-if="modal" @closedModal="closeModal" />
    <button v-if="modal"  @click="modal=false" class="h-full w-full bg-current opacity-75 z-30 fixed outline-none">
    </button>
  </div>
</template>

<script>
import HeaderMarvel from "./components/global/HeaderMarvel.vue";
import ContentMarvel from "./components/global/ContentMarvel.vue";
import Modal from "@/components/global/Modal.vue";

export default {
  name: "App",
  components: {
    HeaderMarvel,
    ContentMarvel,
    Modal,
  },
  data() {
    return {
      modal: true
    };
  },
  methods:{
    closeModal(){
      this.modal = false
    }
  }
};
</script>

<style scoped>
.index {
  z-index: 10;
}
.cont {
  display: grid;
  grid-auto-rows: 4rem 1fr;
}
</style>
