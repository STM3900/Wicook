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
    <form>
      <label for="url">L'url de la page de votre recette</label>
      <input type="text" name="url" v-model="json.url" />

      <label for="recipeName">Nom de la recette</label>
      <input
        type="text"
        name="recipeName"
        v-model="json.recetteInfos.nomDeRecette"
      />

      <label for="author">L'auteur de la recette</label>
      <input type="text" name="author" v-model="json.recetteInfos.author" />

      <h2>Pour le header :</h2>
      <label for="headerImgLink"
        >L'image de votre recette (lien unquement)</label
      >
      <input
        type="text"
        name="headerImgLink"
        v-model="json.recetteInfos.infoHeader.img.src"
      />

      <label for="headerImgAlt">Sa description si l'image ne charge pas</label>
      <input
        type="text"
        name="headerImgAlt"
        v-model="json.recetteInfos.infoHeader.img.alt"
      />

      <label for="preparationTime"
        >Temps de préparation (sans la cuisson, en minutes)</label
      >
      <input
        type="number"
        name="preparationTime"
        v-model="json.recetteInfos.infoHeader.resume.preparationTime"
      />

      <label for="cookingTime">Temps de cuisson (en minutes)</label>
      <input
        type="number"
        name="cookingTime"
        v-model="json.recetteInfos.infoHeader.resume.cookingTime"
      />

      <label for="difficulty">La difficulté de votre recette</label>
      <select
        name="difficulty"
        v-model="json.recetteInfos.infoHeader.resume.difficulty"
      >
        <option disabled value="">Choisissez</option>
        <option>Très facile</option>
        <option>Facile</option>
        <option>Moyen</option>
        <option>Difficile</option>
      </select>

      <label for="cost">Le cout de votre recette</label>
      <select name="cost" v-model="json.recetteInfos.infoHeader.resume.cost">
        <option disabled value="">Choisissez</option>
        <option>Bon marché</option>
        <option>Abordable</option>
        <option>Moyen</option>
        <option>Couteux</option>
      </select>

      <h2>Les ingredients</h2>
      <div
        v-for="(item, i) in json.recetteInfos.infoHeader.ingredients"
        :key="i"
      >
        <label :for="'ingredientQuantity' + i">quantité</label>
        <input
          type="text"
          :name="'ingredientQuantity' + i"
          v-model="item.quantity"
        />

        <label :for="'ingredientUnit' + i">unité</label>
        <input type="text" :name="'ingredientUnit' + i" v-model="item.unit" />

        <label :for="'ingredientName' + i">nom de l'ingrédient</label>
        <input type="text" :name="'ingredientName' + i" v-model="item.name" />
      </div>
      <button @click="addIngredient()">Ajouter un ingrédient</button>

      <ul>
        <li v-for="(item, i) in tab" :key="i">hey</li>
      </ul>
      <button @click="test">add item</button>

      <h2>Les ustensiles</h2>
      <label for="">nom de l'ustencile</label>
      <input type="text" />

      <h2>Les étapes de la recette</h2>
      <label for="">L'image de votre recette (lien unquement)</label>
      <input type="text" />

      <label for="">Sa description si l'image ne charge pas</label>
      <input type="text" />

      <label for="">Le texte de votre étape</label>
      <input type="text" />
    </form>
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
              cookingTime: 15,
              difficulty: "",
              cost: ""
            },
            ingredients: [
              {
                quantity: "",
                unit: "",
                name: ""
              },
              {
                quantity: "",
                unit: "",
                name: ""
              }
            ],
            tools: []
          },
          etapes: []
        }
      },
      tab: []
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
      this.json.recetteInfos.infoHeader.ingredients.push({
        quantity: "",
        unit: "",
        name: ""
      });
    },
    test() {
      this.tab.push("test");
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
