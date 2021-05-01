<template>
  <div>
    <template v-if="type == 'ingredient'">
      <h3 v-if="listName != null">{{ listName }}</h3>
      <ul>
        <li v-for="i in listData" :key="i.nom">
          {{ i.quantity }} {{ i.unit }} de {{ i.name }}
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

<style scoped></style>
