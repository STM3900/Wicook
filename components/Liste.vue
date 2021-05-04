<template>
  <div>
    <template v-if="type == 'ingredient'">
      <ul>
        <li v-for="i in listData" :key="i.nom">
          <b>{{ i.quantity }} {{ i.unit }}</b> de {{ i.name }}
        </li>
      </ul>
    </template>
    <ul v-if="type == 'ustencile'">
      <li v-for="i in listData" :key="i">
        {{ i }}
      </li>
    </ul>
    <ul v-if="type == 'normal'">
      <li v-for="i in listData" :key="i">
        {{ i }}
      </li>
    </ul>
    <ol v-if="type == 'num'">
      <li v-for="i in listData" :key="i">
        {{ i }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Liste",
  props: {
    listName: {
      type: String,
      default: null
    },
    listData: Array,
    type: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>
ul {
  color: #2b2b2b;
}

@media screen and (max-width: 880px) {
  ul {
    width: 100%;
  }
}

@media screen and (max-width: 400px) {
  ul {
    width: 90%;
  }
}

@media screen and (max-width: 300px) {
  ul {
    width: 80%;
  }
}
</style>
