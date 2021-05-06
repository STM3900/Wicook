<template>
  <div>
    <HomeButton title="Accueil" icon="home" link="/" :fontSize="20" />
    <h1>Comment poster une recette ?</h1>
    <hr />
    <p>
      Envie de mettre la main à la pâte ? Rien de plus simple ! Vous pouvez
      ajouter votre recette en suivant ces quelques étapes :
    </p>
    <ol>
      <li>
        Téléchargez le fichier
        <a href="./model.json" class="link" download>JSON</a>
        modèle pour la recette
      </li>
      <li>
        Remplissez-le en utilisant l'éditeur de texte de votre choix (bloc note,
        notepad, vscode)
      </li>
      <li>Envoyez-le moi par message privé sur discord</li>
      <li>
        Et voilà ! Votre recette apparaîtra en un clin d'oeil après vérification
      </li>
    </ol>
    <p>
      Attention : le site est en constante évolution, il est possible que la
      structure du JSON puisse être modifiée au fil des mises à jour.
    </p>
    <p>
      Si vous avez la moindre question, n'hésitez pas à me contacter sur discord
      !
    </p>

    <h1>Formulaire de création</h1>
    <hr />
    <label for="url">L'url de la page de votre recette</label>
    <input type="text" id="url" v-model="json.url" />

    <label for="recipeName">Nom de la recette</label>
    <input
      type="text"
      id="recipeName"
      v-model="json.recetteInfos.nomDeRecette"
    />

    <label for="author">L'auteur de la recette</label>
    <input type="text" id="author" v-model="json.recetteInfos.author" />

    <h2>Pour le header :</h2>
    <label for="headerImgLink">L'image de votre recette (lien unquement)</label>
    <input
      type="text"
      id="headerImgLink"
      v-model="json.recetteInfos.infoHeader.img.src"
    />

    <label for="headerImgAlt">Sa description si l'image ne charge pas</label>
    <input
      type="text"
      id="headerImgAlt"
      v-model="json.recetteInfos.infoHeader.img.alt"
    />

    <label for="preparationTime"
      >Temps de préparation (sans la cuisson, en minutes)</label
    >
    <input
      type="number"
      id="preparationTime"
      v-model="json.recetteInfos.infoHeader.resume.preparationTime"
    />

    <label for="cookingTime">Temps de cuisson (en minutes)</label>
    <input
      type="number"
      id="cookingTime"
      v-model="json.recetteInfos.infoHeader.resume.cookingTime"
    />

    <label for="difficulty">La difficulté de votre recette</label>
    <select
      id="difficulty"
      v-model="json.recetteInfos.infoHeader.resume.difficulty"
    >
      <option disabled value="">Choisissez</option>
      <option>Très facile</option>
      <option>Facile</option>
      <option>Moyen</option>
      <option>Difficile</option>
    </select>

    <label for="cost">Le cout de votre recette</label>
    <select id="cost" v-model="json.recetteInfos.infoHeader.resume.cost">
      <option disabled value="">Choisissez</option>
      <option>Bon marché</option>
      <option>Abordable</option>
      <option>Moyen</option>
      <option>Couteux</option>
    </select>

    <h2>Les ingredients</h2>
    <div v-for="(item, i) in ingredients" :key="i">
      <label :for="'ingredientQuantity' + i">quantité</label>
      <input
        type="text"
        :id="'ingredientQuantity' + i"
        v-model="item.quantity"
      />

      <label :for="'ingredientUnit' + i">unité</label>
      <input type="text" :id="'ingredientUnit' + i" v-model="item.unit" />

      <label :for="'ingredientName' + i">nom de l'ingrédient</label>
      <input type="text" :id="'ingredientName' + i" v-model="item.id" />
    </div>
    <button @click="addIngredient()">Ajouter un ingrédient</button>

    <h2>Les ustensiles</h2>
    <div v-for="(item, j) in tools" :key="j">
      <label :for="'tool' + j">Ustensile</label>
      <input type="text" :id="'tool' + j" v-model="item.tool" />
    </div>
    <button @click="addTool()">Ajouter un Ustensile</button>

    <h2>Les étapes de la recette</h2>
    <div v-for="(item, k) in etapes" :key="k">
      <label :for="'checkbox' + k">L'étape contient-elle une image ?</label>
      <input
        type="checkbox"
        :id="'checkbox' + k"
        v-model="item[0].checked"
        @click="!item[0].checked ? addStepImg(k) : removeStepImg(k)"
      />
      <br />
      <label :for="'etapeText' + k">La description de votre étape</label>
      <input type="text" :id="'etapeText' + k" v-model="item[0].text" />

      <template v-if="item[1]">
        <label :for="'etapeUrl' + k">l'url de l'image</label>
        <input type="text" :id="'etapeUrl' + k" v-model="item[1].src" />

        <label :for="'etapeAlt' + k"
          >Sa description si l'image ne charge pas</label
        >
        <input type="text" :id="'etapeAlt' + k" v-model="item[1].alt" />
      </template>
    </div>
    <button @click="addStep()">Ajouter une étape</button>
    <hr />
    <button @click="submitForm()">Submit</button>
    <br /><br /><br /><br />
    <button @click="show">show json</button>
    <button @click="download(json, 'test')">dowload json</button>
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton";

export default {
  components: { HomeButton },
  data() {
    return {
      json: {
        url: "",
        recetteInfos: {
          nomDeRecette: "",
          author: "",
          infoHeader: {
            img: { src: "", alt: "" },
            resume: {
              preparationTime: 0,
              cookingTime: 0,
              difficulty: "",
              cost: ""
            },
            ingredients: [],
            tools: []
          },
          etapes: []
        }
      },
      ingredients: [
        {
          quantity: "",
          unit: "",
          name: ""
        }
      ],
      tools: [{ tool: "" }],
      etapes: [[{ text: "", checked: false }]]
    };
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
    },
    addTool() {
      this.tools.push({ tool: "" });
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
      console.log("aaaaa");
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
</style>
