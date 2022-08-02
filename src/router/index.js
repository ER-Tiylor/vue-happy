import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../views/Catalog.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component: Catalog
    },
    {
      path:"hello",
      component
    }
  ],
})