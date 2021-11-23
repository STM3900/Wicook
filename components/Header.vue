<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="isOriginal">Par : {{ author }}</p>
    <div v-else>
      <p>Partagé par {{ author }}</p>
      <a :href="source" class="link">Source</a>
    </div>
    <div class="header-container">
      <p v-if="numberOfPerson" :id="isOriginal ? '' : 'margin'">
        Pour : <b>{{ numberOfPerson }}</b> {{ getPerson }}
      </p>
      <p v-if="regime">
        <fa
          :class="regime == 'Végan' ? 'vegan' : 'vegetarian'"
          :icon="['fas', getRegimeIcon(regime)]"
        />{{ regime }}
      </p>
    </div>
    <hr />
    <div v-if="info.resume" class="resume">
      <section v-if="info.resume.preparationTime">
        <p>Temps de préparation&nbsp;:</p>
        <h3>{{ info.resume.preparationTime }} minutes</h3>
      </section>
      <section v-if="info.resume.cookingTime">
        <p>Temps de cuisson&nbsp;:</p>
        <h3>{{ info.resume.cookingTime }} minutes</h3>
      </section>
      <section v-if="info.resume.difficulty">
        <p>Difficulté&nbsp;:</p>
        <h3>{{ info.resume.difficulty }}</h3>
      </section>
      <section v-if="info.resume.cost">
        <p>Cout&nbsp;:</p>
        <h3>{{ info.resume.cost }}</h3>
      </section>
    </div>
    <div class="img">
      <img v-if="info.img.src" :src="info.img.src" :alt="info.img.alt" />
    </div>
    <div class="list">
      <div v-if="info.ingredients">
        <h3>Ingrédients&nbsp;:</h3>
        <Liste :listData="info.ingredients" class="list-ul" type="ingredient" />
      </div>
      <div v-if="info.tools">
        <h3>Ustensiles&nbsp;:</h3>
        <Liste :listData="info.tools" class="list-ul" type="ustencile" />
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
    regime: {
      type: String,
      default: null
    },
    author: {
      type: String,
      default: null
    },
    numberOfPerson: {
      type: String,
      default: null
    },
    isOriginal: {
      type: Boolean,
      default: null
    },
    source: {
      type: String,
      default: null
    },
    info: {
      type: Object,
      default: null
    }
  },
  computed: {
    getPerson() {
      const numbers = this.numberOfPerson.match(/\d+/g);
      let string = "personne";
      if (!isNaN(this.numberOfPerson)) {
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] > 1) {
            string = "personnes";
          }
        }
      } else {
        string = "";
      }
      return string;
    }
  },
  methods: {
    getRegimeIcon(regime) {
      return regime == "Végan" ? "seedling" : "leaf";
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

.header-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
}

.header-container .vegan {
  color: #a7c957;
  margin-right: 7px;
}

.header-container .vegetarian {
  color: #6a994e;
  margin-right: 7px;
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

#margin {
  margin-top: 10px;
}

@media screen and (max-width: 1450px) {
  .resume section {
    margin-right: 40px;
  }
}

@media screen and (max-width: 800px) {
  .resume {
    flex-wrap: wrap;
    gap: 1em 0px;
    margin-top: 20px;
  }

  .resume section {
    width: 40%;
  }
}

@media screen and (max-width: 660px) {
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
    height: 200px;
    object-fit: cover;
  }
}

@media screen and (max-width: 500px) {
  .resume section {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 14px;
  }

  .resume section h3 {
    font-size: 22px;
  }

  .list {
    flex-direction: column;
  }

  .list div {
    width: 100%;
  }

  .list div h3 {
    font-size: 1.3rem;
    color: #ec5353;
  }
}
</style>
