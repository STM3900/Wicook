<template>
  <ul>
    <li v-for="i in ingredients" :key="i.nom">
      {{ i.nom }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListeIngredients",
  props: {
    ingredients: Object
  }
};
</script>

<style scoped></style>
