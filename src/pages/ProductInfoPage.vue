<template>
  <div>
    <!-- Показываем "Loading..." пока продукт не загрузился -->
    <div v-if="product && product.title">
      <h2 class="product_title_text">{{ product.title }}</h2>
      <div class="item">
        <div v-for="item in product.items" :key="item.id">
          <div class="item_card">
            <img :src="item.img" alt="" />

            <div>
              <p class="kaz_title">{{ item.kaztitle }}</p>
              <p class="rus_title">{{ item.rustitle }}</p>
              <b class="price">{{ item.price }}.00 <span>₸</span></b>
              <p class="card_data">{{ item.keyword }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-else><Daonload />...</p>
  </div>
</template>

<script setup>
import Daonload from "../components/Daonload.vue";
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();

const productInfo = ref([]);

onMounted(async () => {
  try {
    const { data: productInfoData } = await axios.get(
      "https://2ef210f07c409ed8.mokky.dev/menu"
    );
    productInfo.value = productInfoData;
  } catch (err) {
    console.log(err);
  }
});

const product = computed(() => {
  return productInfo.value.find((product) => product.id == route.params.id);
});
</script>


<style scoped>
.item {
  margin-top: 20px;
  display: flex;
  /* grid-template-columns: 100%; */
  flex-direction: column;
  /* justify-content: space-around; */
  /* gap: 20px; */
}

.item_card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 900%;
  background-color: #fff;
  padding: 10px 10px;
  border-radius: 0 0 20px 20px;
  border-bottom: 1px solid grey;
  box-shadow: 1px 3px 27px 7px rgba(34, 60, 60, 0.25);
}
.item_card div {
  width: 60%;
}
.item_card img {
  width: 150px;
  height: 90%;
  border-radius: 8px;
}
.product_title_text {
  color: rgb(185, 89, 89);
  font-size: 28px;
  margin-left: 40px;
  margin-top: 10px;
}

.kaz_title {
  font-size: 18px;
  /* font-weight: bold; */
  color: rgb(3, 45, 3);
}
.rus_title {
  font-size: 16px;
  /* font-weight: bold; */
  color: rgb(69, 69, 69);
}

.price {
  font-size: 22px;
}

.price span {
  font-size: 16px;
}

.card_data {
  color: rgb(185, 89, 89);
  font-weight: bold;
  font-size: 14px;
}
</style>