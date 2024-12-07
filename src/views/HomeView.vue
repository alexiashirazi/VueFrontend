<template>
  <input type="checkbox" v-model="isLoggedIn">
  <p>{{isLoggedIn}}</p>
  <div v-if="isLoggedIn">
    User is logged in
  </div>
  <div v-else>
    User is NOT logged in
  </div>
</template>

<script setup>
import {ref} from "vue";

const isLoggedIn = ref(false);

</script>

<style scoped>
/* Șterge tot conținutul sau lasă-l gol */
</style>
