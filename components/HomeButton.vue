<template>
  <div @click="goHome" :style="`font-size:${fontSize}px;`">
    <fa :icon="['fas', icon]" /> {{ title }}
  </div>
</template>

<script>
export default {
  name: "HomeButton",
  props: {
    title: String,
    icon: String,
    link: String,
    fontSize: Number
  },
  methods: {
    goHome() {
      this.$router.push(this.link);
    }
  }
};
</script>

<style scoped>
div {
  position: fixed;
  left: 0;
  top: 75px;
  color: white;
  background: #ec5353;
  padding: 10px;
  padding-left: 30px;
  transition: 0.3s;
}

div:hover {
  padding-left: 25px;
  cursor: pointer;
}

div:active {
  transform: rotate(1deg);
}
</style>
