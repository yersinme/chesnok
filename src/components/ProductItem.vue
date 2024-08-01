<template>
  <p class="product_title">{{ product.title }}</p>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.product_title {
  text-align: center;
  margin: 7px;
  padding: 20px;
  color: #000;
  border-radius: 0 20px;
  font-size: 26px;
  /* font-weight: bold; */
  width: 100%;
  box-shadow: 1px 3px 27px 7px rgba(34, 60, 60, 0.25);
  width: 100%;
  border: 1px solid rgba(34, 60, 60, .3);
}
</style>
