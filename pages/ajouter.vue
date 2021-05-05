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
      <input type="text" name="url" />
      <label for="">Nom de la recette</label>
      <input type="text" />
      <label for="">L'auteur de la recette</label>
      <input type="text" />
      <h2>Pour le header :</h2>
      <label for="">L'image de votre recette (lien unquement)</label>
      <input type="text" />
      <label for="">Sa description si l'image ne charge pas</label>
      <input type="text" />
      <label for="">Temps de préparation (sans la cuisson, en minutes)</label>
      <input type="number" />
      <label for="">Temps de cuisson (en minutes)</label>
      <input type="number" />
      <label for="">La difficulté de votre recette</label>
      <select>
        <option disabled value="">Choisissez</option>
        <option>Très facile</option>
        <option>Facile</option>
        <option>Moyen</option>
        <option>Difficile</option>
      </select>
      <label for="">Le cout de votre recette</label>
      <select>
        <option disabled value="">Choisissez</option>
        <option>Bon marché</option>
        <option>Abordable</option>
        <option>Moyen</option>
        <option>Couteux</option>
      </select>
      <h2>Les ingredients</h2>
      <label for="">quantité</label>
      <input type="text" />
      <label for="">unité</label>
      <input type="text" />
      <label for="">nom de l'ingrédient</label>
      <input type="text" />
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
              { quantity: "", unit: "", name: "" },
              { quantity: "", unit: "", name: "" }
            ],
            tools: [
              "Ustensile 1",
              "Ustensile 2",
              "Ustensile 3",
              "Ustensile 4",
              "Etc..."
            ]
          },
          etapes: [
            { img: { src: "", alt: "" }, text: "" },
            { img: { src: "", alt: "" }, text: "" }
          ]
        }
      }
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
