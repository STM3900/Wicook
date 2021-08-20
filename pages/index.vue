<template>
  <div>
    <HomeButton
      title="Ajouter une recette"
      icon="plus"
      link="/ajouter"
      :fontSize="16"
    />
    <div class="logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div>
      <fa class="icon" :icon="['fas', 'search']" />
      <input
        type="text"
        v-model="filterValue"
        placeholder="Chercher une recette ou un ingrédient"
      />
    </div>
    <div class="legend">
      <p><fa class="vegan legend-icon" :icon="['fas', 'seedling']" />Végan</p>
      <p>
        <fa class="vegetarian legend-icon" :icon="['fas', 'leaf']" />Végétarien
      </p>
    </div>

    <article v-if="data.length > 0">
      <template v-for="page in data">
        <div
          v-if="
            filterIngredient(page.recetteInfos.infoHeader.ingredients) ||
              filter(page.recetteInfos.nomDeRecette)
          "
          :key="page.url"
          class="card"
          @click="goToRecipe(page.url)"
        >
          <div class="img">
            <img
              v-if="page.recetteInfos.infoHeader.img.src"
              :src="page.recetteInfos.infoHeader.img.src"
              :alt="page.recetteInfos.infoHeader.img.alt"
            />
          </div>
          <div class="text">
            <h3>{{ page.recetteInfos.nomDeRecette }}</h3>
            <section>
              <p>Par {{ page.recetteInfos.author }}</p>
              <p v-if="page.recetteInfos.regime">
                <fa
                  :class="
                    page.recetteInfos.regime == 'Végan' ? 'vegan' : 'vegetarian'
                  "
                  :icon="['fas', getRegimeIcon(page.recetteInfos.regime)]"
                />
              </p>
            </section>
          </div></div
      ></template>
    </article>
    <article v-else class="no-recipe">
      <p>
        Pas de recettes ! Ajoutez en
        <NuxtLink to="/ajouter" class="link">ici</NuxtLink> !
      </p>
    </article>
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton";
import MASTER_JSON from "~/assets/json/MASTER_JSON";

export default {
  components: { HomeButton },
  data() {
    return {
      data: MASTER_JSON,
      filterValue: "",
      testList: [
        {
          quantity: "56",
          unit: "qodjzio",
          name: "hfuiehz"
        }
      ]
    };
  },
  methods: {
    goToRecipe(url) {
      this.$router.push("/" + url);
    },
    filter(name) {
      let temp = false;
      if (name.toLowerCase().includes(this.filterValue.toLowerCase())) {
        temp = true;
      } else if (!this.filterValue) {
        temp = true;
      }

      return temp;
    },
    filterIngredient(ingredients) {
      let temp = false;
      let i = 0;
      while (!temp && i < ingredients.length) {
        if (
          ingredients[i].name
            .toLowerCase()
            .includes(this.filterValue.toLowerCase())
        ) {
          temp = true;
        } else if (!this.filterValue) {
          temp = true;
        }
        i++;
      }

      return temp;
    },
    testAdd() {
      this.testList.push({
        quantity: "56",
        unit: "qodjzio",
        name: "hfuiehz"
      });
    },
    getRegimeIcon(regime) {
      return regime == "Végan" ? "seedling" : "leaf";
    }
  }
};
</script>

<style scoped>
.content {
  flex: 1 0 auto;
}

.logo {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  margin-top: 25px;
  margin-bottom: 25px;
}

.logo img {
  height: 125px;
  transition: 0.3s;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  gap: 2em;
  margin-bottom: 20px;
}

.legend .legend-icon {
  margin-right: 7px;
}

.legend p {
  color: rgb(87, 87, 87);
}

article {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  gap: 2em;
  margin-bottom: 30px;
}

.card {
  width: 30%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: 0.3s;
}

.card:hover {
  transform: rotate(1deg);
  cursor: pointer;
}

.card:active {
  transform: scale(0.95);
}

.vegan {
  color: #a7c957;
}

.vegetarian {
  color: #6a994e;
}

input {
  width: 100%;
  /* haut | droit | bas | gauche */
  padding: 15px 20px 15px 40px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  margin-top: 10px;
  border: solid rgb(87, 87, 87) 1px;
  font-family: "Open Sans", sans-serif;
  transition: 0.3s;
  font-size: 14px;
}

input:focus {
  outline: none;
  border: solid black 1px;
}

.icon {
  position: absolute;
  padding: 27px 20px 27px 15px;
  font-size: 18px;
  color: #ec5353;
  color: #d3d3d3;
}

.card .img img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card .text {
  padding: 20px;
  padding-top: 10px;
}

.card .text h3 {
  font-size: 1.5rem;
  margin: 0;
}

.card .text p {
  margin: 0;
  color: rgb(87, 87, 87);
  font-size: 14px;
}

.card .text section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  width: 100%;
}

.no-recipe p {
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 810px) {
  .card {
    width: 45%;
  }
}

@media screen and (max-width: 525px) {
  article {
    flex-direction: column;
  }

  .card {
    width: 100%;
  }

  .logo img {
    height: 75px;
  }
}

@media screen and (max-width: 350px) {
  .logo img {
    height: 60px;
  }

  .card .img img {
    height: 100px;
  }

  .card .text {
    padding: 15px;
    padding-top: 5px;
  }

  .card .text h3 {
    font-size: 1.2rem;
  }
}
</style>
