<template>
  <div>
    <h1>{{ nomDeRecette }}</h1>
    <Infos :infoObject="infos" />
    <Liste
      :listData="ingredientsData"
      type="ingredient"
      listName="Pour la gartiture"
    />
    <Liste :listData="UstencileData" type="ustencile" />
    <Liste :listData="liste" type="normal" />
  </div>
</template>

<script>
import Liste from "../components/Liste";
import Infos from "../components/Infos";

export default {
  components: { Liste, Infos },
  data() {
    return {
      nomDeRecette: "Un roulé",
      infos: {
        preparationTime: 20,
        cookingTime: 15,
        difficulty: "Très facile",
        price: "Bon marché"
      },
      ingredientsData: [
        { quantity: "100", unit: "g", name: "sucre" },
        { quantity: "1", unit: "sachet", name: "sucre vanillé" },
        { quantity: "1/2", unit: "sachet", name: "levure" },
        { quantity: "20", unit: "cl", name: "lait" }
      ],
      UstencileData: [
        "Grille à gâteaux",
        "Fouet",
        "Cuillère en bois",
        "Un extracteur de gnocchi"
      ],
      liste: [
        "Mélanger",
        "Incorporer le sucre cosmique",
        "Inverser la polarité de l'univers",
        "Extraire les gnocchi cosmique"
      ]
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
