<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="author">Par : {{ author }}</p>
    <hr />
    <div v-if="info.resume" class="resume">
      <section v-if="info.resume.time">
        <p>Temps de préparation :</p>
        <h3>{{ info.resume.time }} minutes</h3>
      </section>
      <section v-if="info.resume.difficulty">
        <p>Difficulté :</p>
        <h3>{{ info.resume.difficulty }}</h3>
      </section>
      <section v-if="info.resume.cost">
        <p>Cout :</p>
        <h3>{{ info.resume.cost }}</h3>
      </section>
    </div>
    <div class="img">
      <img v-if="info.img.src" :src="info.img.src" :alt="info.img.alt" />
    </div>
    <div class="list">
      <div v-if="info.ingredients">
        <h3>Ingrédients :</h3>
        <Liste :listData="info.ingredients" type="ingredient" />
      </div>
      <div v-if="info.tools">
        <h3>Ustensiles :</h3>
        <Liste :listData="info.tools" type="ustencile" />
      </div>
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
    author: {
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
h1 {
  font-size: 3rem;
  font-weight: 300;
  margin-left: -4px;
  margin-bottom: 0;
  color: #ec5353;
}

p {
  color: rgb(87, 87, 87);
  margin: 0;
}

.resume {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: center;

  margin-top: 40px;
  margin-bottom: 25px;
}

.resume section {
  margin-right: 100px;
}

.resume section p {
  color: gray;
  font-size: 13px;
  margin: 0;
}

.resume section h3 {
  font-size: 25px;
  margin: 0;
}

.img img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  width: 100%;
}

.list div {
  width: 50%;
}

.list div h3 {
  font-size: 1.5rem;
  color: #ec5353;
}
</style>
