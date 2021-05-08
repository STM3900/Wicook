<template>
  <div v-if="data">
    <HomeButton title="Accueil" icon="home" link="/" :fontSize="20" />
    <Header
      :title="data.nomDeRecette"
      :author="data.author"
      :info="data.infoHeader"
      :isOriginal="isOriginal"
      :source="data.source"
    />
    <hr />
    <p class="info">
      Vous pouvez cliquer sur le titre d'une étape pour la marquer comme
      complétée
    </p>
    <div class="steps">
      <Etape
        v-for="(etape, i) in data.etapes"
        :key="i"
        :data="etape"
        :numEtape="i + 1"
      />
    </div>
  </div>
</template>

<script>
import HomeButton from "../components/HomeButton";
import Header from "../components/Header";
import Liste from "../components/Liste";
import Infos from "../components/Infos";
import Etape from "../components/Etape";

import MASTER_JSON from "../assets/json/MASTER_JSON";

export default {
  components: { HomeButton, Header, Liste, Infos, Etape },
  data() {
    return {
      rawData: MASTER_JSON,
      data: null,
      isOriginal: true
    };
  },
  mounted() {
    this.checkUrl();
    this.checkIfOriginal();
  },
  methods: {
    findIndex(json) {
      return json.findIndex(x => x.url === this.$route.params.slug);
    },
    checkUrl() {
      try {
        this.data = this.rawData[this.findIndex(this.rawData)].recetteInfos;
      } catch (error) {
        console.error(error);
        this.$router.push("/");
      }
    },
    checkIfOriginal() {
      if (this.data.source) {
        this.isOriginal = false;
      }
    }
  }
};
</script>

<style>
.steps {
  margin-top: 30px;
  margin-bottom: 50px;
}

.info {
  color: rgb(197, 197, 197);
  font-style: italic;
}

@media screen and (max-width: 400px) {
  .info {
    font-size: 14px;
  }

  .steps {
    margin-top: 25px;
  }
}
</style>
