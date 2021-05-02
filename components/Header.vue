<template>
  <div>
    <h1>{{ title }}</h1>
    <img v-if="info.img.src" :src="info.img.src" :alt="info.img.alt" />
    <h2>Infos :</h2>
    <ul v-if="info.resume">
      <li v-if="info.resume.time">{{ info.resume.time }}</li>
      <li v-if="info.resume.difficulty">{{ info.resume.difficulty }}</li>
      <li v-if="info.resume.cost">{{ info.resume.cost }}</li>
    </ul>
    <div v-if="info.ingredients">
      <Liste
        :listData="info.ingredients"
        type="ingredient"
        listName="Ingrédients"
      />
    </div>
    <div v-if="info.tools">
      <h3>Ustenciles</h3>
      <Liste :listData="info.tools" type="ustencile" />
    </div>
  </div>
</template>

<script>
import Liste from "./Liste";

export default {
  name: "Header",
  components: { Liste },
  props: {
    title: {
      type: String,
      default: null
    },
    info: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
h1{
  font-size: 3rem;
  font-weight: 300;
}
</style>
