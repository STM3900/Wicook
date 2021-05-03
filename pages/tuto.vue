<template>
  <div><HomeButton title="Accueil" icon="home" link="/" :fontSize="20" /></div>
</template>

<script>
import HomeButton from "../components/HomeButton";

export default {
  components: { HomeButton },
  data() {
    return {};
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

.steps {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
