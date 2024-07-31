<template>
  <div class="product">
    <ProductLink />
  </div>
</template>

<script setup>
import ProductLink from "../components/ProductLink.vue";
</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
}
</style>