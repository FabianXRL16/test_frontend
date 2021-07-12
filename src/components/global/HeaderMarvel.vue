<template>
  <div class="h-16 w-full fixed bg-gray-800 flex justify-between items-center px-4 sm:px-12 md:px-56 shadow-lg">
    <div class="w-auto">
        <img src="@/assets/logo_marvel.svg" alt="logo marvel" class="h-10 w-auto">
    </div>
    <div class="flex h-10 w-2/3 justify-end">
        <input-text v-if="ok" :placeholderLarge="'Ejemplo. Capitan América'" :placeholderSmall="'Ej. Iron Man'" class="w-4/5 sm:w-full h-full" />
        <search @ToShowInputSearch="ToShowInput" :text="'Buscar'" class="w-auto z-10" />
    </div>
  </div>
</template>

<script>
import InputText from '../forms/InputText.vue'
import Search from '../buttons/Search.vue'
export default {
  components: { InputText, Search },
  name: 'HeaderMarvel',
  props: {},
  data() {
    return {
        ok: false
    };
  },
  methods:{
      ToShowInput(ok){
          this.ok = ok
      }
  }
}
</script>

<style scoped>
</style>