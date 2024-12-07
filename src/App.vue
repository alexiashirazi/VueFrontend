<script setup>
import Navbar from './components/Navbar.vue'
import BlogSection from './components/BlogSection.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- Navbar is imported as a global reusable component -->
    <Navbar />
    <BlogSection /> 
    <RouterView />
  </div>
</template>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>
