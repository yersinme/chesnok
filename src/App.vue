<template>
  <Header />
  <!-- <Slider /> -->
  <router-view />
</template>

<script setup>
  import Header from './modules/Header.vue'
  import Slider from './modules/MenuSlider.vue'
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>