import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from '../views/ItemsView.vue'
import ItemView from '../views/ItemView.vue'
import AboutView from '../views/About.vue'
import TermsView from '../views/TermsView.vue'
import NotFound from '../views/NotFound.vue'
import ConfirmOrder from '../views/ConfirmOrder.vue'
import Freelance from '../views/Freelance.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: ItemsView
  },
  {
    path: '/ItemsView',
    name: 'ItemsView',
    component: ItemsView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/TermsView',
    name: 'TermsView',
    component: TermsView
  },
  {
    path: '/ItemView/:id',
    name: 'ItemView',
    component: ItemView,
    props: true
  },
  {
    path: '/ConfirmOrder/:ItemName/:price',
    name: 'ConfirmOrder',
    component: ConfirmOrder,
    props: true
  },
  {
    path: '/Freelance',
    name: 'Freelance',
    component: Freelance
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
