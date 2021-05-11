<template>
  <div>
    <HomeButton title="Accueil" icon="home" link="/" :fontSize="20" />
    <h1>Poster une recette</h1>
    <hr />
    <p>
      Envie de mettre la main à la pâte ? Rien de plus simple ! Vous pouvez
      ajouter votre recette en suivant ces quelques étapes :
    </p>
    <ol>
      <li>
        Remplissez le formulaire ci-dessous
      </li>
      <li>
        Une fois le formulaire complété, un fichier se téléchargera
      </li>
      <li>Envoyez-le moi par message privé sur discord</li>
      <li>
        Et voilà ! Votre recette apparaîtra en un clin d'oeil après vérification
      </li>
    </ol>
    <p>
      Si vous avez la moindre question, n'hésitez pas à me contacter sur discord
      ou twitter !
    </p>

    <div v-if="!isSend">
      <h1>Formulaire d'ajout</h1>
      <hr />
      <h2>Informations générales</h2>
      <label for="url">Url de la page</label>
      <input
        type="text"
        id="url"
        placeholder="ex : gnocchi"
        v-model="json.url"
      />

      <label for="recipeName">Nom de la recette</label>
      <input
        type="text"
        id="recipeName"
        placeholder="ex : Gnocchi maison"
        v-model="json.recetteInfos.nomDeRecette"
      />

      <label for="author">Son auteur</label>
      <input
        type="text"
        id="author"
        placeholder="ex : Théo"
        v-model="json.recetteInfos.author"
      />

      <label for="author">Pour combien de personnes ?</label>
      <input
        type="number"
        id="author"
        placeholder="ex : 4"
        v-model="json.recetteInfos.numberOfPerson"
      />

      <h2>Entête</h2>
      <label for="headerImgLink"
        >L'image de votre recette (lien uniquement)</label
      >
      <input
        type="text"
        id="headerImgLink"
        required
        placeholder="ex : https://theomigeat.com/gnocchi.jpg"
        v-model="json.recetteInfos.infoHeader.img.src"
      />

      <label for="headerImgAlt">Sa description alternative</label>
      <input
        type="text"
        id="headerImgAlt"
        placeholder="ex : photo de gnocchi"
        v-model="json.recetteInfos.infoHeader.img.alt"
      />

      <div class="input-group">
        <section>
          <label for="preparationTime">Temps de préparation (en minutes)</label>
          <input
            type="number"
            id="preparationTime"
            placeholder="ex : 15"
            v-model="json.recetteInfos.infoHeader.resume.preparationTime"
          />
        </section>
        <section>
          <label for="cookingTime">Temps de cuisson (en minutes)</label>
          <input
            type="number"
            id="cookingTime"
            placeholder="ex : 45"
            v-model="json.recetteInfos.infoHeader.resume.cookingTime"
          />
        </section>
      </div>

      <label for="difficulty">Difficulté : {{ getDifficulty }}</label>
      <input
        type="range"
        class="slider slider-bottom"
        id="difficulty"
        min="0"
        max="3"
        v-model="difficulty"
      />

      <label for="cost">Cout : {{ getCost }}</label>
      <input
        type="range"
        class="slider"
        id="cost"
        min="0"
        max="3"
        v-model="cost"
      />

      <h2>Ingrédients</h2>
      <div v-for="(item, i) in ingredients" :key="i" class="ingredient">
        <div class="title-section">
          <h3>Ingrédient n°{{ i + 1 }}</h3>
          <button @click="deleteElement(i, ingredients)" class="delete-button">
            &times;
          </button>
        </div>

        <article>
          <div class="input-group-ingredient">
            <section>
              <label :for="'ingredientQuantity' + i">Quantité</label>
              <input
                type="text"
                :id="'ingredientQuantity' + i"
                placeholder="ex : 500g"
                v-model="item.quantity"
              />
            </section>
            <section>
              <label :for="'ingredientUnit' + i">Unité</label>
              <input
                type="text"
                :id="'ingredientUnit' + i"
                placeholder="ex : g"
                v-model="item.unit"
              />
            </section>
            <section>
              <label :for="'ingredientName' + i">Nom de l'ingrédient</label>
              <input
                type="text"
                :id="'ingredientName' + i"
                placeholder="ex : de farine"
                v-on:keyup.enter="addIngredient()"
                v-model="item.name"
              />
            </section>
          </div>

          <p>
            Votre ingrédient : <b>{{ item.quantity }}{{ item.unit }}</b>
            {{ item.name }}
          </p>
        </article>
      </div>
      <button @click="addIngredient()" class="add-button">
        <fa :icon="['fas', 'plus']" />
      </button>

      <h2>Ustensiles</h2>
      <ul class="tool">
        <li v-for="(item, j) in tools" :key="j">
          <input
            type="text"
            :placeholder="'ex : Presse-purée'"
            v-on:keyup.enter="addTool()"
            v-model="item.tool"
          />
          <button @click="deleteElement(j, tools)" class="delete-button">
            &times;
          </button>
        </li>
      </ul>
      <button @click="addTool()" class="add-button">
        <fa :icon="['fas', 'plus']" />
      </button>

      <h2>Étapes</h2>
      <timeline v-for="(item, k) in etapes" :key="k">
        <timeline-title bg-color="#FFB39F">
          <div class="title-section">
            <h3>Étape {{ k + 1 }}</h3>
            <button @click="deleteElement(k, etapes)" class="delete-button">
              &times;
            </button>
          </div>

          <div class="checkGroup">
            <label :for="'checkbox' + k"
              >L'étape contient-elle une image ?</label
            >
            <input
              type="checkbox"
              :id="'checkbox' + k"
              class="checkmark"
              v-model="item[0].checked"
              @click="!item[0].checked ? addStepImg(k) : removeStepImg(k)"
            />
          </div>
          <label :for="'etapeText' + k">Description :</label>
          <textarea
            :id="'etapeText' + k"
            placeholder="ex : Épluchez et découpez les patates en cube, puis lavez-les à l'eau froide"
            v-model="item[0].text"
          />

          <template v-if="item[1]">
            <label :for="'etapeUrl' + k">l'url de l'image</label>
            <input
              type="text"
              :id="'etapeUrl' + k"
              placeholder="ex : https://theomigeat.com/gnocchi.jpg"
              v-model="item[1].src"
            />

            <label :for="'etapeAlt' + k">Sa description alternative</label>
            <input
              type="text"
              :id="'etapeAlt' + k"
              placeholder="ex : photo de gnocchi"
              v-model="item[1].alt"
            />
          </template>
        </timeline-title>
      </timeline>
      <button @click="addStep()" class="add-button-list">
        <fa :icon="['fas', 'plus']" />
      </button>
      <div class="source">
        <label :for="'source'"
          >Source de la recette (laissez vide si vous en êtes l'auteur)</label
        >
        <input
          type="text"
          id="source"
          placeholder="ex : https://www.marmiton.org/recettes/recette_gateau-au-yaourt_12719.aspx"
          v-model="json.recetteInfos.source"
        />
      </div>

      <div class="submit-div">
        <button class="submit-button" @click="submitForm()">
          Générer ma recette !
        </button>
      </div>
    </div>
    <div v-else class="sended">
      <h2>Recette envoyée !</h2>
    </div>
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton";
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";

export default {
  components: { HomeButton, Timeline, TimelineItem, TimelineTitle },
  data() {
    return {
      json: {
        url: "",
        recetteInfos: {
          nomDeRecette: "",
          author: "",
          source: "",
          numberOfPerson: "",
          infoHeader: {
            img: { src: "", alt: "" },
            resume: {
              preparationTime: null,
              cookingTime: null,
              difficulty: "",
              cost: ""
            },
            ingredients: [],
            tools: []
          },
          etapes: []
        }
      },
      difficulty: 0,
      difficultyTab: ["Très facile", "Facile", "Moyen", "Difficile"],
      cost: 0,
      costTab: ["Bon marché", "Abordable", "Moyen", "Couteux"],
      ingredients: [
        {
          quantity: "",
          unit: "",
          name: ""
        }
      ],
      tools: [{ tool: "" }],
      etapes: [[{ text: "", checked: false }]],
      isSend: false
    };
  },
  computed: {
    getDifficulty: function() {
      return this.difficultyTab[this.difficulty];
    },
    getCost: function() {
      return this.costTab[this.cost];
    }
  },
  methods: {
    show() {
      console.log(this.json);
    },
    download(exportObj, exportName) {
      let dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(exportObj));
      let downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    addIngredient() {
      this.ingredients.push({
        quantity: "",
        unit: "",
        name: ""
      });
      setTimeout(() => {
        const selector = document.querySelectorAll(
          ".input-group-ingredient input"
        );
        selector[selector.length - 3].focus();
      }, 10);
    },
    addTool() {
      this.tools.push({ tool: "" });
      setTimeout(() => {
        const selector = document.querySelectorAll(".tool li input");
        selector[selector.length - 1].focus();
      }, 10);
    },
    addStep() {
      this.etapes.push([{ text: "", checked: false }]);
    },
    addStepImg(index) {
      this.etapes[index].push({
        src: "",
        alt: ""
      });
      console.log(this.etapes);
      console.log(this.etapes[index]);
    },
    removeStepImg(index) {
      this.etapes[index].pop();
      console.log("wsh élément tej");
      console.log(this.etapes);
      console.log(this.etapes[index]);
    },
    submitForm() {
      this.json.recetteInfos.infoHeader.resume.difficulty = this.getDifficulty;
      this.json.recetteInfos.infoHeader.resume.cost = this.getCost;

      for (let i = 0; i < this.ingredients.length; i++) {
        this.json.recetteInfos.infoHeader.ingredients.push({
          quantity: this.ingredients[i].quantity,
          unit: this.ingredients[i].unit,
          name: this.ingredients[i].name
        });
      }

      for (let i = 0; i < this.tools.length; i++) {
        this.json.recetteInfos.infoHeader.tools.push(this.tools[i].tool);
      }

      for (let i = 0; i < this.etapes.length; i++) {
        if (this.etapes[i][1]) {
          this.json.recetteInfos.etapes.push({
            img: {
              src: this.etapes[i][1].src ? this.etapes[i][1].src : "",
              alt: this.etapes[i][1].alt ? this.etapes[i][1].alt : ""
            },
            text: this.etapes[i][0].text
          });
        } else {
          this.json.recetteInfos.etapes.push({
            img: {
              src: "",
              alt: ""
            },
            text: this.etapes[i][0].text
          });
        }
      }

      this.download(this.json, this.json.url);
      this.isSend = true;
    },
    deleteElement(index, array) {
      array.splice(index, 1);
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2.7rem;
  font-weight: 300;
  margin-left: -4px;
  margin-bottom: 0;
}

h2 {
  font-size: 1.8rem;
  font-weight: normal;
}

h3 {
  margin-top: 0;
  font-size: 1.3rem;
  margin-bottom: 0px;
}

input {
  border-radius: 2px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  /* haut | droit | bas | gauche */
  padding: 10px 20px 10px 15px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  margin-top: 10px;
  margin-bottom: 20px;
  border: solid rgb(87, 87, 87) 1px;
  font-family: "Open Sans", sans-serif;
  transition: 0.3s;
  font-size: 14px;
}

input:focus {
  outline: none;
  border: solid black 1px;
}

.tool input {
  width: 50%;
  /* haut | droit | bas | gauche */
  padding: 0px 2px 4px 2px;
  border-radius: 0;
  margin-right: 10px;

  border: none;
  border-bottom: solid rgb(87, 87, 87) 1px;
}

.tool button {
  transform: translateY(10px);
}

.tool button:hover {
  transform: translateY(10px) rotate(-20deg);
}

.input-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
}

.input-group section {
  width: 45%;
}

.input-group-ingredient {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
}

.input-group-ingredient section {
  width: 20%;
}

.input-group-ingredient section:last-child {
  width: 50%;
}

.ingredient {
  margin-bottom: 20px;
}

.ingredient h3 {
  margin-top: 0;
  font-weight: normal;
  font-size: 22px;
  margin-bottom: 10px;
}

.ingredient article {
  margin-left: 20px;
}

.ingredient p {
  margin: 0;
}

.timeline {
  margin-right: 0;
  margin-top: 0;
}

.timeline-title {
  display: block;
  transform: translateY(-4px);
  z-index: 1000;
}

.timeline-title:hover {
  cursor: auto;
}

.checkGroup {
  width: 100%;
  margin-bottom: 30px;
}

.slider {
  margin-top: 15px;

  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #ececec;
  outline: none;
  opacity: 0.8;
  -webkit-transition: 0.3s;
  transition: opacity 0.3s;
}

.slider-bottom {
  margin-bottom: 30px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #ec5353;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #ec5353;
  cursor: pointer;
}

.slider:focus {
  border: none;
}

textarea {
  width: 100%;
  min-height: 200px;
  /* haut | droit | bas | gauche */
  padding: 10px;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  margin-top: 10px;
  margin-bottom: 20px;
  border: solid rgb(87, 87, 87) 1px;
  font-family: "Open Sans", sans-serif;
  transition: 0.3s;
  font-size: 14px;
  resize: vertical;
  border-radius: 2px;
}

textarea:focus {
  outline: none;
  border: solid black 1px;
}

.title-section {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
}

.delete-button {
  font-size: 30px;
  padding: 0;
  border-radius: 50px;
  border: none;
  background: none;
  color: #ec5353;
  opacity: 0.8;
  transition: 0.3s;
}

.delete-button:hover {
  cursor: pointer;
  transform: rotate(-20deg);
  opacity: 1;
}

.add-button {
  font-size: 18px;
  padding: 0;
  border-radius: 50px;
  border: none;
  background: none;
  color: #ec5353;
  opacity: 0.8;
  transition: 0.3s;
}

.add-button:hover {
  cursor: pointer;
  opacity: 1;
}

.add-button-list {
  font-size: 22px;
  padding: 0;
  border-radius: 50px;
  border: none;
  margin-left: 11px;
  background: none;
  color: #ec5353;
  opacity: 0.8;
  transition: 0.3s;
}

.add-button-list:hover {
  cursor: pointer;
  opacity: 1;
}

.source {
  width: 100%;
  margin-top: 20px;
}

.submit-div {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
}

.submit-button {
  border: none;
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  padding: 15px;
  background: #ec5353;
  color: white;
  transition: 0.3s;
}

.submit-button:hover {
  cursor: pointer;
  transform: rotate(2deg);
}

.submit-button:active {
  transform: scale(0.98);
}

.sended {
  margin-top: 100px;
  text-align: center;
}

@media screen and (max-width: 480px) {
  .input-group {
    flex-direction: column;
  }

  .input-group section {
    width: 100%;
  }

  .ingredient article {
    margin-left: 0px;
  }

  .tool input {
    width: 90%;
  }
}

@media screen and (max-width: 410px) {
  .tool input {
    width: 80%;
  }
}

@media screen and (max-width: 340px) {
  .input-group-ingredient {
    flex-wrap: wrap;
  }

  .input-group-ingredient section {
    width: 45%;
  }

  .input-group-ingredient section:last-child {
    width: 100%;
  }

  .submit-button {
    width: 100%;
  }
}
</style>
