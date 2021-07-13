<template>
  <div
    class="item bg-gray-200 h-full md:h-56 w-full
                md:56 md:w-full md:flex block rounded-2xl
                mb-6 md:mb-0 shadow-md"
  >
    <img
      :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
      class="h-72 md:h-56 md:w-56 w-72 md:rounded-l-2xl hidden md:flex"
      :alt="hero.name"
    />
    <div
      class="item__info bg-gradient-to-t from-gray-900 to-transparent md:bg-gradient-to-t md:from-gray-300 md:to-gray-300
              flex flex-col justify-between p-4
              pt-14 pb-8 md:p-6 md:rounded-r-2xl w-full"
    >
      <span
        class="text-gray-900 md:text-gray-700 text-3xl font-semibold mb-4"
        >{{ hero.name }}</span
      >
      <span
        class="md:text-gray-700 text-gray-300"
        :class="isMobile ? 'shadow' : ' '"
      >
        {{ hero.description }}</span
      >
      <div class="flex justify-between pt-4">
        <span class="text-blue-600">{{ formt(hero.modified)}}</span>
        <button v-if="active" @click="closedModal()">
          <btn :text="'Editar'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "../buttons/BtnPrimary.vue";
export default {
  name: "Card",
  props: {
    active: Boolean,
    hero: Object,
  },
  components: {
    Btn,
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 396;
    },
  },
  methods: {
    closedModal() {
      this.$emit("closeModal", true);
    },
    formt(fecha){
    let fechaN = fecha.replace(/\D/g, " ").split(" ")
    fechaN.pop()
    fechaN.pop()
    fechaN.pop()
    fechaN.pop()
    return fechaN.join("-")
}
  },
};
</script>

<style scoped>
.shadow {
  text-shadow: 1px 1px 10px #1f2937;
}
@media (max-width: 768px) {
  .item {
    background-image: url("https://depor.com/resizer/0zkaQJz8PXH8P7DubaMv747oKvQ=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/YRDRN2AWWNATVHH3CPLXR4FUPA.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
  }
  .item__info {
    border-radius: 1rem;
  }
}
</style>
