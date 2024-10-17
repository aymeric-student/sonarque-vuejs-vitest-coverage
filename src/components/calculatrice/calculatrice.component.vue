<script lang="ts" setup>
import { ref } from 'vue';

const calculatriceValue = ref(0);

const add = () => {
  calculatriceValue.value++;
};
</script>

<template>
  <div>
    <h1>Calculatrice</h1>
    <p>{{ calculatriceValue }}</p>
    <button @click="add">Add</button>
  </div>
</template>
