<template>
  <div>
    <h1>Wsh c'est l'accueil</h1>
    <div v-for="page in data" :key="page.url">
      <p>{{ page.author }}</p>
      <nuxt-link :to="'/' + page.url">
        Aller à la recette
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import MASTER_JSON from "../assets/json/MASTER_JSON";

export default {
  data() {
    return {
      data: MASTER_JSON
    };
  }
};
</script>

<style>
body {
  margin: 0;
  margin-right: 20%;
  margin-left: 20%;
}
</style>
