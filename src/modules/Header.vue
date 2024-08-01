<template>
  <router-link to="/">
  <div class="header">
        <HeaderLogo />

  </div>
  </router-link>
</template>

<script setup>
  import HeaderLogo from '../ui/HeaderLogo.vue'
</script>

<style scoped>
  .header {
    background-color: #FAEBD7;
    padding: 30px 20px;
    border-radius: 0 0 30px 30px;
    margin-bottom: 10px;
    width: 100%;
      box-shadow: 1px 3px 27px 7px rgba(34, 60, 60, 0.205);

  }
</style>