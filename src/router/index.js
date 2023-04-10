import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from '../views/ItemsView.vue'
import ItemView from '../views/ItemView.vue'
import NotFound from '../views/NotFound.vue'


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
    path: '/ItemView/:id',
    name: 'ItemView',
    component: ItemView,
    props: true
  },
  //catch all 404
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component: NotFound
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
