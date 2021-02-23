<template>
  <div>
    <h1>plop</h1>
    <ListeIngredients :ingredients="ingredientsData" />
  </div>
</template>

<script>
import ListeIngredients from "../components/Liste-Ingredients";
export default {
  components: { ListeIngredients },
  data() {
    return {
      ingredientsData: [{ nom: "Salut" }, { nom: "Les amis" }]
    };
  }
};
</script>

<style></style>
