import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import GachaView from '@/views/GachaView.vue'
import DecksView from '@/views/DecksView.vue'
import '@/assets/main.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: HomeView,
    }
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/gacha',
      name: 'gacha',
      component: GachaView,
    },
    {
      path: '/deck',
      name: 'deck',
      component: DecksView,
    }
  ],
})

export default router
