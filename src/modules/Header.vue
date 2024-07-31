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
    padding: 60px 40px;
    border-radius: 0 0 30px 30px;
  }
</style>