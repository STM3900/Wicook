<template>
  <ul>
    <li>
      Temps total :
      {{ infoObject.preparationTime + infoObject.cookingTime }} minutes
    </li>
    <li>Temps de préparation : {{ infoObject.preparationTime }} minutes</li>
    <li>Temps de cuisson : {{ infoObject.cookingTime }} minutes</li>
    <li>Difficulté : {{ infoObject.difficulty }}</li>
    <li>Prix : {{ infoObject.price }}</li>
  </ul>
</template>

<script>
export default {
  name: "Infos",
  props: {
    infoObject: Object
  }
};
</script>

<style scoped></style>
