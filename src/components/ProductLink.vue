<template>
  <div v-for="product in products" :key="product.id" class="product_link" @click="sendData(product.id)">
    <ProductItem :product="product"/>
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue'
import { onMounted, ref } from "vue";
import axios from "axios";
import {useRouter} from 'vue-router'

const router = useRouter()
const products = ref([]);

onMounted(async () => {
  try {
    const { data: productsData } = await axios.get(
      "https://2ef210f07c409ed8.mokky.dev/menu"
    );
    products.value = productsData;
  } catch (err) {
    console.log(err);
  }
});

const sendData = (id) => {
    router.push('/k/' + id)
}
</script>

<style scoped>
.product_link {
  display: flex;
  width: 100%;
  justify-content: center;
}

</style>