<template>
  <div @click="goHome"><fa :icon="['fas', 'home']" /> Accueil</div>
</template>

<script>
export default {
  name: "HomeButton",
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
div {
  position: fixed;
  left: 0;
  top: 75px;
  font-size: 20px;
  color: white;
  background: rgb(39, 39, 39);
  padding: 10px;
  padding-left: 30px;
  transition: 0.3s;
}

div:hover {
  padding-left: 25px;
  cursor: pointer;
}
</style>
