// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue'
import ProductInfoPage from './pages/ProductInfoPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: "/k/:id",
        name: 'ProductInfoPage',
        component: ProductInfoPage
    }
  ]
});

export default router;
