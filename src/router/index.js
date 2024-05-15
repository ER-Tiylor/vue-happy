import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../views/Catalog.vue'
import HelloWorld from '../components/HelloWorld.vue'
import htmlToImg from '../views/html-to-img.vue'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path:'/',
      component: Catalog
    },
    {
      path:"/hello",
      component: HelloWorld
    },
    {
      path:"/htmlToImg",
      component: htmlToImg
    }
  ],
})