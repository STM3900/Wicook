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
    <div class="wrapper-container">
      <div class="radio-wrapper">
        <input
          type="radio"
          name="select"
          id="option-1"
          value=""
          v-model="selectedRegime"
        />
        <input
          type="radio"
          name="select"
          id="option-2"
          value="Végétarien"
          v-model="selectedRegime"
        />
        <input
          type="radio"
          name="select"
          id="option-3"
          value="Végan"
          v-model="selectedRegime"
        />
        <label
          @click="addRegimeToStorage"
          for="option-1"
          class="option option-1"
        >
          <span
            ><fa
              class="meat legend-icon"
              :icon="['fas', 'drumstick-bite']"
            />Tous</span
          >
        </label>
        <label
          @click="addRegimeToStorage"
          for="option-2"
          class="option option-2"
        >
          <span
            ><fa
              class="vegetarian legend-icon"
              :icon="['fas', 'leaf']"
            />Végétarien</span
          >
        </label>
        <label
          @click="addRegimeToStorage"
          for="option-3"
          class="option option-3"
        >
          <span
            ><fa
              class="vegan legend-icon"
              :icon="['fas', 'seedling']"
            />Végan</span
          >
        </label>
      </div>
    </div>

    <article v-if="data.length > 0">
      <template v-for="page in data">
        <div
          v-if="
            (filterIngredient(page.recetteInfos.infoHeader.ingredients) ||
              filter(page.recetteInfos.nomDeRecette)) &&
              filterRegime(page.recetteInfos.regime)
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
      selectedRegime: "",
      testList: [
        {
          quantity: "56",
          unit: "qodjzio",
          name: "hfuiehz"
        }
      ]
    };
  },
  mounted() {
    if (localStorage.getItem("regime")) {
      this.selectedRegime = localStorage.getItem("regime");
    }
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
    filterRegime(regime) {
      let temp = true;
      if (this.selectedRegime) {
        if (this.selectedRegime == "Végan") {
          if (regime != "Végan") {
            temp = false;
          }
        } else if (regime != "Végétarien") {
          temp = false;
        }
      }
      return temp;
    },
    getRegimeIcon(regime) {
      return regime == "Végan" ? "seedling" : "leaf";
    },
    addRegimeToStorage() {
      setTimeout(() => {
        localStorage.setItem("regime", this.selectedRegime);
      }, 10);
    }
  }
};
</script>

<style scoped>
.radio-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;
  margin-bottom: 30px;
  margin-top: 10px;
  gap: 15px;
}

.radio-wrapper .option {
  background: #fff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid lightgrey;
  transition: all 0.3s ease;
}

.radio-wrapper .legend-icon {
  margin-right: 10px;
}

input[type="radio"] {
  display: none;
}

#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2,
#option-3:checked:checked ~ .option-3 {
  border-color: gray;
}

#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot,
#option-3:checked:checked ~ .option-3 .dot {
  background: #fff;
}

.radio-wrapper .option span {
  color: #808080;
}

/* content */

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

.meat {
  color: #ec5353;
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
