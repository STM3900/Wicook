<template>
  <div>
    <h3>{{ title }}</h3>
    <img v-if="img.src" :src="img.src" :alt="img.alt" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Etape",
  props: {
    title: {
      type: String,
      default: null
    },
    img: {
      type: Object,
      default: null
    },
    text: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped></style>
