<template>
  <div
    class="fixed p-4 md:px-10 md:py-20 h-auto md:w-1/3 bg-gray-400 rounded-3xl shadow-xl calc flex flex-col gap-y-8"
  >
    <div class="mx-auto">
      <img
        src="https://depor.com/resizer/0zkaQJz8PXH8P7DubaMv747oKvQ=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/YRDRN2AWWNATVHH3CPLXR4FUPA.jpg"
        alt=""
        class="rounded-full h-24 w-24"
      />
    </div>
    <div class="flex flex-col gap-y-4">
      <input
        type="text"
        class="w-full rounded-full h-10 px-4 outline-none text-gray-800 text-center"
        placeholder="Capitan América"
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="8"
        placeholder="El capitan america es el primer vengador, tambien es el más viejo, ya que estuvo congelado por muchos años ...."
        class="rounded-2xl outline-none text-gray-800 text-center p-2"
      ></textarea>
    </div>
    <div class="flex flex-col gap-y-4">
      <button>
          <btn-primary class="w-full py-2 font-medium" :text="'Guardar'" />
      </button>
      <button @click="closeModal()">
        <btn-secondary class="w-full py-2 font-medium" :text="'Cancelar'" />
      </button>
    </div>
  </div>
</template>

<script>
import BtnPrimary from "../buttons/BtnPrimary.vue";
import BtnSecondary from "../buttons/BtnSecondary.vue";
export default {
  name: "Modal",
  components: {
    BtnPrimary,
    BtnSecondary,
  },
  methods: {
    closeModal() {
      this.$emit("closedModalM", false);
    },
  },
};
</script>

<style scoped>
.calc {
  position: absolute;
  left: calc(100vw - 95%);
  top: calc(100vh - 90%);
  width: 90%;
  z-index: 999;
}
.capa {
  height: 100%;
  width: 100vw;
  background: black;
  opacity: 0.7;
  z-index: 990;
  position: absolute;
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
  .calc {
    position: absolute;
    height: 85%;
    left: calc(100vw - 67%);
    top: 5%;
    z-index: 999;
    box-shadow: 10px 10px 1px rgb(0, 76, 255);
  }
}
</style>
