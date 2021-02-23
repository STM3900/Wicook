<template>
  <ul>
    <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListeIngredients",
  data() {
    return {
      items: [{ message: "Salut" }, { message: "Les amis" }]
    };
  }
};
</script>

<style scoped></style>
