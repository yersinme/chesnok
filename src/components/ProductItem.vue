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
  margin: 20px;
  background-color: rgb(145, 167, 83);
  padding: 40px;
  color: #fff;
  border-radius:  0 20px;
  font-size: 36px;
  font-weight: bold;
    width: 100%;
      box-shadow: 0px 0px 22px 3px rgba(57, 57, 61, 0.25);


}
</style>
