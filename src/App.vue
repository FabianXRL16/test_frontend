<template>
  <div id="app" class="w-full fixed flex h-full bg-gray-900 md:bg-gray-800">
    <header-marvel class="index" />
    <div class="cont">
      <div>a</div>
      <content-marvel :heros="data" @closedModal="closeModal" />
      <div>
      </div>
    </div>
    <modal v-if="modal" @closedModalM="closeModalM" />
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
      modal: false,
      keyPublic: "0df96bc032ccebae109b9066f3cbbaf6",
      keyPrivate: "787e204c3d3c444e363eeed44f50e4f56755e3a8",
      keyNew: "1787e204c3d3c444e363eeed44f50e4f56755e3a80df96bc032ccebae109b9066f3cbbaf6",
      data: []
    };
  },
  methods:{
    closeModal(){
      this.modal = true
    },
    closeModalM(){
      this.modal = false
    },
    getDataApi(){
      const marvel = {
        render: () => {
          const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=0df96bc032ccebae109b9066f3cbbaf6&hash=88fb4e8c1b4dc9216eba3710fac9a37a';
          fetch(urlApi)
          .then(res => res.json())
          .then((json)=>{
            for(const hero of json.data.results){
              let info = {
                name: hero.name,
                description: hero.description,
                thumbnail: hero.thumbnail,
                modified: hero.modified
              }
              this.data.push(info)
            }
          })
        }
      }
      marvel.render()
    }
  },
  mounted(){
    this.getDataApi()
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
