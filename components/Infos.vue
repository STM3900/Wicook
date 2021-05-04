<template>
  <ul>
    <li>
      Temps total :
      {{ infoObject.preparationTime + infoObject.cookingTime }} minutes
    </li>
    <li>Temps de préparation&nbsp;: {{ infoObject.preparationTime }} minutes</li>
    <li>Temps de cuisson&nbsp;: {{ infoObject.cookingTime }} minutes</li>
    <li>Difficulté&nbsp;: {{ infoObject.difficulty }}</li>
    <li>Prix&nbsp;: {{ infoObject.price }}</li>
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
