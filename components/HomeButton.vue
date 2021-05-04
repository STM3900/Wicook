<template>
  <div @click="goHome" :style="`font-size:${fontSize}px;`">
    <fa class="icon-responsive" :icon="['fas', icon]" /><span class="text">
      {{ title }}</span
    >
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
  data() {
    return {};
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

  z-index: 1000;
}

div:hover {
  padding-left: 25px;
  cursor: pointer;
}

div:active {
  transform: rotate(1deg);
}

@media screen and (max-width: 880px) {
  div {
    padding-left: 15px;
    width: 25px;
    height: 24px;
    overflow: hidden;
    font-size: 20px !important;
  }
}
</style>
