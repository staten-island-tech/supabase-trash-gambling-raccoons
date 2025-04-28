import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import GachaView from '@/views/GachaView.vue'
import DecksView from '@/views/DecksView.vue'
import '@/assets/main.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
