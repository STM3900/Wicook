<template>
  <div>
    <label :for="'ingredientQuantity' + index">quantité</label>
    <input
      type="text"
      :name="'ingredientQuantity' + index"
      v-model="quantity"
    />

    <label :for="'ingredientUnit' + index">unité</label>
    <input type="text" :name="'ingredientUnit' + index" v-model="unit" />

    <label :for="'ingredientName' + index">nom de l'ingrédient</label>
    <input type="text" :name="'ingredientName' + index" v-model="name" />
  </div>
</template>

<script>
export default {
  name: "Liste",
  props: {
    index: {
      type: Number,
      default: null
    },
    quantity: {
      type: String,
      default: null
    },
    unit: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    }
  }
};
</script>
