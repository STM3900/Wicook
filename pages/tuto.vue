<template>
  <div>
    <HomeButton title="Accueil" icon="home" link="/" :fontSize="20" />
    <h1>Comment poster une recette ?</h1>
    <hr />
    <p>
      Envie de mettre les mains à la pâte ? Rien de plus simple ! Vous pouvez
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
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton";

export default {
  components: { HomeButton },
  data() {
    return {
      listData: ["blblblb", "deeeee", 'eeeeee <a href="">sss</a>']
    };
  },

  methods: {}
};
</script>

<style>
body {
  margin: 0;
  margin-right: 20%;
  margin-left: 20%;
}

h1 {
  font-size: 2.7rem;
  font-weight: 300;
  margin-left: -4px;
  margin-bottom: 0;
}
</style>
