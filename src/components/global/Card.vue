<template>
  <div
    class="item bg-gray-200 h-full md:h-56 w-full
                md:56 md:w-full md:flex block rounded-2xl
                mb-6 md:mb-0 shadow-md"
  >
    <img
      src="https://depor.com/resizer/0zkaQJz8PXH8P7DubaMv747oKvQ=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/YRDRN2AWWNATVHH3CPLXR4FUPA.jpg"
      class="h-72 md:h-56 md:w-56 w-72 md:rounded-l-2xl hidden md:flex"
      alt=""
    />
    <div
      class="item__info md:bg-gradient-to-t md:from-gray-300 md:to-gray-300
              flex flex-col justify-between p-4
              pt-14 pb-8 md:p-6 md:rounded-r-2xl "
    >
      <span
        class="md:text-gray-700 text-3xl font-semibold mb-4"
        >Capitán América</span
      >
      <span class="md:text-gray-700 text-gray-300">
        Capitán Américd asd a sd as d asd as dassssssssssss asdas dddddasdasdas
        asdasdasd a sdasdaa sASas da sd asd as d asd a d as das dasd as da fg df  ht h  dgds fsdgdfg dfg df g dfg df g dfg
        sdf sd f sdf sd fs df sdfs df sd f sd fsd g df h fg hj fg h dfgh df h s dfg wrtrhtrh rt hrt h rth
        e gfer gergerg e rg erg ergerger gergergewrgerg ergerge rg</span
      >
      <div class="flex justify-between pt-4">
        <span class="text-blue-600">13/12/1998</span>
        <button class="text-white px-4 rounded-full bg-blue-600">
          Editar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {},
};
</script>

<style scoped>
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
