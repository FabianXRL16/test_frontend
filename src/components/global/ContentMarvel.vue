<template>
  <div class="px-4 sm:px-12 md:px-56 py-4 sm:py-10 h-screen scroll">
    <ListCharacters :heros="heros" :editActive="editActive"  @closeModal="closeModal()" />
    <div class="rounded-full fixed z-10" :class="isMobile ? 'pointMobile' : isTable ? 'pointTable' : ' pointDesktop'">
      <edit-floating v-model="editActive" class="index" />
    </div>
  </div>
</template>

<script>
import ListCharacters from "../lists/ListCharacters.vue";
import EditFloating from "../buttons/EditFloating.vue";
export default {
  name: "ContentMarvel",
  components: {
    ListCharacters,
    EditFloating,
  },
  props: {
    heros: Array
  },
  data() {
    return {
      editActive: false,
    };
  },
  computed:{
    isMobile(){
      return window.innerWidth <= 396
    },
    isTable(){
      return window.innerWidth <= 768 && window.innerWidth >= 396
    }
  },
  methods:{
    closeModal(resp){
      this.$emit("closedModal",resp)
    }
  }
};
</script>

<style scoped>
.pointMobile{
  bottom: 40px;
  right: 20px;
}
.pointTable{
  bottom: 60px;
  right: 53px;
}
.pointDesktop{
  bottom: 80px;
  right: 229px;
}
.scroll {
    overflow-y: scroll;
  }
  .scroll::-webkit-scrollbar {
    width: 5px;
  }
  .scroll::-webkit-scrollbar-thumb {
    background: #111827;
    border-radius: 5px;
  }

</style>
