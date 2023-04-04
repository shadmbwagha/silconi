import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from '../views/ItemsView.vue'
import ItemView from '../views/ItemView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ItemsView',
    name: 'ItemsView',
    component: ItemsView
  },
  {
    path: '/ItemView',
    name: 'ItemView',
    component: ItemView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router