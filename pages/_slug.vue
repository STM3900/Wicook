<template>
  <div v-if="data">
    <HomeButton />
    <Header
      :title="data.nomDeRecette"
      :author="data.author"
      :info="data.infoHeader"
    />
    <hr />
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
      data: null
    };
  },
  mounted() {
    this.test();
  },
  methods: {
    findIndex(json) {
      return json.findIndex(x => x.url === this.$route.params.slug);
    },
    test() {
      try {
        this.data = this.rawData[this.findIndex(this.rawData)].recetteInfos;
      } catch (error) {
        console.error(error);
        this.$router.push("/");
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
  margin-right: 20%;
  margin-left: 20%;
}

.steps {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
