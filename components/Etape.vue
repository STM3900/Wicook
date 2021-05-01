<template>
  <div>
    <h3>Étape {{ numEtape }}</h3>
    <img v-if="data.img.src" :src="data.img.src" :alt="data.img.alt" />
    <p>{{ data.text }}</p>
  </div>
</template>

<script>
export default {
  name: "Etape",
  props: {
    data: {
      type: Object,
      default: null
    },
    numEtape: {
      type: Number,
      default: null
    }
  }
};
</script>

<style scoped></style>
