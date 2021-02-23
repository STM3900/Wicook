<template>
  <div>
    <h1>plop</h1>
    <ListeIngredients />
  </div>
</template>

<script>
import ListeIngredients from "../components/Liste-Ingredients";
export default {
  components: { ListeIngredients },
  data() {
    return {
      items: [{ message: "Salut" }, { message: "Les amis" }]
    };
  }
};

</script>

<style></style>
