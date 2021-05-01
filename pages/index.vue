<template>
  <div>
    <h1>{{ JSON_DATA.nomDeRecette }}</h1>
    <Header :title="JSON_DATA.nomDeRecette" :info="JSON_DATA.infoHeader" />
    <hr />
    <Etape
      v-for="(etape, i) in JSON_DATA.etapes"
      :key="i"
      :data="etape"
      :numEtape="i + 1"
    />
  </div>
</template>

<script>
import Header from "../components/Header";
import Liste from "../components/Liste";
import Infos from "../components/Infos";
import Etape from "../components/Etape";

export default {
  components: { Header, Liste, Infos, Etape },
  data() {
    return {
      JSON_DATA: {
        nomDeRecette: "Un roulé",

        //Pour le header
        infoHeader: {
          img: {
            src:
              "https://www.pngix.com/pngfile/big/13-135416_1484620737971-357-kb-italian-chef-png-transparent-png.png",
            alt: null
          },
          resume: {
            time: 20,
            difficulty: "Très facile",
            cost: "Bon marché"
          },
          ingredients: [
            { quantity: "100", unit: "g", name: "sucre" },
            { quantity: "1", unit: "sachet", name: "sucre vanillé" },
            { quantity: "1/2", unit: "sachet", name: "levure" },
            { quantity: "20", unit: "cl", name: "lait" }
          ],
          tools: [
            "Grille à gâteaux",
            "Fouet",
            "Cuillère en bois",
            "Un extracteur de gnocchi"
          ]
        },
        //Pour les étapes
        etapes: [
          {
            title: "Gnocchi 1",
            img: {
              src: null,
              alt: null
            },
            text: "sdhivhezsidhjcehiuzc"
          },
          {
            title: "Gnocchi 2",
            img: {
              src:
                "https://lh3.googleusercontent.com/proxy/i16BMgJMaWfx78WnJAAtqqQ_0RI_GAwmatTpGlM41qpI450DQe83N8GvIfTk7R5ULozTBkmWQLFRR9xYTU1rxonAz-WPXCo",
              alt: null
            },
            text: "sdhivhezsidhjcehiuzc"
          },
          {
            title: "Gnocchi 3",
            img: {
              src: null,
              alt: null
            },
            text: "sdhivhezsidhjcehiuzc"
          },
          {
            title: "Gnocchi 4",
            img: {
              src: null,
              alt: null
            },
            text: "sdhivhezsidhjcehiuzc"
          }
        ]
      }
      /*
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
        ],
        etapeInfo: {
          titre: "Gnocchi",
          img: {
            src:
              "https://cdn.discordapp.com/attachments/806687737071403018/837996841185837066/protoduo.jpg"
          },
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi porro ea officiis impedit? Quos culpa ab veniam, sit beatae mollitia iste molestias similique veritatis obcaecati adipisci laudantium placeat rerum?"
        }
      */
    };
  }
};

/*
  <Infos :infoObject="infos" />
  <Liste
    :listData="ingredientsData"
    type="ingredient"
    listName="Pour la gartiture"
  />
  <Liste :listData="UstencileData" type="ustencile" />
  <Liste :listData="liste" type="normal" />
  <Liste :listData="liste" type="num" />
  <Etape
    :title="etapeInfo.titre"
    :img="etapeInfo.img"
    :text="etapeInfo.text"
  />
*/
</script>

<style>
body {
  margin: 0;
  margin-right: 20%;
  margin-left: 20%;
}
</style>
